# 快速上手

## 背景知识

使用 pengesoft-weapp 前，请确保你已经学习过微信官方的 
<a target="_blank" href="https://developers.weixin.qq.com/miniprogram/dev/framework/">小程序简易教程</a> 和 
<a target="_blank" href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/">自定义组件介绍</a>。

## 安装

### 通过 npm 安装

> 使用 npm 构建前，请先阅读微信官方的 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```bash
# 通过 npm 安装
$ npm i pengesoft-weapp -S --production

# 通过 yarn 安装
$ yarn add pengesoft-weapp --production
```
### 步骤二 修改 app.json

将 app.json 中的 `"style": "v2"` 去除，小程序的[新版基础组件](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

### 步骤三 修改 project.config.json
开发者工具创建的项目，`miniprogramRoot` 默认为 `miniprogram`，`package.json` 在其外部，npm 构建无法正常工作。

需要手动在 `project.config.json` 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```
注意： 由于目前新版开发者工具创建的小程序目录文件结构问题，npm构建的文件目录为miniprogram_npm，并且开发工具会默认在当前目录下创建miniprogram_npm的文件名，所以新版本的miniprogramNpmDistDir配置为'./'即可

### 步骤四 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，即可引入组件。

<img style="width: 500px;" src="https://img.yzcdn.cn/public_files/2019/08/15/fa0549210055976cb63798503611ce3d.png" />

### 步骤五 typescript 支持

如果你使用 typescript 开发小程序，还需要做如下操作，以获得顺畅的开发体验。

#### 安装 miniprogram-api-typings

```bash
# 通过 npm 安装
npm i -D miniprogram-api-typings

# 通过 yarn 安装
yarn add -D miniprogram-api-typings
```
在 tsconfig.json 中增加如下配置，以防止 tsc 编译报错。

```css
  {
     ...
    "compilerOptions": {
     ...
    "types": ["miniprogram-api-typings"],
    "lib": ["ES6"]
    }
  }

```


## 使用
### 引入组件

*声明：只提供组件,页面有开发者创建,在页面中引入组件

>以加载为例，只需要在 json 文件中引入按钮对应的自定义组件即可
```css
  {
  // app.json
  "usingComponents": {
    "py-loading": "pengesoft-weapp/components/loading"
  }
 }
```
### 使用组件
> 引入组件后，可以在 wxml 中直接使用组件
```html
<py-loading loading="true" size="middle"></py-loading>
```

## 在开发者工具中预览
```css

# 安装项目依赖
$ npm install

```

## 请求配置
````css
const url = {
    address: 后台地址,
};
request(): string {
    return url.address;
}
````

## 资源请求配置
````css
require($uri: string): string {
    return require($uri);
}
````

## app.ts整体配置
````css
const url = {
    address: 后台地址,
};

App({
    globalData: {},
    request(): string {
        return url.address;
    },
    resourceRequestMethod(): 'local' | 'service'{
        return 'local';
    },
    require($uri: string): string {
        return require($uri);
    }
});
````
