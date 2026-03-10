const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const GRAVITY = 0.6

let keys={}

document.addEventListener("keydown",e=>keys[e.key]=true)
document.addEventListener("keyup",e=>keys[e.key]=false)

const player = new Player()

let currentRoom
let currentBiome="crateria"
let roomX=0
let roomY=0

function loadRoom(){

    currentRoom = World.load(currentBiome,roomX,roomY)

}

loadRoom()

function update(){

    player.update()

    for(let e of currentRoom.enemies)
        e.update()

    for(let b of currentRoom.bullets)
        b.update()

    checkItems()
    checkDoors()

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    currentRoom.draw()

    player.draw()

    Map.drawMini()

    UI.draw()

}

function loop(){

    update()
    draw()

    requestAnimationFrame(loop)

}

loop()