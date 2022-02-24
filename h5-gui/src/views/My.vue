<script setup></script>

<template>
  <div class="my">
    <van-sticky>
      <div class="user-info">
        <van-image
          round
          fit="cover"
          width="60px"
          height="60px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <br />
        <span class="user-name">183****7822</span>
      </div>
    </van-sticky>
    <div class="my-order">
      <div class="my-order-header">
        <span class="my-order-header-title">我的订单</span>
        <span class="my-order-header-more">查看全部订单></span>
      </div>
      <div class="my-order-list">
        <div class="my-order-item">
          <van-icon name="pending-payment" size="30" />
          待支付
        </div>
        <div class="my-order-item">
          <van-icon name="send-gift-o" size="30" />
          待收货
        </div>
        <div class="my-order-item">
          <van-icon name="comment-o" size="30" />
          待评价
        </div>
        <div class="my-order-item">
          <van-icon name="after-sale" size="30" />
          售后/退款
        </div>
      </div>
    </div>
    <div class="other-application-list">
      <div class="other-application-item">
        <van-icon name="location-o" size="30"/>
        收货地址
      </div>
      <div class="other-application-item">
        <van-icon name="smile-comment-o" size="30"/>
        意见反馈
      </div>
      <div class="other-application-item">
        <van-icon name="point-gift-o" size="30"/>
        邀请有礼
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my {
  background: #f5f5f5;
  height: 100vh;
  .user-info {
    text-align: center;
    background: #fff;
    padding: 20px;
    .user-name {
      margin-left: 10px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .my-order {
    margin: 10px 8px;
    border-radius: 8px;
    background: #fff;
    padding: 10px;
    .my-order-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .my-order-header-title {
        font-size: 16px;
        font-weight: 600;
      }
      .my-order-header-more {
        font-size: 12px;
        color: #999;
      }
    }
    .my-order-list {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .my-order-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        line-height: 26px;
      }
    }
  }
  .other-application-list {
    margin: 10px 8px;
    border-radius: 8px;
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .other-application-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      line-height: 26px;
    }
  }
}
</style>
