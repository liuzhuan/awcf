const DEFAULT_TITLE = '上传说明';
const DEFAULT_FOOTER = '我知道了';


function init(page) {
  page._closeDialog = _closeDialog;
  page.openDialog = openDialog;
}

function data(id, params = {}, show = false) {
  return {
    id: id,
    title: params.title || DEFAULT_TITLE,
    content: params.content,
    footer: params.footer || DEFAULT_FOOTER,
    show: show
  }
}

function _closeDialog(e) {
  const {id} = e.currentTarget.dataset;
  this.setData({
    [`${id}.show`]: false
  });
}

function openDialog(e) {
  const {target, content, title, footer} = e.currentTarget.dataset;

  this.setData({
    [`${target}.show`]: true,
    [`${target}.content`]: content,
    [`${target}.title`]: title || DEFAULT_TITLE,
    [`${target}.footer`]: footer || DEFAULT_FOOTER
  });
}

export default {
  data,
  init
}
