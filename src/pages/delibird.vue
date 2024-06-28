<script setup>
import PokemonCard from "@/components/PokemonCard.vue";

const pokemonPref = [{id: 4, rare: true},
  {id: 225, rare: false},
  {id: 34, rare: false},
  {id: 58, rare: false},
  {id: 1008, rare: false}
]
</script>

<template>
  <h2 class="">Mes Pokemons préf</h2>

  <v-container class="d-flex flex-column  flex-nowrap bg-amber-accent-4 d-md-none " width="400">

  <PokemonCard :pokemonID="id" :isRare="rare" v-for="{id,rare} in pokemonPref"/>

  </v-container>

  <v-container class="d-none d-md-flex flex-md-row flex-md-wrap bg-light-green-darken-1 bg" width="400">
    <PokemonCard :pokemonID="id" :isRare="rare" v-for="{id,rare} in pokemonPref"/>
  </v-container>
</template>

<style scoped>

</style>
