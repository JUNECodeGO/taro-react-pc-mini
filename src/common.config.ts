/** @format */

let CustomConfig;

// PC端 移动端
if (process.env.TARO_ENV === 'h5') {
  CustomConfig = {
    entryPagePath: 'pages/main/home/index',
    pages: [
      'pages/main/home/index',
      'pages/main/login/index',
      'pages/main/signIn/index',
    ],
  };
} else {
  // 小程序
  CustomConfig = {
    entryPagePath: 'pages/index/index',
    pages: ['pages/index/index', 'pages/notice/index', 'pages/account/index'],
    subPackages: [
      {
        root: 'pages/main',
        pages: ['login/index', 'signIn/index'],
      },
    ],
    tabBar: {
      color: '#000000',
      selectedColor: '#0B4F4A',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/listing/index',
          text: '首页',
        },
        {
          pagePath: 'pages/dataCenter/index',
          text: '消息中心',
        },
        {
          pagePath: 'pages/account/index',
          text: '个人中心',
        },
      ],
    },
  };
}

export default CustomConfig;
