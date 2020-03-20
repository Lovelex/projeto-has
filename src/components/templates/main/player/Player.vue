<template>
  <div id="player">
    <v-container>
      <div class="player-wrapper">
        <div class="player-content d-flex align-center flex-column">
          <span class="player-title mb-2 mobile-font-size">Player Title</span>
          <div @click="changeCurrentTime" class="player-progress-bar-outline">
            <v-progress-linear  v-model="player.progress" color="black" height="100%" rounded :value="player.progress">

            </v-progress-linear>
          </div>
          <div class="player-controls">
            <div class="player-volume">
              <div class="volume-slider">
                <v-slider
                  light
                  v-model="volume.value"
                  min="0"
                  max="100"
                  color="black"
                  track-color="none"
                >
                  <template v-slot:prepend>
                    <v-icon @click="mute" color="#32323b">{{volumeIcons}}</v-icon>
                  </template>
                </v-slider>
              </div>
            </div>
            <div class="player-play">
              <div class="player-play-wrapper d-flex">
                <v-icon :large="isMobile ? false : true" color="black">mdi-skip-backward</v-icon>
                <div class="player-play-icon">
                  <v-btn
                    @click="handlePlayingState"
                    :small="isMobile ? true : false"
                    color="#deded8"
                    class="elevation-4 mx-2"
                    light
                    outlined
                    fab
                  >
                    <v-icon :large="isMobile ? false : true" color="black">{{ player.playingIcon }}</v-icon>
                  </v-btn>
                </div>
                <v-icon :large="isMobile ? false : true" color="black">mdi-skip-forward</v-icon>
              </div>
            </div>
            <div class="player-time mobile-font-size">
              <span class="current-time">{{player.currentTime}}</span>
              <span class="mx-1">/</span>
              <span class="total-time">{{ player.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <audio @loadedmetadata="setPlayerDuration" @timeupdate="handleDurationState" ref="audio">
      <source :src="playlist" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  data: () => ({
    playlist:
      "https://firebasestorage.googleapis.com/v0/b/has-teste.appspot.com/o/music%2Fx-love-letters-a-dance-of-fire-and-ice-ost.mp3?alt=media&token=847fa839-6e76-4e7b-bbaf-8c927f1ea4c6",
    isPaused: true,
    volume: {
      value: 10,
      isMuted: false
    },
    player: {
      progress: 0,
      duration: '00:00',
      currentTime: "00:00",
      playingIcon: "mdi-play"
    }
  }),
  methods: {
    defaultPlayerState() {
      this.$refs.audio.volume = 0.01 * this.volume.value;
    },
    handlePlayingState() {
      this.isPaused ? this.play() : this.pause();
    },
    handleDurationState() {
      this.setPlayerCurrentTime()
      this.setProgressValue()
    },
    mute() {
      this.volume.isMuted ? (this.volume.value = 25) : (this.volume.value = 0);
      this.volume.isMuted
        ? (this.$refs.audio.volume = 0.25)
        : (this.$refs.audio.volume = 0);
    },
    play() {
      if (this.isPaused) {
        this.$refs.audio.play();
        this.isPaused = false;
        this.player.playingIcon = "mdi-pause";
      }
    },
    pause() {
      if (!this.isPaused) {
        this.$refs.audio.pause();
        this.isPaused = true;
        this.player.playingIcon = "mdi-play";
      }
    },
    setPlayerDuration() {
      var minutes = "0" + Math.floor(this.$refs.audio.duration / 60);
      var seconds = "0" + Math.floor(this.$refs.audio.duration - minutes * 60);
       this.player.duration = minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    setPlayerCurrentTime() {
        var minutes = "0" + Math.floor(this.$refs.audio.currentTime / 60);
        var seconds =
          "0" + Math.floor(this.$refs.audio.currentTime - minutes * 60);
        this.player.currentTime = minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    setProgressValue() {
      let total = this.$refs.audio.duration
      let actual = this.$refs.audio.currentTime
      let progressPercentage = (actual * 100) / total
      this.player.progress = progressPercentage
    },
    changeCurrentTime() {
      let progressTime = (this.player.progress / 100) * this.$refs.audio.duration
      this.$refs.audio.currentTime = progressTime
    }
  },

  computed: {
    volumeIcons() {
      if (this.volume.value === 0) return "mdi-volume-off";
      if ((this.volume.value >= 1) & (this.volume.value <= 50))
        return "mdi-volume-medium";
      if (this.volume.value >= 51 <= 100) return "mdi-volume-high";
    },
    isMobile() {
      return this.$store.getters.getViewPort.isMobile
    }
  },
  watch: {
    volume: {
      handler() {
        this.volume.isMuted = this.volume.value === 0 ? true : false;
        this.$refs.audio.volume = 0.01 * this.volume.value;
      },
      deep: true
    }
  },
  mounted() {
    this.defaultPlayerState();
  }
};
</script>

<style>
#player {
  position: fixed;
  color: #32323b;
  bottom: 0px;
  width: 100%;
  background: #deded8;
  z-index: 10;
}

#player .player-content {
  position: relative;
  width: 100%;
}

#player .player-progress-bar-outline {
  width: 100%;
  height: 16px;
  border-radius: 7px;
  border: #32323b solid 2px;
  z-index: 100;
  cursor: pointer;
}

#player .player-controls {
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#player .player-volume {
  display: flex;
  align-items: baseline;
  z-index: 1;
}

#player .volume-slider {
  height: 24px;
  width: 120px;
}

#player .player-play {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 16px;
}
</style>