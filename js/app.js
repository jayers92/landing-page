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
const sectionElem = document.querySelectorAll('section');

for (let i = 0; i < sectionElem; i = i + 1) {
    const idElem = document.getElementById(navbar_list);

    const sectionValue = sectionElem[i].id;
    
    const sElem = document.createElement('li');
    sElem.innerText = sectionValue;
    idElem.appendChild(sElem);
  }

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


