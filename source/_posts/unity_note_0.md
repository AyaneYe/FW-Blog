---
title: Unity笔记--1.Awake和Start两个函数
date: 2022-5-6 23:38:00
categories: 
- 开发学习日志
tags: 
- Unity
---
## （学习中...如本文有错误，请多指教）
如标题，这两个函数是在加载Script时自动调用的。  
这俩按照官方的说法：  

**Awake即使在"已挂载，未启用"的情况下也能执行，比较适合设置引用。**  

**而Start则是在Awake后执行(前提是已启用脚本)**  

可以先在Awake处初始化一部分，等到需要的时候启用即可  
比如说：想搞一个射击游戏，可以在Awake处提前分配好弹药，射击时只需要启用即可(如需要可以在Start定义时间)  

****注：这俩函数在运行过程中只能调用一次，并且不能通过重新启用等操作重复运行**  
实例代码如下：![](https://lishanweilai-1254333161.cos.ap-beijing.myqcloud.com/bloging/22-5-7/AAS-1.png)  
未启用效果如下：![](https://lishanweilai-1254333161.cos.ap-beijing.myqcloud.com/bloging/22-5-7/AAS-False-2.png)  
启用后效果如下：![](https://lishanweilai-1254333161.cos.ap-beijing.myqcloud.com/bloging/22-5-7/AAS-True-3.png)  
可以看到未启用时仅执行了Awake部分，启用后则接着执行了Start部分（在Play Mode中启用也可以执行后续部分）