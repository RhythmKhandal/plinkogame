class Particle{
    constructor(x,y,r){
        var options = {
            restitution: 0.5,
            friction: 0.5,
           
           // frictionAir:0.1
        }
      
        this.body = Bodies.circle(x,y,r,options)
        this.r = 10;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
       // this.sound=loadSound("droppingsound.mp3")
        World.add(world,this.body)
        console.log(this.body)

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        
        pop();
        // if(this.body.speed<1 && this.body.speed>0.5){
        //     this.sound.play();
        // }
    }








}