<script setup>
import Expriment1 from './Expriment1.vue';
import Expriment2 from './Expriment2.vue';
import Expriment3 from './Expriment3.vue';
import Expriment4 from './Expriment4.vue';
import Expriment5 from './Expriment5.vue';

/**
 * Expriment1-4 分别代表4个实验环境，进行到哪个实验时，只需要把对应组件的注释去掉，把其余组件注释掉即可！
 * 实验一：不进行任何配置
 * 实验二：使用Vite的dev server配置正向代理
 * 实验三：后端手动配置CORS
 * 实验四：后端使用cors库进行配置
 * 实验五：通过Nginx配置（正向）代理
 */
</script>

<template>
  <Expriment1 />
  <!-- <Expriment2 /> -->
  <!-- <Expriment3 /> -->
  <!-- <Expriment4 /> -->
  <!-- <Expriment5/> -->
</template>
