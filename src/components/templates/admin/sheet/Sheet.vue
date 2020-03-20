<template>
  <div class="sheet">
    <h3>{{title}}</h3>
    <v-sheet class="py-8 px-4 sheet-relative" color="#FaF0F0">
      <template class="mt-12">
        <slot></slot>
      </template>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
.sheet-relative {
  position: relative;
}
</style>