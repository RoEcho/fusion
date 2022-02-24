<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const goodsList = [];
const checked = ref(false);
const value = ref(1);

const onSubmit = () => Toast("点击按钮");
const onClickLink = () => Toast("修改地址");

function queryShoppingCart() {
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
queryShoppingCart();
</script>

<template>
  <div class="shopping-cart">
    <div v-if="goodsList.length > 0">
      <div class="goods-item" v-for="(item, index) in goodsList" :key="index">
        <div class="item-checkbox-container">
          <van-checkbox v-model="checked"></van-checkbox>
        </div>
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
            <van-stepper v-model="value" theme="round" input-width="18" button-size="18" />
          </div>
        </div>
      </div>
      <van-submit-bar class="submit-bar" :price="3050" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.shopping-cart {
  height: calc(100vh - 104px);
  overflow-y: auto;

  .goods-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    &:first-child {
      margin-top: 8px;
    }
    .item-checkbox-container {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .goods-info {
      height: 100px;
      position: relative;
      padding-right: 10px;
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
        right: 10px;
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
  .submit-bar {
    bottom: 49px;
    border-bottom: 1px solid rgba(227, 227, 227, 0.5);
    border-top: 1px solid rgba(227, 227, 227, 0.5);
  }
}
</style>
