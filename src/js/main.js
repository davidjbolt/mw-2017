var menuBtn = document.querySelector('.menu-btn');
var body = document.querySelector('body');
var navLinks = document.querySelectorAll('.nav-link');
var showNav = false;
// applies menu overlay on click of hamburger menu
respondToNavClicks(menuBtn);

// remove overlay and jump to nav section
navLinks.forEach(respondToNavClicks);

function respondToNavClicks (node) {
  node.addEventListener('click', function() {
    showNav = !showNav;
    body.classList.toggle('nav-shown', showNav);
  });
}
