module.exports = {
  title: 'leo前端小笔记',
  description: '缘，妙不可言',
  base: '/fe_notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '工程化', link: '/project/' },
      { text: '算法', link: '/algorithm/' },
      {
        text: 'leo',
        items: [
          { text: 'Github', link: 'https://github.com/leogoo' },
        ]
      }
    ],
    sidebar: {
      '/algorithm/': [
        { text: '二分法', link: '' }
      ],
      '/project/': [
        { text: 'webpack', link: '/project/webpack' },
        { text: '首屏图片渲染优化', link: '/project/img'},
      ],
      '/': [
        {
          text: 'js',
          link: '/js/index',
          children: [
            { text: 'localStorage', link: '/js/localStorage' },
            { text: 'promise', link: '/js/promise' },
          ]
        },
        {
          text: 'react',
          link: '/react/index',
          children: [
            { text: 'hooks', link: '/react/hooks' },
          ]
        },
        {
          text: 'demo',
          link: '/demo/index',
          children: [
            { text: '文件下载与上传', link: '/demo/index' },
            { text: '文字跑马灯', link: '/demo/marquee'},
            { text: '曝光埋点', link: '/demo/Impr' },
          ]
        },
        {
          text: '其他',
          link: '/others/index',
          children: [
            { text: 'git', link: '/others/git' },
            { text: '页面生命周期', link: '/others/html' },
            { text: 'css基础', link: '/others/css' },
            { text: '图片', link: '/others/img' },
          ]
        }
      ]
    }
  }
}
