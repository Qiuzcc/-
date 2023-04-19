## 项目主要结构

```
后端 backend
├── app.js   主要代码，在这里进行四个实验的切换
├── CORS	
|  ├── custom_cors.js	自定义配置CORS
|  └── npm_cors.js		cors库进行配置CORS
└── routes
   └── index.js			路由和功能逻辑
   
前端 fronted
├── src
|  ├── App.vue			主组件，在这里切换不同的实验
|  ├── Expriment1.vue	 实验一，不进行任何配置
|  ├── Expriment2.vue	 实验二，使用Vite的dev server配置正向代理
|  ├── Expriment3.vue	 实验三，后端手动配置CORS
|  ├── Expriment4.vue	 实验四，后端使用cors库进行配置
|  ├── Expriment5.vue	 实验五，通过Nginx配置（正向）代理
└── vite.config.js		实验二需要用到
```



## 实验方法

`fronted/`和`backend/`下的 readme 文档注明了进行不同实验的方式。前后端项目之间只需要保持实验次序一致即可！



## 实验文档

[手把手带你实践4种前端跨域方式（附源码） - timegogo](https://www.timegogo.top/2023/04/13/前端工程化/跨域：跨域实验探究/)