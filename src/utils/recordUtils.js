function startRecord(callback) {
  wx.startRecord({
    success: function(res) {
      const tempFilePath = res.tempFilePath;
      callback && callback(null, tempFilePath);
    },
    fail: function(res) {
      callback && callback(res);
    }
  });
}

function stopRecord() {
  wx.stopRecord();
}

module.exports = {
  startRecord,
  stopRecord
}
