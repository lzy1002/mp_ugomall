// pages/pay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cartList: [],
    totalPrice: 0,
    totalNum: 0
  },
  pay() {
    const token = wx.getStorageSync("token");
    if(!token) {
      wx.navigateTo({
        url: '/pages/auth/index'
      })
      return;
    }
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const {totalPrice, totalNum} = options;
    this.setData({
      totalPrice,
      totalNum
    })
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
    const address = wx.getStorageSync("address");
    const cartList = wx.getStorageSync("cart").filter(item => item.checked);
    console.log(cartList);
    this.setData({
      address,
      cartList
    })
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