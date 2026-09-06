# 安装 Claude Code

## 这是干嘛的

Claude Code 是 Anthropic 官方出的**命令行 AI 助手**。

你可以把它想成一个「懂技术的实习生」：它能读你电脑里的文件、写代码、查资料、整理数据。你只要用大白话告诉它要做什么，它就在你的电脑上帮你完成。

它是这 4 个工具里的**主力**，先装它。

---

## 装之前，先装 Node.js

Claude Code 需要一个叫 **Node.js** 的运行环境（你可以理解成"给它提供地基"）。

### 第 1 步：下载 Node.js

1. 打开浏览器，访问 <https://nodejs.org>
2. 下载 **LTS 版本**（页面上左边的那个大按钮，通常写着 "LTS"）
3. 双击下载好的安装包，一路点「下一步」直到完成（默认选项就行，不用改）

> 📸 【截图占位】Node.js 官网下载页，红框标出 LTS 按钮

### 第 2 步：验证 Node.js 装好了

1. 打开 **PowerShell**（见下方"怎么打开 PowerShell"）
2. 输入下面这行，按回车：

```powershell
node --version
```

看到 `v20` 或更高的版本号（比如 `v22.14.0`），就说明装好了。

> 📸 【截图占位】PowerShell 里输入 node --version 后显示版本号

---

## 怎么打开 PowerShell

- **Windows 10 / 11**：点左下角「开始」菜单 → 直接打字 `PowerShell` → 回车
- 或者：在任意文件夹里，按住 `Shift` 键 + 右键 → 选「在此处打开 PowerShell 窗口」

打开后是一个黑色（或蓝色）的窗口，能输入命令，这就是我们要用到的「命令行」。

> 📸 【截图占位】开始菜单里搜索 PowerShell 的画面

---

## 安装 Claude Code

在 PowerShell 里，粘贴下面这一行命令，按回车：

```powershell
npm install -g @anthropic-ai/claude-code
```

它会跑一会儿（下载文件），看到进度条结束后没有报错，就装好了。

> 📸 【截图占位】npm install 命令运行中的画面

---

## 验证装好了

在 PowerShell 里输入：

```powershell
claude --version
```

看到版本号（比如 `1.0.x`），就成功了。

---

## 首次使用：登录

在 PowerShell 里输入：

```powershell
claude
```

第一次运行会引导你登录（用浏览器打开登录页，或用 API Key）。**API Key 找 IT 领取**，登录后就能用了。

> 📸 【截图占位】首次运行 claude 时的登录提示

---

## 常见问题

### 1. 提示 `npm 不是内部或外部命令`

说明 Node.js 没装好，或装完没重启 PowerShell。**关掉 PowerShell 重新打开**，再试一次。

### 2. 提示没有权限

Windows 上如果用普通终端报权限错误，试试**以管理员身份运行 PowerShell**（开始菜单右键 PowerShell → 以管理员身份运行）。

### 3. 安装很慢

正常，npm 要从国外服务器下载。耐心等，或问 IT 要内网加速配置。

---

装好后，建议接着装 [cc-switch](/tools/cc-switch)，这样切换模型供应商会方便很多。
