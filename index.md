---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Esay云盘前端笔记"
  text: "hello EasyPan"
  tagline: by coder 程序员老罗
  image: 
    src: "/center.png"
    alt: EasyPan
  actions:
    - theme: brand
      text: 去学习
      link: /concent
    - theme: alt
      text: 在线体验地址
      link: http://easypan.wuhancoder.com

features:
  - icon: 💿︎ 
    title: 前端大文件上传
    details: 大文件切片、断点续传、秒传、上传进度、上传速度限制
  - icon:  🐧
    title: 登录功能
    details: 用户注册、接入QQ快捷登录、邮箱注册
  - icon: 📦
    title:  多级目录线性展示
    details: 新建目录、文件重命名、文件移动、文件分享、删除
  - icon: 📋
    title:  文件在线预览
    details: 视频的分片播放，pdf、excel、word 在线预览


---



<DataPanel />
<Confetti />
<style>
:root {
  --vp-c-brand-1: #77bff6;
  --vp-c-brand-2: #A7DFFD;
  --vp-c-brand-3: #048cf4;
}

.dark {
  --vp-c-brand-1: #3dd68c;
  --vp-c-brand-2: #30a46c;
  --vp-c-brand-3: #298459;
}
</style>