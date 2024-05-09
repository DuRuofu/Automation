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
      { text: '经典控制', link: '/docs/classical/00.Introduction/index'
      },
      { text: '现代控制', link: '/docs/modern/00.Introduction/index' },
    ],

    sidebar: {
      '/docs/classical/':[{
          text: '经典控制理论',link: '/00.Introduction/index'
      }],
      '/docs/modern/': [{
          text: '现代控制理论',link: '/00.Introduction/index'
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
