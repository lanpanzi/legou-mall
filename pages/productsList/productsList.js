// pages/productsList/productsList.js
import ajax from '../../requests/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取搜索框值对应的数据
    ajax.get('/api/v1/searchData', { inputValue: this.data.inputValue })
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            searchData: res.data.data.searchData
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