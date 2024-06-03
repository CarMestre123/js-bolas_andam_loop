let cor;
let circuloY
let circuloX

function setup() {
  createCanvas(400, 400);
    cor=color(random(0,255),random(0,255),random(0,255))
  circuloX = [0, 0, 0]
circuloY = [random(height), random(height), random(height)]
}



function draw() {
  background(220);
  
  for(let contador in circuloX){
    circle(circuloX[contador],circuloY[contador], 50)
    circuloX[contador]+= random(0,3)
    circuloY[contador]+= random(-3,3)
    if(circuloX[contador] >=width + 50){
      circuloX[contador] =-50
    }
  }
  
  fill(cor)
  if(mouseIsPressed){
    cor=color(random(0,255), random(0,255), random(0,255),random(0,100))
  }
}