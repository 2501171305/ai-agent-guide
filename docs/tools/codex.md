# 安装 Codex（ChatGPT）

## 这是干嘛的

Codex 是 OpenAI 出的**命令行 AI 助手**，跟 Claude Code 是同类工具——都能读文件、写代码、干活，只是「大脑」是 ChatGPT（OpenAI 的模型）。

如果你平时已经用 ChatGPT，或者公司让你用 ChatGPT 干活，就装这个。

---

## 装之前准备

Codex 也需要 **Node.js**。如果你已经按 [Claude Code 页](/tools/claude-code) 装过 Node.js，跳过这步；没装的话，先去那页看「装 Node.js」的部分。

另外你需要一个 **ChatGPT 账号**（OpenAI 账号），用来登录。

---

## 安装步骤

打开 PowerShell（怎么打开见 [Claude Code 页](/tools/claude-code)），粘贴这行，回车：

```powershell
npm install -g @openai/codex
```

等它跑完。

> 📸 【截图占位】npm install @openai/codex 运行画面

---

## 验证装好了

```powershell
codex --version
```

看到版本号就成功了。

---

## 首次使用：登录

```powershell
codex
```

第一次运行会让你登录 ChatGPT 账号（浏览器打开登录页，或输入 API Key）。登录后就能用。

> 📸 【截图占位】首次运行 codex 的登录提示

---

## 常见问题

### 1. 提示需要订阅

Codex 需要 ChatGPT 账号有相应的订阅/额度。如果登录后提示没有权限，找 IT 确认账号权限。

### 2. 和 Claude Code 有啥区别

两个都能干活。Claude Code 的「大脑」是 Anthropic 的 Claude，Codex 的「大脑」是 OpenAI 的 GPT。团队主力用的是 Claude Code，Codex 作为补充——**有 ChatGPT 账号就用，没有就先不用**。
