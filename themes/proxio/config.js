/**
 * Proxio Landing Page – Personal Version
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: false,
  PROXIO_WELCOME_TEXT: '',

  /* ================= Hero ================= */
  PROXIO_HERO_ENABLE: true,
  PROXIO_HERO_TITLE_1: '为自由而生的个人系统与工具实践',
  PROXIO_HERO_TITLE_2: '少做事 · 做对事 · 把时间还给自己',

  PROXIO_HERO_BUTTON_1_TEXT: '开始阅读',
  PROXIO_HERO_BUTTON_1_URL: '/blog',
  PROXIO_HERO_BUTTON_2_TEXT: '关于我',
  PROXIO_HERO_BUTTON_2_URL: '/about',
  PROXIO_HERO_BUTTON_2_ICON: '',

  PROXIO_HERO_BANNER_IMAGE: '',
  PROXIO_HERO_BANNER_IFRAME_URL: '',

  /* ================= Blog ================= */
  PROXIO_BLOG_ENABLE: true,
  PROXIO_BLOG_TITLE: '文章',
  PROXIO_BLOG_COUNT: 4,
  PROXIO_BLOG_TEXT_1: '关于自由、效率与真实生活的记录',

  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: false,

  /* ================= Features ================= */
  PROXIO_FEATURE_ENABLE: true,
  PROXIO_FEATURE_TITLE: '我关注什么',
  PROXIO_FEATURE_TEXT_1: '不是更努力，而是更清醒',
  PROXIO_FEATURE_TEXT_2: '系统、工具与判断力，决定长期自由度',

  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-layer-group',
  PROXIO_FEATURE_1_TITLE_1: '系统化思维',
  PROXIO_FEATURE_1_TEXT_1:
    '用系统代替意志力，把复杂生活拆解为可执行的简单结构。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-bolt',
  PROXIO_FEATURE_2_TITLE_1: '低摩擦效率',
  PROXIO_FEATURE_2_TEXT_1:
    '拒绝花哨方法论，只保留真正节省时间和注意力的工具与流程。',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-compass',
  PROXIO_FEATURE_3_TITLE_1: '时间主权',
  PROXIO_FEATURE_3_TEXT_1:
    '效率不是为了多干活，而是为了对自己的人生有更多选择权。',

  PROXIO_FEATURE_BUTTON_TEXT: '了解我的方法',
  PROXIO_FEATURE_BUTTON_URL: '/about',

  /* ================= Career ================= */
  PROXIO_CAREER_ENABLE: true,
  PROXIO_CAREER_TITLE: '经历',
  PROXIO_CAREER_TEXT: '一条从“上班”走向“自主”的路径',

  PROXIO_CAREERS: [
    {
      title: 'Chief Officer of Freedom and Exploration',
      bio: 'Sep 2024 – Now',
      text:
        'Left traditional employment to build a self-directed life focused on autonomy, learning, and sustainable productivity. I experiment with personal systems, tools, and workflows that trade pressure for clarity and time ownership.'
    },
    {
      title: 'Senior Operations Specialist',
      bio: 'Jun 2021 – Sep 2024',
      text:
        'Worked within corporate structures and experienced firsthand how meetings, coordination costs, and misaligned incentives affect real productivity. Began designing personal systems to stay effective in inefficient environments.'
    },
    {
      title: 'Product & Design Operations Associate',
      bio: 'Jul 2017 – May 2021',
      text:
        'Early career experience across operations and design support. Built foundational habits around documentation, task batching, and attention management that later shaped my independent work style.'
    }
  ],

  /* ================= Testimonials ================= */
  PROXIO_TESTIMONIALS_ENABLE: false,

  /* ================= FAQ ================= */
  PROXIO_FAQ_ENABLE: false,

  /* ================= About ================= */
  PROXIO_ABOUT_ENABLE: true,
  PROXIO_ABOUT_TITLE: '关于我',
  PROXIO_ABOUT_TEXT_1:
    'A lifelong learner optimizing for freedom, clarity, and time ownership',
  PROXIO_ABOUT_TEXT_2:
    'I focus on productivity tools, systems thinking, and practical workflows that reduce friction rather than create pressure. Doing fewer things better is not laziness — it’s strategy.',

  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '当前状态',
  PROXIO_ABOUT_VAL_1: '自由探索中',
  PROXIO_ABOUT_KEY_2: '关注领域',
  PROXIO_ABOUT_VAL_2: '效率 / 系统 / 工具',
  PROXIO_ABOUT_KEY_3: '核心目标',
  PROXIO_ABOUT_VAL_3: '时间主权',
  PROXIO_ABOUT_KEY_4: '工作方式',
  PROXIO_ABOUT_VAL_4: '自我驱动',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '更多关于我',

  /* ================= Brands ================= */
  PROXIO_BRANDS_ENABLE: true,
  PROXIO_BRANDS: [
    'Systems Thinking',
    'Productivity',
    'Notion',
    'Independent Learning',
    'Time Ownership'
  ],

  /* ================= Footer ================= */
  PROXIO_FOOTER_SLOGAN: '用系统换自由，用清醒换时间。',

  PROXIO_FOOTER_LINKS: [
    {
      name: '站点',
      menus: [{ title: '关于我', href: '/about' }]
    },
    {
      name: '外部',
      menus: [{ title: 'Notion', href: 'https://www.notion.so' }]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最近更新',

  /* ================= CTA ================= */
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '如果你也在寻找更自由的工作方式',
  PROXIO_CTA_TITLE_2: '这里可能对你有用',
  PROXIO_CTA_DESCRIPTION:
    '我记录真实实践，而不是成功学。适合长期主义者。',
  PROXIO_CTA_BUTTON: true,
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '了解更多',

  PROXIO_POST_REDIRECT_ENABLE: false,
  PROXIO_NEWSLETTER: false
}

export default CONFIG
