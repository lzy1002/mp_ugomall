// components/Swiper/Swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperList: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    imageHeightList: [],
    maxHeight: 0,
    windowWidth: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(event) {
      console.log(event);
      const ratio = event.detail.width / event.detail.height;
      const height = this.data.windowWidth / ratio;
      this.data.imageHeightList.push(height);
      if(this.data.imageHeightList.length !== this.properties.swiperList.length) return;
      this.data.imageHeightList.forEach((item) => {
        if(this.data.maxHeight >= item) return;
        this.setData({
          maxHeight: item
        })
      })
      console.log(this.data.maxHeight);
    },
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          console.log(res);
          this.setData({
            windowWidth: res.windowWidth
          })
        },
      })
    }
  }
})
