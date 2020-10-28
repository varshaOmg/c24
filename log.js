class log {

    constructor(x,y,height,angle){
     this.width = 20;
     this.height = height;

    
    
        var options = {
        
            restitution : 0.5,
            density : 2.0,
            friction : 1.0
    
        }
    
    this.body = Bodies.rectangle(x,y,20,height,options)
    
    World.add(world, this.body)
    
    Matter.Body.setAngle(this.body,angle)


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
    stroke("green")
    rect(0,0,this.width,this.height);
    pop()
    
    }
    
    
    
    }