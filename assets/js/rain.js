let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d");

function RainDrop(x_param, y_param, endY_param, speed_param, opacity_param) {
    this.x = x_param;
    this.y = y_param;
    this.endY = endY_param;
    this.speed = speed_param;
    this.opacity = opacity_param;

    this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.endY);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        c.stroke();
    };
    this.updated = function () {
        let rainEnd = window.innerHeight;
        if (this.y >= rainEnd) {
            this.y = this.endY - 100;
        }
        else {
            this.y = this.y + this.speed;
        }
        this.draw();
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let rainDropMass = [];
for (let i = 0; i < 1000; i++) {
    let randomX = random(0, window.innerWidth);
    let randomY = random(0, window.innerHeight);
    let dropHeight = random(10, 20)
    let speed = random(1, 10)
    let opacity = Math.random()
    rainDropMass.push(new RainDrop(randomX, randomY, dropHeight, speed, opacity));
}
//rainDropMass.forEach((element) => {
//    element.draw();
//})
function animateRain() {
    requestAnimationFrame(animateRain);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    rainDropMass.forEach((drop) => {
        drop.updated();
    });
}
animateRain();

