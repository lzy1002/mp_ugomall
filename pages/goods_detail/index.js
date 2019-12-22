// pages/goods_detail/index.js
import {getGoodsDetailData} from "../../api/goods_detail.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId: "",
    goodsDetail: {},
    windowWidth: 0,
    imageHeightList: [],
    maxHeight: 0
  },
  getGoodsDetailData(goodsId) {
    getGoodsDetailData(goodsId).then((res) => {
      console.log(res);
      this.setData({
        goodsDetail: {
          pics: res.data.message.pics,
          goods_id: res.data.message.goods_id,
          goods_name: res.data.message.goods_name,
          goods_price: res.data.message.goods_price,
          goods_introduce: res.data.message.goods_introduce.replace("/\.webp/g", ".jpg"),
          goods_small_logo: res.data.message.goods_small_logo
        }
      })
      console.log(this.data.goodsDetail.pics);
    })
  },
  imageLoad(event) {
    console.log(event);
    const ratio = event.detail.width / event.detail.height;
    const height = (this.data.windowWidth / 1.5) / ratio;
    this.data.imageHeightList.push(height);
    if (this.data.imageHeightList.length !== this.data.goodsDetail.pics.length) return;
    this.data.imageHeightList.forEach((item) => {
      if (this.data.maxHeight >= item) return;
      this.setData({
        maxHeight: item
      })
    })
    console.log(this.data.maxHeight);
  },
  showBigImage(event) {
    console.log(event);
    const urls = this.data.goodsDetail.pics.map(item => item.pics_big_url);
    const current = event.currentTarget.dataset.url;
    wx.previewImage({
      urls,
      current
    })
  },
  goCart() {
    const cart = wx.getStorageSync("cart") || [];
    const index = cart.findIndex(item => item.goods_id === this.data.goodsDetail.goods_id);
    if(index === -1){
      const goodsDetail = this.data.goodsDetail;
      goodsDetail.num = 1;
      goodsDetail.checked = true;
      cart.push(goodsDetail);
      wx.showToast({
        title: '添加到购物车',
        icon: "success",
        mask: true
      })
    }else {
      cart[index].num ++;
      wx.showToast({
        title: '商品数量+1',
        icon: "success",
        mask: true
      })
    }
    wx.setStorageSync("cart", cart);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          windowWidth: res.windowWidth
        })
      },
    })
    
    console.log(options);
    this.data.goodsId = options.goodsId;
    this.getGoodsDetailData(this.data.goodsId);
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