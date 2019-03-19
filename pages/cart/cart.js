// pages/cart/cart.js
const app = getApp()
Page({
  // 跳转到首页
  handleToHome() {
    wx.switchTab({
      url: '/pages/home/home',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 处理单选事件
  handleChecked(e) {
    const productInfo = this.data.productInfo.slice()
    productInfo.map(item => {
      if (item.id === e.currentTarget.dataset.id) {
        item.checked = !item.checked
      }
      return item
    })
    this.setData({
      productInfo
    }, () => {
      this.handleSelectedCount()
      this.handleSelectedPrice()
      let selectedDataCount = productInfo.reduce((result, item) => {
        if (item.checked) {
          result += 1
        }
        return result
      }, 0)
      console.log(selectedDataCount)
      if (selectedDataCount === productInfo.length) {
        this.setData({
          allChecked: true
        })
      } else{
        this.setData({
          allChecked: false
        })
      }
    })
  },
  // 处理全选事件
  handleAllChecked() {
    this.setData({
      allChecked: !this.data.allChecked
    }, () => {
      if (this.data.allChecked) {
        this.setData({
          productInfo: this.data.productInfo.map(item => {
            item.checked = true
            return item
          })
        })
      } else{
        this.setData({
          productInfo: this.data.productInfo.map(item => {
            item.checked = false
            return item
          })
        })
      }
      this.handleSelectedCount()
      this.handleSelectedPrice()
    })
  },
  // 统计选中商品的价格
  handleSelectedPrice() {
    this.setData({
      selectedPrice: this.data.productInfo.reduce((result ,item) => {
        if (item.checked) {
          result += item.count * item.price
        }
        return result
      }, 0)
    })
  },
  // 统计选中商品的件数
  handleSelectedCount() {
    const productInfo = this.data.productInfo.slice()
    const selectedTotal = productInfo.reduce((result, item) => {
      if (item.checked) {
        result += item.count 
      }
      return result
    }, 0)
    this.setData({
      selectedTotal
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    productInfo: [],
    selectedTotal: 0,
    allChecked: true,
    selectedPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productInfo: app.cart.map(item => {
        item.checked = true
        return item
      })
    })

    this.handleSelectedCount()
    this.handleSelectedPrice()
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