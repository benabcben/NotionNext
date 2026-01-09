// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址
  // Important page_id！！！
  // 如果你在 Vercel 环境变量里填了 ID，这里用默认的也没关系；如果没有，请把你的 32位 ID 填在这里的引号里
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  // 1. 修改主题为 proxio
  THEME: process.env.NEXT_PUBLIC_THEME || 'proxio', 
  
  // 2. 修改语言为英文 (修复构建报错的关键)
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', 

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, // 修改为你开始“自由”的年份

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  // 3. 修改核心个人信息
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Freedom Officer', 
  BIO: process.env.NEXT_PUBLIC_BIO || 'A real man who successfully quit with a smile.', 
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://bieji.vercel.app', // 建议改为你的 Vercel 域名
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'The Freedom Project', // 网站标题
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Freedom, Productivity, Life, Notion', 
  
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', 
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // 其它复杂配置 (保持不变)
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

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false, 

  // 欢迎语
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Welcome to the Free World, Enjoy your life.',

  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // 4. 【关键修复】显式关闭会员/登录功能
  // 这会防止系统去生成 /sign-in 页面，解决 Build Failed 问题
  ENABLE_CLERK: false,
  ENABLE_SIGNUP: false,
  ENABLE_SIGNIN: false
}

module.exports = BLOG
