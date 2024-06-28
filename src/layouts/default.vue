<template>
  <v-app>
    <HeaderProf/>
    <v-main class="w-100">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
import HeaderProf from "@/components/HeaderProf.vue";
</script>

<style>
.content {

}
</style>
