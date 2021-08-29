<template>
  <svg
    id="metro"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 5 15"
    @mousedown="mouseDown"
    @mousemove="mouseMove"
    @mouseup="mouseUp"
    @mouseleave="mouseLeave"
  >
    <defs>
      <filter id="pencil">
        <feTurbulence
          baseFrequency="0.03"
          numOctaves="6"
          type="fractalNoise"
        ></feTurbulence>
        <feDisplacementMap
          scale="4"
          in="SourceGraphic"
          xChannelSelector="R"
          yChannelSelector="G"
        ></feDisplacementMap>
        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
      </filter>
      <clipPath id="case">
        <path d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z" />
      </clipPath>
    </defs>
    <path
      d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z"
      fill="rgb(255 168 168 / 7%)"
      filter="blur(0.3px)"
      stroke="rgb(0 0 0)"
      stroke-width="0.1"
      stroke-linejoin="round"
      clip-path="url(#case)"
    />
    <path
      d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z"
      fill="none"
      stroke="#5f5f5f"
      filter="blur(0.03px)"
      stroke-width="0.1"
      stroke-linejoin="round"
    />

    <circle
      cx="0.5"
      cy="1.3"
      r="0.25"
      fill="#E5E5E5"
      stroke="#111"
      stroke-width="0.02"
    />
    <circle
      cx="4.5"
      cy="1.3"
      r="0.25"
      fill="#E5E5E5"
      stroke="#111"
      stroke-width="0.02"
    />
    <circle cx="1" cy="11.8" r="0.3" />
    <circle cx="2" cy="11.8" r="0.3" />
    <circle cx="3" cy="11.8" r="0.3" />
    <circle cx="4" cy="11.8" r="0.3" />
    <circle cx="1" cy="12.8" r="0.3" />
    <circle cx="2" cy="12.8" r="0.3" />
    <circle cx="3" cy="12.8" r="0.3" />
    <circle cx="4" cy="12.8" r="0.3" />
    <circle cx="1" cy="13.8" r="0.3" />
    <circle cx="2" cy="13.8" r="0.3" />
    <circle cx="3" cy="13.8" r="0.3" />
    <circle cx="4" cy="13.8" r="0.3" />
    <path
      d="M 1 2 L4 2z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 2.5 L4 2.5z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 4 L4 4z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 6 L4 6"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 6.8 L4 6.8z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 8 L4 8z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <path
      d="M 1 9.2 L4 9.2z"
      stroke="#999"
      stroke-width="0.1"
      stroke-linejoin="round"
    />
    <g id="pendulum" :class="active && 'active'" :style="speed">
      <path
        d="M 2.2 1 C 2.2 0.8 2.8 0.8 2.8 1 L 2.8 14 L 2.2 14 L 2.2 1 Z"
        fill="#EAEAEA"
        stroke="#555"
        stroke-width="0.1"
        stroke-linejoin="round"
        filter="blur(0.01px)"
      />
      <rect
        ref="play"
        x="0.2"
        y="12.3"
        width="4.6"
        height="2.3"
        rx="1.2"
        fill="#E5E5E5"
        stroke="#555"
        stroke-width="0.1"
        filter="blur(0.01px)"
      />
      <g>
        <rect
          ref="tempo"
          x="1.25"
          y="1"
          :style="{ transform: `translateY(${tempoTransform / 20}px)` }"
          width="2.5"
          height="2.25"
          rx="0.2"
          ry="0.5"
          fill="#EEE"
          stroke="#555"
          stroke-width="0.1"
          filter="blur(0.01px)"
        />
      </g>
      <!--<text x="1" y="10.8" font-size="0.2" text-anchor="middle">120</text>-->
    </g>
    <rect
      id="pivot"
      x="0.2"
      y="10"
      width="4.6"
      height="1"
      rx="0.2"
      fill="#FFF"
      stroke="#000"
      stroke-width="0.1"
    />
    <text x="0" y="10.8" font-size="0.2" text-anchor="middle" class="metro">
      METRO
    </text>
  </svg>
  <div>{{ bpm }} BPM</div>
  <p>{{ tempoName }}</p>
  <p :class="active && 'hide'">
    Slide the pendulum weight to adjust the tempo, click the base to
    start/stop...
  </p>
