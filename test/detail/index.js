Page({
  data: {
    date: '',
    title: '',
    description: ''
  },

  onLoad,
  onShareAppMessage
})

function onShareAppMessage(options) {
  const {title} = this.data;
  const path = ''
  return {
    title
  }
}

function onLoad(options) {
  const {date, title, description} = options;
  console.log(date, title, description);
  this.setData({
    date,
    title,
    description
  });
}

function onBack() {
  wx.navigateBack();
}
