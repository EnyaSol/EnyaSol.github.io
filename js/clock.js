

function _updateClock(){
  var span = document.getElementById('clock');

  var date = new Date();
  var s = date.getSeconds();
  var m = date.getMinutes();
  var h = date.getHours();

  if(m < 10) m = '0' + m;
  if(s < 10) s = '0' + s;
  if(h > 12) h = h - 12;
  if(h == 0) h = '12';
  span.textContent = h + ":" + m + ":" + s;
}


document.addEventListener('DOMContentLoaded', _updateClock())
setInterval(_updateClock, 1000);
