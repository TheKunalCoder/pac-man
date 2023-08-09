var pacman, boundryGroup, foodGroup
var score = 0
function preload() {
  pacmanImg = loadImage("images/pacman.png");
  orgGhostImg = loadImage("images/orgGhost.png");
  redGhostImg = loadImage("images/redGhost.png");
  pinkGhostImg = loadImage("images/pinkGhost.png");
  blueGhostImg = loadImage("images/blueGhost.png");
  ylwFoodImg = loadImage("images/ylwFood.png");
  pacmanVImg = loadImage("images/pacmanV.png")
  eatSound = loadSound("pacmaneatSound.mp3")

}

function setup() {
  createCanvas(600, 300);
  foodGroup = new Group()

  for (var i = 50; i < 550; i = i + 28) {
    food = createSprite(i, 30)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }

  for (var i = 50; i < 550; i = i + 28) {
    food = createSprite(i, 225)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }

  for (var i = 106; i < 500; i = i + 28) {
    food = createSprite(i, 105)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }


  for (var i = 106; i < 500; i = i + 28) {
    food = createSprite(i, 165)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }

  for (var i = 50; i < 200; i = i + 28) {
    food = createSprite(30, i)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }

  for (var i = 50; i < 200; i = i + 28) {
    food = createSprite(570, i)
    food.addImage(ylwFoodImg)
    food.scale = .15
    foodGroup.add(food)
  }

  console.log(foodGroup)
  pacman = createSprite(300, 135)
  pacman.addImage("horizontal", pacmanImg);
  pacman.addImage("vertical", pacmanVImg)
  pacman.scale = 0.15

  orgGhost = createSprite(30, 30);
  orgGhost.addImage(orgGhostImg);
  orgGhost.scale = 0.25;

  redGhost = createSprite(570, 30);
  redGhost.addImage(redGhostImg);
  redGhost.scale = 0.25;

  pinkGhost = createSprite(30, 225);
  pinkGhost.addImage(pinkGhostImg);
  pinkGhost.scale = 0.25;

  blueGhost = createSprite(570, 225);
  blueGhost.addImage(blueGhostImg);
  blueGhost.scale = 0.25;

  //pacman = new Pacman();
  edges = createEdgeSprites();

  boundryGroup = createGroup();

  boundry1 = createSprite(400, 3.5, 800, 7);
  boundry1.shapeColor = "blue";
  boundryGroup.add(boundry1);

  boundry2 = createSprite(300, 270, 600, 10);
  boundry2.shapeColor = "blue";
  boundryGroup.add(boundry2);

  boundry3 = createSprite(5, 135, 10, 270);
  boundry3.shapeColor = "blue";
  boundryGroup.add(boundry3);

  boundry4 = createSprite(595, 135, 10, 270);
  boundry4.shapeColor = "blue";
  boundryGroup.add(boundry4);

  boundry5 = createSprite(150, 35, 10, 70);
  boundry5.shapeColor = "blue";
  boundryGroup.add(boundry5);

  boundry6 = createSprite(450, 35, 10, 70);
  boundry6.shapeColor = "blue";
  boundryGroup.add(boundry6);

  boundry7 = createSprite(150, 235, 10, 70);
  boundry7.shapeColor = "blue";
  boundryGroup.add(boundry7);

  boundry8 = createSprite(450, 235, 10, 70);
  boundry8.shapeColor = "blue";
  boundryGroup.add(boundry8);

  boundry9 = createSprite(300, 195, 150, 10);
  boundry9.shapeColor = "blue";
  boundryGroup.add(boundry9);

  boundry10 = createSprite(300, 75, 150, 10);
  boundry10.shapeColor = "blue";
  boundryGroup.add(boundry10);

  boundry11 = createSprite(100, 75, 40, 10);
  boundry11.shapeColor = "blue";
  boundryGroup.add(boundry11);

  boundry12 = createSprite(500, 75, 40, 10);
  boundry12.shapeColor = "blue";
  boundryGroup.add(boundry12);

  boundry13 = createSprite(100, 195, 40, 10);
  boundry13.shapeColor = "blue";
  boundryGroup.add(boundry11);

  boundry14 = createSprite(500, 195, 40, 10);
  boundry14.shapeColor = "blue";
  boundryGroup.add(boundry14);

  boundry15 = createSprite(85, 100, 10, 40);
  boundry15.shapeColor = "blue";
  boundryGroup.add(boundry15);

  boundry16 = createSprite(515, 100, 10, 40);
  boundry16.shapeColor = "blue";
  boundryGroup.add(boundry16);

  boundry17 = createSprite(85, 175, 10, 40);
  boundry17.shapeColor = "blue";
  boundryGroup.add(boundry17);

  boundry18 = createSprite(515, 175, 10, 40);
  boundry18.shapeColor = "blue";
  boundryGroup.add(boundry18);

  boundry18 = createSprite(300, 155, 90, 7);
  boundry18.shapeColor = "blue";
  boundryGroup.add(boundry18);

  boundry18 = createSprite(255, 138.5, 7, 40);
  boundry18.shapeColor = "blue";
  boundryGroup.add(boundry18);

  boundry18 = createSprite(345, 138.5, 7, 40);
  boundry18.shapeColor = "blue";
  boundryGroup.add(boundry18);

  // setTimeout(()=>{redGhost.setVelocity(2,0)},1000)

}



function draw() {
  background(0);
  textSize(20)
  fill("yellow")
  text("score =" + score,20,290)
  if (keyDown("left")) {
    pacman.velocityX = -3
    pacman.velocityY = 0
    pacman.mirrorX(-1)
    pacman.changeImage("horizontal", pacmanImg)
  }
  if (keyDown("right")) {
    pacman.velocityX = 3
    pacman.velocityY = 0
    pacman.mirrorX(1)
    pacman.changeImage("horizontal", pacmanImg)
  }
  if (keyDown("down")) {
    pacman.velocityX = 0
    pacman.velocityY = 3
    pacman.mirrorY(1)
    pacman.changeImage("vertical", pacmanVImg)
  }
  if (keyDown("up")) {
    pacman.velocityX = 0
    pacman.velocityY = -3
    pacman.changeImage("vertical", pacmanVImg)
    pacman.mirrorY(-1)
  }
  console.log(foodGroup.length)
  pacman.bounceOff(boundryGroup)
  pacman.overlap(foodGroup, destroyFood)

  drawSprites()

  /*var direction1 = pacman.getDirection()
  pinkGhost.setDirection(direction1)
  pinkGhost.setSpeed(pacman.getSpeed() + 2)

  redGhost.velocityX = pacman.velocityX
  redGhost.setSpeed(pacman.getSpeed() + 2)
  redGhost.velocityY = pacman.velocityY
  redGhost.setSpeed(pacman.getSpeed() + 2)

  orgGhost.velocityX = pacman.velocityX
  orgGhost.setSpeed(pacman.getSpeed() + 2)
  orgGhost.velocityY = pacman.velocityY
  orgGhost.setSpeed(pacman.getSpeed() + 2)

  blueGhost.velocityX = pacman.velocityX
  blueGhost.setSpeed(pacman.getSpeed() + 2)
  blueGhost.velocityY = pacman.velocityY
  blueGhost.setSpeed(pacman.getSpeed() + 2)*/

  pinkGhost.bounceOff(boundryGroup)

  blueGhost.bounceOff(boundryGroup)

  orgGhost.bounceOff(boundryGroup)

  redGhost.bounceOff(boundryGroup)


}

function destroyFood(p1, f1) {
  score++
  console.log(p1)
  f1.destroy()
  eatSound.play()
}