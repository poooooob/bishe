"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.careTips, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.content),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5194e907"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/help/help.js.map
