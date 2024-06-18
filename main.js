
let middleStory;
let commentFont;
let characterFont;
let team2;
let team3;
let title;
let scene1;
let scene2and3;
let scene4;
let scene5;
let story;
let Team;
let scene;
let isFinished;
let sub;
let font;
let canNext;
function preload() {
    soundFormats('mp3');
    scene1 = new Scene1();
    scene2and3 = new Scene2and3();
    scene4 = new Scene4(this);
    title = new titleScene(this);
    story = new Story(this);
    team2 = new Team2(this);
    team3 = new Team3(this);
    commentFont = "Calibri";
    characterFont = "Calibri Bold";
    story.preload();
    scene4.preload();
    title.preload();
    team2.preload();
    team3.preload();
    //font = loadFont("./data/NanumGothic.ttf");
}
function setup() {
    sub = 0;
    Team = 0;
    canNext = true;
    createCanvas(1200, 800);
    scene = 0; //modify this to debug
    scene1.setup();
    scene2and3.setup();
    scene4.setup();
    //scene5 = new Scene5();
    //scene5.setup();
    title.setup();
    story.setup();
    team2.setup();
    team3.setup();
}

function draw() {
    if (Team == 0) {
        if (scene == 0) {
            push();
            title.draw();
            pop();
        } else if (scene == 1) {
            story.story1();
        } else if (scene == 2) {
            story.story2();
        } else if (scene == 3) {
            scene1.draw();
        } else if (scene == 4) {
            story.story3();
        } else if (scene == 5) {
            story.story4();
        } else if (scene == 6) {
            scene2and3.drawScene1();
            story.story5();
        } else if (scene == 7) {
            scene2and3.drawScene2();
            story.story6();
        } else if (scene == 8) {
            story.story7();
        } else if (scene == 9) {
            story.story8();
        } else if (scene == 10) {
            scene4.draw();
            scene4.mousePressed();
        } else if (scene == 11) {
            story.story9();
        } else if (scene == 12) {
            story.story10();
        } else if (scene == 13) {
            story.story11();
        } else if (scene == 14) {
            story.story12();
        } else if (scene == 15) {
            story.story13();
        }
    } else if (Team == 1) {
        team2.draw();
    } else if (Team == 2) {
        team3.draw();
    }
}
function mousePressed() {
    if (Team == 2) {
        team3.mousePressed();
    }
    if (Team == 1) {
        team2.mousePressed();
    }
    return false;
}
function mouseDragged() {
    if (Team == 2) {
        team3.mouseDragged();
    }
}
function keyPressed() {
    title.keyPressed();
    if (key == " " && scene == 3 && gameOver == -1) {
        gameOver++;
    }
    if (key == " " && Team == 0 && canNext) {
        sub += 1;
        sstart = true;
    }
    if (key == " " && isFinished && Team == 0) {
        scene = scene + 1;
        sub = 0;
        sstart = true;
        isFinished = false;
    } else if (Team == 1) {
        team2.keyPressed();
    } else if (Team == 2) {
        team3.keyPressed();
    }
}
function mouseReleased() {
    if (scene == 10) {
        scene4.mouseReleased();
    } else if (Team == 2) {
        team3.mouseReleased();
    }
    title.mouseReleased();
}
function mouseClicked() {
    if (scene == 10) {
        scene4.mouseClicked();
    }
}
function subtitle(subtitle, name, col) {
    push();
    fill(0, 128);
    stroke(0);
    strokeWeight(2);
    rect(50, 620, 1100, 100);
    pop();
    push();
    fill(col);
    textAlign(LEFT, CENTER);
    textFont(commentFont,40);
    text(subtitle, 80, 670);
    pop(); //인물이름
    push();
    fill(0, 128);
    stroke(0);
    strokeWeight(2);
    rect(50, 570, 130, 50);
    pop();
    push();
    fill(col);
    textAlign(CENTER, CENTER);
    textFont(characterFont,30);
    text(name, 115, 595);
    pop(); // println(PFont.list());
}
