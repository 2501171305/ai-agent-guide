import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = join(root, 'docs')
const errors = []
let checkedLinks = 0
let checkedPages = 0

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

function stripCodeFences(source) {
  return source.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '')
}

function resolveInternalLink(link, sourceFile) {
  let target = link.trim()

  if (target.startsWith('<') && target.endsWith('>')) {
    target = target.slice(1, -1)
  }

  target = target.replace(/[?#].*$/, '')

  if (
    !target ||
    target.startsWith('#') ||
    target.startsWith('//') ||
    /^[a-z][a-z0-9+.-]*:/i.test(target)
  ) {
    return null
  }

  try {
    target = decodeURIComponent(target)
  } catch {
    errors.push(`${relative(root, sourceFile)}: 无法解析链接编码 ${link}`)
    return true
  }

  const base = target.startsWith('/')
    ? join(docsRoot, target.replace(/^\/+/, ''))
    : resolve(dirname(sourceFile), target)

  const candidates = extname(base)
    ? [base]
    : [base, `${base}.md`, join(base, 'index.md')]

  return candidates.some(existsSync) ? null : base
}

function checkFile(file) {
  const source = readFileSync(file, 'utf8')
  const relativeFile = relative(root, file)
  const isPage = file.endsWith('.md')

  if (isPage) {
    checkedPages += 1
  }

  if (source.includes('\u3010\u622a\u56fe\u5360\u4f4d\u3011')) {
    errors.push(`${relativeFile}: 存在线上可见的截图占位符`)
  }

  const content = stripCodeFences(source)
  const links = [
    ...content.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)
  ].map((match) => match[1])

  for (const match of content.matchAll(/^\s*link:\s*['"]?([^'"\s]+)['"]?\s*$/gm)) {
    links.push(match[1])
  }

  for (const link of links) {
    const missingTarget = resolveInternalLink(link, file)
    if (!missingTarget) {
      checkedLinks += 1
      continue
    }

    if (missingTarget === true) {
      continue
    }

    errors.push(
      `${relativeFile}: 内部链接不存在 "${link}"，期望文件 ${relative(root, missingTarget)}`
    )
  }
}

const files = walk(docsRoot).filter(
  (file) => file.endsWith('.md') || file.endsWith('config.mjs')
)

for (const file of files) {
  checkFile(file)
}

if (errors.length > 0) {
  console.error(`文档检查失败，共 ${errors.length} 个问题：`)
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`文档检查通过：${checkedPages} 个页面，${checkedLinks} 个内部链接。`)
