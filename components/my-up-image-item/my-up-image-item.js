// components/my-up-image-item/my-up-image-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl: {
      type: String,
      value: ""
    },
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteImage() {
      this.triggerEvent("deleteImage", {index: this.properties.index});
    }
  }
})
