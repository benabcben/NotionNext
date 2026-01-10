// ✅ 纯净版配置 - 修复乱码问题
const BLOG = {
  // 1. 基础连接
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',

  // 2. 主题与语言
  THEME: 'proxio',      // 锁定为 proxio 主题
  LANG: 'en-US',        // 锁定为英文

  // 3. 网站信息 (注意：Notion 里的标题优先级比这里高，所以还要去 Notion 改)
  TITLE: 'The Freedom Project',
  DESCRIPTION: 'Sharing my journey of productivity and freedom.',
  AUTHOR: 'Freedom Officer',
  BIO: 'A real man who successfully quit with a smile.',
  LINK: 'https://bieji.vercel.app',
  
  // 4. 杂项设置
  SINCE: 2024,
  APPEARANCE: 'light',
  APPEARANCE_DARK_TIME: [18, 6],
  KEYWORDS: 'Freedom, Life, Blog',
  BLOG_FAVICON: '/favicon.ico',
  
  // 5. 功能开关
  ENABLE_RSS: true,
  CUSTOM_MENU: true,
  CAN_COPY: true,
  UUID_REDIRECT: false,

  // 6. 核心插件 (不要乱删)
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // 7. 【安全锁】关闭会员系统 & 修复乱码
  // 之前乱码是因为这里配置了错误的 EMAIL 加密，现在直接关掉
  CONTACT_EMAIL: '', 
  CONTACT_WEIBO: '',
  CONTACT_TWITTER: '',
  CONTACT_GITHUB: '',
  
  ENABLE_CLERK: false,
  ENABLE_SIGNUP: false,
  ENABLE_SIGNIN: false
}

module.exports = BLOG
