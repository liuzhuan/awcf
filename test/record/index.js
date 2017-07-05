import utils from '../../src/utils/index.js';

Page({
  onLoad: function(){},

  onRecordStart: function() {
    utils.record.startRecord((error, file) => {
      console.log(file, 'recorded');
    });
  },

  onRecordStop: function() {
    utils.record.stopRecord();
  }
})
