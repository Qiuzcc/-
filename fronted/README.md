## 项目结构

```
├── src
|  ├── App.vue			主组件，在这里切换不同的实验
|  ├── Expriment1.vue	 实验一，不进行任何配置
|  ├── Expriment2.vue	 实验二，使用Vite的dev server配置正向代理
|  ├── Expriment3.vue	 实验三，后端手动配置CORS
|  ├── Expriment4.vue	 实验四，后端使用cors库进行配置
|  ├── Expriment5.vue	 实验五，通过Nginx配置（正向）代理
└── vite.config.js		实验二需要用到
```



## 使用方式

安装依赖

```
npm install
```

本地启动项目，（可进行实验1-4）

```
npm run dev
```

切换实验的方式：

![image-20230419221439369](https://qiuzcc-typora-images.oss-cn-shenzhen.aliyuncs.com/images/image-20230419221439369.png)
