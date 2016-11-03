$(function() {


    var mainCanvas = document.getElementById("myCanvas");
    var mainContext = mainCanvas.getContext('2d');
    mainCanvas.width = $('div#container').width();
    var circles = [];

    function Circle(radius, speed, width, xPos, yPos) {
        this.radius = radius;
        this.speed = speed;
        this.width = width;
        this.xPos = xPos;
        this.yPos = yPos;
        this.opacity = .05 + Math.random() * .5;

        this.counter = 0;

        var signHelper = Math.floor(Math.random() * 2);

        if (signHelper == 1) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }
    }

    Circle.prototype.update = function() {
        this.counter += this.sign * this.speed;

        mainContext.beginPath();
        mainContext.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
            this.yPos + Math.sin(this.counter / 100) * this.radius,
            this.width,
            0,
            Math.PI * 2,
            false);

        mainContext.closePath();

        mainContext.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')';
        //mainContext.fillStyle = 'rgb(255, 255,' + this.opacity +')';

        mainContext.fill();
    };

    function setupCircles() {
        for (var i = 0; i < 100; i++) {
            var randomX = Math.round(-200 + Math.random() * $('div#container').width());
            var randomY = Math.round(-200 + Math.random() * $('div#container').width());
            var speed = .2;
            var size = 2;
            var radius = 100 + Math.random() * 100;

            var circle = new Circle(radius, speed, size, randomX, randomY);
            circles.push(circle);
        }
        drawAndUpdate();
    }
    setupCircles();

    function drawAndUpdate() {
       //This makes the circle 
       mainContext.clearRect(0, 0, $('div#container').width(), 500);

        for (var i = 0; i < circles.length; i++) {

            var myCircle = circles[i];
            myCircle.update();
        }

        requestAnimationFrame(drawAndUpdate);
    }
    //Set the size of the canvas to the size of the container 
    $(window).resize(function() {
       mainCanvas.width = $('div#container').width();

    });

});