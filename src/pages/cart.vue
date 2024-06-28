<script setup>
import {useCartStore} from "@/stores/cart"
import PokemonCard from "@/components/PokemonCard.vue";

const store = useCartStore()


console.log("DB 02834: ", store)
</script>

<template>
  <v-container>
    <PokemonCard mettreBtn="false" :pokemonID="id" :isRare="isRare" v-for="{id, isRare} in store.panier"/>
  </v-container>
  <v-btn @click="store.removeLastItem()">POP</v-btn>
</template>

<style scoped lang="sass">

</style>
