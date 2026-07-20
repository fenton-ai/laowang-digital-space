# AI 线下门店数字体验空间

> 让每一家普通实体店，拥有一个价值数万元级别的品牌数字展示页面。

[![Vercel](https://img.shields.io/badge/deploy%20to-Vercel-black?logo=vercel)](https://vercel.com/new)
[![Netlify](https://img.shields.io/badge/deploy%20to-Netlify-blue?logo=netlify)](https://app.netlify.com/start)

---

## 核心理念

每个行业拥有独立的：
- **视觉氛围系统** — 行业专属色彩、渐变、光影
- **背景音乐系统** — 行业匹配的背景音乐
- **动画语言** — 从粒子特效到滚动动画
- **色彩体系** — 主色、辅色、渐变、环境光
- **内容表达方式** — 品牌故事纪录片风格

## 支持的行业

| 行业 | 标识 | 氛围 | 色调 |
|------|------|------|------|
| 🔥 火锅 | `hotpot` | 烟火气·温暖·沸腾 | 中国红 + 暗金 |
| 🍖 烧烤 | `bbq` | 夜色·热烈·自由 | 烈焰橙 + 金黄 |
| 🍽️ 餐厅 | `restaurant` | 优雅·精致·品质 | 香槟金 + 古铜 |
| 🏡 民宿 | `hotel` | 自然·静谧·治愈 | 森林绿 + 暖棕 |
| 💎 美业 | `beauty` | 高级·轻奢·优雅 | 玫瑰粉 + 淡紫 |
| ☕ 咖啡 | `coffee` | 文艺·温暖·慢活 | 咖啡棕 + 暖金 |

## 技术栈

- **React 19** + **TypeScript** — 现代前端框架
- **Vite 8** — 极速开发与构建
- **Tailwind CSS 4** — 原子化样式系统
- **Framer Motion** — 高级动画引擎
- **lucide-react** — 优雅图标库
- **HTML5 Audio** — 背景音乐播放

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 配置系统

### 1. 店铺配置

编辑 `src/config/shop.config.ts`：

```typescript
const shopConfig: ShopConfig = {
  industry: 'hotpot',     // 切换行业主题
  name: '蜀九香老火锅',   // 店铺名称
  tagline: '一锅沸腾人间烟火',
  // ... 更多配置
};
```

### 2. 主题配置

`src/config/theme.config.ts` — 每个行业的色彩、粒子效果、字体。

### 3. 音频配置

`src/config/audio.config.ts` — 音乐文件映射和播放规则。

## 音频文件

将 MP3 文件放置在以下对应目录：

```
public/audio/
├── food/
│   ├── hotpot.mp3       # 火锅
│   ├── bbq.mp3          # 烧烤
│   └── restaurant.mp3   # 餐厅
├── hotel/
│   ├── nature.mp3       # 民宿自然
│   └── relax.mp3        # 民宿放松
├── beauty/
│   ├── spa.mp3          # 美业SPA
│   └── luxury.mp3       # 美业奢华
├── coffee/
│   └── cafe.mp3         # 咖啡
└── default/
    └── default.mp3      # 默认备用
```

> 没有音频文件不影响页面显示，播放按钮会显示"暂无音乐"。

## 部署

### Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

或命令行：

```bash
npx vercel
```

### Netlify

```bash
npx netlify-cli deploy --prod
```

## 扩展新门店

只改一个文件 `src/config/shop.config.ts`：

1. `industry` — 自动匹配视觉主题、音乐
2. `name` — 品牌名称
3. 图片链接
4. 文字内容

构建部署后即生成新门店的数字体验空间。

## 视觉特性

- ⚡ **3秒开屏** — 品牌片头动画，瞬间建立第一印象
- ✨ **粒子系统** — 行业配色的 Canvas 粒子动画
- 🎭 **玻璃拟态** — Apple 风格毛玻璃效果
- 🌟 **光影浮动** — 动态光晕、星光闪烁
- 🔄 **视差滚动** — 沉浸式滚动体验
- 📱 **全端适配** — 手机、平板、桌面完美显示
- 🎬 **品牌时间线** — 纪录片风格的品牌叙事
- 🖼️ **沉浸式灯箱** — 点击图片全屏浏览
- 🎵 **氛围音乐** — 行业匹配的背景音乐
- 📥 **二维码生成** — 支持下载/分享/打印

---

**Powered by AI Digital Experience Space**
