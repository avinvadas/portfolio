const random = require('canvas-sketch-util/random');
const risoColors= require('riso-colors');
const eases = require('eases');

const particles = [];
const dotColors = [
  random.pick(risoColors),
  random.pick(risoColors),
  random.pick(risoColors)
];
let canvas = document.getElementById('hero_visual');
let elCanvas = canvas;
let width = 400;
let height = 400;
let context = canvas.getContext('2d');

const cursor = { x:9999, y:9999};

function init(){
  canvas.width = width;
  canvas.height= height;

  const numCircles= 10;
  let dotRadius = 6;
  let cirRadius = 0;
  const fitRadius = dotRadius;
  const gapCircle = 4;
  const gapDot = 2;
  let x, y, particle, radius;
  let pos= [];
  elCanvas= canvas;
  elCanvas.addEventListener('mouseover', onMouseOver);
  for(let i = 0; i<numCircles; i++){
    const circumference = Math.PI * 2 * cirRadius;
    const numFit = i ? Math.floor(circumference / (fitRadius*2+ gapDot)): 1;
    const fitSlice = Math.PI *2 / numFit;
    for(let j = 0; j<numFit; j++){
      const theta = fitSlice * j;
      x= Math.cos(theta)* cirRadius;
      y= Math.sin(theta)* cirRadius;

      x+= width * 0.5;
      y+= height * 0.5;
      radius = dotRadius;
      particle = new Particle({x,y,radius});
      particles.push(particle);
    }
    cirRadius += fitRadius *2 +gapCircle;
    dotRadius = (1-eases.quadOut (i / numCircles)) * fitRadius;
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    particles.forEach(particle => {
      particle.update();
      particle.draw(context);
    });
  };
}

const onMouseOver=(e)=>{
  elCanvas.addEventListener('mousemove', onMouseMove);
  elCanvas.addEventListener('mouseleave', onMouseLeave);
  elCanvas.addEventListener('mouseup', onMouseUp);
  onMouseMove(e);

}
const onMouseMove = (e)=>{
  const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
  const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height
  cursor.x=x;
  cursor.y=y;
  
}
const onMouseLeave = ()=>{
  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('mouseleave', onMouseLeave);

  cursor.x = 9999;
  cursor.y = 9999;
}
const onMouseUp = ()=>{
  //canvas.removeEventListener('mousemove', onMouseMove);
  //canvas.removeEventListener('mouseleave', onMouseLeave);

  cursor.x = 9999;
  cursor.y = 9999;
}


class Particle{
  constructor({ x, y, radius=10}){
    //position
    this.x = x;
    this.y = y;
    //acceleration
    this.ax = 0;
    this.ay = 0;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //initial position
    this.ix = x;
    this.iy = y;
    this.radius = radius;
    this.minDist = random.range(50,100);
    this.pushFactor = random.range(0.01,0.02);
    this.pullFactor = random.range(0.004,0.006);
    this.dampFactor = random.range(0.85 , 0.95);
    //color
    this.dotColor=random.pick(dotColors).hex;

  }
  update(){
    let dx, dy, dd, distDelta;
    //pull force
    dx = this.ix - this.x;
    dy = this.iy - this.y
    this.ax = dx * this.pullFactor;
    this.ay = dy * this.pullFactor;
    //push force
    dx = this.x - cursor.x;
    dy = this.y - cursor.y;
    dd = Math.sqrt(dx * dx + dy * dy);

    distDelta = this.minDist - dd;
    if(dd < this.minDist){
      this.ax += (dx/dd) * distDelta * this.pushFactor;
      this.ay += (dy/dd) * distDelta * this.pushFactor;;
    }

    this.vx+= this.ax;
    this.vy+= this.ay;

    this.vx *= this.dampFactor;
    this.vy *= this.dampFactor;

    this.x += this.vx;
    this.y += this.vy;
  }
  draw(context){
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle= this.dotColor;
    context.beginPath();
    context.arc(0,0,this.radius,0, Math.PI *2);
    context.fill();
    context.restore();

  }
}
function redrawCanvas(){
  context.clearRect(0,0,width,height);
  particles.forEach(particle => {
    particle.update();
    particle.draw(context);
  });
}
function animate(){
  redrawCanvas();
  requestAnimationFrame(animate);
}

init();
animate();
