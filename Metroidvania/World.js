const World={

    biomes:{

        crateria:{
            "0,0":{
                platforms:[{x:0,y:500,w:960,h:40}],
                enemies:[new Crawler(400,470)],
                items:[new Item(200,450,"doubleJump")]
            }
        },

        brinstar:{
            "0,0":{
                platforms:[{x:0,y:500,w:960,h:40}],
                enemies:[new Flyer(500,300)],
                items:[new Item(400,450,"missile")]
            }
        }

    },

    load(b,x,y){

        let data=this.biomes[b][x+","+y]

        return new Room(data)

    }

}