// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["体验问题", "商家、商品投诉"],
    activeIndex: 0,
    upImageList: [],
    textValue: ""
  },
  tabChange(event) {
    console.log(event.detail.index);
    this.setData({
      activeIndex: event.detail.index
    })
  },
  uploadImage() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        this.setData({
          upImageList: [...this.data.upImageList, ...res.tempFilePaths]
        })
      }
    })
  },
  deleteImage(event) {
    console.log(event);
    const upImageList = this.data.upImageList;
    upImageList.splice(event.detail.index, 1);
    this.setData({
      upImageList
    })
  },
  showBigImage(event) {
    const {index} = event.currentTarget.dataset;
    wx.previewImage({
      urls: this.data.upImageList,
      current: this.data.upImageList[index]
    })
  },
  inputChange(event) {
    this.setData({
      textValue: event.detail.value
    })
  },
  submit() {
    const textValue = this.data.textValue;
    const upImageList = this.data.upImageList;
    if(!textValue.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: "none",
        duration: 1500
      })
      return;
    }

    if(upImageList.length > 0) {  // 上传了图片
      upImageList.forEach((item, index) => {
        wx.uploadFile({
          url: 'https://images.ac.cn/Home/Index/UploadAction/',
          filePath: item,
          name: 'file',
          success: (res) => {
            console.log(res);
          }
        })
      })
    }else {

    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})