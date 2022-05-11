---
title: Unity笔记--3.如何优雅的 禁/启用 组件
date: 2022-5-11 23:00:00
categories: 
- 开发学习日志
tags: 
- Unity
---
## （学习中...如本文有错误，请多指教）
众所周知，在游戏中我们可以按开关、按钮或按键去控制某些东西的开关等操作，  

我们可以这样写来达成某种按键关闭效果。  

![](https://lishanweilai-1254333161.cos.ap-beijing.myqcloud.com/bloging/22-5-11/p1.png)  
但有个问题就是，如果是用于开关之类的，就会造成“一次性开关”这样的阴间东西。  

我们可以设为切换模式来解决这一问题，比如说设置为当前函数名的反向元素(如下图)  

![](https://lishanweilai-1254333161.cos.ap-beijing.myqcloud.com/bloging/22-5-11/p1.png)  

这样既能保证不出现“一次性开关”，也能保证功能完美