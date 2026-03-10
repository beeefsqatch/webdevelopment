class Crawler{

    constructor(x,y){

        this.x=x
        this.y=y
        this.vx=2

    }

    update(){

        this.x+=this.vx

        if(this.x<0||this.x>900)
            this.vx*=-1

    }

    draw(){

        Sprites.draw("crawler",this.x,this.y)

    }

}

class Flyer{

    constructor(x,y){

        this.x=x
        this.y=y
        this.angle=0

    }

    update(){

        this.angle+=0.05
        this.y+=Math.sin(this.angle)*2

    }

    draw(){

        Sprites.draw("flyer",this.x,this.y)

    }

}