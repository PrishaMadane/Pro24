class dustbinn {
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
       // this.image= loadImage("dustbingreen.png");
        World.add(world,this.body);
    }  

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}