// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["商品收藏", "品牌收藏", "店铺收藏", "浏览足迹"],
    activeIndex: 0,
    listData: []
  },
  tabChange(event) {
    console.log(event);
    this.setData({
      activeIndex: event.detail.index
    })
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
    this.setData({
      listData: wx.getStorageSync("collections")
    })
    console.log(wx.getStorageSync("collections"));
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