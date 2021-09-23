## user-login 用户登录

### 介绍
> 用户登录用于用户登录模块,为首屏界面,使用用户登录需配置文件,详情介绍见配置文件。

### 引入

在页面的index.json中引入组件，详细介绍见快速上手。

````css
  "usingComponents": {
    "py-user-login": "pengesoft-weapp/components/user-login"
  }
````  
### 代码演示

> 支持开启了addGlobalClass: true以接受外部样式的影响,若更改组件样式。可修改

<py-user-login></py-user-login>

### API

#### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[loginButtonStyle]` | 	登录确认按钮样式 | ButtonStyle | new ButtonStyle() |
| `[forgotPasswordButtonStyle]` | 	忘记密码确认按钮样式 | ButtonStyle | new ButtonStyle() |

#### Events

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `（refresh）` | 	数据刷新(进入页面触发) | - |

