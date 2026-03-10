const Sprites={

    data:{

        samus_idle:[
            [null,"#f6b26b","#f6b26b"],
            ["#cc0000","#cc0000","#cc0000"],
            ["#e69138",null,"#e69138"]
        ],

        crawler:[
            ["#ff00ff","#ff00ff"],
            ["#880088","#880088"]
        ],

        flyer:[
            [null,"#00ffff",null],
            ["#00ffff","#00ffff","#00ffff"]
        ],

        guardian:[
            ["#ff0000","#ff0000","#ff0000"],
            ["#880000","#880000","#880000"]
        ],

        item:[
            [null,"#ffff00",null],
            ["#ffff00","#ffff00","#ffff00"]
        ]

    },

    draw(name,x,y){

        let s=this.data[name]

        for(let j=0;j<s.length;j++)
            for(let i=0;i<s[j].length;i++){

                let c=s[j][i]

                if(c){

                    ctx.fillStyle=c
                    ctx.fillRect(x+i*4,y+j*4,4,4)

                }

            }

    }

}