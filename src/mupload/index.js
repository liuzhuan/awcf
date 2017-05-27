function init(page) {
  page.onclose = onclose;
  page.onpreview = onpreview;
  page.onbrowse = onbrowse;
}

function onbrowse(e) {
  const {id} = e.currentTarget.dataset;
  const uploadParams = this.data[id];
  const {limit, imgs} = uploadParams;
  const left = limit - imgs.length;
  console.log(limit, left);
  upload(left, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    imgs.push(...data);
    console.log(imgs, 'imgs', uploadParams, uploadParams);
    this.setData({
      [id]: uploadParams
    });
  });
}

function onupload(e) {

}

function onclose(e) {
  const {id, index} = e.currentTarget.dataset;
  const data = this.data[id];
  const imgs = data.imgs;
  imgs.splice(index, 1);
  this.setData({
    [id]: data
  });
}

function onpreview(e) {
  console.log('preview', e);
  const {id, index} = e.currentTarget.dataset;
  const imgs = this.data[id].imgs;
  const current = imgs[index];
  console.log(current, imgs);
}

function upload(limit, callback) {
  wx.chooseImage({
    count: limit,
    success: function(res){
      const tempFilePaths = res.tempFilePaths;
      callback && callback(null, tempFilePaths);
    },
    fail: function(res){
      callback && callback(res, null);
    }
  })
}

/**
 *
 * @param {String} id 组件id，必填
 * @param {Number} limit 最多上传的图片数量
 * @param {Array} imgs 预先显示的图片
 */
function data(id, limit=9, imgs=[]) {
    return {
        id: id,
        limit: limit,
        imgs: imgs
    }
}

export default {
    init,
    data
}
