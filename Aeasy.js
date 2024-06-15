let outro;
class Afeasy {
    seonbi_thanks_kkachi;
    kkachi_with_jokbo_and_seonbi;
    look_jokbo;
    fire_seonbi;
    fire_seonbi2;
    studying_hard_seonbi;
    test_seonbi;
    finale;
    scn_idx = 0;
    s328;
    s329;
    constructor(p) {
        this.seonbi_thanks_kkachi = loadImage("assets/seonbi_thanks_kkachi.png");
        this.kkachi_with_jokbo_and_seonbi = loadImage(
            "assets/kkachi_with_jokbo_and_seonbi.jpg"
        );
        this.look_jokbo = loadImage("assets/look_jokbo.png");
        this.fire_seonbi = loadImage("assets/fire_seonbi.png");
        this.fire_seonbi2 = loadImage("assets/fire_seonbi2.png");
        this.studying_hard_seonbi = loadImage("assets/studying_hard_seonbi.png");
        this.test_seonbi = loadImage("assets/과거시험보는선비.jpg");
        this.finale = loadImage("assets/finale.png");
        this.s328 = loadSound("assets/s328.mp3");
        this.s329 = loadSound("assets/s329.mp3");
        outro = loadSound("assets/outrosound.mp3");
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
                    this.s328.cue(0);
                    this.s328.play();
                    sstart = false;
                }
                image(this.seonbi_thanks_kkachi, 0, 0, width, height); //fill(0, 128);
                //rect(50, 620, 1100, 100);
                //textSize(50);
                //fill(255);
                subtitle(
                    "Thanks to you, \nI was able to pass the exam easily.",
                    "Seonbi",
                    "#dedeff"
                ); //text("Seonbi: Thanks to you, \nI was able to pass the exam easily.", 85, 682);
                pop();
                break;
            case 1:
                if (sstart) {
                    //audio set
                    this.s328.stop();
                    this.s329.cue(0);
                    this.s329.play();
                    sstart = false;
                }
                push();
                image(this.seonbi_thanks_kkachi, 0, 0, width, height); //fill(0, 128);
                //rect(50, 620, 1100, 100);
                //textSize(50);
                //fill(255);
                subtitle("You're welcome!", "Magpie", "#cccccc"); //text("Magpie: You're welcome!", 85, 710);
                pop();
                break;
            case 2:
                if (sstart) {
                    //audio set
                    this.s329.stop();
                    outro.cue(0);
                    outro.loop();
                    sstart = false;
                }
                image(this.finale, 0, -400);
                push();
                textSize(150);
                fill(0, 95);
                rect(48, 655, 410, 120);
                fill(250);
                console.log(mouseX, mouseY);
                text("The End.", 50, 800);
                pop();
                break;
            case 3 /*push();
       image(kkachi_thats_what_happened, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("Magpie: That's what happend.", 85, 710);*/:
                main_scene_code = "ending";
                break; /* case 2:
       push();
       image(kkachi_with_jokbo_and_seonbi, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("Magpie: This is for you.", 85, 710);
       pop();
       break;
       case 3:
       push();
       image(kkachi_with_jokbo_and_seonbi, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("Seonbi: Wow. Thank you magpie... T.T", 85, 710);
       pop();
       break;
       case 4:
       push();
       image(look_jokbo, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("This is the gift that the magpie gave me...!!!", 85, 710);
       pop();
       break;
       case 5:
       push();
       if(frameCount%20<10){
       image(fire_seonbi, 0, 0, width, height);
       }
       else{
       image(fire_seonbi2, 0, 0, width, height);
       }
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("With the cheating paper, the test is easy.!!", 85, 710);
       pop();
       break;
       case 6:
       push();
       image(studying_hard_seonbi, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("(Studying hard...)", 85, 710);
       pop();
       break;
       case 7:
       push();
       image(test_seonbi, 0, 0, width, height);
       fill(0, 128);
       rect(50, 620, 1100, 150);
       textSize(50);
       fill(255);
       text("(Testing...)", 85, 710);
       pop();
       break;
       case 8:
       main_scene_code = "ending";
       break;*/
        } // end of switch
    } // end of drawing
    keyPressed() {
        if (key == " ") {
            this.scn_idx++;
            sstart = true;
        }
    }
}
