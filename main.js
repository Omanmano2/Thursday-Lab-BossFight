const hero = {
  health: 100
}

const boss = {
  health: 100
}

let attacks = {
  punch: {
    damage: 2,
  },

  kick: {
    damage: 5,
  },

  weapon: {
  damage: 10,
  }
}



function buttonPunch() {
const punchDamage = attacks.punch.damage
boss.health -= punchDamage
  console.log(boss.health)
  document.getElementById('bossProgress').style = `width: ${boss.health}%`
}


function buttonKick() {
const kickDamage = attacks.kick.damage
boss.health -= kickDamage
  console.log(boss.health)
  document.getElementById('bossProgress').style = `width: ${boss.health}%`
}

function buttonWeapon() {
  const weaponDamage = attacks.weapon.damage
  boss.health -= weaponDamage
  console.log(boss.health)
  document.getElementById('bossProgress').style = `width: ${boss.health}%`
}

function drawMain(){
  template = ''
  // for(const key in )

}