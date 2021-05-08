var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var i,n;
var flag=0;
var plk,par;

function preload(){


 droppingSound = loadSound("droppingsound.mp3");
  
  
  
  }





function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);
  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
 // for (var m = 75; m <=400; m = m+100){

  
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
   for (var j = 50; j <=width-10; j=j+50) 
   {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var i=75; i <=width; i=i+50){
    plinkos.push(new Plinko(i,275))
  }
  
  //create 4th row of plinko objects
  for (var i = 50; i <= width; i=i+50){
    plinkos.push(plk=new Plinko(i,375))
  }

  //create particle objects
  if (frameCount%90===0){
    //particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
    particles.push(new Particle(random(100,700), 10, 10))
  }
    
}
 


function draw() {
  background("black");
  textSize(20)


 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for ( i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCount%90===0){
    par=particles.push(new Particle(random(100,700), 10, 10))
    
  }
  



  //display the paricles 
  for ( n = 0; n < particles.length; n++) {
    particles[n].display();
  }

  if(par[n].speed<1 && par[n].fspeed>0.5){
    droppingSound.play();
}

  // if (){
  //   if (!droppingSound.isPlaying()){
  //     droppingSound.play();
  //   }


  // }
//detectollision(particles,ground)
// var collision = Matter.SAT.collides(plinkos[i],particles[n]);
//   if(collision.collided)
//   {
//     flag=1;
    
    
//   }
// if (flag===1){
//   droppingSound.play();}

}


// function detectollision(particles,ground){
// 	groundBodyPosition=ground.body.position
// 	particlesBodyPosition=particles.body.position

// 	var distance=dist(particlesBodyPosition.x,particlesBodyPosition.y,groundBodyPosition.x,groundBodyPosition.y)
// 	if(distance<=ground.height+particles.radius){
//     if (!droppingSound.isPlaying()){
//           droppingSound.play();
//          }
// 	}
// }
