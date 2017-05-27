// test/index.js
import Point from '../src/point/index.js';

Page({

  data: {
    p1: Point.data('p1', 42, 24),
    p2: Point.data('p2', 32, 270),
    p3: Point.data('p3')
  },

  onLoad: function (options) {
    Point.init(this);
  },

  submit() {
    
  }
})