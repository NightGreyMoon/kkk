# 海宁凯瑞工业智能设备有限公司官网

一个基于HTML、CSS和JavaScript构建的现代化企业网站，参考了[tjthd.cn](https://tjthd.cn/)的设计风格。

## 项目特点

- **响应式设计**：适配桌面端、平板和移动端
- **现代化UI**：使用CSS Grid和Flexbox布局，优雅的动画效果
- **交互功能**：产品分类筛选、平滑滚动、移动端菜单等
- **性能优化**：图片懒加载、浏览器兼容性检查

## 网站结构

- **首页横幅**：公司简介和主要业务展示
- **公司介绍**：详细的企业信息
- **服务介绍**：三大核心服务板块
- **产品展示**：可筛选的产品分类展示
- **新闻资讯**：企业动态和行业资讯，包含详细的新闻页面
- **联系我们**：联系信息和在线留言表单

## 文件说明

- `index.html` - 主页面文件
- `style.css` - 样式文件
- `script.js` - 交互功能脚本
- `web.config` - IIS服务器配置文件（移除.html扩展名）
- `news-logistics-automation.html` - 物流自动化技术新闻详情页
- `news-industry-4.html` - 工业4.0新闻详情页
- `news-automation-trends.html` - 自动化设备发展趋势新闻详情页
- `images/` - 产品图片目录
  - `MCT001.jpg` - MCT001产品图片
- `README.md` - 项目说明文档

## 使用方法

### 本地预览
1. 直接在浏览器中打开 `index.html` 即可预览网站

### IIS服务器部署
1. 将所有文件上传到Windows IIS服务器
2. 确保IIS已安装并启用以下功能：
   - **URL Rewrite模块**（必需）
   - **HTTP压缩功能**（推荐）
   - **静态内容压缩**（推荐）
3. 使用无扩展名URL访问：
   - 主页：`https://yourdomain.com/` 或 `https://yourdomain.com/index`
   - 新闻页面：`https://yourdomain.com/news-logistics-automation`
   - 其他页面：`https://yourdomain.com/pagename`（无需.html）

### IIS URL Rewrite模块安装
如果您的IIS服务器没有URL Rewrite模块：
1. 下载并安装 [IIS URL Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite)
2. 重启IIS服务
3. 确认IIS Manager中有"URL重写"功能

### 文件修改
- 如需修改内容，编辑相应的HTML、CSS或JS文件

### web.config功能
项目包含`web.config`文件，提供以下IIS功能：
- 移除URL中的.html扩展名
- 启用HTTP压缩提高加载速度
- 设置静态内容缓存（30天）
- 安全响应头设置
- 自定义错误页面支持
- MIME类型配置

## 产品分类

网站包含以下产品分类：
- CNC加工（加工中心零件、数控车床加工、数控铣床加工）
- 精密零件（特殊塑料材料零件、表面处理、生物制药零件）
- 自动化设备（自动化设备配件）
- 光学配件（光学行业配件）
- 生物成像系统（生物构造成像分析系统 MCT001）

### MCT001 特色产品

**生物构造成像分析系统 MCT001** 是公司的高端产品，采用OCT（光学相干断层扫描）技术：
- 非接触、非破坏、非侵入测量
- 高达30fps实时成像
- 支持1D、2D、3D成像功能
- 可定制硬件、软件解决方案
- 提供SDK支持（LabVIEW、C++、C#）

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 技术栈

- HTML5
- CSS3 (Grid, Flexbox, 动画)
- 原生JavaScript (ES6+)
- Google Fonts

## 自定义说明

如需修改网站内容：
1. 公司信息：编辑 `index.html` 中的相关文本
2. 样式调整：修改 `style.css` 中的颜色、字体等
3. 功能扩展：在 `script.js` 中添加新的交互功能
4. 添加图片：将图片放置在合适位置并更新HTML中的占位符

## 产品详情页面

网站现已包含完整的产品详情页面：

### 产品页面文件
- `product-cnc-machining-center.html` - CNC加工中心产品详情页
- `product-cnc-lathe.html` - 数控车床加工产品详情页
- `product-precision-parts.html` - 精密零件加工产品详情页
- `product-optical-components.html` - 光学配件加工产品详情页
- `product-medical-devices.html` - 医疗器械配件产品详情页
- `product-automation-equipment.html` - 自动化设备配件产品详情页

### 产品页面访问方式
- CNC加工中心：`yourdomain.com/product-cnc-machining-center`
- 数控车床加工：`yourdomain.com/product-cnc-lathe`
- 精密零件加工：`yourdomain.com/product-precision-parts`
- 光学配件加工：`yourdomain.com/product-optical-components`
- 医疗器械配件：`yourdomain.com/product-medical-devices`
- 自动化设备配件：`yourdomain.com/product-automation-equipment`

### 产品页面特点
- 详细的产品介绍和技术规格
- 完整的应用领域和工艺流程说明
- 质量控制和认证信息
- 相关产品推荐和跳转链接
- 与主站一致的响应式设计
- 支持无扩展名URL访问

### 跳转功能
- 主页产品卡片可直接跳转到对应详情页
- 详情页之间支持相互跳转
- 所有页面都有返回产品列表的功能
- 面包屑导航便于用户定位

---

**海宁凯瑞工业智能设备有限公司**  
专业从事自动化设备及精密零件的设计开发、加工制造 