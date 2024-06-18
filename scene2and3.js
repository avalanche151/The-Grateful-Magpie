class Scene2and3 {
    birdImg;
    bgImg;
    tree1;
    tree2;
    nestImg;
    snakeImg;
    magpie1;
    magpie2;
    magpie3;
    imgX;
    imgY;
    imgWidth;
    imgHeight;
    imgS;
    speedX;
    speedY;
    flipped;
    sflipped;
    nestX;
    nestY;
    nestWidth;
    nestHeight;
    scene = 0;
    snakeX;
    snakeY;
    y1;
    d;
    dy;
    angle;
    a;
    ad;
    setup() {
        this.a = 50;
        this.ad = 1;
        this.magpie1 = loadImage("./data/magpie1.png");
        this.magpie2 = loadImage("./data/magpie2.png");
        this.magpie3 = loadImage("./data/magpie3.png");
        this.bgImg = loadImage("./data/background2.png");
        this.birdImg = loadImage("./data/bird.png");
        this.tree1 = loadImage("./data/tree1.png");
        this.tree2 = loadImage("./data/tree2.png");
        this.nestImg = loadImage("./data/nest.png");
        this.snakeImg = loadImage("./data/shead.png");
        this.imgX = 400;
        this.imgY = 300;
        this.imgWidth = 750;
        this.imgHeight = 500;
        this.speedX = 5;
        this.speedY = 10;
        this.flipped = false;
        this.nestX = 200;
        this.nestY = 200;
        this.nestWidth = 250;
        this.nestHeight = 200;
        this.d = 5;
        this.dy = 0;
        this.snakeX = 400;
        this.snakeY = 630;
        this.y1 = 800;
    }
    drawScene1() {
        push();
        image(this.bgImg, 0, 0);
        if (frameCount % 30 < 15) {
            image(this.tree1, 0, 0);
        } else if (frameCount % 30 >= 15) {
            image(this.tree2, 0, 0);
        }
        image(this.snakeImg, 400, this.y1);
        if (this.y1 > 630) {
            this.y1 -= 0.5;
        }
        rectMode(CENTER);
        this.imgX += this.speedX;
        this.imgY += 15 * sin(this.speedY);
        this.speedY += 0.1;
        if (this.imgX <= 0 || this.imgX + this.imgWidth >= 1200) {
            this.speedX = -this.speedX;
            this.flipped = !this.flipped;
        }
        if (this.flipped) {
            push();
            translate(this.imgX + this.imgWidth, this.imgY);
            scale(-1, 1);
            if (frameCount % 15 <= 5) {
                image(this.magpie1, 0, 0, this.imgWidth, this.imgHeight);
            } else if (frameCount % 15 > 5 && frameCount % 15 <= 10) {
                image(this.magpie2, 0, 0, this.imgWidth, this.imgHeight);
            } else if (frameCount % 15 > 10) {
                image(this.magpie3, 0, 0, this.imgWidth, this.imgHeight);
            }
            pop();
        } else {
            if (frameCount % 15 <= 5) {
                image(
                    this.magpie1,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            } else if (frameCount % 15 > 5 && frameCount % 15 <= 10) {
                image(
                    this.magpie2,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            } else if (frameCount % 15 > 10) {
                image(
                    this.magpie3,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            }
        }
        pop();
    }
    drawScene2() {
        push();
        image(this.bgImg, 0, 0);
        if (frameCount % 10 < 5) {
            image(this.tree1, random(-2, 2), 0);
        } else if (frameCount % 10 >= 5) {
            image(this.tree2, random(-2, 2), 0);
        }
        rectMode(CENTER);
        this.imgX += 5 * this.speedX;
        this.imgY += 15 * sin(this.speedY);
        this.speedY += 0.1;
        if (this.imgX <= 0 || this.imgX + this.imgWidth >= 1200) {
            this.speedX = -this.speedX;
            this.flipped = !this.flipped;
        }
        if (this.flipped) {
            push();
            translate(this.imgX + this.imgWidth, this.imgY);
            scale(-1, 1);
            if (frameCount % 15 <= 5) {
                image(this.magpie1, 0, 0, this.imgWidth, this.imgHeight);
            } else if (frameCount % 15 > 5 && frameCount % 15 <= 10) {
                image(this.magpie2, 0, 0, this.imgWidth, this.imgHeight);
            } else if (frameCount % 15 > 10) {
                image(this.magpie3, 0, 0, this.imgWidth, this.imgHeight);
            }
            pop();
        } else {
            if (frameCount % 15 <= 5) {
                image(
                    this.magpie1,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            } else if (frameCount % 15 > 5 && frameCount % 15 <= 10) {
                image(
                    this.magpie2,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            } else if (frameCount % 15 > 10) {
                image(
                    this.magpie3,
                    this.imgX,
                    this.imgY,
                    this.imgWidth,
                    this.imgHeight
                );
            }
        }
        if (this.snakeX <= 200 || this.snakeX + 200 >= 1000) {
            this.d = -this.d;
            this.sflipped = !this.sflipped;
        }
        this.snakeX += 1 * this.d;
        this.snakeY += 2 * sin(this.dy);
        this.dy += 0.1;
        if (this.sflipped) {
            push();
            translate(2 * this.snakeX + 200, 0);
            scale(-1, 1);
            image(this.snakeImg, this.snakeX, this.snakeY);
            pop();
        } else {
            push();
            image(this.snakeImg, this.snakeX, this.snakeY);
            pop();
        }
        fill(255, 0, 0, this.a);
        this.a += this.ad;
        if (this.a < 30 || this.a > 70) {
            this.ad *= -1;
        }
        rect(width / 2, height / 2, width, height);
        pop();
    }
}
