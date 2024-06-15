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
      { text: '经典控制', link: '/docs/classical/00.概述/index'},
      { text: '现代控制', link: '/docs/modern/00.概述/index' },
    ],

    sidebar: {
      '/docs/classical/':[{
        text: '经典控制理论',
        link: '/docs/classical/00.概述/index',
        items: [
          { text: '自动控制原理概念', link: '/docs/classical/01.概念/index' },
          { text: '控制系统的数学模型', link: '/docs/classical/02.数学模型/index' },
          { text: '线性系统的时域分析', link: '/docs/classical/03.时域分析/index' },
          { text: '线性系统的根轨迹法', link: '/docs/classical/04.根轨迹法/index' },
          { text: '线性系统的频域分析', link: '/docs/classical/05.频域分析/index' },
          { text: '控制系统的矫正', link: '/docs/classical/06.系统矫正/index' },
          { text: '离散系统的分析与校正', link: '/docs/classical/07.离散系统/index' },
          { text: '非线性控制系统分析', link: '/docs/classical/08.非线性系统/index' },
        ]
      }],
      '/docs/modern/': [{
          text: '现代控制理论',link: '/docs/modern/00.概述/index'
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuRuofu/Automation' }
    ],

    footer: {
      copyright: "Copyright © 2024 DuRuofu",
    },

    search: {
      provider: 'local'
    }

  }
})
