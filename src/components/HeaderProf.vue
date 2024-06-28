<script setup>
import {ref} from "vue"
import {useCartStore} from "@/stores/cart";

const store = useCartStore()

const tabs = ref([
  {id:1, name: "Les Tacos", route:"/tacos"},
  {id:2, name: "Contact", route:"/contact"},
  {id:3, name: "Pokemon", route:"/delibird"},
])
</script>

<template>
<h1>Site web du prof</h1>
<!--  <v-tabs>-->
<!--    <v-tab to="/tacos">-->
<!--      Tacos-->
<!--    </v-tab>-->
<!--    <v-tab to="/contact">-->
<!--      contact-->
<!--    </v-tab>-->

<!--  </v-tabs>-->
  <v-tabs>
    <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
      {{ tab.name }}
    </v-tab>
  </v-tabs>
  <v-btn to="/cart">Cart ({{store.panier.length}})</v-btn>
<!--  TODO : FIX THAT NAV BAR-->
</template>

<style scoped lang="sass">

</style>
