module.exports = {
  name: 'zcl-mobile-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/zcl-mobile-ui/',
    },
  },
  site: {
    title: 'zcl-mobile-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'hll-dialog',
            title: 'hll-dialog 弹框',
          },
          {
            path: 'hll-luck-draw',
            title: 'hll-luck-draw 幸运转盘',
          },
        ],
      },
    ],
  },
};
