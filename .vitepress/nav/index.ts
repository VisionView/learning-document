import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Git',
    link: '/views/git/'
  },
  {
    text: '后端',
    items: [
      { text: 'NestJS', link: '/views/nestjs/' }
    ]
  },
  {
    text: '数据库',
    items: [
      { text: 'PostgreSQL', link: '/views/pgsql/' }
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