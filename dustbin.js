class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.w=200;
        this.h=100;
        this.t=20;
        this.angle=0;
        this.bb=Bodies.rectangle(this.x,this.y,this.w,this.t,{isStatic:true});
        this.lb=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true});
        Matter.Body.setAngle(this.lb,this.angle);
        this.rb=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true});
        Matter.Body.setAngle(this.rb,-1*this.angle);
        World.add(world,this.bb)
        World.add(world,this.lb)
        World.add(world,this.rb)
    }
    display(){ 
        var posBottom = this.bb.position;
         var posLeft = this.lb.position;
         var posRight = this.rb.position;
         push();
         translate(posLeft.x, posLeft.y);
         rectMode(CENTER);
         angleMode(RADIANS);
         fill(255);
         stroke(255);
         rotate(this.angle);
         rect(0,0,this.t, this.h);
         pop();
         push();
         translate(posRight.x, posRight.y);
         rectMode(CENTER);
         stroke(255);
         angleMode(RADIANS);
         fill(255);
         rotate(-1*this.angle);
         rect(0,0,this.t, this.h);
         pop(); 
         push();
         translate(posBottom.x, posBottom.y); 
         rectMode(CENTER);
         stroke(255); angleMode(RADIANS); 
         fill(255);
         rect(0,0,this.w, this.t);
         pop(); }

}



















