// pages/auth/index.js
import {getToken} from "../../api/auth.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getuserinfo(event) {
    console.log(event);
    const {encryptedData, rawData, iv, signature} = event.detail;
    wx.login({
      timeout: 10000,
      success: (res) => {
        console.log(res);
        const code = res.code;
        const option = {
          encryptedData,
          rawData,
          iv,
          signature,
          code
        }
        getToken(option).then(res => {
          console.log(res);
          //由于当前账号无法使用支付功能 所以返回的token是null
        })
      }
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