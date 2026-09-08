---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: AI Agent 上手指南
  text: 从零开始，30 分钟上手
  tagline: 手把手教你安装和使用 AI Agent 工具，让电脑帮你干活
  actions:
    - theme: brand
      text: 🚀 我是小白，带我 30 分钟上手
      link: /quickstart/
    - theme: alt
      text: 🗺️ 我先看看都有什么
      link: /tools/

features:
  - icon: 🧰
    title: 工具安装
    details: Claude Code、cc-switch、Hermes Agent、Codex——都有什么、怎么装
    link: /tools/claude-code
    linkText: 看看工具
  - icon: 🔑
    title: 模型接入
    details: 申请 DeepSeek / 豆包密钥，把 Claude Code 接到国内模型
    link: /setup/
    linkText: 看看接入
  - icon: 📋
    title: 业务工作流
    details: 工艺单、效果图、定制器——你的日常业务怎么让 AI 帮你干
    link: /workflow/
    linkText: 看看流程
  - icon: 💡
    title: 内部经验手册
    details: 团队踩过的坑、摸出来的高效用法，先看一遍少走弯路
    link: /experience/how-to-ask
    linkText: 看看经验
---

## 我该怎么选？

- **👶 第一次用，什么都不懂** → 走 [🚀 30 分钟上手](/quickstart/)，全程照着复制几句话，AI 帮你装好
- **🔧 装过工具，想换模型/换工具** → 看 [工具安装](/tools/claude-code) 和 [模型接入](/setup/)
- **✅ 装好了，想让 AI 干活** → 看 [业务工作流](/workflow/) 和 [内部经验手册](/experience/how-to-ask)

## 开始前，先明白一件事

**AI Agent ≠ 聊天 AI**。聊天 AI 是你问一句它答一句；Agent 是你能**让它干活**——读你的文件、用你的模板、按你的标准出结果。写周报：聊天 AI 给你一段话让你自己改；Agent 直接按你给的格式帮你把周报写好。

> ⚠️ **安全红线**：API Key 就是你的账号密码，**绝对不能发到群里、贴到文档里、截图外传**。任何人拿到你的 Key，就能用你的额度。
