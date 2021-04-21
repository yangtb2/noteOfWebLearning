import "./style.css";

/*该方法传入一个可迭代的对象和一个回调函数,
 *每次迭代对象中的元素并执行回调函数
 *根据迭代的进度设置进度条的宽度
 *@method loadingBar
 *@param {iterable}items
 *@param {callback}callback,可接收一个当前迭代到的元素
 *@param {DOMElement}element,作为进度条显示的DOM元素
 *@return {void}
 */
async function loadingBar(items, element, callback) {
  for (let i = 0; i < items.length; i++) {
    await callback(items[i]);
    let progress = ((i + 1) / items.length) * 100;
    element.style.width = progress + "%";
    element.innerHTML = Math.round(progress) + "%";
  }
}

loadingBar([1, 2, 3, 4, 5], loading, (item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve();
    }, 500 + Math.random() * 500);
  });
});
