
    let kkachisound;
    class B4Door {
        retry_seonbi;
        study1;
        study2;
        study3;
        study4;
        study5;
        study6;
        scn_idx = 0;
        s36;
        s37;
        s38;
        s39;
        constructor(p) {
            this.retry_seonbi = loadImage("선비재수준비.png");
            this.study1 = loadImage("공부1.png");
            this.study2 = loadImage("공부2.png");
            this.study3 = loadImage("공부3.png");
            this.study4 = loadImage("공부4.jpg");
            this.study5 = loadImage("공부5.jpg");
            this.study6 = loadImage("공부5.jpg");
            this.s36 = loadSound("s36.mp3");
            this.s37 = loadSound("s37.mp3");
            this.s38 = loadSound("s38.mp3");
            this.s39 = loadSound("s39.mp3");
            kkachisound = loadSound("kkachisound.mp3");
        }
        setup() {
            this.scn_idx = 0;
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
                        this.s36.cue(0);
                        this.s36.play();
                        sstart = false;
                    }
                    background("#F5F1AD");
                    image(this.retry_seonbi, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "Well, I should prepare for the retest.",
                        "Seonbi",
                        "#dedeff"
                    ); //text("Well, I should prepare for the retest.", 85, 710);
                    pop();
                    break;
                case 1:
                    push();
                    if (sstart) {
                        //audio set
                        this.s36.stop();
                        this.s37.cue(0);
                        this.s37.play();
                        sstart = false;
                    }
                    image(this.study1, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "I should study harder and succeed this time..",
                        "Seonbi",
                        "#dedeff"
                    ); //text("I should study harder and succeed this time..", 85, 710);
                    pop();
                    break;
                case 2:
                    push();
                    this.s37.stop();
                    image(this.study2, 0, 0, width, height);
                    fill(0, 128);
                    rect(50, 620, 1100, 100);
                    textSize(50);
                    fill(255); //subtitle("...","Seonbi","#dedeff");
                    text("...", 85, 710);
                    pop();
                    break;
                case 3:
                    push();
                    image(this.study3, 0, 0, width, height);
                    fill(0, 128);
                    rect(50, 620, 1100, 100);
                    textSize(50);
                    fill(255); //subtitle("..........","Seonbi","#dedeff");
                    text("..........", 85, 710);
                    pop();
                    break;
                case 4:
                    if (sstart) {
                        //audio set
                        kkachisound.cue(0);
                        kkachisound.loop();
                        sstart = false;
                    }
                    push();
                    image(this.study4, 0, 0, width, height);
                    fill(0, 128);
                    rect(50, 620, 1100, 100);
                    textSize(50);
                    fill(255); //subtitle("...","Seonbi","#dedeff");
                    text("...", 85, 710);
                    pop();
                    break;
                case 5:
                    push();
                    if (sstart) {
                        //audio set
                        this.s38.cue(0);
                        this.s38.play();
                        sstart = false;
                    }
                    image(this.study5, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("WHAT!?", "Seonbi", "#dedeff"); //text("WHAT!?", 85, 710);
                    pop();
                    break;
                case 6:
                    push();
                    if (sstart) {
                        //audio set
                        this.s38.stop();
                        this.s39.cue(0);
                        this.s39.play();
                        sstart = false;
                    }
                    image(this.study5, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "I'll have to check the outside.",
                        "Seonbi",
                        "#dedeff"
                    ); //text("I'll have to check the outside.", 85, 710);
                    pop();
                    break;
                case 7:
                    this.s39.stop();
                    main_scene_code = "door";
            } // end of switch-case
        } // end of drawing()
        keyPressed() {
            if (key == " ") {
                this.scn_idx++;
                sstart = true;
            }
        }
    } // end of B4Door

