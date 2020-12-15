class Paper
{
     constructor (x,y,r)
   {
     var options=
     { restitution:0.8,
        friction:0.5,
        density:0.2
      }
   this.x=x;
   this.y=y;
   this.r=r;
   this.body=Bodies.circle(this.x,this.y,this.r,options);
   World.add(world,this.body)

   this.image=loadImage("IMAGES/paper.png")


    }
display()
{
 var paperpos=this.body.position
imageMode(CENTER)
fill("yellow")
image(this.image,paperpos.x,paperpos.y+50,this.r,this.r)





}
  
}