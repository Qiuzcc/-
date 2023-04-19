<script setup>
// 实验四：后端使用cors库进行配置，前端不需要进行任何配置。正常发送请求即可！

import axios from "axios";
import { reactive } from "vue";

const contextGet = reactive([])
const contextPost = reactive([])
const contextPut = reactive([])
const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

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
    <h1>跨域探究-实验一：不进行任何配置</h1>
    <p>以下是服务端返回的响应，内容是http请求的内部属性：</p>
    <h3>Get请求返回的内容：</h3>
    <p v-for="line in contextGet">{{ line }}</p>
    <h3>Post请求返回的内容：</h3>
    <p v-for="line in contextPost">{{ line }}</p>
    <h3>Put请求返回的内容：</h3>
    <p v-for="line in contextPut">{{ line }}</p>
</template>
