# 给 Claude Code 接 DeepSeek

Claude Code 默认用 Anthropic 的官方模型，但国内访问不方便。公司统一用 **DeepSeek**（国内模型，便宜好用），所以装完 Claude Code 后，要把它接到 DeepSeek 上。

这一步用 **cc-switch** 来做最省事——一个界面就能切换，不用手动改文件。

---

## 需要先准备好两样东西（找 IT 领）

| 东西 | 是什么 | 长什么样（举例） |
|------|--------|-----------------|
| **接口地址** | DeepSeek 的"入口"，告诉工具去哪找模型 | `https://api.deepseek.com/anthropic` |
| **API Key** | 你的"账号密码" | `sk-xxxx...`（一串字符） |

两个都找 IT 领，缺一不可。

---

## 用 cc-switch 配置

### 第 1 步：打开 cc-switch

双击桌面/开始菜单的 cc-switch 图标，打开它。

> 📸 【截图占位】cc-switch 主界面

### 第 2 步：新建一个 DeepSeek 配置

在 cc-switch 里：

1. 点「新建」（或「添加配置」）
2. 供应商选 **DeepSeek**（如果没有，选"自定义"）
3. 填两个东西：
   - **接口地址**：`https://api.deepseek.com/anthropic`
   - **API Key**：粘贴 IT 给你的那串 `sk-...`

> 📸 【截图占位】新建配置时填写接口地址和 Key 的画面

### 第 3 步：切换到 DeepSeek

填好后，在列表里选中 DeepSeek 这个配置，点「切换」或「应用」。

> 📸 【截图占位】切换到 DeepSeek 配置

### 第 4 步：重启 Claude Code

切完配置后，**关掉 VS Code 重新打开**，让新配置生效。

---

## 验证接好了

重新打开 Claude Code，随便问一句（比如"你好"）：

- ✅ 有正常回复 → 接好了，能用 DeepSeek 了
- ❌ 报错（比如连不上、Key 无效）→ 检查接口地址和 Key 有没有填错，或找 IT

> 📸 【截图占位】接好后 Claude Code 正常回复

---

## 常见问题

### 1. 报错说 Key 无效

Key 复制错了（多了空格、少字符），或者 Key 过期了。重新从 IT 拿一个，仔细粘贴。

### 2. 报错说连不上

接口地址填错了。对照 IT 给的地址，一字不差地填进去。

### 3. 切换后没生效

cc-switch 切完配置，要**重启 VS Code** 才生效。关掉重开再试。

---

> ⚠️ **cc-switch 版本说明**：市面上有多个同名的 cc-switch 工具，界面可能略有不同。上面是通用流程，**具体按钮名称以你装的版本为准**，拿不准就找 IT 帮你点一遍。
