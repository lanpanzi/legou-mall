// pages/search/search.js
import ajax from '../../requests/ajax.js'
Page({
  // 获取搜索框输入值
  handleKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 清空输入框值
  handleClearInputValue() {
    this.setData({
      inputValue: ''
    })
  },
  // 点击搜索的事件处理程序
  handleSearch(e) {
    const localSearch = this.data.localSearch.slice()
    const isInLocal = localSearch.some(item => item.keyword === this.data.inputValue)

    if (isInLocal) {
      localSearch.map(item => {
        if (item.keyword === this.data.inputValue ) {
          item.times += 1
        }
      })
    } else{
      localSearch.push({
        keyword: this.data.inputValue,
        times: 1
      })
    }
    wx.navigateTo({
      url: '/pages/productsList/productsList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    this.handleClearInputValue()
    wx.setStorageSync("search", localSearch)
    this.setData({
      localSearch: wx.getStorageSync('search')
    })
  },
  // 清空搜索记录
  handleClearLocalSearch() {
    wx.removeStorageSync('search')
    this.setData({
      localSearch: []
    })
  },
  // 处理搜索框值
  handleInputValue(e) {
    this.setData({
      inputValue: e.currentTarget.dataset.name
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    promotionList: [],
    categoryList: [],
    inputValue: '',
    localSearch: wx.getStorageSync('search') || []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求热门搜索列表数据
    ajax.post('/api/v1/promotion')
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            promotionList: res.data.data.promotionList
          })
        } else{
          // 错误处理
        }
      })
      .catch(error => console.log(error))

    // 请求常用分类列表数据
    ajax.post('/api/v1/searchCategory')
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            categoryList: res.data.data.categoryList
          })
        } else {
          // 错误处理
        }
      })
      .catch(error => console.log(error)) 
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