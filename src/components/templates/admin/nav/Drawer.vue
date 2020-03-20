<template>
  <v-navigation-drawer 
    class="admin-drawer" 
    :class="{'admin-drawer-shadow': drawer}" 
    color="white" 
    app 
    v-model="drawer">
    <v-list light>
      <v-list-group 
        
        v-for="menu in menus" 
        :key="menu.title"
        :append-icon="menu.subMenus.length ? 'mdi-chevron-down' : ''">
        <template v-slot:activator>
          <v-list-item-title >{{ menu.title }}</v-list-item-title>
          <v-list-item-avatar color="info" size="24" v-if="menu.title === 'Mensagens'">
            <span class="white--text">{{newMessagesCount}}</span>
          </v-list-item-avatar>
        </template>
        <v-list-item  :to="{ name: subMenu.to }" v-for="(subMenu, i) in menu.subMenus" :key="i">
          <v-list-item-content class="pl-6">{{ subMenu.label }}</v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
		<div class="pa-2">
		<v-btn @click="logout" outlined block color="firestacks">DESLOGAR</v-btn>

		</div>
  </v-navigation-drawer>
</template>

<script>
import { auth } from '../../../../plugins/firebase';

export default {
  props: ["isDrawer", 'newMessagesCount'],
  data: () => ({
    drawer: true,
    menus: [
      {
        title: "Layout",
        subMenus: [
          {
            label: "Eventos",
            to: "AdminEvents"
          },
          {
            label: "Imagens",
            to: "AdminImages"
          },
          {
            label: "Contato",
            to: "AdminContact"
          },
          {
            label: "Mídias Sociais",
            to: "AdminSocials"
          },
          {
            label: "Músicas",
            to: "AdminMusics"
          },
          {
            label: "Vídeos",
            to: "AdminVideos"
          }
        ]
      },
      {
        title: 'Mensagens',
        subMenus: [
          {
            label: 'Mensagens',
            to: 'AdminMessages'
          }
        ]
      }
    ]
	}),
	methods: {
		logout() {
			auth.signOut()
				.then(() => {
					this.$router.push({ path: '/login' })
				})
		}
	},
  watch: {
    isDrawer() {
      this.drawer = this.isDrawer;
    },
    drawer() {
      this.$emit("isDrawerChange", this.drawer);
    }
  }
};
</script>

<style lang="scss">
.admin-drawer {
	
}
.admin-drawer-shadow {
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
}
</style>