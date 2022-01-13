<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const active = ref(0);
function onChange(index) {
  Toast(`标签 ${index}`);
}
</script>

<template>
  <div>
    <router-view></router-view>
    
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="apps-o" dot>分类</van-tabbar-item>
      <van-tabbar-item replace to="/shopping-cart" icon="cart-o" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o" badge="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
