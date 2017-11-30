(function () {

    // Will it be a storm or peaceful?
    var COUNT = 250;

    // Get our cotaniner
    var snowContainer = document.querySelector('.snowContainer');

    // Create the canvas element
    var canvas = document.getElementById('snow-canvas');
    var ctx = canvas.getContext('2d');

    // Get the size of the container, that's why we defined the height in the HTML
    var width = snowContainer.clientWidth;
    var height = snowContainer.clientHeight;
    var i = 0;
    var active = false;

    function onResize() {
        width = snowContainer.clientWidth;
        height = snowContainer.clientHeight;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = '#FFF';

        requestAnimFrame(update);
    }

    var Snowflake = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
    }

    // You can set up the
    Snowflake.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // More speed? Change this
        this.vy =Math.random()*.25;
        this.vx = this.vy*.35;

            // Bigger snow?
            this.r = Math.random()+.5;
            this.o = 0.5 + Math.random();
    }

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    var snowflakes = [],
        snowflake;
    for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {

        ctx.clearRect(0, 0, width, height);

        for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        requestAnimFrame(update);
    }

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);

    snowContainer.appendChild(canvas);
})();

(function() {
      var quotes = [
        {
          text: "'I never sleep, 'cause sleep is the cousin of death'",
          author: "Nas"
        },
        {
          text: "'Name one genius that ain't crazy'",
          author: "Kanye"
        },
        {
          text: "'5 more minutes'",
          author: "Me this morning"
        },
        {
          text: "'The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It''",
          author: "'Chinese Proverb'"
        },
        {
          text:"'I'm not a business man, I'm a business, man'",
          author:"Jay-Z"
        },
        {
          text:"Please upgrade your plan to see this quote",
          author:"Comcast"
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        quote.text;
      document.getElementById("author").innerHTML =
        quote.author;
    })();
