new Vue({
  el: '#app',
  data: {
    player: {
      attack: 10,
      res: 20,
      healthCur: 100,
      healthMax: 100
    },
    monster: {
      attack: 13,
      healthCur: 100,
      healthMax: 100
    },
    scene: "title",
    combatLog: []
  },
  computed: {
    playerDead() {
      return this.player.healthCur <= 0 ? true : false
    },
    monsterDead() {
      return this.monster.healthCur <= 0 ? true : false
    },
    playerDamage() {
      return {
        min: this.player.attack - 3,
        max: this.player.attack + 3
      }
    },
    playerHeal() {
      return {
        min: this.player.res - 6,
        max: this.player.res + 6
      }
    },
    monsterDamage() {
      return {
        min: this.monster.attack - 4,
        max: this.monster.attack + 4
      }
    }
  },
  methods: {
    startNew() {
      this.scene = 'battle'
      this.player.healthCur = 100
      this.monster.healthCur = 100
      this.combatLog = []
    },
    attack() {
      this.damageMonster()
      this.damagePlayer()
    },
    special() {
      this.damageMonster(1.5)
      this.damagePlayer()
    },
    heal() {
      const heal = this.inRange(this.playerHeal.min, this.playerHeal.max)
      this.player.healthCur += heal
      if (this.player.healthCur > this.player.healthMax) {
        this.player.healthCur = this.player.healthMax
      }
      this.combatLog.unshift({
        class: 'heal-turn',
        message: `Player healed ${heal} damage!`
      })
      this.damagePlayer()
    },
    giveUp() {
      this.scene = "title"
      this.combatLog = []
    },
    damagePlayer() {
      // damage the player
      const damage = this.inRange(this.monsterDamage.min, this.monsterDamage.max)
      this.player.healthCur -= damage
      this.combatLog.unshift({
        class: 'monster-turn',
        message: `Player took ${damage} damage!`
      })
    },
    damageMonster(multi = 1) {
      // set vars
      const damage = this.inRange(this.playerDamage.min, this.playerDamage.max) * multi

      // if the multiplier is higher than normal, get hype
      const hypeMessage = multi > 1 ? 'A brutal hit!' : ''

      // damage the monster
      this.monster.healthCur -= damage
      this.combatLog.unshift({
        class: 'player-turn',
        message: `${hypeMessage} Monster took ${damage} damage!`
      })
    },
    inRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min)

      // if you wanted to structure it such that 
      // you have a min, and if the random-up-to-max is below it
      // then it doesn't get chosen,
      // then you use Math.max() to take the highest of the two

      // return Math.max(Math.floor(Math.random() * max) + 1, min)
    }
  },
  watch: {
    playerDead() {
      // win logic only runs if val is true
      // otherwise it will run when the game is reset,
      // because that's a change that fires `watch`
      if (this.playerDead) {
        this.scene = "lost"
        this.combatLog.unshift({
          class: 'monster-turn win',
          message: 'Monster wins!'
        })
      }
    },
    monsterDead() {
      if (this.monsterDead) {
        this.scene = "won"
        this.combatLog.unshift({
          class: 'player-turn win',
          message: 'Player wins!'
        })
      }
    }
  }
})