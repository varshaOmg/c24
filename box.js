class Box {

constructor(x,y,width,height){
 this.width = width;
 this.height = height;

    var options = {
    
        restitution : 0.2,
        density : 2.8,
        friction : 1.0

    }

this.body = Bodies.rectangle(x,y,width,height,options)

World.add(world, this.body)

}

display(){

    var pos = this.body.position
    var angle = this.body.angle
rectMode(CENTER);
push()
translate(pos.x,pos.y)
rotate(angle)
fill("white");
strokeWeight(5)
stroke("purple")
rect(0,0,this.width,this.height);
pop()

}



}