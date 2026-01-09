
```javascript
/**
 * 另一个落地页主题 PROXIO 配置
 * "Chief Officer of Freedom" 定制版
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, // 是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: 'Welcome to the Free World', // 欢迎文字

  // =================================================================
  // 1. 英雄区块 (Hero Section)
  // =================================================================
  PROXIO_HERO_ENABLE: true,
  PROXIO_HERO_TITLE_1: 'From Corporate Grind to Absolute Freedom',
  PROXIO_HERO_TITLE_2: 'Sharing my journey of productivity, tools, and the art of doing less.',
  
  PROXIO_HERO_BUTTON_1_TEXT: 'Read My Blog',
  PROXIO_HERO_BUTTON_1_URL: '/archive', 
  PROXIO_HERO_BUTTON_2_TEXT: 'My "Resume"',
  PROXIO_HERO_BUTTON_2_URL: '/about', // 跳转到关于我/简历
  PROXIO_HERO_BUTTON_2_ICON: '', 

  PROXIO_HERO_BANNER_IMAGE: '', // 留空则使用 Notion 封面的图
  PROXIO_HERO_BANNER_IFRAME_URL: '',

  // =================================================================
  // 2. 博客文章区块 (Blog Section)
  // =================================================================
  PROXIO_BLOG_ENABLE: true,
  PROXIO_BLOG_TITLE: 'Latest Thoughts',
  PROXIO_BLOG_COUNT: 4, 
  PROXIO_BLOG_TEXT_1: 'Productivity Hacks & Life Logs',

  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', 
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, 

  // =================================================================
  // 3. 特性/兴趣区块 (Features/Interests)
  // =================================================================
  PROXIO_FEATURE_ENABLE: true,
  PROXIO_FEATURE_TITLE: 'Focus Areas',
  PROXIO_FEATURE_TEXT_1: 'Tools & Mindsets for a Better Life',
  PROXIO_FEATURE_TEXT_2: 'Work smarter, live freer.',

  // Feature 1: Productivity
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-rocket', 
  PROXIO_FEATURE_1_ICON_IMG_URL: '',
  PROXIO_FEATURE_1_TITLE_1: 'Productivity Tools',
  PROXIO_FEATURE_1_TEXT_1:
    'Obsessed with finding tools that automate the boring stuff so I can enjoy my coffee longer.',

  // Feature 2: Life Hacking
  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-mug-hot', 
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: 'Life Hacking',
  PROXIO_FEATURE_2_TEXT_1:
    'Optimizing daily routines to maximize leisure time and personal fulfillment.',

  // Feature 3: Python/Tech
  PROXIO_FEATURE_3_ICON_CLASS: 'fa-brands fa-python', 
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: 'Tech & Coding',
  PROXIO_FEATURE_3_TEXT_1:
    'Using Python and code to build my own digital garden and automate the world.',

  PROXIO_FEATURE_BUTTON_TEXT: 'Explore Categories',
  PROXIO_FEATURE_BUTTON_URL: '/category',

  // =================================================================
  // 4. 生涯/履历区块 (Experience) - 你的精彩履历
  // =================================================================
  PROXIO_CAREER_ENABLE: true, 
  PROXIO_CAREER_TITLE: 'Experience',
  PROXIO_CAREER_TEXT: 'My professional path to liberation.',

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
  PROXIO_ABOUT_TITLE: 'About Me',
  PROXIO_ABOUT_TEXT_1: 'A real man who didn’t particularly enjoy going to work, and now has successfully quit with a smile.',
  PROXIO_ABOUT_TEXT_2:
    'I’m a lifelong learner passionate about productivity tools. I love finding and using tools that help me work and live more efficiently. My focus is on optimizing tasks, managing time effectively, and sharing best practices to achieve more in less time – now with even more freedom!',
  
  // 你的头像路径 (确保 public 文件夹里有 avatar.png)
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png', 
  
  PROXIO_ABOUT_KEY_1: 'Freedom',
  PROXIO_ABOUT_VAL_1: '100%',
  PROXIO_ABOUT_KEY_2: 'Slacking',
  PROXIO_ABOUT_VAL_2: 'Expert',
  PROXIO_ABOUT_KEY_3: 'Working',
  PROXIO_ABOUT_VAL_3: '0%',
  PROXIO_ABOUT_KEY_4: 'Happiness',
  PROXIO_ABOUT_VAL_4: 'Max',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: 'More About Me',

  // 滚动条文字
  PROXIO_BRANDS_ENABLE: true,
  PROXIO_BRANDS: [
    'Freedom',
    'Productivity',
    'LifeStyle',
    'NoWork',
    'Tools',
    'Thinking'
  ],

  PROXIO_FOOTER_SLOGAN: 'Creating Order out of Chaos.', 

  // =================================================================
  // 6. 页脚菜单 (Footer)
  // =================================================================
  PROXIO_FOOTER_LINKS: [
    {
      name: 'Navigation',
      menus: [
        { title: 'All Posts', href: '/archive' },
        { title: 'Reading List', href: '/category/reading' },
        { title: 'About Me', href: '/about' }
      ]
    },
    {
      name: 'Connect',
      menus: [
        { title: 'Github', href: 'https://github.com' }, // 记得改成你的 GitHub 链接
        { title: 'Email', href: 'mailto:xiashunquan@gmail.com' }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: 'Latest Posts',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Use',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  PROXIO_404_TITLE: 'Page Not Found',
  PROXIO_404_TEXT: 'The page you are looking for has gone fishing.',
  PROXIO_404_BACK: 'Back to Home',

  // =================================================================
  // 7. 底部行动呼吁 & 微信 (Call To Action)
  // =================================================================
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: 'Let\'s Connect',
  PROXIO_CTA_TITLE_2: 'Join my journey',
  PROXIO_CTA_DESCRIPTION:
    'Scan the QR code to add me on WeChat, or drop me an email.',
  
  PROXIO_CTA_BUTTON: true, 
  // 你的微信二维码路径 (确保 public 文件夹里有 wechat.jpg)
  PROXIO_CTA_BUTTON_URL: '/wechat.jpg', 
  PROXIO_CTA_BUTTON_TEXT: 'WeChat QR Code',

  PROXIO_POST_REDIRECT_ENABLE: true,
  PROXIO_POST_REDIRECT_URL: '', // 如果没有独立域名，留空或填 Vercel 域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false
}
export default CONFIG

```
