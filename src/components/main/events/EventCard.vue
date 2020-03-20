<template>
  <div class="event-card white mt-4 pa-4 black--text">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img width="180" :src="event.image"></v-img>
      </v-col>
      <v-col cols="9">
        <v-row class="mx-2" no-gutters>
          <v-col class="mb-2" cols="12" sm="6">
            <span class="font-weight-bold">Data: </span> <span>{{ event.date }}</span>
          </v-col>
          <v-col class="mb-2" cols="12" sm="6">
            <span class="font-weight-bold" >Horário: </span> <span>{{ event.time }}</span>
          </v-col>
          <v-col class="mb-2">
            <span class="font-weight-bold">Lugar: </span> <span>{{ event.place }}</span>
          </v-col>
          <v-col class="d-none d-sm-block" cols="12">
            <p class="mt-6 font-weight-bold">{{ event.paragraph }}</p>
          </v-col>
        </v-row>
      </v-col>
			<v-col cols="12">
				<v-col class="d-block d-sm-none" cols="12">
            <p class="mt-6 font-weight-bold">{{ event.paragraph }}</p>
          </v-col>
			</v-col>
			<v-col class="text-right" cols="12">
				<v-btn target="_blank" :href="event.localization" large class="mt-8" tile outlined color="black">
					<v-icon color="black" left>
						mdi-map-search-outline
					</v-icon>
					<span>VER LOCALIZAÇÃO NO MAPA</span>
				</v-btn>
			</v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: ["event"],
};
</script>

<style lang="scss">
.event-card {
  width: 100%;
}
</style>