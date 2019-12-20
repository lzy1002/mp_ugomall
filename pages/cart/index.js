// pages/cart/cart.js
import {getSetting, chooseAddress, openSetting} from "../../utils/getAddress.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {}
  },
  getAddress() {  // 获取用户地址信息
    getSetting().then(res1 => {
      const scopeAddress = res1.authSetting["scope.address"];
      if(scopeAddress === false) {
        openSetting().then(() => {
          chooseAddress().then(res2 => {
            console.log(res2);
            wx.setStorageSync("address", res2);
          })
        })
      }
      chooseAddress().then(res3 => {
        console.log(res3);
        wx.setStorageSync("address", res3);
      })
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
    const address = wx.getStorageSync("address");
    if(address){
      this.setData({
        address
      })
    }
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