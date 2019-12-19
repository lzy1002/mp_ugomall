// pages/category/category.js
import {getCategoryList} from "../../api/category.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    leftMenus: [],
    rightContents: [],
    leftActiveIndex: 0,
    rightScrollTop: 0
  },
  getCategoryList() {
    getCategoryList().then((res) => {
      console.log(res);
      this.data.categoryList = res.data.message;
      wx.setStorageSync("cates", {time: Date.now(), data: this.data.categoryList});

      const leftMenus = this.data.categoryList.map(item => item.cat_name);
      const rightContents = this.data.categoryList.map(item => item.children);

      this.setData({
        leftMenus,
        rightContents
      })
      console.log(rightContents);
      console.log(this.data.rightContents[this.data.leftActiveIndex])
    })
  },
  titleClick(event) {
    this.setData({
      leftActiveIndex: event.currentTarget.dataset.index,
      rightScrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cates = wx.getStorageSync("cates");
    if(!cates){
      this.getCategoryList();
    }else {
      if(Date.now() - cates.time > 1000 * 60 * 10) {
        this.getCategoryList();
      }else {
        this.data.categoryList = cates.data;

        const leftMenus = this.data.categoryList.map(item => item.cat_name);
        const rightContents = this.data.categoryList.map(item => item.children);

        this.setData({
          leftMenus,
          rightContents
        })
      }
    }
    
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