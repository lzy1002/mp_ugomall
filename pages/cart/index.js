// pages/cart/cart.js
import {
  getSetting,
  chooseAddress,
  openSetting
} from "../../utils/getAddress.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cartList: [],
    allChecked: true,
    totalPrice: 0,
    totalNum: 0
  },
  getAddress() { // 获取用户地址信息
    getSetting().then(res1 => {
      const scopeAddress = res1.authSetting["scope.address"];
      if (scopeAddress === false) {
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
  allCheckboxChange() {
    const cartList = this.data.cartList;
    cartList.forEach(item => {
      item.checked = !this.data.allChecked;
    });
    this.setData({
      cartList
    })
    this.isAllChecked();

    wx.setStorageSync("cart", cartList);
    this.mathTotal();
  },
  checkboxChange(event) {
    console.log(event);
    const index = event.detail.index;
    const activeCartData = this.data.cartList[index];
    activeCartData.checked = !activeCartData.checked;
    console.log(activeCartData);
    const activeTitle = `cartList[${index}]`
    this.setData({
      activeTitle: activeCartData
    })

    wx.setStorageSync("cart", this.data.cartList);

    this.mathTotal();

    this.isAllChecked();
  },
  changeNum(event) {
    const index = event.detail.index;
    const math = event.detail.math;
    const cartList = this.data.cartList;
    const activeCartData = cartList[index];
    console.log(math, activeCartData.num);
    if(math === -1 && activeCartData.num === 1) {
      // cartList.splice(index, 1);
      wx.showModal({
        title: '提示',
        content: '确定删除该商品吗?',
        success: (res) => {
          console.log(res);
          if(res.confirm){
            cartList.splice(index, 1);
            this.setData({
              cartList
            })
            wx.setStorageSync("cart", this.data.cartList);
            this.mathTotal();
            this.isAllChecked();
          }
        }
      })
    }else {
      activeCartData.num += math;
      this.setData({
        cartList
      })
      wx.setStorageSync("cart", this.data.cartList);
      this.mathTotal();
    }
  },
  mathTotal() {
    let totalPrice = 0;
    let totalNum = 0;
    this.data.cartList.forEach(item => {
      if(!item.checked) return;
      totalPrice += item.goods_price * item.num;
      totalNum += item.num;
    })
    this.setData({
      totalPrice,
      totalNum
    })
  },
  isAllChecked() {
    const allChecked = this.data.cartList.length ? this.data.cartList.every(item => item.checked) : false;
    this.setData({
      allChecked
    })
  },
  pay() {
    if (this.data.totalNum <= 0) {
      wx.showToast({
        title: '请添加需要购买的商品',
        icon: "none"
      })
      return;
    }

    if(!this.data.address.userName) {
      wx.showToast({
        title: '请选择收货地址',
        icon: "none"
      })
      return;
    }

    wx.navigateTo({
      url: `/pages/pay/index?totalPrice=${this.data.totalPrice}&totalNum=${this.data.totalNum}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const address = wx.getStorageSync("address");
    if (address) {
      this.setData({
        address
      })
    }

    const cartList = wx.getStorageSync("cart") || [];
    console.log(cartList);
    this.setData({
      cartList
    })

    const allChecked = cartList.length ? cartList.every(item => item.checked) : false;
    this.setData({
      allChecked
    })

    this.mathTotal();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})