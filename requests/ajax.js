const baseURL = 'http://rap2api.taobao.org/app/mock/161958'
class Ajax{
  get(url, data={}) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...',
        mask: true,
      })
      wx.request({
        url: baseURL + url,
        data,
        method: 'GET',
        dataType: 'json',
        success: function(res) {
          wx.hideLoading()
          resolve(res)
        },
        fail: function(res) {
          wx.showToast({
            title: '加载失败',
            icon: 'none',
          })
          reject(res)
        },
      })
    })
  }
  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...',
        mask: true,
      })
      wx.request({
        url: baseURL + url,
        data,
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          wx.hideLoading()
          resolve(res)
        },
        fail: function (res) {
          wx.showToast({
            title: '加载失败',
            icon: 'none',
          })
          reject(res)
        },
      })
    })
  }
}

export default new Ajax()