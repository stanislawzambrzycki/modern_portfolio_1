export default {
  name: "MenuComponent",
  data() {
    return {
      showMenu: false,
      showContact: false,
      main: true,
      about: false,
      contact: false,
      work: false,
    };
  },
  methods: {
    toggleMenu() {
      let menuBtn = document.querySelector(".menu-btn");
      let menu = document.querySelector(".menu");
      let menuNav = document.querySelector(".menu-nav");
      let menuBranding = document.querySelector(".menu-branding");

      let navItems = document.querySelectorAll(".nav-item");
      let contactItems = document.querySelectorAll(".contact-item");

      if (!this.showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        // Reset Menu State
        this.showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        contactItems.forEach((item) => item.classList.remove("display"));

        // Reset Menu State
        this.showMenu = false;

        // Reset Contact State
        this.showContact = false;
      }
    },
    toggleContactItems() {
      let contactItems = document.querySelectorAll(".contact-item");
      if (!this.showContact) {
        contactItems.forEach((item) => item.classList.add("display"));
        this.showContact = true;
      } else {
        contactItems.forEach((item) => item.classList.remove("display"));
        this.showContact = false;
      }
    },
    highlight(showMain, showAbout, showContact, showWork) {
      this.main = showMain;
      this.about = showAbout;
      this.contact = showContact;
      this.work = showWork;
    },
  },
};
