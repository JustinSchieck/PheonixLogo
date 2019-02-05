var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'green';
c.fillRect(500, 300, 100, 100);

//Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 150);
c.lineTo(450, 600);
c.lineTo(50, 300);
c.strokeStyle = 'red';
c.stroke();

//arc / circle
// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2 , false);
// c.strokeStyle = 'purple';
// c.stroke();

for(var i = 0; i < 50; i++ ) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 20, 0, Math.PI * 2 , false);
    c.strokeStyle = 'purple';
    c.stroke();
}