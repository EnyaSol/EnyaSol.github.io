function toggle(elem) {
  console.log("Toggling active")
   elem.classList.toggle("active");
}

var burger = document.getElementById('hamburger');

document.addEventListener('click', toggle(burger));
