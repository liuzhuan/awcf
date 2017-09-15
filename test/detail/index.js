import {createPath, getCurrentPage} from '../../utils/index.js';

Page({
  data: {
    date: '',
    title: '',
    description: '',
    options: '',
    route: ''
  },

  onLoad,
  onShareAppMessage
})

function onShareAppMessage(options) {
  const {title, route, description, date} = this.data;
  const path = createPath(route, {title, date, description});
  return {
    title,
    path
  }
}

function onLoad(options) {
  const {date, title, description} = options;
  const process = decodeURIComponent;
  const route = getCurrentPage().route;
  this.setData({
    date: process(date),
    title: process(title),
    description: process(description),
    options,
    route
  });

  console.log(options);
}

function onBack() {
  wx.navigateBack();
}
