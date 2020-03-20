<template>
  <div class="login-card mx-auto">
    <div class="login-card-header deep-orange white--text py-4">
      <span class="display-1">Admin</span>
    </div>
    <div class="login-card-body px-8 elevation-4">
      <v-form ref="form" @submit.prevent.stop="submit">
        <div class="py-10">
          <v-text-field :rules="[rules.required, rules.email]" v-model="user.email" label="E-mail (teste@teste.com)"></v-text-field>
          <v-text-field
            :rules="[rules.required, rules.min]"
            v-model="user.password"
            label="Senha (123456)"
            type="password"
          ></v-text-field>
        </div>
        <v-btn type="submit" dark color="deep-orange" class="mb-8" block>entrar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { auth } from "../../../plugins/firebase.js";
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend

export default {
  data: () => ({
    user: {
      email: "",
      password: ""
    },
    rules: {
      required: v => !!v || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || 'E-mail precisa ser válido',
      min: v => v.length >= 6 || 'A senha dever ter no mínimo 6 dígitos'
    }
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        auth
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push({ path: "/admin" });
          })
          .catch(e => {
            console.log(e.message);
          });
      }
    }
  }
};
</script>

<style lang="scss">
.login-card {
  max-width: 460px;

  .login-card-header {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 100%;
    text-align: center;
  }

  .login-card-body {
    width: 100%;
    border: rgba($color: #ff5722, $alpha: 0.5) solid 1px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>