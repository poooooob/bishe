"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    // 拍照识别功能
    takePhoto() {
      const cameraContext = common_vendor.index.createCameraContext();
      cameraContext.takePhoto({
        quality: "high",
        // 可以选择图片质量
        success: (res) => {
          const tempFilePath = res.tempImagePath;
          common_vendor.index.navigateTo({
            url: `/pages/recognition/recognition?imgPath=${encodeURIComponent(tempFilePath)}`
          });
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/index/index.vue:45", "拍照失败:", err);
          common_vendor.index.showToast({
            title: "拍照失败，请重试",
            icon: "none"
          });
        }
      });
    },
    // 跳转到帮助页面
    goToHelp() {
      common_vendor.index.navigateTo({
        url: "/pages/help/help"
      });
    },
    // 跳转到历史记录页面
    goToHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/history/history"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.takePhoto && $options.takePhoto(...args)),
    b: common_vendor.o((...args) => $options.goToHelp && $options.goToHelp(...args)),
    c: common_vendor.o((...args) => $options.goToHistory && $options.goToHistory(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
