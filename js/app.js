/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionElem = document.querySelectorAll("section");

for (let i = 0; i < sectionElem.length; i = i + 1) {
  const idElem = document.getElementById("navbar__list");

  const sectionValue = sectionElem[i].id;

  const sElem = document.createElement("li");
  // create the anchor tag
  const aElem = document.createElement("a");
  aElem.classList.add("menu__link");
  aElem.innerText = sectionValue;
  sElem.appendChild(aElem);

  aElem.addEventListener("click", () => {
    sectionElem[i].scrollIntoView({ behavior: "smooth" });
  });

  //const navBarMenu = document.getElementById('aElem');
  // create a click event listener on the anchor tag
  // on click, scroll sectionElem[i] into view

  idElem.appendChild(sElem);
}

// Add class 'active' to section when near top of viewport

// Add class 'active' to section when near top of viewport
const section = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  for (let i = 0; i < section.length; i = i + 1) {
    const areaBounds = section[i].getBoundingClientRect();
    if (areaBounds.top > 0 && areaBounds.bottom < window.innerHeight) {
      section[i].classList.add("your-active-class");
    } else {
      section[i].classList.remove("your-active-class");
    }
  }
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


