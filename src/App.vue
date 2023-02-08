<template>
  <headerC />
  <intro id="Intro" />
  <about id="About" />
  <cloning id="Webclon" />
  <project id="Project" />
  <contact id="Contact" />
</template>
<script>
import headerC from "./components/headerC.vue";
import intro from "./components/intro.vue";
import about from "./components/about.vue";
import cloning from "./components/cloning.vue";
import project from "./components/project.vue";
import contact from "./components/contact.vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    headerC,
    intro,
    about,
    cloning,
    project,
    contact,
  },
  created() {
    AOS.init({ once: true });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: #fefcfe;
}
a {
  text-decoration: none;
}
</style>
