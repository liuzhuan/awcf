function getSetting(callback) {
  wx.getSetting({
    success(res) {
      callback && callback(null, res.authSetting);
    }
  });
}

function openSetting(callback) {
  wx.openSetting({
    success(res) {
      callback && callback(null, res.authSetting);
    }
  });
}

module.exports = {
  getSetting,
  openSetting
}
