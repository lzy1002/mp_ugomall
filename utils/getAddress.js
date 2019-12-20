export function getSetting() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: resolve
    })
  })
}

export function chooseAddress() {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: resolve
    })
  })
}

export function openSetting() {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: resolve
    })
  })
}
