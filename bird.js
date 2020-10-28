class Bird {

    constructor(x,y){
     this.width = 50;
     this.height = 50;
    
        var options = {
        
            restitution : 1.0,
            density : 2.0,
            friction : 1.0
    
        }
    
    this.body = Bodies.rectangle(x,y,50,50,options)
    
    World.add(world, this.body)
    
    }
    
    display(){
    
        var pos = this.body.position
        var angle = this.body.angle
        pos.x = mouseX;
        pos.y = mouseY;
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