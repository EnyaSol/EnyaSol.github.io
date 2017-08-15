function toggle() {
  // if (sidebar.style.display == "none") {
  //     sidebar.style.display = "block";
  // } else {
  //     sidebar.style.display = "none";
  // }

  if(sidebar.style.width != "0px"){
    console.log("Sidebar is closing " + sidebar.style.width)
    sidebar.style.width = '0';
  }
  else{
    console.log("Sidebar is opening");
    sidebar.style.width = '10%';
  }
}

var burger = document.getElementById('ps-ham-btn');
var sidebar = document.getElementById('ps-side-nav')

burger.addEventListener('click', toggle);
