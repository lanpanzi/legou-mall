import ajax from '../../requests/ajax.js'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */

  
  data: {
    imgUrls: [],
    dailySelectionList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图数据
    ajax.get('/api/v1/homeSwiper')
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            imgUrls: res.data.data.swiperImg
          })
        } else {
          // 错误处理
        }
      })
      .catch(error => console.log(error))

    // 请求导航数据
    ajax.get('/api/v1/navData')
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            navs: res.data.data.navs
          })
        } else {
          // 错误处理
        }
      })
      .catch(error => console.log(error))

    // 请求每日精选列表数据
    ajax.get('/api/v1/dailySelection')
        .then(res => {
          if (res.data.code === 200) {
            this.setData({
              dailySelectionList: res.data.data.list
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
    setTimeout(function () {
      wx.stopPullDownRefresh() 
    }, 1500)
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