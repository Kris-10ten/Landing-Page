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
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");
const navbarSections = ["Section 1", "Section 2", "Section 3", "Section 4"];


// build the nav
navbarSections.forEach((navbarSection, i) => { // loop through each navbar section and make anchor
  const anchor = document.createElement("a");
  anchor.innerText = navbarSection; 
  anchor.classList.add("navbar__anchor"); 
  anchor.setAttribute("id", `menu-${i + 1}`); 
  anchor.href = `#section${i + 1}`; 
  navbarList.appendChild(anchor); 

  const list = document.createElement("li"); // create list item and do the same thing
  list.classList.add("navbar__list__item");
  list.appendChild(anchor);
  list.setAttribute("id", `${i + 1}`);
  navbarList.appendChild(list); // add list item to list
});

// navbar smooth scroll to section when clicked
document.addEventListener("click", function (event) { 
  const active = document.querySelector(".menu-list.active");
  if (active) active.classList.remove("active");
  if (event.target.classList.contains("menu-list")) {
    event.target.classList.add("active");
    window.location.href = "#section" + event.target.id;
  }
});


// add class 'active' to section when near top of viewport
function viewport(sections) {
    const { top } = sections.getBoundingClientRect();
    sections.classList.toggle('your-active-class', top >= 0);
  }
  
  function activeClass() {
    sections.forEach(viewport);
  }
  
  document.addEventListener('scroll', activeClass);
  




