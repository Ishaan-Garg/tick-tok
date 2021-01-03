var hr,mn,sc,hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(800,400);
  hr= hour();
  mn= minute();
  sc= second();

  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  translate (200,200)
  rotate (-90)

  hr= hour();
  mn= minute();
  sc= second();
  
  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  push ();
  rotate(scAngle)
  stroke ("red")
  strokeWeight(4)
  line (0,0,100,0)
  pop ();

  push ();
  rotate(mnAngle)
  stroke ("blue")
  strokeWeight(4)
  line (0,0,80,0)
  pop ();

  push ();
  rotate(hrAngle)
  stroke ("yellow")
  strokeWeight(4)
  line (0,0,50,0)
  pop ();

  stroke("white")
  strokeWeight(5)
  point (0,0);

  noFill();
stroke("red"); 
arc(0, 0, 350, 350, 0, scAngle);

noFill();
stroke("blue");
arc(0,0,300,300,0, mnAngle)

noFill();
stroke("yellow");
arc(0,0,250,250,0, hrAngle)

  //drawSprites();
}