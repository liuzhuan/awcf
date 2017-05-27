function init(page) {
    page.tap = tap;
}

/**
 * 返回组件初始化属性值
 * @param {String} id 组件id，同组件在 data 中的键值相同，必填项
 * @param {Number} x x 坐标值 
 * @param {Number} y y 坐标值
 */
function data(id, x = 0, y = 0) {
    return {
        id: id,
        x: x,
        y: y,
        json: [
            {
                name: 'liu zhuan',
                age: 32
            },
            {
                name: 'liu zhuan2',
                age: 34
            }
        ]
    }
}

/**
 * 组件的自定义函数
 * @param {Event} e 
 */
function tap(e) {
    const id = e.currentTarget.dataset.id;
    const data = this.data[id];
    console.log('tap ', id, data);
    data.x++;

    data.json = [
        { name: 'new', age:0 },
        { name: 'new2', age:1 }
    ];

    this.setData({
        [id]: data
    });


}

export default {
    init,
    data
}