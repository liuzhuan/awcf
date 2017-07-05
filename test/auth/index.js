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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
