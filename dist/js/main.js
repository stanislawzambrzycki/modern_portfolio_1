// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const contactBtn = document.querySelector(".contact-btn");

const navItems = document.querySelectorAll(".nav-item");
const contactItems = document.querySelectorAll(".contact-item");

// Set Initial State of Menu
let showMenu = false;

// Set Initial State of Contact
let showContact = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Reset Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    contactItems.forEach((item) => item.classList.remove("display"));

    // Reset Menu State
    showMenu = false;

    // Reset Contact State
    showContact = false;
  }
}

// Toggle Contact Items
contactBtn.addEventListener("click", toggleContactItems);

function toggleContactItems(e) {
  if (!showContact) {
    contactItems.forEach((item) => item.classList.add("display"));
    e.preventDefault();
    // Reset Contact State
    showContact = true;
  } else {
    contactItems.forEach((item) => item.classList.remove("display"));
    e.preventDefault();
    // Reset Contact State
    showContact = false;
  }
}

// Maybe Add Hover Effect On Menu?
