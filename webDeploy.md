
### 介绍
 其实直接clone我的 ，上传就可以
 跟着这两个文档基本可以写完，deploy.yml可以按着我来，最新（2025-02-18）

 - vitepress介绍：https://aiyo.space/VPDocs/%E5%89%8D%E8%A8%80.html
 - githubPages+vitePress：https://vitepress.dev/zh/guide/deploy#github-pages

### 部署流程

* 托管选择： github-pages 	

  ### 使用Github Pages部署

Github Pages专门用来托管静态内容，由于不需要服务器且基于git，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择

1. 选择github actions：

   ` settings ➡️ pages ➡️ Source（ GitHub Actions ）`

2. 在根目录下新建 ` .nojekyll`,目的是让 github不忽略css

3. 设置工作流：

​      ` Actions ➡️ set up a workflow yourself ➡️ deploy.yml `

```
nname: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v4  # 从 v3 升级到 v4
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4  # 从 v2 升级到 v4

```