const BASEURL = "https://api.zbztb.cn/api/public/v1";

export function request(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + option.url,
      method: option.method || "get",
      data: option.data || {},
      header: option.header || {},
      success: resolve,
      fail: reject
    })
  })
}
