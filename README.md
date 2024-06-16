# EasyPan

#### 介绍
easy云盘学习笔记，实时更新

文档在线地址：https://herryxiaoo.github.io/easypan/

### 部署流程

* 托管选择： github-pages 	

* gitee镜像到github

  ### 使用Github Pages部署

Github Pages专门用来托管静态内容，由于不需要服务器且基于git，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择

1. 选择github actions：

   ` settings ➡️ pages ➡️ Source（ GitHub Actions ）`

2. 在根目录下新建 ` .nojekyll`,目的是让 github不忽略css

3. 设置工作流：

​      ` Actions ➡️ set up a workflow yourself ➡️ deploy.yml `

```
name: Deploy VitePress site to Pages

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
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中
```

## 自定义域名

* 出bug了，暂时不用

###### 1、阿里云注册一个域名

###### 2、设置域名解析

###### 3、添加记录，将域名指向自己的[Github](https://so.csdn.net/so/search?q=Github&spm=1001.2101.3001.7020) Page

首先获得自己的Github Page的IP地址。

```bash
ping username.github.io
```

添加一条记录，记录类型：A / 主机记录：@/记录值：刚获得的Github Page的IP地址。

再新建一条记录， 记录类型：CNAME / 主机记录：www/记录值username.github.io 

###### 4、在Github page中设置
在自己的username.github.io界面，点击Setting，然后直接往下翻，找到GitHub Pages，并进入设置页面。

然后在下面设置域名，并勾选Enforce HTTPS（这个是有加密的，更好些，这样之后自己的网站链接前面是https开头的，如果这里是灰状勾选不了，是因为设置时有问题导致的。），A处就是自己的网站名字。



