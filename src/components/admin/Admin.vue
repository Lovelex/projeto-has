<template>
  <div id="admin">
    <Nav></Nav>
    <v-sheet light color="white" height="100%">
      <v-content>
        <v-container>
          <keep-alive >
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </v-content>
    </v-sheet>
    <v-footer fixed class="d-flex justify-center" color="firestacks">
      <div class="font-weight-bold">
        &copy;
        <span>Fire Stacks</span>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { auth } from "../../plugins/firebase";
import Nav from "../templates/admin/nav/Nav";

export default {
  components: { Nav },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ path: "/login" });
      });
    }
  },
  mounted() {
    this.$store.dispatch("dispatchEvents");
    this.$store.dispatch("dispatchContacts");
    this.$store.dispatch("dispatchSocials");
    
  }
};
</script>

<style>
#admin {
  height: 100%;
}
</style>