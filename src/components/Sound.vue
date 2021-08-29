<script>
import * as Tone from "tone";

export default {
  name: "Sound",
  data() {
    return {
      ready: false,
      audioX: null,
      //sampler: null,
      tempo: null,
    };
  },
  props: {
    msg: String,
  },
  created() {
    console.log("created");
    // this.init();
  },
  methods: {
    async init() {
      if (this.ready) {
        return false;
      }
      await Tone.start();
      console.log("audio is ready");
      const sampler = new Tone.Sampler({
        urls: {
          A1: "metro01.mp3",
          B1: "metro02.mp3",
          C1: "metro03.mp3",
          D1: "metro04.mp3",
          E1: "metro05.mp3",
          F1: "metro06.mp3",
          A2: "metro07.mp3",
          B2: "metro08.mp3",
          C2: "metro09.mp3",
          D2: "metro10.mp3",
          E2: "metro11.mp3",
          F2: "metro12.mp3",
        },
        baseUrl: "/assets/",
        onload: () => {
          console.log("sampletastic");
          this.ready = true;
        },
      }).toDestination();
      const ticks = new Tone.Pattern(
        (time, note) => {
          sampler.triggerAttackRelease(note, "16n", time);
        },
        [
          "A1",
          "B1",
          "C1",
          "D1",
          "E1",
          "F1",
          "A2",
          "B2",
          "C2",
          "D2",
          "E2",
          "F2",
        ],
        "up"
      ).start(0);
      ticks.interval = "4n";
      this.tempo = ticks;
    },
    async play(bpm = 40) {
      if (!this.ready) {
        await this.init();
      }
      Tone.Transport.bpm.value = bpm;
      Tone.Transport.start();
      this.$emit("play");
    },
    stop() {
      Tone.Transport.stop();
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
