## 后端项目结构

```
├── app.js   主要代码，在这里进行四个实验的切换
├── CORS	
|  ├── custom_cors.js	自定义配置CORS
|  └── npm_cors.js		cors库进行配置CORS
└── routes
   └── index.js			路由和功能逻辑
```



## 使用方式

安装依赖

```
npm install
```

启动项目

```
npm start
```

在app.js文件中切换实验

![image-20230419220835821](https://qiuzcc-typora-images.oss-cn-shenzhen.aliyuncs.com/images/image-20230419220835821.png)

