// test/auth/index.js
const utils = require('../../src/utils/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: null
  },

  onGetAuth: function() {
    utils.auth.getSetting((error, setting) => {
      this.updateAuth(setting);
    });
  },

  onOpenAuth: function() {
    utils.auth.openSetting((error, setting) => {
      console.log(setting);
      this.updateAuth(setting);
    });
  },

  updateAuth: function(setting) {
    this.setData({
      setting: setting
    });
  }
})
