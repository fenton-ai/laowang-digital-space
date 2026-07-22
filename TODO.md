# TODO.md — 项目任务清单

## 图例
- [ ] 待处理
- [x] 已完成
- [!] 阻塞中

---

## Sprint 1：项目初始化 ✅
- [x] Vite + React + TypeScript 脚手架
- [x] 安装所有依赖
- [x] 配置 Tailwind CSS
- [x] 创建目录结构

## Sprint 2：基础设施 ✅
- [x] 类型系统（types.ts）
- [x] 行业主题系统（theme.config.ts）
- [x] 店铺配置（shop.config.ts）
- [x] 音频配置（audio.config.ts）
- [x] 全局样式（index.css）

## Sprint 3：Hooks ✅
- [x] useAudio — 背景音乐播放
- [x] useScrollReveal — 滚动触发动画
- [x] useParallax — 视差效果

## Sprint 4：核心组件 ✅
- [x] ParticleField — Canvas 粒子系统
- [x] Hero — 全屏首屏
- [x] BrandStory — 品牌时间线
- [x] Products — 产品画册
- [x] Environment — 沉浸式图库
- [x] Reviews — 故事墙
- [x] Location — 地图信息
- [x] QRCode — 二维码
- [x] AudioPlayer — 音乐播放器
- [x] Footer — 底栏
- [x] ScrollReveal — 动画容器
- [x] App.tsx — 主入口组装
- [x] 占位MP3音频文件

## Sprint 5：部署上线 🔄（当前）

### 高优先级
- [ ] **提交并推送 vite.config.ts + .github/workflows/deploy.yml**
- [ ] **验证 GitHub Pages 部署是否成功**
- [ ] 如果 GitHub Pages 不能访问，尝试 Cloudflare Pages

### 中优先级
- [ ] 测试完整用户流程（扫码 → 打开 → 浏览所有模块）
- [ ] 记录最终访问网址到 shop.config.ts
- [ ] 测试二维码下载/分享功能
- [ ] 测试音频播放功能

### 低优先级
- [ ] 替换占位MP3为真实音乐文件
- [ ] 添加更多行业主题（奶茶/面馆/烘焙等）
- [ ] 添加老板真人语音录制说明
- [ ] 添加多语言支持

## Sprint 6：1000店复制方案
- [ ] 创建 CLI 工具：输入店名/行业/图片 → 自动生成配置
- [ ] 创建 Vercel/Netlify 一键部署模板
- [ ] 添加自定义域名文档
- [ ] 添加批量部署脚本

---

## 已知问题
1. ~~Vercel 国内访问慢~~ → 已切换 GitHub Pages 方案
2. 二维码永久性问题 → 建议商家绑定自定义域名
3. GitHub Pages 国内访问稳定性待验证
