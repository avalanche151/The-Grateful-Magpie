
    class B4Spgame {
        kkachi_with_jokbo;
        kkachi_and_seonbi;
        momkkachi_said;
        momkkachi_said2;
        momkkachi_said3;
        momkkachi_said4;
        momkkachi_said5;
        momkkachi_said6;
        outside;
        sneak;
        thief;
        thiefmagpie;
        find;
        nollam;
        excl;
        nbg;
        scn_idx = 0;
        a;
        d = 10;
        mx;
        my;
        s310;
        s311;
        s312;
        s313;
        s314;
        s315;
        s316;
        s317;
        s318;
        s319;
        s320;
        constructor(p) {
            this.mx = 0;
            this.my = 0;
            this.outside = loadImage("outsidebackground.png");
            this.kkachi_with_jokbo = loadImage("kkachi_with_jokbo.png");
            this.kkachi_and_seonbi = loadImage("kkachi_and_seonbi.png");
            this.momkkachi_said = loadImage("momkkachi_said.png");
            this.momkkachi_said2 = loadImage("momkkachi_said2.png");
            this.momkkachi_said3 = loadImage("momkkachi_said3.png");
            this.momkkachi_said4 = loadImage("momkkachi_said4.png");
            this.momkkachi_said5 = loadImage("momkkachi_said5.png");
            this.momkkachi_said6 = loadImage("momkkachi_said6.png");
            this.sneak = loadImage("sneak.png");
            this.find = loadImage("findsjokbo.png");
            this.thief = loadImage("thief.png");
            this.thiefmagpie = loadImage("thiefmagpie.png");
            this.nollam = loadImage("gaenollam.png");
            this.excl = loadImage("excl.png");
            this.nbg = loadImage("nollambg.png");
            this.s310 = loadSound("s310.mp3");
            this.s311 = loadSound("s311.mp3");
            this.s312 = loadSound("s312.mp3");
            this.s313 = loadSound("s313.mp3");
            this.s314 = loadSound("s314.mp3");
            this.s315 = loadSound("s315.mp3");
            this.s316 = loadSound("s316.mp3");
            this.s317 = loadSound("s317.mp3");
            this.s318 = loadSound("s318.mp3");
            this.s319 = loadSound("s319.mp3");
            this.s320 = loadSound("s320.mp3");
        }
        setup() {
            this.scn_idx = 0;
            this.mx = 0;
            this.my = 0;
        }
        update() {
            this.drawing();
        }
        drawing() {
            switch (this.scn_idx) {
                case 0:
                    push();
                    if (sstart) {
                        //audio set
                        this.s310.cue(0);
                        this.s310.play();
                        sstart = false;
                    }
                    image(this.outside, 0, 0, width, height);
                    image(this.kkachi_with_jokbo, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("This is for you!!!", "Magpie", "#cccccc"); //text("This is for you!!!", 85, 710);
                    pop();
                    break;
                case 1:
                    push();
                    if (sstart) {
                        //audio set
                        this.s310.stop();
                        this.s311.cue(0);
                        this.s311.play();
                        sstart = false;
                    }
                    image(this.kkachi_and_seonbi, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "What's going on? \nWho are you and what's in your mouth?",
                        "Seonbi",
                        "#dedeff"
                    ); //text("Sunbi : What's going on? \nWho are you and what's in your mouth?", 85, 680);
                    pop();
                    break;
                case 2:
                    if (sstart) {
                        //audio set
                        this.s311.stop();
                        this.s312.cue(0);
                        this.s312.play();
                        sstart = false;
                    }
                    push();
                    image(this.outside, 0, 0, width, height);
                    image(this.kkachi_with_jokbo, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("What happened was....", "Magpie", "#cccccc"); //text("What happened was....", 85, 710);
                    pop();
                    break;
                case 3:
                    push();
                    background(0);
                    fill(0, 128);
                    rect(50, 620, 1100, 100);
                    textSize(50);
                    fill(255);
                    textAlign(CENTER);
                    text(
                        "The Point of View of a Magpie",
                        width / 2,
                        height / 2
                    );
                    pop();
                    break;
                case 4:
                    if (sstart) {
                        //audio set
                        this.s312.stop();
                        this.s313.cue(0);
                        this.s313.play();
                        sstart = false;
                    }
                    push();
                    if (frameCount % 30 < 15) {
                        image(this.momkkachi_said, 0, 0, width, height);
                    } else if (frameCount % 30 >= 15) {
                        image(this.momkkachi_said2, 0, 0, width, height);
                    } //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "Guys, it's a sunbi who saved you \nand there's news that he failed.",
                        "Mom",
                        "#cccccc"
                    ); //text("Mom : Guys, it's a sunbi who saved you \nand there's news that he failed.", 85, 680);
                    pop();
                    break;
                case 5:
                    if (sstart) {
                        //audio set
                        this.s313.stop();
                        this.s314.cue(0);
                        this.s314.play();
                        sstart = false;
                    }
                    push();
                    if (frameCount % 30 < 15) {
                        image(this.momkkachi_said3, 0, 0, width, height);
                    } else if (frameCount % 30 >= 15) {
                        image(this.momkkachi_said5, 0, 0, width, height);
                    } //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "Return the favor by giving the sunbi \na cheating paper.",
                        "Mom",
                        "#cccccc"
                    ); //text("Mom : Return the favor by giving the sunbi \na cheating paper.", 85, 680);
                    pop();
                    break;
                case 6:
                    if (sstart) {
                        //audio set
                        this.s314.stop();
                        this.s315.cue(0);
                        this.s315.play();
                        sstart = false;
                    }
                    push();
                    if (frameCount % 30 < 15) {
                        image(this.momkkachi_said4, 0, 0, width, height);
                    } else if (frameCount % 30 >= 15) {
                        image(this.momkkachi_said6, 0, 0, width, height);
                    } //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("Yes mom~~~~~~~~~~~~~", "Babies", "#cccccc"); //text("Babies : Yes mom~~~~~~~~~~~~~", 85, 710);
                    pop();
                    break;
                case 7:
                    if (sstart) {
                        //audio set
                        this.s315.stop();
                        this.s316.cue(0);
                        this.s316.play();
                        sstart = false;
                    }
                    push();
                    image(this.sneak, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "I need to get the cheating paper from that office.",
                        "Magpie",
                        "#cccccc"
                    ); //text("I need to get the cheating paper from that office.", 85, 710);
                    pop();
                    break;
                case 8:
                    if (sstart) {
                        //audio set
                        this.s316.stop();
                        this.s317.cue(0);
                        this.s317.play();
                        sstart = false;
                    }
                    push();
                    image(this.find, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("Wow, found it!!", "Magpie", "#cccccc"); //text("Wow, I find it!! ", 85, 710);
                    pop();
                    break;
                case 9:
                    if (sstart) {
                        //audio set
                        this.s317.stop();
                        this.s318.cue(0);
                        this.s318.play();
                        sstart = false;
                    }
                    push();
                    image(this.thief, 0, 0, width, height);
                    image(
                        this.thiefmagpie,
                        this.mx,
                        40 * sin(this.my),
                        width,
                        height
                    );
                    this.mx--;
                    this.my -= 0.1; //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("(Taking it~~~)", "Magpie", "#cccccc"); //text("(Taking it~~~)", 85, 710);
                    pop();
                    break;
                case 10:
                    if (sstart) {
                        //audio set
                        this.s318.stop();
                        this.s319.cue(0);
                        this.s319.play();
                        sstart = false;
                    }
                    push();
                    image(this.nbg, 0, 0, width, height);
                    image(this.nollam, 0, 0, width, height);
                    push();
                    imageMode(CENTER);
                    image(this.excl, 250, 120, 200 + this.a, 200 + this.a);
                    pop();
                    if (this.a > 30 || this.a < -30) {
                        this.d *= -1;
                    }
                    this.a += this.d; //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("What are you doing now?", "Officer", "#ffffff"); //text("Management: What are you doing now? \nMagpie: !!! Run!", 85, 680);
                    pop();
                    break;
                case 11:
                    if (sstart) {
                        //audio set
                        this.s319.stop();
                        this.s320.cue(0);
                        this.s320.play();
                        sstart = false;
                    }
                    push();
                    image(this.nbg, 0, 0, width, height);
                    image(this.nollam, 0, 0, width, height);
                    push();
                    imageMode(CENTER);
                    image(this.excl, 250, 120, 200 + this.a, 200 + this.a);
                    pop();
                    if (this.a > 30 || this.a < -30) {
                        this.d *= -1;
                    }
                    this.a += this.d; //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("!!! Run!", "Magpie", "#cccccc"); //text("Magpie: !!! Run!", 85, 680);
                    pop();
                    break;
                case 12:
                    this.s320.stop();
                    main_scene_code = "howsp";
                    this.scn_idx = 0;
            }
        } // end of drawing()
        keyPressed() {
            if (key == " ") {
                this.scn_idx++;
                sstart = true;
            }
        } // end o f keyPResseddSAdadasdasdasdsadffasjfa살려줘
    } // end of class B4Spgame
