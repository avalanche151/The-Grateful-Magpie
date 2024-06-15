
    class B4JumpGameMountain {
        leaving_seonbi_1;
        leaving_seonbi_2;
        leaving_seonbi_3;
        font;
        txt_idx = 0;
        a;
        s31;
        s32;
        constructor(p) {
            this.a = 1;
            this.leaving_seonbi_1 = loadImage("leaving_seonbi_1.png");
            this.leaving_seonbi_2 = loadImage("leaving_seonbi_2.png");
            this.leaving_seonbi_3 = loadImage("leaving_seonbi_3.png");
            this.s31 = loadSound("s31.mp3");
            this.s32 = loadSound("s32.mp3");
        }
        setup() {
            this.a = 1;
            this.txt_idx = 0;
        }
        update() {
            this.drawing();
        }
        drawing() {
            push();
            image(this.leaving_seonbi_3, 0, 0, width, height);
            push();
            imageMode(CENTER);
            image(
                this.leaving_seonbi_1,
                width / 2 - this.a * this.a * 0.001,
                height / 2 - this.a * 0.5,
                width / (1 + this.a * 0.0007),
                height / (1 + this.a * 0.0007)
            );
            this.a++;
            pop();
            image(
                this.leaving_seonbi_2,
                random(0, 2),
                random(0, 2),
                width,
                height
            );
            pop();
            switch (this.txt_idx) {
                case 0:
                    push();
                    if (sstart) {
                        //audio set
                        this.s31.cue(0);
                        this.s31.play();
                        sstart = false;
                    } //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("I'm sorry.", "Seonbi", "#dedeff"); //text("I'm sorry.", 85, 710);
                    pop();
                    break;
                case 1:
                    if (sstart) {
                        //audio set
                        this.s31.stop();
                        this.s32.cue(0);
                        this.s32.play();
                        sstart = false;
                    }
                    push(); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "I'm going to continue climbing the mountain.",
                        "Seonbi",
                        "#dedeff"
                    ); //text("I'm going to continue climbing the mountain.", 85, 710);
                    pop();
                    break;
                case 2:
                    this.s32.stop();
                    main_scene_code = "howmoun";
            }
        } // end of drawing
        keyPressed() {
            if (key == " ") {
                this.txt_idx++;
                sstart = true;
            }
        }
    } // end of class B4JumpGameMountain

