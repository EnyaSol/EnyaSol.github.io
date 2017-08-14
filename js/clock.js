var span = document.getElementById('clock');

function _updateClock(){
  var date = new Date();
  var s = date.getSeconds();
  var m = date.getMinutes();
  var h = date.getHours();
  if(m < 10) m = '0' + m;
  if(s < 10) s = '0' + s;
  span.textContent = h + ":" + m + ":" + s;
  setInterval(_updateClock, 1000);
}
document.addEventListener('DOMContentLoaded', _updateClock())
