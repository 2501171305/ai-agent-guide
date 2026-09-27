# AI Agent 上手指南

面向团队内部的零基础 AI Agent 安装与使用指南。

- 线上站点：<https://2501171305.github.io/ai-agent-guide/>
- 内容目录：`docs/`
- 发布方式：推送到 `main` 后由 GitHub Actions 自动构建并部署到 GitHub Pages

## 内容结构

| 目录 | 内容 |
| --- | --- |
| `docs/quickstart/` | 30 分钟零基础上手路径 |
| `docs/tools/` | Claude Code、Codex、cc-switch、Hermes Agent 等工具安装 |
| `docs/setup/` | DeepSeek、豆包模型接入和 Key 申请 |
| `docs/workflow/` | 工艺单、效果图、定制器等业务工作流 |
| `docs/experience/` | 提问、验证、避坑和团队经验 |

## 本地开发

环境要求：Node.js 20 或更高版本。

```bash
npm ci
npm run dev
```

本地预览地址会显示在终端中。

## 提交前检查

```bash
npm run check
npm run build
```

`npm run check` 会检查：

- Markdown 和 VitePress 配置中的内部链接是否存在
- 文档中是否还残留线上可见的截图占位符

`npm run build` 会先运行文档检查，再执行 VitePress 构建。CI 使用同一命令，因此检查失败会阻止部署。

## 维护约定

1. 新增页面前先确认它属于哪个栏目，并在 `docs/.vitepress/config.mjs` 的侧边栏中登记。
2. 页面之间使用站内绝对路径，例如 `/tools/claude-code`，不要写 GitHub 文件地址。
3. 暂时没有真实截图时，使用 HTML 注释记录待办，例如 `<!-- 截图待补：cc-switch 主界面 -->`，不要把占位文字直接显示在线上。
4. 涉及 API Key、登录态、客户资料和财务数据的内容，必须明确写出安全边界。
5. 修改安装流程后，要同步检查 `quickstart`、`tools` 和 `setup` 中相关的重复说明，避免同一参数出现多个版本。

## 发布

提交并推送到 `main` 即可触发部署：

```bash
git add .
git commit -m "docs: update guide"
git push origin main
```
