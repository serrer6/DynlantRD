# DynlantRD 
![GPL](https://img.shields.io/badge/License-GPLv2-blue?style=for-the-badge)
![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/WEBPACK-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MiaoDB](https://img.shields.io/badge/MiaoDB--Project_OpenSource-2B2F64?style=for-the-badge&)

<div align="center">

  <h3 align="center">DynlantRD</h3>

  <p align="center">
    适用于网站帖子的富文本渲染器
    <br />
    <a href="https://github.com/serrer6/DynlantRD/tree/master/docs/README.md"><strong>浏览文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/serrer6/DynlantRD">查看 Demo[无]</a>
    ·
    <a href="https://github.com/serrer6/DynlantRD/issues">反馈 Bug</a>
    ·
    <a href="https://github.com/serrer6/DynlantRD/issues">请求新功能</a>
  </p>
</div>


- 大体上很仿B站，因为其本身的诞生源于个人项目需要。
> 酸酪の确认——DynlantRD 将进入正式开发
---------

## :sparkles:特点
- :rocket:体积小，不过10KB的身躯
- :zap:足够快，上百条富文本。仅需不到50ms

## 快速开始
这是一份在本地构建项目的指导的例子。
要获取本地副本并且配置运行，你可以按照下面的示例步骤操作。
### 构建
1. 克隆项目到本地
```sh
git clone https://github.com/serrer6/DynlantRD.git
```
2. 安装依赖
```sh
npm install --save-dev
```
3. 构建项目
```sh
npm run build

> dnylantrd@x.x.x build
> webpack --config webpack.prod.js

asset dynlantrd.uncompressed.js x KiB [compared for emit] (name: dynlantrd.uncompressed)
asset dynlantrd.min.js x KiB [compared for emit] [minimized] (name: dynlantrd.min)
orphan modules x.xx KiB [orphan] 5 modules
runtime modules xxx bytes x modules
cacheable modules *.** KiB
  ./src/index.js xx bytes [built] [code generated]
  ./src/dynlantrd.js + x modules x.xx KiB [built] [code generated]
webpack 5.90.3 compiled successfully in xxxx ms
```
4. 其中生成了两个文件，如果你进行了开发，可以使用dynlantrd.uncompressed.js这是个未压缩版本，另一个压缩版本[生产环境]

## 路线图

- [x] 添加更新日志
- [x] 完成基本建设
- [ ] 构建第一个发行版本
- [x] 制作更好的插件API
  - [x] 支持装载插件
  - [ ] 支持卸载插件
  - [ ] 添加插件初始化

## 使用方式
- HTML引入
```html
<link rel="stylesheet" href="./dynlantrd.min.css">
<script type="text/javascript" src="./dynlantrd.min.js"></script>
```

## 贡献者
- Serrer6{别名：酸酪QwQ} [发起者～主要贡献者]

## 🎈鸣谢
- 本项目部分借鉴bilibili/flv.js
- 感谢好友"依荷"的支持与陪伴

## 📜版权信息
本项目签署了GPL v2授权协议，详情请到项目根目录下的LICENCE文件了解

## CHANGLOG (只展示最近十条，详细请看CHANGLOG.md)
0.0.2 基础建设，插件系统实现了
- 添加了 Render.js
- 修改了 processors.js Obj2DOM实现
- 出具雏形的插件系统.目前可用
- 全新的readme

0.0.1 项目创建
- 添加了Logger.js
