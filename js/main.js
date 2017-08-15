function toggle() {
  isNavItemsDisplayed = !isNavItemsDisplayed;

  $(sidebar).toggleClass('expand')
  _updateNavItems(isNavItemsDisplayed ? 500 : 1500);
}

function _updateNavItems(time){
  for(var i = 0; i < navItems.length; i++){
    $(navItems[i]).stop(true,true)
    $(navItems[i]).fadeToggle(time)
    // isNavItemsDisplayed ? $(navItems[i]).fadeToggle(2000) : $(navItems[i]).fadeOut(300)
  }
}

var burger = document.getElementById('ps-ham-btn');
var sidebar = document.getElementById('ps-side-nav');
var navItems = document.getElementsByClassName("ps-sidebar-item");
var isNavItemsDisplayed = false;
burger.addEventListener('click', toggle);
toggle();
toggle();
