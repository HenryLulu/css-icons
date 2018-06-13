# CSS-ICONS
CSS3实现的单元素仿文库图标

预览地址：https://henrylulu.github.io/css-icons/demo.html

## 快速开始
引入CSS文件

    <link rel="stylesheet" href="icons.min.css">

根据demo选择class

    <div class="icon icon-mac">

get it !

![](./pics/mac.png)

## 默认配置

前景色：#333

背景色：#fff

图标大小：36*36

## 开发&自定义

环境

    npm install

自定义颜色

    // icons.less
    @front: #333;   // Line 2
    @back: #fff;    // Line 3

构建

    gulp