<template>
  <Metronome />
</template>

<script>
import Metronome from "./components/Metronome.vue";

export default {
  name: "App",
  components: {
    Metronome,
  },
};
</script>

<style>
@font-face {
  font-family: Balance;
  src: url(./assets/balance.otf) format("opentype");
}
#app {
  font-family: Balance, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
