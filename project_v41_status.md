---
name: v4.6 Feature Status
description: Current status - product scrape + export Excel feature added 2026-03-30
type: project
---

All previous versions implemented. v4.6 additions (2026-03-30):

**v4.7 新增功能：多分类自动抓图**

- `photo.stack` 按钮 → 选择目标 → 自动遍历当前顶级分类下所有子分类
- 从当前子分类开始，依次导航到每个子分类（`window.location.hash`）
- 每个子分类以 `childcategorys[i].namecn` 命名文件夹（本地/Cloudinary/GitHub 均支持）
- 本地：`{baseDir}/{categoryName}/{barcode}.jpg`（自动创建子目录）
- Cloudinary：`public_id = {preset_folder}/{categoryName}/{barcode}`
- GitHub：`path = {githubFolder}/{categoryName}/{barcode}.jpg`
- `scrape_folder` 消息：通知 Swift 当前分类名称 + 进度 `N/total`
- UI：显示进度 `3/12` + 当前分类名称 `📁 00 除雪化冰`
- 等待产品加载：每500ms检查，最多12秒超时后跳过空分类
- 关键 Angular scope 字段：`childcategorys`, `categoryid`, `shopid`
  - `childcategorys[i].category` = muluid (URL用)
  - `childcategorys[i].namecn` = 分类名称 (文件夹名)

**v4.6 新增功能：抓取商品数据**

- 绿色按钮 `tablecells` (toolbar) → 读取当前页 Angular scope.products → 发送 `product_data` 消息
- JS inline 注入（不走服务器脚本，不需要更新 Gist）
- 跨页面累积：多个分类页面按多次，数据不重复（按 code 去重）
- 绿色状态栏显示"已抓取 N 件商品"
- 导出 Excel 按钮 → CSV with UTF-8 BOM, 分隔符 `;`
  - 列：Codice a barre | Descrizione | Prezzo | Valuta | Colli
  - 价格用逗号小数点（Excel IT/EU 格式）
- 垃圾桶按钮清空累积数据
- **序列号后台控制**：`can_scrape_products` 字段
  - 默认关闭，admin 后台 "开抓取/关抓取" 按钮解锁
  - 绿色 badge "抓取" 显示在后台序列号列表
  - 服务器端点：POST `/api/admin/set-scrape-products`

产品字段（从 Angular scope 读取）：
- `code` = EAN 条码
- `namees` = 意大利/西班牙语名称（优先使用）
- `namecn` = 中文名称（namees 为空时备用，截取第一个汉字前的部分）
- 描述逻辑：`namees || namecn.truncateAtFirstChinese()`
- `price` = 进货价（浮点数）
- `huobi` = 货币符号（€）
- `packet` = 每包数量

**Bug 修复（v4.6）：**
- 描述字段顺序错误：原 `namecn || namees`，改为 `namees || namecn`
- `namecn` 含中文时截取第一个汉字前的文字（保留意大利文部分）
- 结果：输出纯意大利/西班牙语描述，无中文残留

**v4.5 新增功能：**
- Cloudinary 上传（第三个图片目标）
- Security-scoped resource race condition 修复（finish 后不停止权限）

**v4.4 新增功能：**
- 图片下载系统重写（条码搜索 + 页面抓图）
- 三种目标：本地 / GitHub / Cloudinary
- 图片下载独立控制按钮
- 页面抓图：Angular scope.products + muluid 过滤

**v4.3 新增功能：**
- 图片下载模式 + 防频控续跑

**v4.2 新增功能：**
- 无限条码模式、Excel 导出、can_export 控制

**v4.1 继承：**
- 500-mode unlock, WiFi blocking, disclaimer, single speed mode
- App Store name: "快进X"

**服务器现状：**
- 读取本地 `encrypted_script.b64`（不依赖 Gist）
- Gist token 无 gist scope（不影响运作）

**How to apply:** 抓取功能不走服务器脚本，JS 内联注入，修改只需 Xcode build。
