class Item{

    constructor(x,y,type){

        this.x=x
        this.y=y
        this.type=type

    }

    apply(){

        if(this.type==="doubleJump")
            player.doubleJump=true

        if(this.type==="dash")
            player.dash=true

        if(this.type==="missile")
            player.missiles+=5

        if(this.type==="energy")
            player.health+=20

    }

    draw(){

        Sprites.draw("item",this.x,this.y)

    }

}