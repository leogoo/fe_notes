module.exports = {
  title: 'leo前端小笔记',
  description: '缘，妙不可言',
  base: '/fe_notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'demo', link: '/demo/index'},
      {
        text: 'leo',
        items: [
          { text: 'Github', link: 'https://github.com/leogoo' },
        ]
      }
    ],
    sidebar: {
      '/demo/': [
        { text: '文件下载', link: '/demo/index' },
        { text: '文字跑马灯', link: '/demo/marquee'}
      ],
      '/': [
        {
          text: 'css',
          link: '/css/index',
          children: [
            { text: 'background', link: '/css/background' }
          ]
        },
        {
          text: 'js',
          link: '/js/index',
          children: [
            {
              text: 'es6',
              link: '/js/es6/index'
            }
          ]
        }
      ]
    }
  }
}
