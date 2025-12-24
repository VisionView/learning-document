import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

export default defineConfig({
  title: "全栈学习站",
  description: "A VitePress Site",
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VisionView/learning-document' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      message: '如有不良之处，请提issue',
      copyright: '版权所有 © 2025-至今 VisionView'
    }
  }
})
