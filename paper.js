class paper {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body= Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=50;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }  
    
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //stroke("blue");
        //fill("pink");
        imageMode(RADIUS);
        image(this.image,0,0,this.r, this.r);
        pop();
    
    }
    }
       

