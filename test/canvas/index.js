let ctx;

Page({
  data: {
    hidden: true
  },

  onLoad() { console.log('on load'); },
  onShow() { console.log('on show'); },
  onReady() {
    ctx = wx.createCanvasContext('firstCanvas');
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
  },

  start(e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    });

    ctx.moveTo(e.touches[0].x, e.touches[0].y);
  },
  move(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })

    ctx.lineTo(e.touches[0].x, e.touches[0].y);
    ctx.stroke();
    ctx.draw();
  },
  end(e) {
    this.setData({
      hidden: true
    });
  }
})