</template>

<script>
let tempoPointer = {
  startY: null,
  currentY: null,
};
const tempoNames = [
  { name: "Largo", min: 0, max: 50 },
  { name: "Adagio", min: 51, max: 77 },
  { name: "Moderato", min: 78, max: 97 },
  { name: "Allegro", min: 98, max: 132 },
  { name: "Vivace", min: 133, max: 150 },
  { name: "Presto", min: 151, max: 300 },
]; /* Grave – slow and solemn (20–40 BPM) Lento – slowly (40–45 BPM)
Largo – broadly (45–50 BPM) Adagio – slow and stately (literally, “at ease”)
(55–65 BPM) Adagietto – rather slow (65–69 BPM) Andante – at a walking pace
(73–77 BPM) Moderato – moderately (86–97 BPM) Allegretto – moderately fast
(98–109 BPM) Allegro – fast, quickly and bright (109–132 BPM) Vivace – lively
and fast (132–140 BPM) Presto – extremely fast (168–177 BPM) Prestissimo – even
faster than Presto (178 BPM and over) */
function getTempoName(tempo) {
  let speed = tempoNames.find((i) => {
    return tempo >= i.min && tempo <= i.max;
  });
  return speed?.name || "tempo";
}

//let tempoStartOffset = this.$refs.tempo.getBoundingClientRect().y -
export default {
  name: "Metro",
  props: {
    msg: String,
  },
  data() {
    return {
      tempo: {
        y: 0,
      },
      bpm: 120,
      tempoTransform: 2.85 * 20,
      swing: { animation: `metronome 1s ease-in-out infinite` },
      active: false,
      speed: { animationDuration: (60 / 120) * 2 + "s" },
      ready: false,
      tempoName: getTempoName(120),
    };
  },
  methods: {
    mouseDown(e) {
      this.$emit("init");
      if (this.active) {
        this.active = false;
        this.$emit("stop");
        return false;
      }
      if (e.target === this.$refs.play) {
        this.active = true;
        this.$emit("play", this.bpm);
        this.ready = true;
      } else if (e.target === this.$refs.tempo) {
        tempoPointer.startY = e.offsetY;
        tempoPointer.startHandle = this.tempoTransform;
      }
    },
    mouseMove(e) {
      if (tempoPointer.startY) {
        let y = tempoPointer.startHandle + e.offsetY - tempoPointer.startY;
        if (y < 0) {
          y = 0;
        } else if (y > 130) {
          y = 130;
        }
        this.tempoTransform = y;
        this.bpm = Math.round(40 + y * 1.4);
        this.speed = { animationDuration: (60 / this.bpm) * 2 + "s" };
        this.tempoName = getTempoName(this.bpm);
      }
    },
    mouseUp() {
      if (tempoPointer.startY) {
        tempoPointer.startY = null;
      }
    },
    mouseLeave() {
      if (tempoPointer.startY) {
        tempoPointer.startY = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pendulum rect {
  cursor: pointer;
  pointer-events: initial;
}
#pendulum {
  filter: drop-shadow(0 0.3px 0.2px #00000055);
}
#pivot {
  filter: drop-shadow(0px 0.1px 0.2px #00000099);
}
#tempoVal {
  text-align: center;
  margin-top: 1rem;
}
svg {
  width: 100px;
  overflow: visible;
}
g {
  transform: rotate(0deg);
  transform-origin: 50% 75%;
}
g.active {
  animation: metronome 1s ease-in-out infinite;
}
@keyframes metronome {
  0%,
  100% {
    transform: rotate(35deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}
.metro {
  fill: white;
  stroke: red;
  stroke-width: 0.03;
  transform: scaleX(1.2) translateX(42%);
  font-size: 0.8px;
  font-family: arial;
}
#metro * {
  pointer-events: none;
  user-select: none;
}
#metro #tempo {
  pointer-events: initial;
}
p {
  max-width: 320px;
  margin: 1rem auto 0;
  transition: 0.5s all;
}
p.hide {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
