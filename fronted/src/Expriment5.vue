<script setup>
// 通过Nginx配置（正向）代理，前端不需要额外操作，正常发送请求即可

import axios from "axios";
import { reactive } from "vue";

const context = reactive([])
const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

instance.get('/').then((res) => {
    context.value = res.data
    for (let key in res.data) {
        context.push(`${key}: ${res.data[key]}`)
    }
}).catch((err) => {
    console.error(err)
})

</script>

<template>
    <h1>跨域探究-实验一：不进行任何配置</h1>
    <p>以下是服务端返回的响应，内容是http请求的内部属性：</p>
    <p v-for="line in context">{{ line }}</p>
</template>
