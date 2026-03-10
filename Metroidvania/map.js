const Map={

    visited:{},

    visit(x,y){

        this.visited[x+","+y]=true

    },

    drawMini(){

        let size=6

        for(let key in this.visited){

            let parts=key.split(",")

            ctx.fillStyle="#0f0"

            ctx.fillRect(
                10+parts[0]*size,
                50+parts[1]*size,
                size,
                size
            )

        }

    }

}