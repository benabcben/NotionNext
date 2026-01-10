// 注: process.env.XX是Vercel的环境变量
const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  // 1. 确保主题是 proxio
  THEME: process.env.NEXT_PUBLIC_THEME || 'proxio', 
  
  // 2. 语言改为英文
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', 

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, 
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  // 3. 核心个人信息
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Freedom Officer', 
  BIO: process.env.NEXT_PUBLIC_BIO || 'A real man who successfully quit with a smile.', 
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://bieji.vercel.app', 
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'The Freedom Project', 

  // ✅【新增】就是这一行！改掉那句中文描述
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION || 'Sharing my journey of productivity and freedom.',

  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Freedom, Productivity, Life, Notion', 
  
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', 
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // 引用其他配置
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

  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false, 

  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Welcome to the Free World, Enjoy your life.',

  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // 4. 关闭会员功能
  ENABLE_CLERK: false,
  ENABLE_SIGNUP: false,
  ENABLE_SIGNIN: false
}

module.exports = BLOG
