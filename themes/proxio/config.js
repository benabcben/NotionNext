/**
 * 另一个落地页主题 PROXIO 配置
 * "Freedom Officer" 定制汉化版
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, // 是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '欢迎来到自由世界', // 欢迎文字

  // =================================================================
  // 1. 英雄区块 (Hero Section) - 首页大图文
  // =================================================================
  PROXIO_HERO_ENABLE: true,
  PROXIO_HERO_TITLE_1: '从打工人的牢笼到绝对自由',
  PROXIO_HERO_TITLE_2: '分享我的生产力心得、效率工具，以及“少做多得”的艺术。',
  
  PROXIO_HERO_BUTTON_1_TEXT: '阅读博客',
  PROXIO_HERO_BUTTON_1_URL: '/archive', 
  PROXIO_HERO_BUTTON_2_TEXT: '我的履历',
  PROXIO_HERO_BUTTON_2_URL: '/about', // 跳转到关于我/简历
  PROXIO_HERO_BUTTON_2_ICON: '', 

  PROXIO_HERO_BANNER_IMAGE: '', // 留空则使用 Notion 封面的图
  PROXIO_HERO_BANNER_IFRAME_URL: '',

  // =================================================================
  // 2. 博客文章区块 (Blog Section)
  // =================================================================
  PROXIO_BLOG_ENABLE: true,
  PROXIO_BLOG_TITLE: '最新思考',
  PROXIO_BLOG_COUNT: 4, 
  PROXIO_BLOG_TEXT_1: '生产力黑客 & 生活记录',

  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', 
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, 

  // =================================================================
  // 3. 特性/兴趣区块 (Features/Interests)
  // =================================================================
  PROXIO_FEATURE_ENABLE: true,
  PROXIO_FEATURE_TITLE: '关注领域',
  PROXIO_FEATURE_TEXT_1: '感知幸福，打造美好生活的工具与心智',
  PROXIO_FEATURE_TEXT_2: '聪明工作，自由生活。',

  // Feature 1: Productivity
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-rocket', 
  PROXIO_FEATURE_1_ICON_IMG_URL: '',
  PROXIO_FEATURE_1_TITLE_1: '生产力工具',
  PROXIO_FEATURE_1_TEXT_1:
    '痴迷于寻找能自动化处理无聊琐事的工具，只为多发一会儿呆。',

  // Feature 2: Life Hacking
  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-mug-hot', 
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '生活黑客',
  PROXIO_FEATURE_2_TEXT_1:
    '优化日常流程，最大化闲暇时间与个人满足感，把生活过成自己想要的样子。',

  // Feature 3: Python/Tech
  PROXIO_FEATURE_3_ICON_CLASS: 'fa-brands fa-python', 
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '媒体与代码',
  PROXIO_FEATURE_3_TEXT_1:
    '以数字花园为载体，拥抱 AI，持续重构我与世界的互动方式。',

  PROXIO_FEATURE_BUTTON_TEXT: '浏览全部分类',
  PROXIO_FEATURE_BUTTON_URL: '/category',

  // =================================================================
  // 4. 生涯/履历区块 (Experience) - 保留英文
  // =================================================================
  PROXIO_CAREER_ENABLE: true, 
  PROXIO_CAREER_TITLE: 'Experience (过往经历)', // 标题稍微加点中文提示
  PROXIO_CAREER_TEXT: 'My professional path to liberation.',

  // 👇 这里是你要求保留的英文简历内容 👇
  PROXIO_CAREERS: [
    {
      title: 'Chief Officer of Freedom and Exploration',
      bio: 'Sep 2024 - Now | Self-Employed',
      text: 'Masterfully embraced the art of "self-liberation," transitioning from the corporate grind to personal fulfillment. Innovatively implemented the "Extended Freedom Initiative" and perfected the practice of "unstructured productivity" with zero deadlines.'
    },
    {
      title: 'Senior Leisure Coordinator',
      bio: 'June 2021 - Sep 2024 | Creative Minds Inc.',
      text: 'Mastered the art of multitasking (browsing social media & doing zero work). Elevated "invisible slacking" to an art form and rigorously enforced the "extended coffee break initiative," turning 15-minute breaks into hour-long relaxation sessions.'
    },
    {
      title: 'Chief Distraction Officer',
      bio: 'July 2017 - May 2021 | Innovative Designs LLC',
      text: 'Perfected polite daydreaming during meetings. Innovatively developed the "efficient slacking" workflow to maximize free time and integrated "power napping" into the daily schedule. Mentored new hires to become qualified "Masters of Slacking Off."'
    }
  ],

  PROXIO_TESTIMONIALS_ENABLE: false, // 个人博客不需要这个
  PROXIO_FAQ_ENABLE: false, 

  // =================================================================
  // 5. 关于我区块 (About Me)
  // =================================================================
  PROXIO_ABOUT_ENABLE: true,
  PROXIO_ABOUT_TITLE: '关于我',
  PROXIO_ABOUT_TEXT_1: '一个不爱坐班的真正的男人，现探索活在当下与感知幸福。',
  PROXIO_ABOUT_TEXT_2:
    '我是一个终身学习者，热衷于探索生产力工具。我喜欢寻找那些能让我工作和生活更高效的神器。我的目标很简单：优化任务、高效管理时间、分享最佳实践，用最少的时间做更多的事——然后享受 100% 的自由！',
  
  // 你的头像路径 (确保 public 文件夹里有 avatar.png)
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png', 
  
  // 下面这些数据指标汉化
  PROXIO_ABOUT_KEY_1: '自由度',
  PROXIO_ABOUT_VAL_1: '100%',
  PROXIO_ABOUT_KEY_2: '摸鱼技能',
  PROXIO_ABOUT_VAL_2: '专家级',
  PROXIO_ABOUT_KEY_3: '打工时长',
  PROXIO_ABOUT_VAL_3: '0%',
  PROXIO_ABOUT_KEY_4: '快乐指数',
  PROXIO_ABOUT_VAL_4: 'Max',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '了解更多',

  // 滚动条文字 (汉化)
  PROXIO_BRANDS_ENABLE: true,
  PROXIO_BRANDS: [
    '自由',
    '感知幸福',
    '活在当下',
    '生产力',
    '拒绝打工',
    '效率工具',
    '独立思考'
  ],

  PROXIO_FOOTER_SLOGAN: '在混乱中建立秩序。', 

  // =================================================================
  // 6. 页脚菜单 (Footer)
  // =================================================================
  PROXIO_FOOTER_LINKS: [
    {
      name: '网站导航',
      menus: [
        { title: '全部文章', href: '/archive' },
        { title: '深度阅读', href: '/category/reading' },
        { title: '关于我', href: '/about' }
      ]
    },
    {
      name: '建立连接',
      menus: [
        { title: 'Github', href: 'https://github.com' }, // 记得改成你的 GitHub 链接
        { title: '邮件', href: 'mailto:xiashunquan@gmail.com' }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新发布',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务条款',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  PROXIO_404_TITLE: '页面找不到了',
  PROXIO_404_TEXT: '你寻找的页面可能去钓鱼了（不存在）。',
  PROXIO_404_BACK: '返回首页',

  // =================================================================
  // 7. 底部行动呼吁 & 微信 (Call To Action)
  // =================================================================
  PROXIO_CTA_ENABLE: false, // 🔴 已设置为 false，底部不会再显示微信二维码和联系模块
  PROXIO_CTA_TITLE: '保持联系',
  PROXIO_CTA_TITLE_2: '加入我的旅程',
  PROXIO_CTA_DESCRIPTION:
    '扫描二维码添加我的微信，或者直接给我发送邮件。',
  
  PROXIO_CTA_BUTTON: true, 
  // 你的微信二维码路径 (确保 public 文件夹里有 wechat.jpg)
  PROXIO_CTA_BUTTON_URL: '/wechat.jpg', 
  PROXIO_CTA_BUTTON_TEXT: '微信二维码',

  PROXIO_POST_REDIRECT_ENABLE: true,
  PROXIO_POST_REDIRECT_URL: 'https://bieji.vercel.app/', // 如果没有独立域名，留空或填 Vercel 域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false
}
export default CONFIG
