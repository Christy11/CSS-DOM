/**
 * Created by Christy on 2017/3/16.
 */
function prepareSlideshow() {
  // 确保浏览器支持DOM方法
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  // 确保元素存在
  if (!document.getElementById("linklist")) return false;
  if (!document.getElementById("preview")) return false;
  // 为图片应用样式
  var preview = document.getElementById("preview");
  preview.style.position = "absolute";
  // 取得列表中的所有链接
  var list = document.getElementById("linklist");
  var links = list.getElementsByTagName("a");
  // 为onmouseover事件添加动画效果
  links[0].onmouseover = function () {
    moveElement("preview",-215,0,10);
  };
  links[1].onmouseover = function () {
    moveElement("preview", -430, 0, 10);
  };
  links[2].onmouseover = function () {
    moveElement("preview", -645, 0, 10);
  };
}
addLoadEvent(prepareSlideshow);