// pages/goods_list/goods_list.js
import {getGoodsList} from "../../api/goods_list.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    tabList: ["综合", "销量", "价格"],
    cid: "",
    activeIndex: 0,
    pagenum: 0,
    pagesize: 10,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.cid = options.cid;
    this.getGoodsList(this.data.cid, this.data.pagenum, this.data.pagesize);
  },
  getGoodsList (cid, pagenum, pagesize) {
    this.data.pagenum = this.data.pagenum + 1;
    if(this.data.total && this.data.goodsList.length >= this.data.total) return;
    wx.showLoading({
      title: '加载ing'
    })
    getGoodsList(cid, pagenum, pagesize).then((res) => {
      this.data.total = res.data.message.total;
      console.log(res);
      this.data.goodsList.push(...res.data.message.goods);
      this.setData({
        goodsList: this.data.goodsList
      })
      wx.hideLoading();
      wx.stopPullDownRefresh();
    })
  },
  tabChange(event) {
    console.log(event.detail.index);
    this.setData({
      activeIndex: event.detail.index
    })
    console.log(this.data.activeIndex);
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
    console.log(123)
    this.data.pagenum = 0;
    this.setData({
      goodsList: []
    })
    this.getGoodsList(this.data.cid, this.data.pagenum, this.data.pagesize);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getGoodsList(this.data.cid, this.data.pagenum, this.data.pagesize);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})