var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle = 'blue';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(500, 300, 100, 100);

// //Lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 150);
// c.lineTo(450, 600);
// c.lineTo(50, 300);
// c.strokeStyle = 'red';
// c.stroke();

//arc / circle
// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2 , false);
// c.strokeStyle = 'purple';
// c.stroke();

// for(var i = 0; i < 50; i++ ) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 20, 0, Math.PI * 2 , false);
//     c.strokeStyle = 'purple';
//     c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2 , false);
// c.strokeStyle = 'purple';
// c.stroke();



function Circle(x, y, dx, dy, radius, color, border){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.border = border
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2 , false);
        c.strokeStyle = this.border;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 500; i++){
    var radius = 30; 
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y =  Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 8;
    var dx = (Math.random() - 0.5) * 8;
    var colorRandom = "rgba(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + "," + Math.random() + ")";
    var border = "rgba(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + "," + Math.random() + ")";
    
    circleArray.push(new Circle(x, y, dx, dy, radius, colorRandom, border));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);  
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();