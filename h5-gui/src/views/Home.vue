<script setup>
import GoodsCard from "../components/GoodsCard.vue";
import { ref } from "vue";
import { Toast } from "vant";
import router from "../router";

const value = ref("");
const tabList = [
  "推荐",
  "上新",
  "水果",
  "蔬菜",
  "乳品",
  "肉蛋",
  "粮油",
  "酒水",
  "居家",
  "零食",
  "绿植",
];
const goodsItem = [];
function onClickInput(val) {
  Toast(val);
}
const active = ref(0);
function onClickTab({ title }) {
  Toast(title);
}

function queryGoodsList() {
  for (let i = 1; i < 20; i++) {
    goodsItem.push({
      goodsId: "G" + i,
      imgUrl: "https://img.yzcdn.cn/vant/apple-" + (i % 8 + 1) + ".jpg",
      name: "iPhoneX商品名称商品名称商品名称",
      describe: "2019年新款 | A14 AI智能",
      specs: "3000",
      unit: "元/部",
      // originalPrice: 9900,
      price: 7900,
      tag: [],
    });
  }
}
queryGoodsList();

function goodsCardOnClick(item) {
  console.log(this.$router)
  router.push({ path: '/goods-detail', query: { goodsId: item.goodsId } })
}
</script>

<template>
  <div>
    <!-- <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @click-input="onClickInput('onClickInput')"
    /> -->
    <van-swipe class="home-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-sticky>
      <van-tabs v-model="active" @click-tab="onClickTab">
        <van-tab v-for="(item, index) in tabList" :key="index" :title="item"></van-tab>
      </van-tabs>
    </van-sticky>
    <div class="goods-list-container">
      <GoodsCard v-for="(goodsItem, index) in goodsItem" :key="index" :item="goodsItem" @click="goodsCardOnClick(goodsItem)" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin-bottom: 8px;
  }
}
.goods-list-container {
  padding: 8px;
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
  padding-bottom: 85px;
}
</style>
