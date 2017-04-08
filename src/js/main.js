var menuBtn = document.querySelector('.menu-btn');
var body = document.querySelector('body');
var navLinks = document.querySelectorAll('.nav-link');
var showNav = false;
// applies menu overlay on click of hamburger menu
respondToNavClicks(menuBtn);

// attempting to remove overlay on click of nav item
navLinks.forEach(respondToNavClicks);

function respondToNavClicks (node) {
  node.addEventListener('click', function() {
    showNav = !showNav;
    body.classList.toggle('nav-shown', showNav);
  });
}
