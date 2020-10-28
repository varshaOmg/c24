class Pig {

    constructor(x,y){
     this.width = 50;
     this.height = 50;
    
        var options = {
        
            restitution : 0.2,
            density : 2.0,
            friction : 1.0
    
        }
    
    this.body = Bodies.rectangle(x,y,50,50,options)
    
    World.add(world, this.body)
    
    }
    
    display(){
    
        var pos = this.body.position
        var angle = this.body.angle
    rectMode(CENTER);
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("green");
    strokeWeight(5)
    stroke("red")
    rect(0,0,this.width,this.height);
    pop()
    
    }
    
    
    
    }