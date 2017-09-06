Page({

  data: {
    amount: '',
    title: '',
    description: ''
  },

  input,
  formSubmit
});

function input(e) {
  const {id} = e.currentTarget;
  const {value} = e.detail;
  this.data[id] = value;
}

function formSubmit() {
  console.info(this.data);
  wx.navigateTo({
    url: '/test/msg-success/index'
  });
}
