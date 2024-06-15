
    class B4Answer {
        tired_seonbi;
        aaa_seonbi;
        scn_idx = 0; //int txt_idx = 0;
        s33;
        s34;
        constructor(p) {
            this.tired_seonbi = loadImage("tired_seonbi.png");
            this.aaa_seonbi = loadImage("과거시험보는선비.jpg");
            this.s33 = loadSound("s33.mp3");
            this.s34 = loadSound("s34.mp3");
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
                        this.s33.cue(0);
                        this.s33.play();
                        sstart = false;
                    }
                    image(this.tired_seonbi, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "I'm so tired after climbing the mountain all night!",
                        "Seonbi",
                        "#dedeff"
                    ); //text("I'm so tired after climbing the mountain all night!", 85, 710);
                    pop();
                    break;
                case 1:
                    push();
                    if (sstart) {
                        //audio set
                        this.s33.stop();
                        this.s34.cue(0);
                        this.s34.play();
                        sstart = false;
                    }
                    image(this.aaa_seonbi, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "(Tired, but working hard on the test...)",
                        "Seonbi",
                        "#dedeff"
                    ); //text("(Tired, but working hard on the test...)", 85, 710);
                    pop();
                    break;
                case 2:
                    this.s34.stop();
                    main_scene_code = "answer";
            } // end of swith-case
        } // end of drawing()
        keyPressed() {
            if (key == " ") {
                this.scn_idx++;
                sstart = true;
            }
        } // end of keyPressed()
    } //end of class B4Answer

