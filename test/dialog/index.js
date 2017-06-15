// test/dialog/index.js
import Dialog from '../../src/dialog/index.js';


const imgs = [
  'http://pic.qiantucdn.com/58pic/23/25/11/00M58PICdSy_1024.jpg!/watermark/url/L3dhdGVybWFyay12MS5wbmc=/align/north/repeat/true',
  'http://cdn.qingsongchou.com/index2.0-new/banner/h5-1-banner4.jpg',
  'http://i3.sinaimg.cn/dy/w/p/2014-05-06/U1010P1T1D30070988F21DT20140506153959.jpg'
];

const dialog0 = {
  title: '第一个弹窗',
  footer: '我晓得了',
  content: imgs[0]
}

const dialog1 = {
  title: '第2个弹窗',
  footer: '我晓得了',
  content: imgs[1]
}

const dialog2 = {
  title: '第THREE个弹窗',
  footer: '我晓得了',
  content: imgs[2]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialog0: dialog0,
    dialog1: dialog1,
    dialog2: dialog2,
    dialog: Dialog.data('dialog', dialog0, false)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Dialog.init(this);
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
