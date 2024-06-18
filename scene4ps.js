let winarr;
class Scene4 {
    x = 0;
    y = 0;
    resPower = 0;
    power = 0;
    arrowX = 0;
    arrowY = 0;
    isArrowLaunched = false;
    dy = 0;
    dz = 0;
    g = 1.00002;
    isArrived = false;
    resarrowY = 0;
    canfire = true;
    snakeupward;
    treebackground;
    winbackground;
    retrybackground;
    bg;
    ring;
    howtoplay;
    ishit;
    moveparallel = 400;
    gameFinished = -1;
    hitcount = 0;
    alpha;
    a;
    ringY;
    dr;
    temp1 = true;
    temp2 = true;
    svol = 0;
    arr;
    bgm;
    constructor(p) {
       
    }
    sx = [0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0];
    sy = [0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0];

    segLength = 20;
    snakeX;
    snakeY;
    smoveparallel = 200;
    moveSpeed = 2;
    angle;
    snake = new Array(3);
    preload(){
        winarr = loadSound("./data/winarr");
        this.arr = loadSound("./data/arrowsound");
        this.bgm = loadSound("./data/arrowbgm");
    }
    setup() {
        this.alpha = 125;
        this.a = 1;
        this.ringY = 0;
        this.dr = 0.8;
        this.bg = loadImage("./data/숲배경.png");
        this.snakeupward = loadImage("./data/smallsnake.png");
        this.treebackground = loadImage("./data/treebackground.png");
        this.winbackground = loadImage("./data/winbackground.png");
        this.retrybackground = loadImage("./data/retrybackground.png");
        this.howtoplay = loadImage("./data/howtoplayarr.png");
        this.ring = loadImage("./data/ring.png");
        this.hitcount = 0;
        this.gameFinished = -1;
        this.snake[0] = loadImage("./data/snake_head.png");
        this.snake[1] = loadImage("./data/snake_body.png");
        this.snake[2] = loadImage("./data/snake_tail.png");
        this.snakeX = width / 2 - 500;
        this.snakeY = height + 500;
    }
    draw() {
        push();
        if (this.gameFinished == 0) {
            this.svol += 0.01;
            this.svol = constrain(this.svol, 0, 0.7);
            this.bgm.amp(this.svol);
            if (this.temp2) {
                this.bgm.loop();
                this.temp2 = false;
            }
            image(this.bg, 0, 0);
            image(this.treebackground, 0, 0);
            this.Snake();
            this.target();
            this.arrow();
            this.gauge();
            if (this.ishit) {
                push();
                textSize(48);
                fill(255, 0, 0);
                text("hit!", 1000, 200);
                pop();
            }
            this.snakeY -= 1;
        } else if (this.gameFinished == 1) {
            this.win();
            this.bgm.stop();
            this.svol = 0;
            this.temp2 = true;
        } else if (this.gameFinished == 2) {
            this.fail();
            this.bgm.stop();
            this.svol = 0;
            this.temp2 = true;
        } else if (this.gameFinished == -1) {
            this.howto();
        }
        if (this.snakeY < -300) {
            this.gameFinished = 2;
            this.snakeY = height;
        }
        if (this.hitcount > 5) {
            this.gameFinished = 1;
        }
        if (this.gameFinished == 1) {
            //1이 승리 조건, 2가 패배 조건, 씬 넘기기는 이곳에서 조정
            isFinished = true;
        } else {
            isFinished = false;
        }
        pop();
    }
    win() {
        if (sstart) {
            winarr.play();
            sstart = false;
        }
        push();
        textAlign(CENTER);
        textSize(100);
        image(this.winbackground, 0, 0);
        push();
        this.alpha -= 2;
        this.ringY -= 0.8;
        if (this.ringY < -50) {
            this.alpha = 125;
            this.ringY = 0;
        }
        tint(255, this.alpha);
        image(this.ring, 0, this.ringY);
        pop(); //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        subtitle(
            "A snake hit by arrows and falls to the floor.",
            "Narrator",
            "#ffffff"
        ); //text("A snake hit by arrows and falls to the floor.", 60, 700);
        pop();
    }
    fail() {
        push();
        fill(255,0,0);
        textAlign(CENTER, CENTER);
        textSize(100);
        image(this.retrybackground, 0, 0);
        text("Fail!", width / 2 + 450, height / 2 + 250);
        textSize(50);
        text("Click to retry", width / 2 + 400, height / 2 + 330);
        pop();
    }
    target() {
        this.x = lerp(this.x, mouseX, 0.01);
        this.y = lerp(this.y, mouseY, 0.01);
        push();
        fill(0, 0, 0, 0);
        strokeWeight(1);
        ellipse(this.x, this.y, 80, 80);
        line(this.x - 60, this.y, this.x - 20, this.y);
        line(this.x + 60, this.y, this.x + 20, this.y);
        line(this.x, this.y - 60, this.x, this.y - 20);
        line(this.x, this.y + 60, this.x, this.y + 20);
        pop();
    }
    gauge() {
        push();
        rectMode(CENTER);
        fill(255);
        rect(width / 2, height - 40, 500, 20);
        pop();
    }
    mousePressed() {
        push();
        rectMode(CENTER);
        fill(255, 0, 0);
        if (this.canfire && mouseIsPressed && this.gameFinished == 0) {
            rect(width / 2, height - 40, (this.power % 100) * 5, 20);
            this.power += 1;
            this.ishit = false;
        }
        pop();
    }
    mouseReleased() {
        if (this.canfire) {
            if (this.temp1) {
                this.arr.play();
                this.temp1 = false;
            }
            this.resPower = this.power % 100;
            this.power = 0;
            this.arrowX = this.x;
            this.arrowY = this.y;
            this.isArrowLaunched = true;
            this.dy = 0;
            this.dz = 0;
            this.canfire = false;
        }
    }
    arrow() {
        if (this.isArrowLaunched) {
            this.dy = this.dy * this.g + 5 - 0.05 * this.resPower;
            this.dz = this.dz * this.g + 0.1 + 0.002 * this.resPower;
            this.resarrowY = this.arrowY + this.dy;
            push();
            fill(255);
            rectMode(CENTER);
            rect(this.arrowX, this.arrowY + this.dy, 5 / this.dz, 80 / this.dz);
            rect(this.arrowX, this.arrowY + this.dy, 80 / this.dz, 5 / this.dz);
            fill(139, 69, 19); // brown color
            ellipse(
                this.arrowX,
                this.arrowY + this.dy,
                30 / this.dz,
                30 / this.dz
            );
            pop();
            if (30 / this.dz < 4) {
                this.isArrived = true;
            }
            if (30 / this.dz < 3.5) {
                this.arr.stop();
                this.temp1 = true;
                this.ishit = false;
                this.isArrived = false;
                this.isArrowLaunched = false;
                this.canfire = true;
            }
        }
    }
    Snake() {
        this.snakeX = lerp(this.snakeX, this.moveparallel, 0.01);
        if (this.snakeY > height) {
            this.snakeY -= 2;
        } else {
            this.snakeY -= 0.01;
        }
        if (frameCount % 60 == 0) {
            this.moveparallel = random(100, width - 100);
        }
        for (let i = 0; i < this.sx.length-1; i++) {
            if (i == this.sx.length - 2) {
                this.dragSegment(
                    i + 1,
                    this.sx[i],
                    this.sy[i],
                    2,
                    50 - i * 0.7,
                    50 - i * 0.7
                );
            } else {
                this.dragSegment(
                    i + 1,
                    this.sx[i],
                    this.sy[i],
                    1,
                    50 - i * 0.7,
                    50 - i * 0.7
                );
            }
            this.dragSegment(0, this.snakeX, this.snakeY, 0, 70, 70);
            if (this.isArrived) {
                if (
                    this.arrowX < this.sx[i] + (50 - i * 0.3) / 2 &&
                    this.arrowX > this.sx[i] - (50 - i * 0.3) / 2 &&
                    this.resarrowY > this.sy[i] - (50 - i * 0.3) / 2 &&
                    this.resarrowY < this.sy[i] + (50 - i * 0.3) / 2
                ) {
                    this.ishit = true;
                    this.arr.stop();
                    this.temp1 = true;
                    this.hitcount++;
                    this.isArrived = false;
                    this.isArrowLaunched = false;
                    this.canfire = true;
                }
            }
        }
    }
    mouseClicked() {
        if (this.gameFinished == 2) {
            this.setup();
            this.gameFinished = 0;
        }
        if (this.gameFinished == -1) {
            this.gameFinished = 0;
        }
    }
    dragSegment(i, xin, yin, go, Xscale, Yscale) {
        let dx = xin - this.sx[i];
        let dy = yin - this.sy[i];
        let angle = atan2(dy, dx);
        this.sx[i] = xin - cos(angle) * this.segLength;
        this.sy[i] = yin - sin(angle) * this.segLength;
        this.segment(this.sx[i], this.sy[i],angle, go, Xscale, Yscale);
    }
    segment(x, y, a, go, Xscale, Yscale) {
        push();
        push();
        translate(x, y);
        rotate(a);
        imageMode(CENTER);
        image(this.snake[go], this.segLength, 0, Xscale, Yscale);
        pop();
        pop();
    }
    howto() {
        push();
        image(this.howtoplay, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text("Move mouse to aim", width / 2 + 300, 300);
        text("Click & Hold to draw", width / 2 + 300, 400);
        text("Release to shoot", width / 2 + 300, 500);
        text("Fill the gauge to shoot precisely", width / 2, 700);
        text("Click to play", width / 2 + 430, 750);
        pop();
    }
}
