import MainComponent from "./components/main/main.vue";
import AboutComponent from "./components/about/about.vue";
import ContactComponent from "./components/contact/contact.vue";
import WorkComponent from "./components/work/work.vue";
import MenuComponent from "./components/menu/menu.vue";
//import fontsawesome from "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "App",
  components: {
    MainComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    MenuComponent,
  },
  data() {
    return {
      showMain: true,
      showAbout: false,
      showContact: false,
      showWork: false,
    };
  },
  methods: {
    navigateTo(where) {
      switch (where) {
        case "home":
          this.showMain = true;
          this.showAbout = false;
          this.showContact = false;
          this.showWork = false;
          break;
        case "about":
          this.showMain = false;
          this.showAbout = true;
          this.showContact = false;
          this.showWork = false;
          break;
        case "work":
          this.showMain = false;
          this.showAbout = false;
          this.showContact = false;
          this.showWork = true;
          break;
        case "contact":
          this.showMain = false;
          this.showAbout = false;
          this.showContact = true;
          this.showWork = false;
          break;
      }
      this.$refs.menu.highlight(
        this.showMain,
        this.showAbout,
        this.showContact,
        this.showWork
      );
    },
  },
};
