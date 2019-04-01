# 项目介绍
使用 webapck 从0到1搭建 vue 项目

# 技术栈
Vue + Vue-router + Axios + [ElementUI](http://element-cn.eleme.io/#/zh-CN/component/steps) + Webpack

# 笔记
## 需要的loader
loader [作用]
vue-loader [转换.vue文件]
vue-template-compiler [解析<template></template>]
vue-router [解析<router-view></router-view>]，需要在 Vue 里 use 才能使用
less less-loader
style-loader
css-loader

动态加载各个环境的配置

mockjs
axios：返回的统一处理，提交数据添加token
多环境

## 别名
后缀填充
指定 vue
@

引入css
引入字体图标
引入图片


未解决：import img2 from '@/asset/images/img1.png'   img2 用不了