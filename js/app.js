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
 const sections = document.querySelectorAll("section");
 window.addEventListener("scroll", () => {
   for (let i = 0; i < sections.length; i = i + 1) {
     const areaBounds = sections[i].getBoundingClientRect();
     if (areaBounds.top < window.innerHeight) {
       sections[i].classList.add("your-active-class");
       const aTag = document.querySelectorAll("a");
       for (let j = 0; j < aTag.length; j = j + 1) {
         if (aTag[j].innerText === sections[i].getAttribute("id")) {
           aTag[j].classList.add("menu__link-active");
         } else {
           aTag[j].classList.remove("menu__link-active");
         }
       }
     } else {
       sections[i].classList.remove("your-active-class");
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


