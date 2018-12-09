
const host = 'http://localhost:7000/'

function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      method: method,
      data: data,
      header: {// 设置请求的 header
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err);
      },
      complete: function () {
        // console.log('request complete');
      }
    })
  })
}

function get (url) {
  return request(url, 'GET')
}
function post (url, data) {
  return request(url, 'POST', data)
}
function put (url, data) {
  return request(url, 'PUT', data)
}
function del (url, data) {
  return request(url, 'DELETE', data)
}

export default {
  get, post, put, delete: del
}

