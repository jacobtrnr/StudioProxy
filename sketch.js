let c = 0;
let s = 70;



function preload() {
  font = loadFont('Arial.ttf');
}

function setup() {
  //colorMode(HSB,100)
  createCanvas(400, 400);
}

function draw() {
  frameRate(2)
  //background(60,26,97);

  let x = random(30, 50)
  let y = random(20, 30)
  let r = 1

  let cPick = floor(random(1, 11.5))


  push()
  angleMode(radians)
  if (cPick == 1) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  translate(random(30, 50) + 20, random(30, 60) + y)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('s', 0, 0);
  pop()



  push()
  if (cPick == 2) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 100, random(30, 60) + y)
  rotate(random(-r, r))
  
  textSize(s)
  textAlign(CENTER, CENTER)
  text('t', 0, 0);
  pop()




  push()
  if (cPick == 3) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 150, random(30, 60) + y)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('u', 0, 0);
  pop()

  push()
  if (cPick == 4) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 200, random(30, 60) + y)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('d', 0, 0);
  pop()

  push()
  if (cPick == 5) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 250, random(30, 60) + y)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('i', 0, 0);
  pop()

  push()
  if (cPick == 6) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 300, random(30, 60) + y)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('o', 0, 0);
  pop()

  push()
  if (cPick == 7) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 50, random(30, 60) + 200)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('p', 0, 0);
  pop()

  push()
  if (cPick == 8) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 100, random(30, 60) + 200)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('r', 0, 0);
  pop()

  push()
  if (cPick == 9) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(x + 150, random(30, 60) + 200)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('o', 0, 0);
  pop()

  push()
  if (cPick == 10) {
    c = 255
  } else {
    c = 0
  }
  fill(c, 0, 0);
  angleMode(radians)
  translate(random(30, 50) + 200, random(30, 60) + 200)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('x', 0, 0);
  pop()

  push()
  if (cPick == 11) {
    c = 255
  } else {
    c = 0
  }
  angleMode(radians)
  translate(random(30, 50) + 250, random(30, 60) + 200)
  rotate(random(-r, r))
  textSize(s)
  textAlign(CENTER, CENTER)
  text('y', 0, 0);
  pop()


 //noLoop()



}
