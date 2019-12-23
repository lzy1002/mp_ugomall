// pages/search/search.js
import {getSearchData} from "../../api/search.js";
import {deBounce} from "../../utils/debounce.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: [],
    value: "",
    deBounce: ""
  },
  inputChange(event) {
    const value = event.detail.value;
    this.setData({
      value: value
    })
    if(!value.trim()) {
      return;
    };
    this.data.deBounce(value);
  },
  getSearchData(query) {
    getSearchData(query).then(res => {
      console.log(res);
      this.setData({
        searchData: res.data.message
      })
      if(!this.data.value.trim()) {
        this.setData({
          searchData: []
        })
      };
    })
  },
  cancel() {
    this.setData({
      searchData: [],
      value: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      deBounce: deBounce(this.getSearchData, 1000)
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