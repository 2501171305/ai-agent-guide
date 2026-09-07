import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Agent 安装指南',
  description: '从零开始，教同事安装和使用 AI Agent 工具',
  lang: 'zh-CN',
  base: '/ai-agent-guide/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '工具安装', link: '/tools/claude-code' },
      { text: '模型接入', link: '/setup/' },
      { text: '业务工作流', link: '/workflow/' },
      { text: '内部经验手册', link: '/experience/how-to-ask' }
    ],
    sidebar: {
      '/tools/': [
        {
          text: '工具安装',
          items: [
            { text: 'Claude Code', link: '/tools/claude-code' },
            { text: 'Codex（ChatGPT）', link: '/tools/codex' },
            { text: 'cc-switch', link: '/tools/cc-switch' },
            { text: 'Hermes Agent', link: '/tools/hermes-agent' }
          ]
        }
      ],
      '/setup/': [
        {
          text: '模型接入',
          items: [
            { text: '模型接入总览', link: '/setup/' },
            { text: 'Claude Code 接 DeepSeek', link: '/setup/claude-code-deepseek' }
          ]
        }
      ],
      '/workflow/': [
        {
          text: '业务工作流',
          items: [
            { text: '业务工作流总览', link: '/workflow/' },
            { text: '生成工艺单', link: '/workflow/craftsheet' },
            { text: '生成效果图', link: '/workflow/effect-image' },
            { text: '添加定制器', link: '/workflow/customizer' }
          ]
        }
      ],
      '/experience/': [
        {
          text: '内部经验手册',
          items: [
            { text: '怎么提问', link: '/experience/how-to-ask' },
            { text: '怎么验证', link: '/experience/how-to-verify' },
            { text: '怎么避坑', link: '/experience/how-to-avoid-pitfalls' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '内部培训资料 · 非官方版',
      copyright: '仅供团队内部使用'
    }
  }
})
