    let s31;
    let s32;
    let leaving_seonbi_1;
    let leaving_seonbi_2;
    let leaving_seonbi_3;
    class B4JumpGameMountain {
        
        font;
        txt_idx = 0;
        a;
        
        preload(){
            s31 = loadSound("./data/s31");
            s32 = loadSound("./data/s32");
        }
        setup() {
            this.a = 1;
            leaving_seonbi_1 = loadImage("./data/leaving_seonbi_1.png");
            leaving_seonbi_2 = loadImage("./data/leaving_seonbi_2.png");
            leaving_seonbi_3 = loadImage("./data/leaving_seonbi_3.png");
            this.txt_idx = 0;
        }
        update() {
            this.drawing();
        }
        drawing() {
            push();
            image(leaving_seonbi_3, 0, 0, width, height);
            push();
            imageMode(CENTER);
            image(
                leaving_seonbi_1,
                width / 2 - this.a * this.a * 0.001,
                height / 2 - this.a * 0.5,
                width / (1 + this.a * 0.0007),
                height / (1 + this.a * 0.0007)
            );
            this.a++;
            pop();
            image(
                leaving_seonbi_2,
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
                        s31.play();
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
                        s31.stop();
                        s32.play();
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
                    s32.stop();
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

