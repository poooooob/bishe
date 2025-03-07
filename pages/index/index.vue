<template>
  <view class="container">
    <!-- 顶部标题 -->
    <view class="header">
      <text class="title">智能皮肤病识别</text>
    </view>

    <!-- 中间拍照识别按钮 -->
    <view class="content">
      <button class="photo-button" @click="takePhoto">开始识别</button>
    </view>

    <!-- 摄像头组件 -->
    <camera id="camera" style="width: 100%; height: 300px;" device-position="back" flash="off"></camera>

    <!-- 底部小提示 -->
    <view class="footer">
      <text class="footer-text">保持皮肤清洁，定期护理。</text>
      <view class="nav">
        <button class="nav-button" @click="goToHelp">关于</button>
        <button class="nav-button" @click="goToHistory">历史记录</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    // 拍照识别功能
    takePhoto() {
      const cameraContext = uni.createCameraContext();

      cameraContext.takePhoto({
        quality: 'high', // 可以选择图片质量
        success: (res) => {
          const tempFilePath = res.tempImagePath;
          
          // 跳转识别页面并传递图片路径
          uni.navigateTo({
		   url: `/pages/recognition/recognition?imgPath=${encodeURIComponent(tempFilePath)}`
          });
        },
        fail: (err) => {
          console.error('拍照失败:', err);
          uni.showToast({
            title: '拍照失败，请重试',
            icon: 'none'
          });
        }
      });
    },

    // 跳转到帮助页面
    goToHelp() {
      uni.navigateTo({
        url: '/pages/help/help'
      });
    },

    // 跳转到历史记录页面
    goToHistory() {
      uni.navigateTo({
        url: '/pages/history/history'
      });
    }
  }
}
</script>




<style scoped>
/* 整体页面布局 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f8ff;
}

/* 顶部标题样式 */
.header {
  margin-top: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

/* 中部内容区域 */
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-button {
  width: 200px;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
}

.photo-button:active {
  background-color: #45a049;
}

/* 底部小提示和导航按钮 */
.footer {
  padding: 20px;
  text-align: center;
}

.footer-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-button {
  width: 100px;
  height: 35px;
  background-color: #ff9800;
  color: white;
  border-radius: 18px;
  border: none;
  cursor: pointer;
}

.nav-button:active {
  background-color: #fb8c00;
}
</style>