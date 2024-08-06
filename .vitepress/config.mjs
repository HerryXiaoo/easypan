import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/easypan/",
  head: [["link", { rel: "icon", href: "/easypan/logo.svg" }]],
  title: "Herry的easy云盘学习笔记",
  description: "Herry herry Easy云盘 程序员老罗 easy云盘源码 easy云盘学习笔记 easy云盘源码分析", //作用：SEO
  //左上角logo
  themeConfig: {
    logo: "/avatar.jpg",
    //顶部导航
    nav: [
      { text: '主页', link: '/' },
      {
        text: '笔记',
        items: [
          { text: '主体笔记', link: '/concent' },
          { text: '通用组件', link: '/component' },
          { text: '通用方法', link: '/utils' },
          { text: '知识点扩展', link: '/knowledge' }
        ]
      },    
      { text: '答辩/面试', link: '/reply' },
      { text: '我', link: '/ello' },
    ],
    //侧边栏
    sidebar: false, // 关闭侧边栏
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    markdown: {
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
      }
    },
    aside: "left", // 设置右侧侧边栏在左侧显示
    //github图标
    socialLinks: [
     
      {
        icon: {
          svg: '<svg t="1712563369533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5180" width="128" height="128"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="5181"></path></svg>'
        },
        link: 'https://space.bilibili.com/499388891'
      },
      { icon: 'github', link: 'https://gitee.com/x121318' },
    ],
    //头部标签
    head: [["link", { rel: "icon", href: "/logo.svg" }]],
    footer: {
      copyright: 'Copyright © 2024 hanixao',
    }
  }
})
