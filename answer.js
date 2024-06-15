
  class Answer {
      img_test; // 시험지
      img_happySunbi; // 급제한 선비
      img_sadSunbi; // 낙제한 선비
      img_testbackground; // 과거시험 배경
      img_correct; // 맞음
      img_false; // 틀림
      //  SoundFile sad; // 낙제했을 때 사운드
      font = loadFont("H2sa1M-100.vlw");
      cols = 5; // 열의 수
      rows = 3; // 행의 수
      diameter = 35; // 원의 지름
      spacing = 180; // 원 사이의 간격
      selected; // 선택 상태를 저장하는 배열
      correctRow1 = 0; // 정답이 있는 행 번호 (0부터 시작)
      correctCol1 = 1; // 정답이 있는 열 번호 (0부터 시작)
      correctRow2 = 1; // 정답이 있는 행 번호 (0부터 시작)
      correctCol2 = 2; // 정답이 있는 열 번호 (0부터 시작)
      correctRow3 = 2; // 정답이 있는 행 번호 (0부터 시작)
      correctCol3 = 3; // 정답이 있는 열 번호 (0부터 시작)
      correctClicked = false; // 정답이 클릭되었는지 여부
      s35;
      timeLimit = 30000; // 제한 시간 (30초)
      startTime; // 시작 시간
      correctAnswers = 0; // 정답 개수를 추적하는 변수 추가
      check = 0; // 푼 문제 갯수
      checkTime = 0;
      currentScene = "start"; // 현재 화면을 추적하는 변수 추가 (기본값은 'test')
      interval = 650; // text 깜빡이는 속도 조절 변수
      startDelayPassed = false; // 시작 지연이 지났는지 확인하는 변수
      startDelay = 0; // 시작 지연 시간 (3초)
      // 정답: (0,1), (1,2), X
      successSound;
      failedsound;
      correct;
      wrong;
      temp1 = true;
      constructor(p) {
          this.successSound = loadSound("assets/successSound.mp3");
          this.failedsound = loadSound("assets/failedsound.mp3");
          this.correct = loadSound("assets/correct.mp3");
          this.wrong = loadSound("assets/wrong.mp3");
          this.selected = Array.from(new Array(rows), () => new Array(cols)); // 선택 상태를 저장할 배열 초기화
          for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.cols; j++) {
                  this.selected[i][j] = 0; // 모든 원을 선택되지 않은 상태로 초기화
              }
          }
          this.img_test = loadImage("assets/DifficultQuestion.png");
          this.img_happySunbi = loadImage("assets/bg1.png");
          this.img_sadSunbi = loadImage("assets/failseonbi.png");
          this.img_testbackground = loadImage("assets/빈티지배경.jpg");
          this.img_correct = loadImage("assets/맞음.png");
          this.img_false = loadImage("assets/틀림.png");
          this.s35 = loadSound("assets/s35.mp3"); //sad = new SoundFile(this, "실패소리.mp3");
          this.startTime = millis();
      } // end of Answer()'
      setup() {
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
          if (this.currentScene.equals("start")) {
              //drawingStartScene();
              if (millis() - this.startTime > this.startDelay) {
                  this.currentScene = "test";
                  this.startTime = millis();
              }
          } else if (this.currentScene.equals("test")) {
              this.drawing();
              if (millis() - this.startTime > this.timeLimit) {
                  this.checkAnswers();
              }
          } else {
              this.sceneTransition(this.currentScene);
          }
      } // end of update()
      //void drawingStartScene() {
      //  if (!startDelayPassed) {
      //    if (millis() - startTime > startDelay) {
      //      startDelayPassed = true; // 3초가 지나면 test 화면을 표시할 준비 완료
      //      startTime = millis(); // 시작 시간 초기화
      //    } else {
      //      // 3초 동안 검은 화면 유지
      //      push();
      //      background(0);
      //      textSize(50);
      //      textAlign(CENTER, CENTER);
      //      text("# Interaction 12", width/2, height/2);
      //      pop();
      //      return; // 아래의 코드를 실행하지 않고 draw() 함수를 종료
      //    }
      //  }
      //}  // end of drawingStartScene()
      drawing() {
          if (!this.currentScene.equals("test")) {
              return;
          }
          push();
          image(this.img_testbackground, 0, 0, width, height);
          image(this.img_test, 0, 0, width, height);
          fill(0); // text_();
          pop(); // 시간 제한까지 남은 시간 계산
          let remainingTime =
              (this.timeLimit - (millis() - this.startTime)) / 1000; // 초 단위로 변환
          let timeText = "Left Time: " + remainingTime + "s"; // 남은 시간 표시
          push();
          textSize(20);
          fill(0);
          textAlign(RIGHT_ARROW, TOP);
          text(timeText, width - 20, 20); // 화면 오른쪽 상단에 위치
          pop();
          this.correctAnswers = 0; // 매 프레임마다 정답 개수를 0으로 초기화
          for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.cols; j++) {
                  let x = j * this.spacing + this.spacing / 2; // 원의 x 좌표 계산
                  let y = i * this.spacing + this.spacing / 2; // 원의 y 좌표 계산
                  fill(255); // 원을 흰색으로 채우기
                  stroke(1);
                  ellipse(x + 110, y + 280, this.diameter, this.diameter); // 흰 원 그리기
                  if (this.selected[i][j] == 1) {
                      fill(0); // 선택된 원을 검정색으로 채우기
                      ellipse(
                          x + 110,
                          y + 280,
                          this.diameter - 10,
                          this.diameter - 10
                      ); // 작은 검정 원 그리기
                      if (i == this.correctRow1 && j != this.correctCol1) {
                          image(this.img_false, 0, -185, width, height); //push();
                          //stroke("#E81515");
                          //strokeWeight(4);
                          //line(120, 345, 190, 275); //틀린 선1
                          //pop();
                      } else if (
                          i == this.correctRow2 &&
                          j != this.correctCol2
                      ) {
                          image(this.img_false, 0, 0, width, height); //push();
                          //stroke("#E81515");
                          //strokeWeight(4);
                          //line(120, 530, 190, 460); //틀린 선2
                          //pop();
                      } else {
                          image(this.img_false, 0, 185, width, height); //push();
                          //stroke("#E81515");
                          //strokeWeight(4);
                          //line(120, 715, 190, 645); //틀린 선3
                          //pop();
                      }
                  } else if (this.selected[i][j] == 2) {
                      fill(0); // 정답인 원을 검정색으로 채우기
                      ellipse(
                          x + 110,
                          y + 280,
                          this.diameter - 10,
                          this.diameter - 10
                      ); // 작은 검정 원 그리기
                      this.correctAnswers++; // 정답인 경우 정답 개수 증가
                      if (i == this.correctRow1 && j == this.correctCol1) {
                          image(this.img_correct, 0, 0, width, height); //push();
                          //noFill();
                          //stroke("#E81515");
                          //strokeWeight(4);
                          //ellipse(155, 307, diameter+50, diameter+50); // 동그라미 그리기
                          //pop();
                      } else if (
                          i == this.correctRow2 &&
                          j == this.correctCol2
                      ) {
                          image(this.img_correct, 0, 185, width, height); //push();
                          //noFill();
                          //stroke("#E81515");
                          //strokeWeight(4);
                          //ellipse(155, 492, diameter+50, diameter+50); // 동그라미 그리기
                          //pop();
                      }
                  }
              }
          } // 제한 시간 체크
          if (millis() - this.startTime > this.timeLimit) {
              this.checkAnswers(); // 제한 시간 초과 시 장면 전환
          }
          if (this.check == 3 && this.checkTime == 0) {
              this.checkTime = millis(); // check가 3이 되는 순간의 시간을 기록
          } // check가 3이 되고 3초가 지났는지 확인
          if (this.check == 3 && millis() - this.checkTime > 1000) {
              this.checkAnswers(); // 3초 후에 화면 전환
          }
      } // end of drawing
      text_() {
          // 상단에 Exam 추가함수
          push();
          textSize(70);
          fill(0);
          textAlign(CENTER, TOP);
          text("Exam", width / 2 + 10, 70);
          pop();
      } // end of text_()
      isRowSelected(row) {
          for (let j = 0; j < this.cols; j++) {
              if (this.selected[row][j] != 0) {
                  return true; // 해당 행에 이미 선택된 원이 있음
              }
          }
          return false; // 해당 행에 선택된 원이 없음
      }
      checkAnswers() {
          if (this.correctAnswers < 2) {
              // 정답이 2개 미만인 경우
              this.sceneTransition("fail");
          } else {
              // 정답이 2개 이상인 경우
              this.sceneTransition("success");
          }
      } // end of checkAnswers()
      sceneTransition(sceneName) {
          this.currentScene = sceneName; // 현재 화면을 업데이트
          push();
          background(0);
          textSize(50);
          fill(255);
          textAlign(CENTER, CENTER);
          pop();
          if (sceneName.equals("fail")) {
              push();
              image(this.img_sadSunbi, 0, 0, width, height);
              fill(250);
              textSize(60);
              textAlign(CENTER);
              if (sstart) {
                  this.failedsound.cue(0);
                  this.failedsound.play();
                  this.s35.cue(0);
                  this.s35.play();
                  sstart = false;
              }
              text(
                  "Seonbi failed the examination.",
                  width / 2,
                  height / 2 - 290
              );
              pop(); //sad.play();
          } else if (sceneName.equals("success")) {
              if (sstart) {
                  this.successSound.cue(0);
                  this.successSound.play();
                  sstart = false;
              }
              push();
              image(this.img_happySunbi, 0, 0, width, height);
              fill(0);
              textSize(60);
              textAlign(CENTER);
              text(
                  "Seonbi passed the examination.",
                  width / 2,
                  height / 2 - 320
              );
              imageMode(CENTER);
              pop();
              if ((millis() / this.interval) % 2 == 0) {
                  push();
                  textSize(30);
                  fill("#0F24FC");
                  textAlign(CENTER);
                  text(
                      "Press 'r' to take the test again",
                      width / 2,
                      height / 2 - 285
                  ); // 재시도 옵션
                  pop();
              }
          } // 여기서 원하는 장면 전환 로직을 추가할 수 있습니다.
      } // end of sceneTransition()
      resetTest() {
          // 시험을 초기화하는 로직
          this.currentScene = "test";
          this.correctAnswers = 0;
          this.check = 0;
          this.checkTime = 0;
          this.startTime = millis(); // 시작 시간을 재설정
          for (let i = 0; i < this.rows; i++) {
              for (let j = 0; j < this.cols; j++) {
                  this.selected[i][j] = 0; // 모든 원을 선택되지 않은 상태로 초기화
              }
          }
      } // end of resetTest()
      keyPressed() {
          // 'success' 화면에서 'r' 키를 눌렀을 때 테스트 재시작
          if (this.currentScene.equals("success") && key == "r") {
              this.successSound.stop();
              sstart = true;
              this.successSound.stop();
              this.resetTest(); // 게임을 초기화하고 다시 시작
          } else if (this.currentScene.equals("fail") && key == " ") {
              this.failedsound.stop();
              this.s35.stop();
              sstart = true;
              main_scene_code = "b4door"; // b4 door로 넘기는 부분.
          }
      } // end of keyPressed()
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
                      this.check++;
                      this.temp1 = true; // 마우스가 원 안에 있고, 원이 아직 선택되지 않았으며, 해당 행에 다른 선택된 원이 없을 때
                      if (
                          (i == this.correctRow1 && j == this.correctCol1) ||
                          (i == this.correctRow2 && j == this.correctCol2)
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
      } // end of mousePressed()
  } // end of class Answer

