<template>
  <div id="genres">
    <div class="genre-title-wrapper d-flex justify-center">
      <v-container :class="{'genres-container-title': true, 'text-center': true, 'px-0' : isMobile ? true : false}">
        <div class="genres-title-box mb-auto py-4">
          <h4 class="genres-title font-weight-black has-title">Estilos Musicais</h4>
        </div>
      </v-container>
    </div>
    <v-parallax class="genres-parallax" src="@/assets/img/genres.jpg">
      <v-container class="genres-container">
        <v-row >
          <v-col v-for="icon in icons" :key="icon" cols="6" class="d-flex justify-center">
            <div class="genres-icon text-center pa-4 mobile-font-size">
              {{ icon }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn to="/contato" large light block tile>
              <span class="font-weight-bold mobile-font-size">
                IR PARA CONTATO
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: ['isMobile'],
  data: () => ({
    icons: ['Internacionais', 'Samba', 'Pop Rock', 'Mpb' ]
  })
};
</script>

<style>
#genres {
  position: relative;
}

#genres .genre-title-wrapper {
  width: 100%;
}

#genres .genres-container-title {
  position: absolute;
  z-index: 1;
}

#genres .genres-title-box {
  background-color: rgba(222, 222, 216, 0.75);
  color: #212127;
}

#genres .genres-icon {
  background-color: #212127;
  border: 1px solid #DEDED8;
  border-radius: 8px;
  width: 100%;
}
</style>