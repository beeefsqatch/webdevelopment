class Guardian{

    constructor(){

        this.x=600
        this.y=300
        this.health=200

    }

    update(){

        if(player.x < this.x)
            this.x-=1
        else
            this.x+=1

    }

    draw(){

        Sprites.draw("guardian",this.x,this.y)

    }

}