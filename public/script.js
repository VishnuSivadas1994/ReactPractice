const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
let hue = Math.random() * 360;

// window.addEventListener('resize', function () {
//     //Fixing the canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

///GLOBAL
let number = 0;
let scale = 10;

function flowerLogic() {
    let angle = number * 8.2;
    let radius = scale * Math.sqrt(number);

    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    circleObject(positionX, positionY);


    number++;
    hue += 0.5;
}

function circleObject(x, y) {
    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

///

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowerLogic();
    if (number > 1000) return;

    requestAnimationFrame(animate);
}

animate();