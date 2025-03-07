<template>
  <view class="container">
    <view class="header">
      <text class="title">皮肤病智能识别 - 帮助中心</text>
    </view>
    <view class="content">
      <view class="section" v-for="(item, index) in careTips" :key="index">
        <text class="tip-title">{{ item.title }}</text>
        <text class="tip-content">{{ item.content }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      careTips: [
        { title: "保持皮肤清洁", content: "每日使用温和的洗面奶清洁皮肤，避免过度摩擦。" },
        { title: "避免过度日晒", content: "使用防晒霜，减少紫外线对皮肤的伤害。" },
        { title: "注意饮食健康", content: "多摄入维生素丰富的食物，避免辛辣和油腻食物。" },
        { title: "保持皮肤水分", content: "使用保湿霜，防止皮肤干燥。" },
        { title: "避免频繁挤压痘痘", content: "挤压可能导致感染和疤痕，应避免用手触碰。" }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}
.header {
  text-align: center;
  padding: 30rpx 0;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
}
.content {
  margin-top: 20rpx;
}
.section {
  background-color: #fff;
  padding: 20rpx;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
}
.tip-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}
.tip-content {
  font-size: 28rpx;
  color: #666;
  margin-top: 10rpx;
  display: block;
}
</style>
