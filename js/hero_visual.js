const particles = [];
let canvas = document.getElementById('hero_visual');
let elCanvas = canvas;
let width = canvas.width;
let height = canvas.height;
let context = canvas.getContext('2d');
const cursor = { x:9999, y:9999};





function init(){

  let x, y, particle;
  window.addEventListener('mouseover', onMouseOver);
  window.addEventListener('mouseleave', onMouseLeave);
  window.addEventListener('mousemove', onMouseMove);
  for (let i=0; i<1; i++){
    x= width * 0.5;
    y= height * 0.5;
    particle = new Particle({ x, y });
    particles.push(particle);
  }
    context.fillStyle = 'transparent';
    context.fillRect(0,0,width,height);


}

const onMouseOver= (e) =>{
onMouseMove(e);
}
const onMouseLeave = (e)=>{
   //cursor = { x:9999, y:9999};
}
const onMouseMove= (e) =>{
  const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
  const y = (e.offsetY/ elCanvas.offsetHeight) * elCanvas.height;
  cursor.x = x;
  cursor.y = y;
  console.log(cursor);
}
class Particle{
  constructor({ x, y, radius = 10}){
    //position
    this.x = x;
    this.y = y;
    //initial position
    this.ix = this.x;
    this.iy = this.y;
    //acceleration
    this.ax = 0;
    this.ay = 0;
    //velocity
    this.vx=0;
    this.vy=0;
    //radius
    this.radius = radius;
    this.minDist = 100;
    this.pushFactor= 0.01;
  }
  update(){
    let dx, dy, dd, distDelta;

    dx = this.x - cursor.x;
    dy = this.y - cursor.y;
    dd = Math.sqrt(dx * dx + dy * dy);

    distDelta = this.minDist - this.dd;
    console.log(dx+" "+dy+" "+dd+" "+distDelta);
    if (dd < this.minDist){
      this.ax = (dx/dd) * distDelta * this.pushFactor;
      this.ay = (dy/dd) * distDelta * this.pushFactor;
    }

    this.vx += this.ax;
    this.vy += this.ay;

    this.x += this.vx;
    this.y += this.vy;
  }
  draw(context){
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle= 'black';
    context.beginPath();
    context.arc(0,0,this.radius,0, Math.PI*2);
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
