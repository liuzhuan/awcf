import {navTo} from '../utils/index.js';

Page({

  data: {
    date: '',
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
  const url = '/test/detail/index';
  const {date, title, description} = this.data;
  const params = {
    date,
    title,
    description
  }
  navTo(url, params);
}
