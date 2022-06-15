module.exports = {
  title: 'leo前端小笔记',
  description: '缘，妙不可言',
  base: '/fe_notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '工程化', link: '/project/' },
      { text: '算法', link: '/algorithm/' },
      { text: '其他', link: '/others/git' },
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
        { text: '规范', link: '/project/standardize/module',
            children: [
                { text: '模块规范', link: '/project/standardize/module' },
                { text: '代码规范', link: '/project/standardize/code' },
            ]
        },
        { text: '服务', link: '/project/serve/server',
            children: [
                { text: '云服务器', link: '/project/serve/server' },
                { text: '域名系统', link: '/project/serve/dns' },
                
            ]
        },
        { text: 'webpack', link: '/project/webpack' },
        { text: '首屏图片渲染优化', link: '/project/img'},
        {
            text: '个人服务器运维', link: '/project/devops/index',
            children: [
                { text: 'ansible 自动化运维指南', link: '/project/devops/ansible' },
            ]
        },
        {
            text: '部署',
            link: '/project/deploy/index',
            children: [
                { text: '静态资源服务器', link: '/project/deploy/static' },
                { text: '基于docker/compose部署', link: '/project/deploy/docker' },
            ]
        },
      ],
      '/others/': [
        { text: 'git', link: '/others/git' },
        { text: '页面生命周期', link: '/others/html' },
        { text: 'css基础', link: '/others/css' },
        { text: '图片', link: '/others/img' },
        { text: 'json转ts', link: '/others/json '},
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
          text: 'ts',
          link: '/ts/type',
          children: [
            { text: '常见类型', link: '/ts/type' },
            { text: '类型收窄', link: 'ts/narrowing' },
            { text: '函数', link: '/ts/func' },
            { text: '对象类型', link: '/ts/object' },
            { text: '泛型', link: '/ts/generics' },
            { text: '类型操作符', link: '/ts/operator' },
            { text: '索引访问类型', link: '/ts/index' },
            { text: '条件类型', link: '/ts/conditional' },
            { text: '映射类型', link: '/ts/mapped' },
            { text: '模板字面量类型', link: '/ts/literal'},
            { text: '类', link: '/ts/class' },
            { text: '模块', link: '/ts/module' },
          ]
        },
        {
          text: 'demo',
          link: '/demo/index',
          children: [
            { text: '文件下载与上传', link: '/demo/index' },
            { text: '文字跑马灯', link: '/demo/marquee'},
            { text: '曝光埋点', link: '/demo/Impr' },
            { text: '竞态条件', link: '/demo/race' }
          ]
        },
      ]
    }
  }
}
