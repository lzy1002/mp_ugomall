// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      this.setData({
        activeIndex: event.currentTarget.dataset.index
      })

      this.triggerEvent("tabChange", {index: event.currentTarget.dataset.index});
    }
  }
})
