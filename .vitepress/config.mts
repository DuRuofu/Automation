import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Automation Notes",
  base: "/Automation/",
  description: "Notes on Learning the Principles of Automatic Control",
  head: [['link',{rel:'icon',href:'/Automation/logo.ico'}]], 
  themeConfig: {
    logo: "/logo.png",
    //https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '概览', link: '/' },
      { text: '经典控制', link: '/docs/01.Introduction/IOT-Hub-Node是什么/index'
      },
      { text: '现代控制', link: '/docs/03.embedded/介绍/index' },
    ],

    sidebar: [
      {
        text: '产品介绍',
        items: [
          { text: 'IOT-Hub-Node是什么？', link: '/docs/01.Introduction/IOT-Hub-Node是什么/index' },
          { text: '基本概念', link: '/docs/01.Introduction/基本概念/index' },
        ]
      },
      {
        text: '快速上手',
        items: [
          { text: '准备工作', link: '/docs/02.tutorial/准备工作' },
          { text: '安装部署', link: '/docs/02.tutorial/安装部署' },
          { text: '设备接入', link: '/docs/02.tutorial/设备接入' },
          { text: '数据上报', link: '/docs/02.tutorial/数据上报' },
          { text: '设备控制', link: '/docs/02.tutorial/设备控制' },
        ]
      },
      {
        text: '嵌入式支持',
        items: [
          { text: 'IOT-Hub-Embedded', link: '/docs/03.embedded/介绍/index' },
          { text: 'ESP32多模网关', link: '/docs/03.embedded/ESP32_Gateway' },
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '安装部署问题', link: '/docs/04.question/安装部署问题' },
          { text: '二次开发问题', link: '/docs/04.question/二次开发问题' },
          { text: '设备接入问题', link: '/docs/04.question/设备接入问题' }
        ]
      },
      {
        text: '服务支持',
        items: [
          { text: '产品计划', link: '/docs/05.service/产品计划' },
          { text: '更新记录', link: '/docs/05.service/更新记录' },
          { text: '通知公告', link: '/docs/05.service/通知公告' },
          { text: '反馈渠道', link: '/docs/05.service/反馈渠道' }
        ]
      },
      {
        text: '贡献指南',
        items: [
          { text: '加入我们', link: '/docs/06.other/加入我们' },
          { text: '贡献指南', link: '/docs/06.other/贡献指南' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuRuofu/Automation' }
    ],

    footer: {
      copyright:"Copyright © 2024 DuRuofu",
    }

  }
})
