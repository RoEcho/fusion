<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

function addShoppingCart() {
  console.log("addShoppingCart");
}
// const emit = defineEmits(['change', 'delete'])
</script>

<template>
  <div class="goods-item">
    <img v-lazy="item.imgUrl" />
    <div class="goods-name">
      <span>{{ item.name }}</span>
      <span v-if="!!item.specs"> {{ item.specs }}</span>
      <span v-if="!!item.unit">{{ item.unit }}</span>
    </div>
    <div>
      <span class="goods-desc">{{ item.describe }}</span>
    </div>
    <div class="goods-price-container">
      <span class="goods-price" style="font-size: 12px">￥</span>
      <span class="goods-price">{{ item.price.toFixed(2) }}</span>
      <span v-if="!!item.originalPrice" class="goods-original-price"
        >￥{{ item.originalPrice.toFixed(2) }}</span
      >
    </div>
    <div class="goods-cart" @click.stop="addShoppingCart()">
      <div class="badge">1</div>
      <van-icon name="cart-o" color="white" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.goods-item {
  -webkit-column-break-inside: avoid;
  position: relative;
  break-inside: avoid;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  img {
    width: 100%;
    max-width: 200px;
    height: 130px;
  }
  .goods-name {
    font-size: 12px;
    line-height: 14px;
  }
  .goods-desc {
    font-size: 10px;
    color: #999999;
  }
  .goods-price-container {
    margin-top: 5px;
    .goods-price {
      font-size: 15px;
      color: red;
    }
    .goods-original-price {
      font-size: 10px;
      color: #cccccc;
      text-decoration: line-through;
    }
  }
  .goods-cart {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    bottom: 6px;
    right: 10px;
    background: linear-gradient(135deg, #78da78, #1cb61c);
    .badge {
      position: absolute;
      top: -3px;
      right: -3px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid white; */
      color: white;
      z-index: 0;
      width: 10px;
      height: 10px;
      background: tomato;
      font-size: 8px;
      border-radius: 50%;
    }
  }
}
</style>
