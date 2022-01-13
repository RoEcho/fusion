<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <div style="overflow: auto; height: calc(100vh - 54px)">
      <div class="call-back">
        <van-icon name="arrow-left" color="white" size="24px" />
      </div>
      <div class="swiper-container">
        <!-- <swiper
          style="height: 400px"
          indicator-dots="{{indicatorDots}}"
          indicator-color="rgba(255, 255, 255, 0.3)"
          indicator-active-color="rgb(255, 255, 255"
          autoplay="{{autoplay}}"
          interval="{{interval}}"
          duration="{{duration}}"
        >
          <block wx:for="{{background}}" wx:key="*this">
            <swiper-item>
              <div class="swiper-item {{item}}">
                <image
                  style="height: 100%"
                  mode="heightFix"
                  src="https://img14.360buyimg.com/n1/jfs/t1/193992/9/17803/204485/611327f4E1ab3ea76/a7c58a34dd963ded.jpg"
                >
                </image>
              </div>
            </swiper-item>
          </block>
        </swiper> -->
        <van-swipe class="goods-detail-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              src="https://img14.360buyimg.com/n1/jfs/t1/193992/9/17803/204485/611327f4E1ab3ea76/a7c58a34dd963ded.jpg"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              src="https://img14.360buyimg.com/n1/jfs/t1/193992/9/17803/204485/611327f4E1ab3ea76/a7c58a34dd963ded.jpg"
            />
          </van-swipe-item>
        </van-swipe>
        <div class="transparent-container"></div>
      </div>
      <div class="goods-detail-content">
        <div class="content-card">
          <span class="goods-name">突尼斯软籽石榴</span>
          <span class="goods-desc">甜石榴 单果300-400g 新鲜水果</span>
          <span class="price">
            ￥<span style="font-size: 30px">{{ 40000 }}</span>
            {{ 40001 }}
          </span>
          <div>
            <van-button
              style="margin-right: 6px"
              size="small"
              color="linear-gradient(to right, #FC603E, #EC142E)"
            >
              4粒装
            </van-button>
          </div>
          <div class="security-tips">
            <van-icon color="#FC603E" size="20px" name="youzan-shield" />售后无忧 · 品质保障 ·
            极速退款 · 次日自提
          </div>
        </div>
        <!-- <div class="content-card">
          <div class="comment-header">
            <span class="comment-title">评价(1234)</span>
            <div class="comment-more">98%好评<van-icon name="arrow" color="#333" /></div>
          </div>
          <div class="comment-content">
            <span class="">评价(1234)</span>
          </div>
        </div> -->
        <div class="goods-detail">
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/6b9fbc90c255fd5d.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/4f477b047888675e.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/5b3fb30c22403bd5.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/d653fed854664e41.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/0d1405db91a8c5d7.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/b40fa8206cf9eed8.jpeg"
          >
          </image>
          <image
            src="https://muyao-culture.oss-cn-beijing.aliyuncs.com/image/goods/fruits/pomegranate/10230a74021032d9.jpeg"
          >
          </image>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* pages/goods-detail.wxss */
.call-back {
  position: fixed;
  top: 46px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(53, 53, 53, 0.8);
  border-radius: 0 50% 50% 0;
  /* border: 1px solid white; */
}

.swiper-container {
  position: relative;
  .goods-detail-swipe {
    height: 400px;
  }

  .transparent-container {
    width: 100vw;
    height: 50px;
    position: absolute;
    bottom: 0;
    /* background-color: linear-gradient(#FFFFFF, transparent); */
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    z-index: 100;
  }
}

.goods-detail-content {
  margin-top: -70px;
  // height: 400px;
  z-index: 100;
  position: relative;

  .content-card {
    width: calc(100% - 72px);
    min-height: 100px;
    margin: 0 20px 20px;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    /* box-shadow: 0 0 2px 0.5px #eeeeee; */
    border: 1px solid #f5f5f5;
  }
  .goods-name {
    font-size: 20px;
  }

  .goods-desc {
    font-size: 14px;
    color: #999999;
    font-weight: 400;
  }

  .price {
    font-size: 20px;
    color: red;
    font-weight: 600;
    line-height: 50px;
  }

  .security-tips {
    font-size: 13px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
  }

  .comment-more {
    font-size: 14px;
    color: #ec142e;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .goods-detail {
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
