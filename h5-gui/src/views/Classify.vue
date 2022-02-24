<script setup>
import { ref } from "vue";
import { Toast } from "vant";
import router from "../router";

const seachKey = ref("");
const active = ref(0);
const value = ref(1);
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
let goodsList = [];

function onChange(index) {
  Toast(`标签名 ${index + 1}`);
}

// function onClickLeft() {
//   history.back();
// }

function queryGoodsList() {
  for (let i = 1; i < 11; i++) {
    goodsList.push({
      imgUrl: "https://img.yzcdn.cn/vant/apple-" + ((i % 8) + 1) + ".jpg",
      name: "iPhoneX商品名称商品名称商品名称",
      describe: "2019年新款 | A14 AI智能",
      specs: "3000",
      unit: "元/部",
      originalPrice: 9900,
      price: 7900,
      tag: [],
    });
  }
}
queryGoodsList();

function toGoodsDetail($evetn, item) {
  // router.push({ path: '/goods-detail', query: { goodsId: item.goodsId } })
  console.log($evetn, item);
}

function onPlus() {
  console.log("onPlus");
}
</script>

<template>
  <div class="classify">
    <!-- <van-nav-bar title="分类" left-span="返回" left-arrow @click-left="onClickLeft" /> -->
    <van-sticky>
      <van-search
        v-model="seachKey"
        shape="round"
        placeholder="请输入搜索关键词"
      />
    </van-sticky>
    <div class="classify-content">
      <van-sidebar
        style="background: var(--van-sidebar-background-color)"
        v-model="active"
        @change="onChange"
      >
        <van-sidebar-item v-for="(item, index) in tabList" :key="index" :title="item" />
      </van-sidebar>
      <div class="content-right" v-if="goodsList.length > 0">
        <div class="goods-item" v-for="(item, index) in goodsList" :key="index" @click.capture="toGoodsDetail(item)">
          <div style="margin: 0 10px">
            <van-image
              width="100"
              height="100"
              fit="cover"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="goods-info">
            <div class="goods-name">
              <span>{{ item.name }}</span>
              <span v-if="!!item.specs">{{ item.specs }}</span>
              <span v-if="!!item.unit">{{ item.unit }}</span>
            </div>
            <div class="goods-desc">
              {{ item.describe }}
            </div>
            <div class="goods-price-container">
              <span class="goods-price" style="font-size: 12px">￥</span>
              <span class="goods-price">{{ item.price.toFixed(2) }}</span>
              <!-- <span class="goods-original-price">￥{{ item.originalPrice }}</span> -->
            </div>
            <div class="goods-num">
              <van-stepper v-model="value" theme="round" input-width="18" button-size="18" @plus="onPlus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.classify {
  .classify-content {
    display: flex;
    overflow: auto;
    height: calc(100vh - 104px);
    .content-right {
      flex: 1;
      overflow-y: auto;

      .goods-item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        &:first-child {
          margin-top: 8px;
        }
        .goods-info {
          height: 100px;
          position: relative;
          .goods-name {
            font-size: 14px;
            line-height: 16px;
          }
          .goods-desc {
            font-size: 12px;
            color: #999999;
          }
          .goods-num {
            position: absolute;
            bottom: 0;
            right: 5px;
          }
          .goods-price-container {
            position: absolute;
            bottom: 0;
            .goods-price {
              font-size: 16px;
              color: red;
            }
            .goods-original-price {
              font-size: 12px;
              color: #cccccc;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>
