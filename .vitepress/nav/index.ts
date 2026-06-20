import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Git',
    link: '/views/git/'
  },
  {
    text: '全栈',
    items: [
      { text: 'Vue.js', link: '/views/vuejs/' },
      { text: 'NestJS', link: '/views/nestjs/' },
      { text: 'Langchain', link: '/views/langchain/' }
    ]
  },
  {
    text: '数据库',
    items: [
      { text: 'PostgreSQL', link: '/views/pgsql/' }
    ]
  },
  {
    text: '运维',
    items: [
      { text: 'Docker', link: '/views/docker/' },
      { text: 'Nginx', link: '/views/nginx/' },
      { text: 'Serverless', link: '/views/serverless/' },
    ]
  },
  {
    text: '游戏',
    items: [
      { text: 'Cocos 3.X ', link: '/views/cocos/' }
    ]
  },
  {
    text: '社区',
    link: '/views/community/'
  }
]