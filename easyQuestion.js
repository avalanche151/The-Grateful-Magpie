/*
public int startTime;

class EasyQuestion {
  PImage img_test;
  PImage img_sunbi;
  PImage img_background;
  PImage img_sadSunbi;
  PImage img_testbackground;
  PImage EQ_J1;
  PImage EQ_J2;
  PImage EQ_J3;

  //SoundFile sad;
  //SoundFile happy;

  int cols = 5;
  int rows = 3;
  int diameter = 35;
  int spacing = 180;
  int[][] selected;
  int correctRow1 = 0;
  int correctCol1 = 3;
  int correctRow2 = 1;
  int correctCol2 = 4;
  int correctRow3 = 2;
  int correctCol3 = 2;
  boolean correctClicked = false;

  int timeLimit = 30000;
  //int startTime;

  int correctAnswers = 0;
  int check = 0;
  int checkTime = 0;

  String currentScene = "start";

  int interval = 650;

  boolean startDelayPassed = false;
  int startDelay = 3000;

  EasyQuestion() {
    selected = new int[rows][cols];
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        selected[i][j] = 0;
      }
    }
    img_test = loadImage("test11.png");
    img_sunbi = loadImage("happysunbi.png");
    img_background = loadImage("bg1.png");
    img_sadSunbi = loadImage("failseonbi.png");
    img_testbackground = loadImage("bg2.jpg");
    EQ_J1 = loadImage("EQ_j1.png");
    EQ_J2 = loadImage("EQ_J2.png");
    EQ_J3 = loadImage("EQ_J3.png");

    //sad = new SoundFile(this, "sad");
    //happy = new SoundFile(this, "happy");
    startTime = millis();
  }

  void update() {
    if (currentScene.equals("start")) {
      //drawingStartScene();
      if (millis() - startTime > startDelay) {
        currentScene = "test";
        startTime = millis();
      }
    } else if (currentScene.equals("test")) {
      drawing();
      if (millis() - startTime > timeLimit) {
        checkAnswers();
      }
    } else {
      sceneTransition(currentScene);
    }

  }  // end of update()

  //void drawingStartScene() {
  //  background(0);
  //  textSize(50);
  //  textAlign(CENTER, CENTER);
  //  text("# Interaction 14", width / 2, height / 2);
  //}

  void drawing() {
    image(img_testbackground, 0, 0, width, height);
    switch(Num_Jokbo) {
      case(0):
      image(EQ_J1, 0, 0, width, height);
      break;
      case(1):
      image(EQ_J2, 0, 0, width, height);
      break;
      case(2):
      image(EQ_J3, 0, 0, width, height);
      break;
      case(3):
      image(EQ_J3, 0, 0, width, height);
      break;
    } // end of switch
      // end of drawing
    //push();
    //image(img_testbackground, 0, 0, width, height);
    //image(img_test, 0, 0, width, height);
    //fill(0);
    //text("1.", 200, 290);
    //text("2.", 200, 470);
    //text("3.", 200, 650);
    //text_();
    //pop();

    int remainingTime = (timeLimit - (millis() - startTime)) / 1000;
    String timeText = "Left Time: " + remainingTime + "s";

    push();
    textSize(20);
    fill(0);
    textAlign(RIGHT, TOP);
    text(timeText, width - 20, 20);
    pop();

    correctAnswers = 0;

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        float x = j * spacing + spacing / 2;
        float y = i * spacing + spacing / 2;
        fill(255);
        stroke(1);
        ellipse(x + 110, y + 280, diameter, diameter);

        if (selected[i][j] == 1) {
          fill(0);
          ellipse(x + 110, y + 280, diameter - 10, diameter - 10);
          if (i == correctRow1 && j != correctCol1) {
            push();
            stroke("#E81515");
            strokeWeight(4);
            line(160, 330, 230, 260);
            pop();
          } else if (i == correctRow2 && j != correctCol2) {
            push();
            stroke("#E81515");
            strokeWeight(4);
            line(160, 510, 230, 440);
            pop();
          } else if (i == correctRow3 && j != correctCol3) {
            push();
            stroke("#E81515");
            strokeWeight(4);
            line(160, 690, 230, 620);
            pop();
          }
        } else if (selected[i][j] == 2) {
          fill(0);
          ellipse(x + 110, y + 280, diameter - 10, diameter - 10);
          correctAnswers++;
          if (i == correctRow1 && j == correctCol1) {
            push();
            noFill();
            stroke("#E81515");
            strokeWeight(4);
            ellipse(200, 295, diameter + 50, diameter + 50);
            pop();
          } else if (i == correctRow2 && j == correctCol2) {
            push();
            noFill();
            stroke("#E81515");
            strokeWeight(4);
            ellipse(200, 475, diameter + 50, diameter + 50);
            pop();
          } else if (i == correctRow3 && j == correctCol3) {
            push();
            noFill();
            stroke("#E81515");
            strokeWeight(4);
            ellipse(200, 650, diameter + 50, diameter + 50);
            pop();
          }
        }
      }
    }

    if (check == 3 && checkTime == 0) {
      checkTime = millis();
    }
    if (check == 3 && millis() - checkTime > 1000) {
      checkAnswers();
    }
  }  // end of drawing

  void text_() {
    push();
    textSize(70);
    fill(0);
    textAlign(CENTER, TOP);
    text("Easy Question", width/2 + 10, 30);
    pop();
  }  //end of text_()

  boolean isRowSelected(int row) {
    for (int j = 0; j < cols; j++) {
      if (selected[row][j] != 0) {
        return true;
      }
    }
    return false;
  }

  void checkAnswers() {
    if (correctAnswers < 2) {
      sceneTransition("fail");
    } else {
      sceneTransition("success");
    }
  }  // end of checkAnswers()

  void sceneTransition(String sceneName) {
    currentScene = sceneName;
    push();
    background(0);
    textSize(50);
    fill(255);
    textAlign(CENTER, CENTER);
    pop();
    if (sceneName=="fail") {
      image(img_sadSunbi, 0, 0, width, height);
      fill(250);
      textSize(50);
      text("Sunbi failed the examination.", width/2-290, height/2 - 350);
      //sad.play();
      if ((millis() / interval) % 2 == 0) {
        push();
        textSize(35);
        fill(250);
        text("Press 'r' to take the test again", width/2-190, height/2 - 300);
        pop();
      }
    } else if (sceneName=="success") {
      push();
      image(img_background, 0, 0, width, height);
      fill(0);
      textSize(50);
      text("Sunbi passed the examination.", width/2-290, height/2 - 350);
      //textSize(30);
      imageMode(CENTER);
      //happy.play();
      pop();
    }
  }  // end of sceneTransition()

  void resetTest() {
    currentScene = "test";
    correctAnswers = 0;
    check = 0;
    checkTime = 0;
    //startTime = millis();
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        selected[i][j] = 0;
      }
    }
  }  // end of resetTest()

  void keyPressed() {
    // 'success' 화면에서 'r' 키를 눌렀을 때 테스트 재시작
    if (currentScene=="success" && key == ' ') {
      //resetTest();
      main_scene_code = "aeasy";// 게임을 초기화하고 다시 시작
    } else if (currentScene=="fail" && key == 'r') {
      resetTest();
      Num_Jokbo = 3;
      main_scene_code = "howsp";
    }
  }  //end of keyPressed()

  void mousePressed() {
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        float x = j * spacing + spacing / 2; // 원의 x 좌표 계산
        float y = i * spacing + spacing / 2; // 원의 y 좌표 계산
        float d = dist(mouseX, mouseY, x+110, y+280); // 마우스와 원의 거리 계산
        if (d < diameter / 2 && selected[i][j] == 0 && !isRowSelected(i)) {
          check++;
          // 마우스가 원 안에 있고, 원이 아직 선택되지 않았으며, 해당 행에 다른 선택된 원이 없을 때
          if (i == correctRow1 && j == correctCol1 || i == correctRow2 && j == correctCol2 || i == correctRow3 && j == correctCol3) {
            selected[i][j] = 2; // 정답인 경우
            correctClicked = true; // 정답이 클릭되었음을 표시
          } else {
            selected[i][j] = 1; // 정답이 아닌 경우
          }
        }
      }
    }
  }  //end of mousePressed()
}  //end of class EasyQuestion*/

    let startTime;
    class EasyQuestion {
        img_test;
        img_sunbi;
        img_background;
        img_sadSunbi;
        img_testbackground;
        EQ_J1;
        EQ_J2;
        EQ_J3;
        img_correct; // 맞음
        img_false; // 틀림
        //SoundFile sad;
        //SoundFile happy;
        cols = 5;
        rows = 3;
        diameter = 35;
        spacing = 180;
        selected;
        correctRow1 = 0;
        correctCol1 = 3;
        correctRow2 = 1;
        correctCol2 = 4;
        correctRow3 = 2;
        correctCol3 = 2;
        correctClicked = false;
        timeLimit = 30000; //int startTime;
        correctAnswers = 0;
        check = 0;
        checkTime = 0;
        currentScene = "start";
        interval = 650;
        startDelayPassed = false;
        temp1 = true;
        startDelay = 0; //3000
        s327;
        successSound;
        failedsound;
        correct;
        wrong;
        preload() {
          this.s327 = loadSound("./data/s327");
          this.successSound = loadSound("./data/successSound");
          this.failedsound = loadSound("./data/failedsound");
          this.correct = loadSound("./data/correct");
          this.wrong = loadSound("./data/wrong");
            
        }
        setup() {
          this.selected = Array.from(new Array(this.rows), () => new Array(this.cols));
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.selected[i][j] = 0;
                }
            }
             //sad = new SoundFile(this, "sad");
            //happy = new SoundFile(this, "happy");
            startTime = millis();
          this.img_test = loadImage("./data/test11.png");
            this.img_sunbi = loadImage("./data/happysunbi.png");
            this.img_background = loadImage("./data/bg1.png");
            this.img_sadSunbi = loadImage("./data/failseonbi.png");
            this.img_testbackground = loadImage("./data/bg2.jpg");
            this.EQ_J1 = loadImage("./data/EQ_j1.png");
            this.EQ_J2 = loadImage("./data/EQ_J2.png");
            this.EQ_J3 = loadImage("./data/EQ_J3.png");
            this.img_correct = loadImage("./data/맞음.png");
            this.img_false = loadImage("./data/틀림.png");
            this.currentScene = "start";
            this.correctAnswers = 0;
            this.check = 0;
            this.checkTime = 0; //startTime = millis();
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.selected[i][j] = 0;
                }
            }
        }
        update() {
            if (this.currentScene=="start") {
                //drawingStartScene();
                if (millis() - startTime > this.startDelay) {
                    this.currentScene = "test";
                    startTime = millis();
                }
            } else if (this.currentScene=="test") {
                this.drawing();
                if (millis() - startTime > this.timeLimit) {
                    this.checkAnswers();
                }
            } else {
                this.sceneTransition(this.currentScene);
            }
        } // end of update()
        //void drawingStartScene() {
        //  background(0);
        //  textSize(50);
        //  textAlign(CENTER, CENTER);
        //  text("# Interaction 14", width / 2, height / 2);
        //}
        drawing() {
            image(this.img_testbackground, 0, 0, width, height);
            switch (Num_Jokbo) {
                case 0:
                    image(this.EQ_J1, 0, 0, width, height);
                    break;
                case 1:
                    image(this.EQ_J2, 0, 0, width, height);
                    break;
                case 2:
                    image(this.EQ_J3, 0, 0, width, height);
                    break;
                case 3:
                    image(this.EQ_J3, 0, 0, width, height);
                    break;
            } // end of switch
            // end of drawing
            //push();
            //image(img_testbackground, 0, 0, width, height);
            //image(img_test, 0, 0, width, height);
            //fill(0);
            //text("1.", 200, 290);
            //text("2.", 200, 470);
            //text("3.", 200, 650);
            //text_();
            //pop();
            let remainingTime =
                floor((this.timeLimit - (millis() - startTime)) / 1000);
            let timeText = "Left Time: " + remainingTime + "s";
            push();
            textSize(20);
            fill(0);
            textAlign(RIGHT, TOP);
            text(timeText, width - 20, 20);
            pop();
            this.correctAnswers = 0;
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    let x = j * this.spacing + this.spacing / 2;
                    let y = i * this.spacing + this.spacing / 2;
                    fill(255);
                    stroke(1);
                    ellipse(x + 110, y + 280, this.diameter, this.diameter);
                    if (this.selected[i][j] == 1) {
                        fill(0);
                        ellipse(
                            x + 110,
                            y + 280,
                            this.diameter - 10,
                            this.diameter - 10
                        );
                        if (i == this.correctRow1 && j != this.correctCol1) {
                            image(this.img_false, 55, -205, width, height); //push();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //line(160, 330, 230, 260);
                            //pop();
                        } else if (
                            i == this.correctRow2 &&
                            j != this.correctCol2
                        ) {
                            image(this.img_false, 55, -30, width, height); //push();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //line(160, 510, 230, 440);
                            //pop();
                        } else if (
                            i == this.correctRow3 &&
                            j != this.correctCol3
                        ) {
                            image(this.img_false, 55, 155, width, height); //push();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //line(160, 690, 230, 620);
                            //pop();
                        }
                    } else if (this.selected[i][j] == 2) {
                        fill(0);
                        ellipse(
                            x + 110,
                            y + 280,
                            this.diameter - 10,
                            this.diameter - 10
                        );
                        this.correctAnswers++;
                        if (i == this.correctRow1 && j == this.correctCol1) {
                            image(this.img_correct, 60, 0, width, height); //push();
                            //noFill();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //ellipse(200, 295, diameter + 50, diameter + 50);
                            //pop();
                        } else if (
                            i == this.correctRow2 &&
                            j == this.correctCol2
                        ) {
                            image(this.img_correct, 60, 185, width, height); //push();
                            //noFill();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //ellipse(200, 475, diameter + 50, diameter + 50);
                            //pop();
                        } else if (
                            i == this.correctRow3 &&
                            j == this.correctCol3
                        ) {
                            image(this.img_correct, 60, 370, width, height); //push();
                            //noFill();
                            //stroke("#E81515");
                            //strokeWeight(4);
                            //ellipse(200, 650, diameter + 50, diameter + 50);
                            //pop();
                        }
                    }
                }
            }
            if (this.check == 3 && this.checkTime == 0) {
                this.checkTime = millis();
            }
            if (this.check == 3 && millis() - this.checkTime > 1000) {
                this.checkAnswers();
            }
        } // end of drawing
        text_() {
            push();
            textSize(70);
            fill(0);
            textAlign(CENTER, TOP);
            text("Easy Question", width / 2 + 10, 30);
            pop();
        } //end of text_()
        isRowSelected(row) {
            for (let j = 0; j < this.cols; j++) {
                if (this.selected[row][j] != 0) {
                    return true;
                }
            }
            return false;
        }
        checkAnswers() {
            if (this.correctAnswers < 2) {
                this.sceneTransition("fail");
            } else {
                this.sceneTransition("success");
            }
        } // end of checkAnswers()
        sceneTransition(sceneName) {
            this.currentScene = sceneName;
            push();
            background(0);
            textSize(50);
            fill(255);
            textAlign(CENTER, CENTER);
            pop();
            if (sceneName=="fail") {
                if (sstart) {
                    this.failedsound.play();
                    sstart = false;
                }
                push();
                image(this.img_sadSunbi, 0, 0, width, height);
                fill(250);
                textSize(60);
                textAlign(CENTER);
                text(
                    "Seonbi failed the examination.",
                    width / 2,
                    height / 2 - 290
                );
                pop(); //sad.play();
                {
                    push();
                    textSize(30);
                    fill(250);
                    textAlign(CENTER);
                    text(
                        "Press 'r' to take the test again",
                        width / 2,
                        height / 2 - 235
                    );
                    pop();
                }
            } else if (sceneName=="success") {
                push();
                if (sstart) {
                    this.successSound.play();
                    this.s327.play();
                    sstart = false;
                }
                image(this.img_background, 0, 0, width, height);
                fill(0);
                textSize(60);
                textAlign(CENTER);
                text(
                    "Seonbi passed the examination.",
                    width / 2,
                    height / 2 - 320
                ); //textSize(30);
                imageMode(CENTER); //happy.play();
                pop();
            }
        } // end of sceneTransition()
        resetTest() {
            this.currentScene = "test";
            this.correctAnswers = 0;
            this.check = 0;
            this.checkTime = 0; //startTime = millis();
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.selected[i][j] = 0;
                }
            }
        } // end of resetTest()
        keyPressed() {
            // 'success' 화면에서 'r' 키를 눌렀을 때 테스트 재시작
            if (this.currentScene=="success" && key == " ") {
                //resetTest();
                this.successSound.stop();
                this.s327.stop();
                sstart = true;
                main_scene_code = "aeasy"; // 게임을 초기화하고 다시 시작
            } else if (this.currentScene=="fail" && key == "r") {
                this.failedsound.stop();
                sstart = true;
                this.resetTest();
                Num_Jokbo = 3;
                main_scene_code = "howsp";
            }
        } //end of keyPressed()
        mousePressed() {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    let x = j * this.spacing + this.spacing / 2; // 원의 x 좌표 계산
                    let y = i * this.spacing + this.spacing / 2; // 원의 y 좌표 계산
                    let d = dist(mouseX, mouseY, x + 110, y + 280); // 마우스와 원의 거리 계산
                    if (
                        d < this.diameter / 2 &&
                        this.selected[i][j] == 0 &&
                        !this.isRowSelected(i)
                    ) {
                        this.temp1 = true;
                        this.check++; // 마우스가 원 안에 있고, 원이 아직 선택되지 않았으며, 해당 행에 다른 선택된 원이 없을 때
                        if (
                            (i == this.correctRow1 && j == this.correctCol1) ||
                            (i == this.correctRow2 && j == this.correctCol2) ||
                            (i == this.correctRow3 && j == this.correctCol3)
                        ) {
                            this.selected[i][j] = 2; // 정답인 경우
                            if (this.temp1) {
                                this.correct.play();
                                this.temp1 = false;
                            }
                            this.correctClicked = true; // 정답이 클릭되었음을 표시
                        } else {
                            this.selected[i][j] = 1; // 정답이 아닌 경우
                            if (this.temp1) {
                                this.wrong.play();
                                this.temp1 = false;
                            }
                        }
                    }
                }
            }
        } //end of mousePressed()
    } //end of class EasyQuestion

