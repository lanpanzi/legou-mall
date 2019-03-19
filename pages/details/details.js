// pages/details/details.js
import ajax from '../../requests/ajax.js'

const app = getApp()
Page({
  // 处理加入购物车
  handleAddToCart(e) {
    const isInCart = app.cart.some(item => item.id === e.currentTarget.dataset.id)
    if (isInCart) {
      app.cart.map(item => {
        if (item.id === e.currentTarget.dataset.id) {
          item.count += 1
        }
        return item
      })
    } else{
      app.cart.push({
        ...e.currentTarget.dataset,
        count: 1
      })
    }
    wx.setStorageSync('cart', app.cart)
    app.handleCartTotal()
    this.setData({
      productTotal: app.cartTotal
    })

    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 1500,
    })
  },
  // 跳转到购物车
  handleToCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    productInfo: {},
    productTotal: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.get('/api/v1/productInfo', {productID: options.id})
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            productInfo: res.data.productInfo
          })
        } else{
          // 错误处理
        }
      })
      .catch(error => console.log(error))

    app.handleCartTotal()
    this.setData({
      productTotal: app.cartTotal
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