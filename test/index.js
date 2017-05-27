// test/index.js
import Mupload from '../src/mupload/index.js';

Page({

  data: {
    m1: Mupload.data('m1')
  },

  onLoad: function (options) {
    Mupload.init(this);
  },

  submit() {
    console.log(this.data.p1.x);
  }
})