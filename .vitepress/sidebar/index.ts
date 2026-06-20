import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/views/git/': [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '何为 Git', link: '/views/git/' },
        { text: '安装 & 配置', link: '/views/git/install' },
      ]
    },
    {
      text: '.gitignore',
      link: '/views/git/gitignore',
    },
    {
      text: '命令大全',
      collapsed: false,
      link: '/views/git/command/',
    }
  ],
  '/views/cocos/': [
    {
      text: '前言',
      link: '/views/cocos/'
    }
  ],
  '/views/community/': [
    {
      text: '前言',
      link: '/views/community/'
    },
    {
      text: '技术交流平台',
      link: '/views/community/exchange'
    },
    {
      text: '比对工具',
      link: '/views/community/compare'
    }
  ],
  '/views/langchain/': [
    {
      text: '前言',
      link: '/views/langchain/'
    },
    {
      text: 'Deep Agents',
      collapsed: false,
      items: [
        {
          text: '简介',
          link: '/views/langchain/deep-agents/'
        }
      ]
    }
  ]
}