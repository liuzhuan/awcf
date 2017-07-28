Page({
  data: {
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0
  },

  formSubmit(e) {
    const {formId, value} = e.detail;
    console.log(formId, value);
  },

  formReset(e) {
    console.log(e, 'RESET');
  },

  bindCountryCodeChange(e){
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryCodeIndex: e.detail.value
    });
  }
});
