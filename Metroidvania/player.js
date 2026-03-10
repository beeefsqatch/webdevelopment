class Player{

    constructor(){

        this.x=100
        this.y=100

        this.vx=0
        this.vy=0

        this.health=99
        this.missiles=5

        this.doubleJump=false
        this.dash=false
        this.morph=false

        this.jumpCount=0

    }

    update(){

        if(keys["ArrowLeft"]) this.vx=-3
        else if(keys["ArrowRight"]) this.vx=3
        else this.vx=0

        if(keys[" "]){
            if(this.onGround){
                this.vy=-12
                this.jumpCount=1
            }
            else if(this.doubleJump && this.jumpCount<2){
                this.vy=-12
                this.jumpCount++
            }
        }

        if(keys["Shift"] && this.dash)
            this.vx*=3

        this.vy+=GRAVITY

        this.x+=this.vx
        this.y+=this.vy

    }

    draw(){

        Sprites.draw("samus_idle",this.x,this.y)

    }

}