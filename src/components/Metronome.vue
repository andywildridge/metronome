<template>
  <MetroDisplay
    @play="play"
    @stop="this.$refs.sound.stop()"
    @init="this.$refs.sound.init()"
  />
  <Sound ref="sound" />
  <!--<button v-if="!intitialised" @click="this.$refs.sound.init()">
    enable sound
  </button>-->
</template>

<script>
import MetroDisplay from "./MetroDisplay.vue";
import Sound from "./Sound.vue";

export default {
  name: "Metronome",
  components: { MetroDisplay, Sound },
  props: {},
  data() {
    return {
      intitialised: false,
    };
  },
  methods: {
    play(bpm) {
      this.$refs.sound.play(bpm);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: green;
}
</style>
