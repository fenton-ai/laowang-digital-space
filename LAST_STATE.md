# LAST_STATE.md — 最后保存状态

> 下次打开 Claude Code 时，先阅读此文件恢复上下文。

---

## 项目状态：✅ 已成功上线

**老王炒饭 — AI 线下门店数字体验空间**

路径：`D:\AI codex\ContentOS\ai-store-experience`

---

## 线上地址

### 主站（GitHub Pages）
**https://fenton-ai.github.io/laowang-digital-space/**
- ✅ HTTP 200 正常
- ✅ 自动部署（push 触发 Actions）
- ✅ 国内可访问（速度取决于网络环境）

### 备用（Vercel）
https://ai-store-experience.vercel.app
- ⚠️ 国内访问需科学上网

---

## 最后操作

1. ✅ `git add -A && git commit && git push` — 提交 GitHub Pages 配置
2. ✅ 启用 GitHub Pages（`gh api repos/.../pages -X POST`）
3. ✅ 重新触发部署（`gh run rerun`）
4. ✅ 部署成功（build + deploy 均通过）
5. ✅ 更新 shop.config.ts qrCode 为正式URL
6. ✅ 重新构建并推送验证

---

## 当前 Git 状态

```
$ git status
✅ 工作目录干净
✅ 无未提交文件
✅ 远程 origin 已同步

最近提交：
1314aa6 更新部署URL到shop.config
923dfd7 配置 GitHub Pages 自动部署
036597e 老王炒饭 - AI数字体验空间
```

---

## 项目配置

| 配置项 | 值 |
|--------|-----|
| 行业 | `restaurant`（暖金色烟火气主题） |
| 店名 | 老王炒饭 |
| 当前的图片 | Unsplash 占位图（可替换为商家真实照片） |
| 音频 | 占位 MP3（可替换为真实氛围音乐） |
| GitHub 仓库 | https://github.com/fenton-ai/laowang-digital-space |
| 正式URL | https://fenton-ai.github.io/laowang-digital-space/ |
| 备用URL | https://ai-store-experience.vercel.app |

---

## 下次恢复直接继续

```bash
cd "D:\AI codex\ContentOS\ai-store-experience"

# 项目已上线，工作目录干净
# 可直接开始新功能开发

# 本地开发
npm run dev

# 修改后部署
git add -A && git commit -m "描述修改" && git push
```

## 推荐下一步

1. **绑定自定义域名** — 去域名商买个域名，CNAME 到 `fenton-ai.github.io`，确保二维码永久有效
2. **替换真实图片** — 把 Unsplash 图换成商家自己的门店/菜品照片
3. **替换真实音乐** — 把占位 MP3 换成行业氛围音乐
4. **复制新门店** — 复制项目改 shop.config.ts 即可生成第二家门店
