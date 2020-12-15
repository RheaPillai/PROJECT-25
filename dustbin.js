class Dustbin{
      constructor(x,y){
            this.x=x;
            this.y=y;
            this.baseH=20;
            this.baseW=200;
      
            //base
            this.baseB=Bodies.rectangle(this.x,this.y+60,this.baseW,this.baseH,{isStatic:true})
            World.add(world,this.baseB)
            //left
            this.leftB=Bodies.rectangle(this.x-this.baseW/2,this.y-this.baseH/2,this.baseH,this.baseW,{isStatic:true})
           World.add(world,this.leftB)
           //right
           this.rightB=Bodies.rectangle(this.x+this.baseW/2,this.y-this.baseH/2,this.baseH,this.baseW,{isStatic:true})
           World.add(world,this.rightB)

           this.image=loadImage("IMAGES/dustbingreen.png")

      }



           display(){
                 var posB=this.baseB.position
                 var posL=this.leftB.position
                 var posR=this.rightB.position

                 fill("white")

                 image(this.image,posB.x,posB.y-40,this.baseW,this.baseW+80)
                 rect(posL.x,posL.y,this.baseH,this.baseW)
                 rect(posR.x,posR.y,this.baseH,this.baseW)


      }


}




  
