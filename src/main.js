import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

/*
class Pokemon {
    name: "Pikachu"
    health: "100"
    img: "link"
    degats: [12, 16]
    heal: [20, 25]

    attack(opponent) {
        let damage = Math.random() * (this.degats[1] - this.degats[0]) + this.degats[0]
        opponent.health -= damage
    }
}

let player = new Pokemon()
let opponent = new Pokemon()
player.attack(opponent)
opponent.attack(player)*/
