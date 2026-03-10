const Save={

    save(){

        localStorage.setItem("metroidSave",JSON.stringify({

            health:player.health,
            missiles:player.missiles,
            doubleJump:player.doubleJump,
            dash:player.dash,
            roomX:roomX,
            roomY:roomY,
            biome:currentBiome

        }))

    },

    load(){

        let s=JSON.parse(localStorage.getItem("metroidSave"))

        if(!s) return

        player.health=s.health
        player.missiles=s.missiles
        player.doubleJump=s.doubleJump
        player.dash=s.dash

        roomX=s.roomX
        roomY=s.roomY
        currentBiome=s.biome

    }

}