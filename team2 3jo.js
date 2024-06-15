// [processing-p5-convert] import processing.sound.*;
let main_scene_code = "b4jumpgamemountain";
class Team3 {
    font;
    spgame;
    door;
    easyquestion;
    answer;
    jumpgamemountain;
    b4jumpgamemountain;
    b4answer;
    b4door;
    b4spgame;
    b4easy;
    aeasy;
    ending;
    howsp;
    howmoun;
    constructor(p) {
        this.spgame = new Spgame(p);
        this.b4door = new B4Door(p);
        this.door = new Door(p);
        this.easyquestion = new EasyQuestion(p);
        this.answer = new Answer(p);
        this.jumpgamemountain = new JumpGameMountain(p);
        this.b4jumpgamemountain = new B4JumpGameMountain(p);
        this.b4answer = new B4Answer(p);
        this.b4spgame = new B4Spgame(p);
        this.b4easy = new B4Easy(p);
        this.ending = new Ending();
        this.aeasy = new Afeasy(p);
        this.howsp = new Howsp();
        this.howmoun = new Howmoun();
    }
    setup() {
        this.font = loadFont("H2sa1M-100.vlw");
        createCanvas(1200, 800);
        this.b4door.setup();
        this.door.setup();
        this.easyquestion.setup();
        this.answer.setup();
        this.jumpgamemountain.setup();
        this.b4jumpgamemountain.setup();
        this.b4answer.setup();
        this.b4spgame.setup();
        this.b4easy.setup();
        this.b4answer.setup();
        this.aeasy.setup();
        this.spgame.clearGame();
        main_scene_code = "b4jumpgamemountain";
    }
    draw() {
        textFont(this.font, 50);
        this.change_scene_fn();
    }
    keyPressed() {
        this.scene_keyPressed();
    }
    mousePressed() {
        this.scene_mousePressed();
    }
    mouseDragged() {
        this.scene_mouseDragged();
    }
    mouseReleased() {
        this.scene_mouseReleased();
    }
    change_scene_fn() {
        switch (main_scene_code) {
            case "b4jumpgamemountain":
                this.b4jumpgamemountain.update();
                break;
            case "howmoun":
                this.howmoun.update();
                break;
            case "jumpgamemountain":
                this.jumpgamemountain.update();
                break;
            case "b4answer":
                this.b4answer.update();
                break;
            case "answer":
                this.answer.update();
                break;
            case "b4door":
                this.b4door.update();
                break;
            case "b4spgame":
                this.b4spgame.update();
                break;
            case "howsp":
                this.howsp.update();
                break;
            case "spgame":
                this.spgame.update();
                break;
            case "door":
                this.door.update();
                break;
            case "b4easy":
                this.b4easy.update();
                break;
            case "easyquestion":
                this.easyquestion.update();
                break;
            case "aeasy":
                this.aeasy.update();
                break;
            case "ending":
                this.ending.update();
        } // end of switch
    } //end of change_scene_fn
    scene_keyPressed() {
        switch (main_scene_code) {
            case "b4jumpgamemountain":
                this.b4jumpgamemountain.keyPressed();
                break;
            case "howmoun":
                this.howmoun.keyPressed();
                break;
            case "jumpgamemountain":
                this.jumpgamemountain.keyPressed();
                break;
            case "b4answer":
                this.b4answer.keyPressed();
            case "answer":
                this.answer.keyPressed();
                break;
            case "b4door":
                this.b4door.keyPressed();
                break;
            case "b4spgame":
                this.b4spgame.keyPressed();
                break;
            case "howsp":
                this.howsp.keyPressed();
                break;
            case "spgame":
                this.spgame.handleKeyPress(keyCode, key);
                break; //case ("door"):
            //door.update();
            //break;
            case "b4easy":
                this.b4easy.keyPressed();
                break;
            case "easyquestion":
                this.easyquestion.keyPressed();
                break;
            case "aeasy":
                this.aeasy.keyPressed();
                break;
        } // end of switch
    } // end of scene_keyPressed()
    scene_mousePressed() {
        switch (main_scene_code) {
            case "jumpgamemountain": //jumpgamemountain.mousePressed();
                break;
            case "answer":
                this.answer.mousePressed();
                break; //case ("spgame"):
            //spgame.update();
            //break;
            case "door":
                this.door.mousePressed();
                break;
            case "easyquestion":
                this.easyquestion.mousePressed();
                break;
            case "ending":
                this.ending.mousePressed();
                break;
        } // end of switch
    } // end of scene_mousePressed()
    scene_mouseDragged() {
        switch (main_scene_code) {
            case "door":
                this.door.mouseDragged();
        } // end of switch
    } // end of scene_mouseDragged()
    scene_mouseReleased() {
        switch (main_scene_code) {
            case "door":
                this.door.mouseReleased();
        }
    }
}
