<script setup>
import {ref} from "vue"
import {useCartStore} from "@/stores/cart";
import {fetchPokemonByID} from "@/services/pokemon.service"

const store = useCartStore()
const add = () => {
  store.addPokemonID(pokemonID, toogle)
}
const {pokemonID, isRare} = defineProps(['pokemonID', 'isRare'])

console.log("DB89793 : ", isRare)
const toogle = ref(isRare)

fetchPokemonByID(pokemonID).then((data) => {
  pokemon.value = data
})

let pokemon = ref(null)

</script>

<template>
  <v-card v-if="pokemon" class="d-flex flex-column justify-center align-center pa-3 ma-5" elevation="12"
          outlined width="300px">
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-card-subtitle>{{ pokemon.weight }}</v-card-subtitle>
    <v-container height="200">
    <v-img :src="toogle?pokemon.imageRare:pokemon.image" class="w-100"/>
    </v-container>

    <v-card-text>{{ pokemon.types.join(", ") }}</v-card-text>

    <v-btn-group class="d-flex flex-row justify-space-between">
      <v-btn v-if="!toogle" variant="tonal" @click="toogle=!toogle" class="bg-red-accent-4" height="40">Rarify</v-btn>
      <v-btn v-else variant="tonal" @click="toogle=!toogle" class="bg-red-accent-4" height="40">Normalize</v-btn>
      <v-spacer/>
      <v-btn @click="add" class="bg-blue-accent-1" height="40">Catch</v-btn>

    </v-btn-group>

  </v-card>
</template>

<style scoped lang="sass">

</style>
