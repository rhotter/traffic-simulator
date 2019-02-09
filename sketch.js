let cars = [];
let img

function preload() {
  carImg = loadImage('images/car.png');
  deadManImg = loadImage('images/dead_man.png');
  aliveManImg = loadImage('images/alive_man.png');
}

function setup() {
  createCanvas(1000, 600);
  angleMode(DEGREES);

  // cars.push(new Car(200,200,90));
  cars.push(new Car(400,400,50));
  // frameRate(30);
}

function draw() {
  background(256, 256, 256);
  // car.move();
  for (let i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();
  }
}

class Obstacle {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
  }

  displayAlive() {
    image(aliveManImg, this.x, this.y, 82, 186)
  }
}

class Car {
  constructor(xPos, yPos, angle) {
    this.x = xPos;
    this.y = yPos;
    this.angle = angle;
    this.speed = 0;
    this.topSpeed = 3;
    this.acceleration = 0.02;
  }

  move() {
    let newSpeed = this.speed + this.acceleration;
    if (newSpeed <= this.topSpeed) {
      this.speed = newSpeed;
    }
    this.x += this.speed*cos(this.angle)
    this.y += -this.speed*sin(this.angle)
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER)
    imageMode(CENTER)
    image(carImg, 0, 0, 50, 100)
    pop();
  }
}
