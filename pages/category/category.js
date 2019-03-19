// pages/category/category.js
import ajax from '../../requests/ajax.js'
Page({
  // 切换分类
  handleChangeCategoryItem(e) {
    this.setData({
      selectedID: e.currentTarget.dataset.id
    }, () => {
      this.getItemContent()
    })
  },

  // 请求分类内容
  getItemContent() {
    ajax.get('/api/v1/categoryContent', {itemID: this.data.selectedID})
      .then(res => {
        if(res.data.code === 200) {
          this.setData({
            itemContent: res.data.data.contentData
          })
        } else{
          // 错误处理
        }
      })
      .catch(error => console.log(error))
  },
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    selectedID: '',
    itemContent: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求分类列表数据
    ajax.get('/api/v1/categoryList')
      .then(res => {
        if (res.data.code === 200) {
          this.setData({
            categoryList: res.data.data.categoryList,
            selectedID: res.data.data.categoryList[0].id
          })
        } else{
          // 错误处理
        }
      })
      .catch(error => console.log(error))

      this.getItemContent()
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