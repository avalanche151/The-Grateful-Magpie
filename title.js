class titleScene {
    gogo;
    goconst;
    team = 1;
    temp1 = true;
    off;
    threejo = [
        "b4jumpgamemountain",
        "howmoun",
        "jumpgamemountain",
        "b4answer",
        "answer",
        "b4door",
        "door",
        "b4spgame",
        "howsp",
        "spgame",
        "b4easy",
        "easyquestion",
        "aeasy",
        "ending",
    ];
    birdImg;
    birdImg2;
    titlebg;
    titles;
    d = 0;
    t = 0;
    a = 0;
    alpha;
    scale;
    tehm;
    showmaster;
    introsound;
    birdsound;
    preload(){
        this.introsound = loadSound("./data/introsound");
        this.birdsound = loadSound("./data/birdsound"); 
    }
    setup() {
        this.showmaster = false;
        this.gogo = 1;
        this.goconst = 15;
        this.tehm = 255;
        this.scale = 30;
        this.alpha = 0;
        this.birdImg = loadImage("./data/bird.png");
        this.birdImg2 = loadImage("./data/RIGHTkkachi.png");
        this.titlebg = loadImage("./data/titlebg.png");
        this.titles = loadImage("./data/title.png");
    }
    draw() {
        if (sub == 1) {
            this.temp1 = true;
            this.d = 0;
            this.t = 0;
            this.tehm = 255;
            this.scale = 30;
            this.introsound.stop();
            this.birdsound.stop();
            canNext = false;
            fill(0, this.alpha);
            rect(0, 0, width, height);
            this.alpha++;
            if (this.alpha == 100) {
                canNext = true;
                scene++;
                sub = 0;
            }
        } else if (sub == 0) {
            this.off = true;
            if (this.temp1) {
                this.introsound.loop();
                this.birdsound.loop();
                this.temp1 = false;
            }
            isFinished = false;
            if (this.d < width + 500) {
                this.d += 10;
                this.scale += 7;
            }
            image(this.titlebg, 0, this.t);
            if (this.scale > 300) {
                push();
                tint(this.tehm, 255);
                this.tehm -= 2;
                image(
                    this.birdImg2,
                    this.d,
                    height / 2 - 300,
                    this.scale,
                    this.scale
                );
                pop();
            } else {
                image(
                    this.birdImg,
                    this.d,
                    height / 2 - 300,
                    this.scale,
                    this.scale
                );
            }
            if (this.d > width && this.t > -1000) {
                this.t -= 3;
            }
            if (this.t < -1000) {
                tint(0, this.a);
                image(this.titles, 430, 10, 750, 500);
                tint(255, this.a);
                image(this.titles, 420, 0, 750, 500);
                this.a += 3;
            }
        }
        if (this.showmaster) {
            this.masterwindow();
        }
    }
    keyPressed() {
        if (key == "r" || key == "R") {
            this.showmaster = !this.showmaster;
        }
    }
    masterwindow() {
        this.gogo = constrain(this.gogo, 1, this.goconst);
        push();
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        fill(0, 0, 128);
        rect(width / 2, height / 2, 1000, 600);
        textSize(100);
        fill(255);
        text("Scene Shift", width / 2 + 200, height / 2 - 180);
        if (this.team == 1) {
            fill(40, 40, 255);
        } else {
            fill(120, 120, 255);
        }
        textSize(30);
        rect(width / 2 - 300, height / 2 - 150, 100, 100);
        if (this.team == 1) {
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        text("1", width / 2 - 300, height / 2 - 150);
        if (this.team == 2) {
            fill(40, 40, 255);
        } else {
            fill(120, 120, 255);
        }
        rect(width / 2 - 300, height / 2, 100, 100);
        if (this.team == 2) {
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        text("2", width / 2 - 300, height / 2);
        if (this.team == 3) {
            fill(40, 40, 255);
        } else {
            fill(120, 120, 255);
        }
        rect(width / 2 - 300, height / 2 + 150, 100, 100);
        if (this.team == 3) {
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        text("3", width / 2 - 300, height / 2 + 150);
        fill(120, 120, 255);
        rect(width / 2 + 400, height / 2, 100, 100);
        fill(255);
        text(">", width / 2 + 400, height / 2);
        fill(120, 120, 255);
        rect(width / 2, height / 2, 100, 100);
        fill(255);
        text("<", width / 2, height / 2);
        textSize(60);
        text(this.gogo, width / 2 + 200, height / 2);
        fill(120, 120, 255);
        rect(width / 2 + 200, height / 2 + 150, 500, 100);
        fill(255);
        text("go", width / 2 + 200, height / 2 + 150);
        pop();
    }
    mouseReleased() {
        if (
            this.showmaster &&
            mouseX > width / 2 - 50 &&
            mouseX < width / 2 + 50 &&
            mouseY > height / 2 - 50 &&
            mouseY < height / 2 + 50
        ) {
            this.gogo--;
        }
        if (
            this.showmaster &&
            mouseX > width / 2 + 350 &&
            mouseX < width / 2 + 450 &&
            mouseY > height / 2 - 50 &&
            mouseY < height / 2 + 50
        ) {
            this.gogo++;
        }
        if (
            this.showmaster &&
            mouseX > width / 2 - 350 &&
            mouseX < width / 2 - 250 &&
            mouseY > height / 2 - 200 &&
            mouseY < height / 2 - 100
        ) {
            this.team = 1;
            this.goconst = 15;
        }
        if (
            this.showmaster &&
            mouseX > width / 2 - 350 &&
            mouseX < width / 2 - 250 &&
            mouseY > height / 2 - 50 &&
            mouseY < height / 2 + 50
        ) {
            this.team = 2;
            this.goconst = 27;
        }
        if (
            this.showmaster &&
            mouseX > width / 2 - 350 &&
            mouseX < width / 2 - 250 &&
            mouseY > height / 2 + 100 &&
            mouseY < height / 2 + 200
        ) {
            this.team = 3;
            this.goconst = 14;
        }
        if (
            this.showmaster &&
            mouseX > width / 2 - 50 &&
            mouseX < width / 2 + 450 &&
            mouseY > height / 2 + 100 &&
            mouseY < height / 2 + 200 &&
            this.off
        ) {
            this.introsound.stop();
            this.birdsound.stop();
            this.temp1 = true;
            this.d = 0;
            this.t = 0;
            this.tehm = 255;
            this.scale = 30;
            if (this.team == 1) {
                scene = this.gogo;
                this.off = false;
            }
            if (this.team == 2) {
                Team = 1;
                scenenumber = this.gogo - 2;
                this.off = false;
            }
            if (this.team == 3) {
                Team = 2;
                main_scene_code = this.threejo[this.gogo - 1];
                this.off = false;
            }
        }
    }
}
