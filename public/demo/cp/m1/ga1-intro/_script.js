window.onload = function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  console.log('loaded');
}

const mouse = {
  x: 100,
  y: 1000,
}

// window.addEventListener('mousemove', function(e){
//   mouse.x = e.x;
//   mouse.y = e.y;
// });



class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  #count;
  #radius;
  constructor(ctx, width, height, gradient) {
      this.#ctx = ctx;
      this.#ctx.lineWidth = 0.3;
      this.#width = width;
      this.#height = height;
      this.gradient;
      this.#createGradient();
      this.#ctx.strokeStyle = this.gradient;
      this.#radius = 1.9;
      this.vr = 0.03;
      this.#mapField();
      this.timer = 0;
      this.cellSize = 10;
      this.interval = 1000/60;
      this.timer = 0;
      this.lastTime = 0;
  }
  #createGradient(){
      this.gradient = this.#ctx.createLinearGradient(0, 0,this.#width, this.#height);
      this.gradient.addColorStop("0.1","#ff5c33");
      this.gradient.addColorStop("0.2", "#ff66b3");
      this.gradient.addColorStop("0.4", "#ccccff");
      this.gradient.addColorStop("0.6", "#b3ffff");
      this.gradient.addColorStop("0.8", "#80ff80");
      this.gradient.addColorStop("0.9", "#ffff33");
  }
  #mapField(timeStamp){
      let deltaTime = timeStamp - this.lastTime;
      this.lastTime = timeStamp;

      if (this.timer > this.interval){
          this.#ctx.clearRect(0,0,this.#width, this.#height);
          this.#radius += this.vr;
          if (this.#radius > 5  || this.#radius < -5) this.vr *= -1
          for (let y = 0; y < this.#height; y+= this.cellSize){
              for (let x = 0; x < this.#width; x += this.cellSize){
                  const angle = this.#getValue(x, y);
                  this.#draw(angle,x,y);
              }
          }
          this.timer = 0;
      } else {
          this.timer += deltaTime;
      }

      requestAnimationFrame(this.#mapField.bind(this));

  }
  #getValue(x, y){
      return (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.#radius;
  }
  #draw(angle,x,y){
      let positionX = x;
      let positionY = y;
      // let dx = mouse.x - positionX;
      // let dy = mouse.y - positionY;
      // let distance = (dx * dx + dy * dy);
      // let length = distance > 150000 ? distance : 150000;
      // if (length > 900000) length = 900000;
      this.#ctx.beginPath();
      this.#ctx.moveTo(positionX,positionY);
      this.#ctx.lineTo(positionX + Math.cos(angle) * 50, positionY + Math.sin(angle) * 50);
      
      this.#ctx.stroke();
  }
}