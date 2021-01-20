//MENU BUTTON UNCHECK
var homeMenu = document.getElementById("home_menu")
homeMenu.addEventListener("click", uncheck)
var aboutMenu = document.getElementById("about_menu")
aboutMenu.addEventListener("click", uncheck)
var contactMenu = document.getElementById("contact_menu")
contactMenu.addEventListener("click", uncheck)

function uncheck() {
  document.getElementById("circleMenu").checked = false;
}

//Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var scrollToAboutBtn = document.getElementById("about_button")
var scrollToContactBtn = document.getElementById("contact_button")
var aboutpage = document.getElementById("about_page")
var contactpage = document.getElementById("contact_page")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

function scrollToAbout() {
  aboutpage.scrollIntoView({
    block: "center",
    behavior: "smooth"
  })
}
scrollToAboutBtn.addEventListener("click", scrollToAbout)

function scrollToContact() {
  contactpage.scrollIntoView({
    block: "center",
    behavior: "smooth"
  })
}
scrollToContactBtn.addEventListener("click", scrollToContact)

/*---MENU BUTTONS---*/
var scrollToHomeMenu = document.getElementById("home_menu")
scrollToHomeMenu.addEventListener("click", scrollToTop)
var scrollToAboutMenu = document.getElementById("about_menu")
scrollToAboutMenu.addEventListener("click", scrollToAbout)
var scrollToContactMenu = document.getElementById("contact_menu")
scrollToContactMenu.addEventListener("click", scrollToContact)





gsap.registerPlugin(ScrollTrigger);

/*---PIN NAV---*/
ScrollTrigger.create({
  trigger: "label",
  start: "-20px top", 
  endTrigger: 'footer',
  end: "bottom top",
  pin: "#nav",
  pinSpacing: false,
  markers: true
});


/*---SLIDE FADE---*/

function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


/*---Mouse---*/