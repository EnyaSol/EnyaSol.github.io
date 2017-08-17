function toggle() {
  isNavItemsDisplayed = !isNavItemsDisplayed;

  $(sidebar).toggleClass('expand')
  _updateNavItems(isNavItemsDisplayed ? 500 : 1500);
}

function _updateNavItems(time){
  var incrVal = ($(sidebar).hasClass('expand')) ? 600 : -100;
  for(var i = 0; i < navItems.length; i++){
    $(navItems[i]).stop(true,true)
    $(navItems[i]).fadeToggle(time + (incrVal * i))
    // isNavItemsDisplayed ? $(navItems[i]).fadeToggle(2000) : $(navItems[i]).fadeOut(300)
  }
}

var introHeader1 = $('#ps-intro-h1');
var introHeader2 = $('#ps-intro-h3');

var burger = document.getElementById('ps-ham-btn');
var sidebar = document.getElementById('ps-side-nav');
var navItems = document.getElementsByClassName("ps-sidebar-item");
var isNavItemsDisplayed = false;


$(introHeader1).fadeIn(1500);
setTimeout(function(){
  $(introHeader2).fadeIn(1500);
}, 1000);

burger.addEventListener('click', toggle);
window.onload = function(){
  toggle();
  toggle();
}
