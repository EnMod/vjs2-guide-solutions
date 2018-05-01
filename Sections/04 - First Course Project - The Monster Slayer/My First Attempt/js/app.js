new Vue({
  el: '#app',
  data: {
    player: {
      attack: 10,
      res: 12,
      healthCur: 100,
      healthMax: 100
    },
    monster: {
      attack: 8,
      healthCur: 100,
      healthMax: 100
    },
    scene: "title",
    combatLog: []
  },
  computed: {
    playerDead() {
      return player.healthCur < 0 ? true : false
    },
    monsterDead() {
      return monster.healthCur < 0 ? true : false
    },
    playerDamageRange: {
      min() {
        return this.player.attack - 2
      },
      max() {
        return this.player.attack + 2
      }
    },
    playerHealRange: {
      min() {
        return this.player.res - 1
      },
      max() {
        return this.player.res + 1
      }
    },
    monsterDamageRange: {
      min() {
        return this.monster.attack - 2
      },
      max() {
        return this.monster.attack + 2
      }
    }
  },
  methods: {
    startNew() {
      this.scene = 'game'
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
      this.player.healthCur += valRange(playerHealRange.max, playerHealRange.min)
    },
    giveUp() {
      this.scene = "title"
    },
    damagePlayer() {
      // damage the player
      const monsterDamage = this.valRange(monsterDamageRange.max, monsterDamageRange.min)
      this.player.healthCur -= monsterDamage
      this.combatLog.unshift({
        class: 'player-turn',
        message: `Player took ${monsterDamage} damage!`
      })
    },
    damageMonster(multi = 1) {
      // set vars
      const playerDamage = this.valRange(playerDamageRange.min, playerDamageRange.max) * multi

      // if the multiplier is higher than normal, get hype
      const hypeMessage = multi > 1 ? 'A brutal hit!' : ''

      // damage the monster
      this.monster.healthCur -= playerdamage
      this.combatLog.unshift({
        class: 'monster-turn',
        message: `${hypeMessage} Monster took ${playerDamage} damage!`
      })
    },
    valRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    healthBarStyle(battler) {
      const barPerc = Math.round((this.battler.healthCur / this.battler.healthMax) * 100)
      return `background-color: green; margin: 0; color: white; width: ${barPerc}%;`
    }
  },
  watch: {
    playerDead() {
      // win logic
      this.scene = "won"
      // display "you win" message
    },
    monsterDead() {
      // game over logic
      this.scene = "lost"
      // display "you lost" message
    }
  }
})