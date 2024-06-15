
    class B4Easy {
        kkachi_thats_what_happened;
        kkachi_with_jokbo_and_seonbi;
        look_jokbo;
        fire_seonbi;
        fire_seonbi2;
        studying_hard_seonbi;
        soop;
        test_seonbi;
        complete;
        scn_idx = -1;
        s321;
        s322;
        s323;
        s324;
        s325;
        s326;
        constructor(p) {
            this.complete = loadImage("complete.png");
            this.kkachi_thats_what_happened = loadImage(
                "kkachi_thats_what_happened.png"
            );
            this.kkachi_with_jokbo_and_seonbi = loadImage(
                "kkachi_with_jokbo_and_seonbi.jpg"
            );
            this.look_jokbo = loadImage("look_jokbo.png");
            this.fire_seonbi = loadImage("fire_seonbi.png");
            this.fire_seonbi2 = loadImage("fire_seonbi2.png");
            this.soop = loadImage("outsidebackground.png");
            this.studying_hard_seonbi = loadImage("studying_hard_seonbi.png");
            this.test_seonbi = loadImage("과거시험보는선비.jpg");
            this.s321 = loadSound("s321.mp3");
            this.s322 = loadSound("s322.mp3");
            this.s323 = loadSound("s323.mp3");
            this.s324 = loadSound("s324.mp3");
            this.s325 = loadSound("s325.mp3");
            this.s326 = loadSound("s326.mp3");
        }
        setup() {
            this.scn_idx = 0;
        }
        update() {
            this.drawing();
        }
        drawing() {
            switch (this.scn_idx) {
                case -1:
                    if (sstart) {
                        //audio set
                        this.s321.cue(0);
                        this.s321.play();
                        sstart = false;
                    }
                    push();
                    image(this.complete, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("Phew, it was hard..", "Magpie", "#cccccc"); //text("Magpie: Phew, it was hard..", 85, 710);
                    pop();
                    break;
                case 0:
                    background(0);
                    push(); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    fill(255);
                    textAlign(CENTER);
                    text("Again, the present", width / 2, height / 2);
                    pop();
                    break;
                case 1:
                    if (sstart) {
                        //audio set
                        this.s321.stop();
                        this.s322.cue(0);
                        this.s322.play();
                        sstart = false;
                    }
                    push();
                    image(this.kkachi_thats_what_happened, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("That's what happened.", "Magpie", "#cccccc"); //text("Magpie: That's what happened.", 85, 710);
                    pop();
                    break;
                case 2:
                    if (sstart) {
                        //audio set
                        this.s322.stop();
                        this.s323.cue(0);
                        this.s323.play();
                        sstart = false;
                    }
                    push();
                    image(
                        this.kkachi_with_jokbo_and_seonbi,
                        0,
                        0,
                        width,
                        height
                    ); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("Here. Take this.", "Magpie", "#cccccc"); //text("Magpie: This is for you.", 85, 710);
                    pop();
                    break;
                case 3:
                    if (sstart) {
                        //audio set
                        this.s323.stop();
                        this.s324.cue(0);
                        this.s324.play();
                        sstart = false;
                    }
                    push();
                    image(
                        this.kkachi_with_jokbo_and_seonbi,
                        0,
                        0,
                        width,
                        height
                    ); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("Thank you so much, magpie!", "Seonbi", "#dedeff"); //text("Seonbi: Thank you so much, magpie!", 85, 710);
                    pop();
                    break;
                case 4:
                    if (sstart) {
                        //audio set
                        this.s324.stop();
                        this.s325.cue(0);
                        this.s325.play();
                        sstart = false;
                    }
                    push();
                    image(this.soop, 0, 0);
                    image(this.look_jokbo, 0, 0, width, height);
                    fill(0);
                    textSize(70);
                    text("The answer is...", 380, 440); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "This is the gift that the magpie gave me..!!",
                        "Seonbi",
                        "#dedeff"
                    ); //text("This is the gift that the magpie gave me..!!", 85, 710);
                    pop();
                    break;
                case 5:
                    if (sstart) {
                        //audio set
                        this.s325.stop();
                        this.s326.cue(0);
                        this.s326.play();
                        sstart = false;
                    }
                    push();
                    if (frameCount % 20 < 10) {
                        image(this.fire_seonbi, 0, 0, width, height);
                    } else {
                        image(this.fire_seonbi2, 0, 0, width, height);
                    } //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle(
                        "With the cheating paper, the test is a piece of cake!",
                        "Seonbi",
                        "#dedeff"
                    ); //text("With the cheating paper, the test is a piece of cake!", 83, 710);
                    pop();
                    break;
                case 6:
                    this.s326.stop();
                    push();
                    image(this.studying_hard_seonbi, 0, 0, width, height); // fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("(Studying hard...)", "Seonbi", "#dedeff"); //text("(Studying hard...)", 85, 710);
                    pop();
                    break;
                case 7:
                    push();
                    image(this.test_seonbi, 0, 0, width, height); //fill(0, 128);
                    //rect(50, 620, 1100, 100);
                    //textSize(50);
                    //fill(255);
                    subtitle("(Testing...)", "Seonbi", "#dedeff"); //text("(Testing...)", 85, 710);
                    pop();
                    break;
                case 8:
                    main_scene_code = "easyquestion";
                    this.scn_idx = 0;
                    startTime = millis();
                    break;
            } // end of switch
        } // end of drawing
        keyPressed() {
            if (key == " ") {
                this.scn_idx++;
                sstart = true;
            }
        }
    } // end of class b4easy

