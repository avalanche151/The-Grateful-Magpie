// [processing-p5-convert] import processing.sound.*;
let sstart, splay;
class Story {
    s = new Array(27);
    kkachisound;
    ssnake;
    constructor(p) {
        for (let i = 1; i < this.s.length; i++) {
            this.s[i] = loadSound("s1" + i + ".mp3");
        }
        this.kkachisound = loadSound("kkachisound.mp3");
        this.ssnake = loadSound("snake.mp3");
    }
    sscene;
    cob;
    arrow;
    back;
    righthand;
    exscene1;
    exscene2;
    ms22;
    ms110;
    ms111;
    ms112;
    ms113;
    ms3seonbi;
    ms11;
    ms12;
    a = 50;
    d = 0.7;
    seonbiY = 25;
    seonbid = 1;
    sx;
    sy;
    ssy;
    g = 0.1;
    scx;
    scy;
    c;
    e = 0;
    setup() {
        sstart = true;
        splay = false;
        this.scx = 1200;
        this.scy = 800;
        this.sx = 0;
        this.sy = 0;
        this.c = 4;
        this.ssy = -3;
        this.arrow = loadImage("arrow.png");
        this.back = loadImage("숲배경.png");
        this.righthand = loadImage("righthand.png");
        this.exscene1 = loadImage("middleStory10-1.png");
        this.exscene2 = loadImage("middleStory10-2.png");
        this.ms11 = loadImage("middleStory1-1.png");
        this.ms12 = loadImage("middleStory1-2.png");
        this.ms22 = loadImage("middleStory2-2.png");
        this.ms3seonbi = loadImage("ms3seonbi.png");
        this.ms110 = loadImage("middleStory11-0.png");
        this.ms111 = loadImage("middleStory11-1.png");
        this.ms112 = loadImage("middleStory11-2.png");
        this.ms113 = loadImage("middleStory11-3.png");
        this.sscene = new Array(14);
        for (let i = 1; i < 14; i++) {
            this.sscene[i] = loadImage("middleStory" + i + ".png");
        }
        this.cob = new Array(5);
        for (let i = 1; i < 5; i++) {
            this.cob[i] = loadImage("cob" + i + ".png");
        }
    }
    story1() {
        push();
        image(this.sscene[1], 0, 0);
        if (frameCount % 150 >= 75) {
            image(this.ms11, 0, this.seonbiY * 0.7);
        } else if (frameCount % 150 < 75) {
            image(this.ms12, 0, this.seonbiY * 0.7);
        }
        if (this.seonbiY < 0 || this.seonbiY > 50) {
            this.seonbid = -this.seonbid;
        }
        this.seonbiY += this.seonbid; //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            subtitle("Once upon a time...", "Narrator", "#ffffff");
            if (sstart) {
                //audio set
                this.s[1].cue(0);
                this.s[1].play();
                sstart = false;
            } //text("Once upon a time...", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[1].stop();
                this.s[2].cue(0);
                this.s[2].play();
                sstart = false;
            }
            subtitle(
                "The seonbi goes on the road to take the state examination...",
                "Narrator",
                "#ffffff"
            ); //text("The seonbi goes on the road to take the state examination...", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story2() {
        push();
        if (frameCount % 60 >= 30) {
            image(this.sscene[2], 0, 0);
        } else if (frameCount % 60 < 30) {
            image(this.ms22, 0, 0);
        } //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[2].stop();
                this.s[3].cue(0);
                this.s[3].play();
                sstart = false;
            }
            subtitle("Where am I?", "Seonbi", "#dedeff"); //text(":", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[3].stop();
                this.s[4].cue(0);
                this.s[4].play();
                sstart = false;
            }
            subtitle(
                "Seonbi gets lost in the mountains...",
                "Narrator",
                "#ffffff"
            ); //text("Seonbi gets lost in the mountains...", 60, 700);
        } else if (sub == 2) {
            if (sstart) {
                //audio set
                this.s[4].stop();
                this.s[5].cue(0);
                this.s[5].play();
                sstart = false;
            }
            subtitle(
                "Let's help seonbi to find his way!",
                "Narrator",
                "#ffffff"
            ); //text("Let's help seonbi to find his way!", 60, 700);
            canNext = false;
            push();
            fill(200, 0, 0);
            text("click here!", width - 200, height - 15);
            pop();
            if (
                mousePressed &&
                mouseX > width - 200 &&
                mouseX < width &&
                mouseY > height - 100 &&
                mouseY < height
            ) {
                scene++;
            }
        }
        pop();
    }
    story3() {
        canNext = true;
        push();
        image(this.sscene[3], 0, 0);
        image(this.ms3seonbi, this.sx, this.sy, this.scx, this.scy);
        this.sx -= 0.7;
        this.scx -= 0.5;
        this.scy -= 0.5;
        this.sy += this.ssy;
        this.ssy += this.g;
        if (this.ssy > 2.4) {
            this.ssy = -3;
        } //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[5].stop();
                this.s[6].cue(0);
                this.s[6].play();
                sstart = false;
            }
            subtitle(
                "Fortunately, seonbi can find his way.",
                "Narrator",
                "#ffffff"
            ); //text("Fortunately, seonbi can find his way.", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[6].stop();
                this.s[7].cue(0);
                this.s[7].play();
                sstart = false;
            }
            subtitle("Meanwhile...", "Narrator", "#ffffff"); //text("Meanwhile...", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story4() {
        push();
        image(this.sscene[4], 0, 0); // fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                this.kkachisound.loop();
                sstart = false;
            }
            subtitle("[Chirping]", "Babies", "#cccccc"); //text("[Chirping]", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[7].stop();
                this.s[8].cue(0);
                this.s[8].play();
                sstart = false;
            }
            subtitle(
                "Baby magpies are waiting for his mother.",
                "Narrator",
                "#ffffff"
            ); //text("Baby magpies are waiting for his mother.", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story5() {
        push(); //image(scene[5],0,0);
        //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[8].stop();
                this.s[9].cue(0);
                this.s[9].play();
                sstart = false;
            }
            subtitle(
                "Then a snake appeares from under the tree...",
                "Narrator",
                "#ffffff"
            ); //text("Then a snake appeares from under the tree...", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[9].stop();
                this.ssnake.loop();
                this.s[10].cue(0);
                this.s[10].play();
                sstart = false;
            }
            subtitle("And approaches the birds!", "Narrator", "#ffffff"); //text("And approaches the birds!", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story6() {
        push(); //image(scene[6],0,0);
        //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[10].stop();
                this.s[11].cue(0);
                this.s[11].play();
                sstart = false;
            }
            subtitle("Baby birds are in danger...", "Narrator", "#ffffff"); //text("Baby birds are in danger...", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[11].stop();
                this.s[12].cue(0);
                this.s[12].play();
                sstart = false;
            }
            subtitle(
                "The snake starts to ride on the tree with its nest!",
                "Narrator",
                "#ffffff"
            ); //text("The snake starts to ride on the tree with its nest!", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story7() {
        push();
        image(this.sscene[7], 0, 0); //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[12].stop();
                this.s[13].cue(0);
                this.s[13].play();
                sstart = false;
            }
            subtitle(
                "Seonbi comes across the scene while passing by.",
                "Narrator",
                "#ffffff"
            ); //text("Seonbi comes across the scene while passing by.", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[13].stop();
                this.s[14].cue(0);
                this.s[14].play();
                sstart = false;
            }
            subtitle("seonbi is trying to save them!", "Narrator", "#ffffff"); //text("seonbi is trying to save them!",60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story8() {
        let rx = random(-2.5, 2.5);
        let ry = random(-2.5, 2.5);
        push();
        image(this.back, 0, 0);
        image(this.sscene[8], 0, 0);
        image(this.arrow, rx + this.e, ry);
        image(this.righthand, rx + this.e, ry);
        fill(0, 128); //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.kkachisound.stop();
                this.ssnake.stop();
                this.s[14].stop();
                this.s[15].cue(0);
                this.s[15].play();
                sstart = false;
            }
            subtitle(
                "Seonbi grabs his bow and aim at the snake.",
                "Narrator",
                "#ffffff"
            ); //text("Seonbi grabs his bow and aim at the snake.", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[15].stop();
                this.s[16].cue(0);
                this.s[16].play();
                sstart = false;
            }
            subtitle(
                "Let's help seonbi to save magpie family!",
                "Narrator",
                "#ffffff"
            ); //text("Let's help seonbi to save magpie family!", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story9() {
        push();
        winarr.stop();
        image(this.sscene[9], 0, 0); // fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[16].stop();
                this.s[17].cue(0);
                this.s[17].play();
                sstart = false;
            }
            subtitle("The sun is setting before long,", "Narrator", "#ffffff"); //text("The sun is setting before long,", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[17].stop();
                this.s[18].cue(0);
                this.s[18].play();
                sstart = false;
            }
            subtitle(
                "but seonbi can't find a place to rest..",
                "Narrator",
                "#ffffff"
            ); //text("but seonbi can't find a place to rest..", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story10() {
        if (frameCount % 40 < 10) {
            image(this.sscene[10], 0, 0);
        } else if (frameCount % 40 >= 10 && frameCount % 40 < 20) {
            image(this.exscene1, 0, 0);
        } else if (frameCount % 40 >= 20 && frameCount % 40 < 30) {
            image(this.sscene[10], 0, 0);
        } else if (frameCount % 40 >= 30) {
            image(this.exscene2, 0, 0);
        }
        push(); //fill(0,128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[18].stop();
                this.s[19].cue(0);
                this.s[19].play();
                sstart = false;
            }
            subtitle(
                "Seonbi is continuing his way at night.",
                "Narrator",
                "#ffffff"
            ); //text("Seonbi is continuing his way at night.", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[19].stop();
                this.s[20].cue(0);
                this.s[20].play();
                sstart = false;
            }
            subtitle(
                "The air gets cold, and sky gets darker and darker.",
                "Narrator",
                "#ffffff"
            ); //text("The air gets cold, and sky gets darker and darker.", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story11() {
        push();
        push();
        this.a += this.d;
        if (this.a < 30) {
            this.d *= -1;
        } else if (this.a > 100) {
            this.d *= -1;
        }
        pop();
        if (sub == 0) {
            //subtitle zone
            push();
            if (frameCount % 40 < 10) {
                image(this.ms110, 0, 0);
            } else if (frameCount % 40 >= 10 && frameCount % 40 < 20) {
                image(this.ms112, 0, 0);
            } else if (frameCount % 40 >= 20 && frameCount % 40 < 30) {
                image(this.ms110, 0, 0);
            } else if (frameCount % 40 >= 30) {
                image(this.ms111, 0, 0);
            }
            if (sstart) {
                //audio set
                this.s[20].stop();
                this.s[21].cue(0);
                this.s[21].play();
                sstart = false;
            } //textFont(font, 50);
            //fill(0, 128);
            //rect(50, 620, 1100, 100);
            //fill(255);
            subtitle(
                "Then, by chance, he finds a cabin in the mountains!",
                "Narrator",
                "#ffffff"
            ); //text("Then, by chance, he finds a cabin in the mountains!", 60, 700);
            pop();
        } else if (sub == 1) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[21].stop();
                this.s[22].cue(0);
                this.s[22].play();
                sstart = false;
            }
            push();
            image(this.sscene[11], 0, 0);
            tint(255, this.a);
            image(this.ms113, 0, 0); //fill(0, 128);
            //rect(50, 620, 1100, 100);
            //fill(255);
            subtitle(
                "The cabin looked like someone is in it.",
                "Narrator",
                "#ffffff"
            ); //text("The cabin looked like someone is in it.", 60, 700);
            pop();
            isFinished = true;
        }
        pop();
    }
    story12() {
        push();
        image(this.sscene[12], 0, 0);
        fill(0, 128); //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[22].stop();
                this.s[23].cue(0);
                this.s[23].play();
                sstart = false;
            }
            subtitle(
                "A woman comes out of the cabin and talks to seonbi.",
                "Narrator",
                "#ffffff"
            ); //text("A woman comes out of the cabin and talks to seonbi", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                //audio set
                this.s[23].stop();
                this.s[24].cue(0);
                this.s[24].play();
                sstart = false;
            }
            subtitle(
                "It's late at night, take a rest here.",
                "Woman",
                "#ffc0cb"
            ); //text("Woman: It's late at night, take a rest here.", 60, 700);
            isFinished = true; //place it where subtitle ends;
        }
        pop();
    }
    story13() {
        push();
        imageMode(0);
        image(this.sscene[13], 0, 0);
        push();
        imageMode(CENTER);
        image(this.cob[1], width / 2, height / 2); //fill(0, 128);
        //rect(50, 620, 1100, 100);
        //textFont(font, 50);
        //fill(255);
        if (sub == 0) {
            //subtitle zone
            if (sstart) {
                //audio set
                this.s[24].stop();
                this.s[25].cue(0);
                this.s[25].play();
                sstart = false;
            }
            subtitle("Seonbi is pondering..", "Narrator", "#ffffff"); //text("Seonbi is pondering..", 60, 700);
        } else if (sub == 1) {
            if (sstart) {
                this.s[25].stop();
                this.s[26].cue(0);
                this.s[26].play();
                sstart = false;
            }
            push();
            imageMode(0);
            image(this.sscene[13], 0, 0);
            pop();
            canNext = false;
            push();
            strokeWeight(5);
            image(this.cob[this.c], width / 2, height / 2);
            stroke(0);
            image(this.cob[2], width / 2 - 300, height / 2, 200, 200);
            image(this.cob[3], width / 2 + 300, height / 2, 200, 200);
            pop();
            if (
                mouseX < width / 2 - 200 &&
                mouseX > width / 2 - 400 &&
                mouseY > height / 2 - 100 &&
                mouseY < height / 2 + 100
            ) {
                this.c = 4;
                push();
                noFill();
                strokeWeight(5);
                stroke(255, 0, 0);
                rectMode(CENTER);
                rect(width / 2 - 300, height / 2, 210, 210);
                pop();
                if (mousePressed) {
                    Team = 1;
                    team2.setup();
                    this.s[26].stop();
                    sstart = true;
                }
            }
            if (
                mouseX < width / 2 + 400 &&
                mouseX > width / 2 + 200 &&
                mouseY > height / 2 - 100 &&
                mouseY < height / 2 + 100
            ) {
                this.c = 1;
                push();
                noFill();
                strokeWeight(5);
                stroke(255, 0, 0);
                rectMode(CENTER);
                rect(width / 2 + 300, height / 2, 210, 210);
                pop();
                if (mousePressed) {
                    Team = 2;
                    team3.setup();
                    this.s[26].stop();
                    sstart = true;
                }
            } //fill(0, 128);
            //rect(50, 620, 1100, 100);
            //textFont(font, 50);
            //fill(255);
            subtitle("what should he do?", "Narrator", "#ffffff"); //text(" what he should do?", 60, 700);
            isFinished = false;
            pop();
        }
    }
}
