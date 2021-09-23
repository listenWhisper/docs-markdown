## 配置文件
>   config文件默认放在miniprogram文件下,默认读取miniprogram/config。
若更改存储位置,请在app.ts中配置资源请求位置。
config中配置文件：
home.config.js,
login.config.js,
container.config.js,
router.config.js,
swiper.config.js

### home.config.js

````css
  const home = [
      {
          "ComponentSelector": "首页路径",
          "RoleNames": [
            "角色名称"
          ],
          "QuickLinks": [
            {
              "Name": "快捷入口名称",
              "OrderNum": 0,
              "Type": 快捷入口类型 0为常用 1为标准,
              "Url": "快捷入口执向地址",
              "Param": "附带参数",
              "Icon": "快捷入口图标地址",
              "IconCallback": "快捷入口图标更改或展示统计数",
              "IconLinkType": "快捷入口跳转方式",
              "State": 快捷入口状态, // 0表示存在
              "Style": "快捷入口样式",
            }
          ]
      }
  ]
  
  module.exports = {
      home: home
  }
````

### login.config.js

````css
  let loginConfig = {
      "style": "center",
      "background": "背景图",
      "slogan": "",
      "document": "用户协议说明",
      "copyright": {
          "support": [],
          "record": ""
      },
      "userAgreement": '登录说明',
      "userAgreementPosition": "协调位置",
      "loginWays": [
          "account",
          "message",
          "authorize"
      ],
      "hasValidAgreement": false,
      "hasValidateCode": false,
      "hasMessageValidate": true,
      "hasForgetPassword": true,
      "passwordEncryption": false
  }
  
  module.exports = {
      loginConfig: loginConfig
  }
````

### container.config.js

````css
  let container = {
      "logo": "LOGO图标",
      "title": "名称",
      "rightPanelName": null
  }
  module.exports = {
      container: container
  }

````

### router.config.js

````css
  const routes = [
      {path: 'login', type: 'redirectTo', component: '/pages/login/index'},
  ]
  module.exports = {
      router: routes
  }

````

### swiper.config.js

````css
  let swiperConfig = {
      "swiperImage": [
          {
              "path": '轮播图地址',
              "component": '跳转指向',
              "type": '跳转方式',
          }
      ],
      "indicatorDots": true,
      "easingFunction": 'linear',
      "indicatorActiveColor": '#ffffff',
      "vertical": false,
      "autoplay": true,
      "interval": 2000,
      "duration": 500
  }
  module.exports = {
      swiperConfig: swiperConfig
  }
````

