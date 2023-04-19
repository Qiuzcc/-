<script setup>
/**
 * 实验二：使用Vite的dev server配置正向代理
 * 代理的配置在vite.config.js文件中，进行实验二时，需要到vite.config.js文件将server部分的注释取消
 */

import axios from "axios";
import { reactive } from "vue";

const contextGet = reactive([])
const contextPost = reactive([])
const contextPut = reactive([])
const instance = axios.create({
    baseURL: '/api'
})

// 虽然这里访问的是/api，但实际上通过dev server最终访问到的是http://localhost:3000/
// instance将请求发送给dev server，dev server再向真正的target发送请求，因为dev server不是浏览器，所以不受同源策略限制
// dev server获得来自target的响应后，返回给instance，因为dev server和instance是同源的，所以可以被解析
instance.get('/').then((res) => {
    for (let key in res.data) {
        contextGet.push(`${key}: ${res.data[key]}`)
    }
}).catch((err) => {
    console.error(err)
})

instance.post('/', { timegogo_data: '实验一' }).then((res) => {
    for (let key in res.data) {
        contextPost.push(`${key}: ${JSON.stringify(res.data[key])}`)
    }
}).catch((err) => {
    console.error(err)
})

instance.put('/', { timegogo_data: '实验一' }).then((res) => {
    for (let key in res.data) {
        contextPut.push(`${key}: ${JSON.stringify(res.data[key])}`)
    }
}).catch((err) => {
    console.error(err)
})

</script>

<template>
    <h1>跨域探究-实验二：使用Vite的dev server配置正向代理</h1>
    <p>以下是服务端返回的响应，内容是http请求的内部属性：</p>
    <h3>Get请求返回的内容：</h3>
    <p v-for="line in contextGet">{{ line }}</p>
    <h3>Post请求返回的内容：</h3>
    <p v-for="line in contextPost">{{ line }}</p>
    <h3>Put请求返回的内容：</h3>
    <p v-for="line in contextPut">{{ line }}</p>
</template>
