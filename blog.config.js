// ✅ 终极修复版：修复构建失败，隐藏中文描述
const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',

  // 1. 基础设置
  THEME: 'proxio',      
  LANG: 'en-US',        
  
  // 2. 网站信息
  TITLE: 'The Freedom Project',
  DESCRIPTION: 'Sharing my journey of productivity and freedom.', // ✅ 英文描述
  AUTHOR: 'Freedom Officer',
  BIO: 'A real man who successfully quit with a smile.',
  LINK: 'https://bieji.vercel.app',

  // 3. 杂项
  SINCE: 2024,
  APPEARANCE: 'light',
  APPEARANCE_DARK_TIME: [18, 6],
  KEYWORDS: 'Freedom, Life, Blog',
  BLOG_FAVICON: '/favicon.ico',
  ENABLE_RSS: true,
  
  // 4. 引用必须的模块 (不要删)
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

  // 5. 其他开关
  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],
  CUSTOM_MENU: true,
  CAN_COPY: true,
  LAYOUT_SIDEBAR_REVERSE: false,
  GREETING_WORDS: 'Welcome to the Free World.',
  UUID_REDIRECT: false,

  // 6. 【绝对关键】强制关闭会员系统，防止报错
  ENABLE_CLERK: false,
  ENABLE_SIGNUP: false,
  ENABLE_SIGNIN: false,
  
  // 7. 邮箱加密留空，防止乱码
  CONTACT_EMAIL: '',
  CONTACT_WEIBO: '',
  CONTACT_TWITTER: '',
  CONTACT_GITHUB: ''
}

module.exports = BLOG
