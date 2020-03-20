<template>
  <div id="email" class="pt-8 text-center">
    <v-container>
      <h3 class="email-title mb-8 mobile-font-size-title has-title">Mais Novidades</h3>
      <h4
        class="email-subtitle mb-4"
      >Cadastre seu E-mail para receber novas notificações de eventos!</h4>
      <v-form>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              color="#DEDED8"
              outlined
              rounded
              label="Coloque aqui seu E-Mail"
              type="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-8">
            <v-btn large tile block light>
              <span class="email-submit font-weight-bold pt-0">CADASTRAR SEU E-MAIL</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
#email {
  background-color: #212127;
  margin-bottom: 141px;
}
</style>