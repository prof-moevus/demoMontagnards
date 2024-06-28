// Utilities
import { defineStore } from 'pinia'
const KEY = "cart"
export const useCartStore = defineStore('cart', {
  state: () => {
    if (localStorage.getItem(KEY)) {
      return {panier : JSON.parse(localStorage.getItem(KEY))}
    }
    return { panier: [] } //[{id:25, isRare: false}, {id:225, isRare: true}, {id:1008, isRare: false}] }
  },
  actions : {
    removeLastItem(){
      this.panier.pop()
      localStorage.setItem(KEY, JSON.stringify(this.panier))
    },
    addPokemonID(id, isRare) {
      this.panier.push({id, isRare})
      localStorage.setItem(KEY, JSON.stringify(this.panier))
    }

  }
})
