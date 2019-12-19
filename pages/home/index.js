// pages/home/home.js
import {getSwiperList, getCateList, getFloorList} from "../../api/home.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    cateList: [],
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  getSwiperList() {
    getSwiperList().then((res) => {
      console.log(res);
      this.setData({
        swiperList: res.data.message
      })
      console.log(this.data.swiperList)
    })
  },
  getCateList() {
    getCateList().then((res) => {
      console.log(res);
      this.setData({
        cateList: res.data.message
      })
    })
  },
  getFloorList() {
    getFloorList().then((res) => {
      console.log(res);
      this.setData({
        floorList: res.data.message
      })
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