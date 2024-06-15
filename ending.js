class Ending {
    sceneNumber;
    ty;
    font;
    MyFont;
    fir = new Firework();
    chr1 = new Charac("chr1.png", 80, 120);
    chr2 = new Charac("chr2.png", 150, 150);
    chr3 = new Charac("chr3.png", 100, 100);
    chr4 = new Charac("chr4.png", 120, 125);
    chr5 = new Charac("chr5.png", 300, 300);
    chr6 = new Charac("chr6.png", 100, 100);
    chr7 = new Charac("chr7.png", 100, 100);
    chr8 = new Charac("chr8.png", 125, 100);
    chr9 = new Charac("chr9.png", 100, 100);
    chr10 = new Charac("chr10.png", 240, 160);
    chr11 = new Charac("chr11.png", 65, 110);
    chr12 = new Charac("chr12.png", 80, 100);
    chr13 = new Charac("chr13.png", 200, 200);
    chr14 = new Charac("chr14.png", 120, 120);
    chr15 = new Charac("chr15.png", 94, 107);
    constructor() {
        this.sceneNumber = 1;
        this.font = loadFont("H2sa1M-100.vlw");
        this.MyFont = loadFont("NanumGothic", 10);
        this.ty = height / 2;
    }
    update() {
        this.drawing();
        this.fir.drawing();
    }
    drawing() {
        background(0);
        this.chr1.drawing();
        this.chr2.drawing();
        this.chr3.drawing();
        this.chr4.drawing();
        this.chr5.drawing();
        this.chr6.drawing();
        this.chr7.drawing();
        this.chr8.drawing();
        this.chr9.drawing();
        this.chr10.drawing();
        this.chr11.drawing();
        this.chr12.drawing();
        this.chr13.drawing();
        this.chr14.drawing();
        this.chr15.drawing();
        if (this.sceneNumber == 1) {
            this.credit(this.ty);
            this.ty -= 4;
            if (this.ty + 12000 < 3000) {
                this.sceneNumber += 1;
            }
        } else if (this.sceneNumber == 2) {
            push();
            textFont(this.MyFont, 97);
            if (mouseX > 845 && mouseX < 1160 && mouseY > 670 && mouseY < 700) {
                textSize(40);
                fill("#23E5E4");
                text("Return to Choice", 845, 700);
                console.log(mouseY);
            } else {
                textSize(40);
                fill(255);
                text("Return to Choice", 845, 700);
                console.log(mouseY);
            }
            if (this.mousePressed) {
                if (
                    mouseX > 845 &&
                    mouseX < 1160 &&
                    mouseY > 670 &&
                    mouseY < 700
                ) {
                    endingsound.stop();
                    outro.stop();
                    this.sceneNumber = 1;
                    this.ty = height / 2;
                    Team = 0;
                    scene = 15;
                    isFinished = false;
                    sstart = true;
                }
            }
            if (mouseX > 900 && mouseX < 1170 && mouseY > 730 && mouseY < 760) {
                textSize(40);
                fill("#23E5E4");
                text("Return to title", 900, 760);
                console.log(mouseY);
            } else {
                textSize(40);
                fill(255);
                text("Return to title", 900, 760);
                console.log(mouseY);
            }
            if (this.mousePressed) {
                if (
                    mouseX > 900 &&
                    mouseX < 1170 &&
                    mouseY > 730 &&
                    mouseY < 760
                ) {
                    endingsound.stop();
                    outro.stop();
                    this.sceneNumber = 1;
                    this.ty = height / 2;
                    Team = 0;
                    scene = 0;
                    isFinished = false;
                    sstart = true;
                }
            }
            pop();
        }
    }
    mousePressed() {
        this.fir.mousePressed();
    }
    credit(a) {
        push();
        textAlign(CENTER);
        textFont(this.MyFont, 97);
        text("제작", 300, a - 100, width / 2, height / 2);
        fill("#FFF048");
        text("Design", 0, a + 100, width, height / 2); //디자인팀
        fill(250);
        text("<김수정>", 300, a + 200, width / 2, height / 2);
        text("박서연", 300, a + 300, width / 2, height / 2);
        text("장시영", 300, a + 400, width / 2, height / 2);
        text("최유진", 300, a + 500, width / 2, height / 2);
        text("이조안", 300, a + 600, width / 2, height / 2);
        fill("#2B4CFC");
        text("Develop", 0, a + 800, width, height / 2); //개발팀
        fill(250);
        text("<문환주>", 300, a + 900, width / 2, height / 2);
        text("최우형", 300, a + 1000, width / 2, height / 2);
        text("임지후", 300, a + 1100, width / 2, height / 2);
        text("이재현", 300, a + 1200, width / 2, height / 2);
        text("김준우", 300, a + 1300, width / 2, height / 2);
        text("1조", 300, a + 1500, width / 2, height / 2); //소개
        fill("#FF36B6");
        text("문환주", 300, a + 1600, width / 2, height / 2);
        fill(250);
        text("이조안", 300, a + 1700, width / 2, height / 2);
        text("최우형", 300, a + 1800, width / 2, height / 2);
        text("이가은", 300, a + 1900, width / 2, height / 2);
        text("임준환", 300, a + 2000, width / 2, height / 2);
        text("2조", 300, a + 2200, width / 2, height / 2);
        fill("#FF36B6");
        text("임지후", 300, a + 2300, width / 2, height / 2);
        fill(250);
        text("김수정", 300, a + 2400, width / 2, height / 2);
        text("최유진", 300, a + 2500, width / 2, height / 2);
        text("주현승", 300, a + 2600, width / 2, height / 2);
        text("권현우", 300, a + 2700, width / 2, height / 2);
        text("3조", 300, a + 2900, width / 2, height / 2);
        fill("#FF36B6");
        text("박서연", 300, a + 3000, width / 2, height / 2);
        fill(250);
        text("장시영", 300, a + 3100, width / 2, height / 2);
        text("이재현", 300, a + 3200, width / 2, height / 2);
        text("김준우", 300, a + 3300, width / 2, height / 2);
        text("유원상", 300, a + 3400, width / 2, height / 2); /*
    1. 타인의 소스코드 활용시 사용했음을 출력
     2. AI를 이용해 제작한 콘텐츠
     3. 모든 참여 학생의 참여 내역에 대한 내용(콘텐츠 이름, 기능, 함수 이름 등)
     */
        textFont(this.MyFont, 97);
        textSize(40);
        textAlign(CENTER);
        fill("#2FB960");
        text("-- 활용한 소스코드 --", 300, a + 3800, width / 2, height / 2);
        fill(255);
        text(
            "learningprocessing 예제 활용",
            300,
            a + 3870,
            width / 2,
            height / 2
        );
        fill("#2FB960");
        text("-- AI 활용한 내용 --", 300, a + 4070, width / 2, height / 2);
        fill(255);
        text("미로게임(깊이 우선 탐색)", 300, a + 4140, width / 2, height / 2);
        text("구렁이 피하기 인터랙션", 300, a + 4210, width / 2, height / 2);
        text(
            "종 울리기 인터랙션(까치 이미지 변환 과정)",
            70,
            a + 4280,
            width - 100,
            height / 2
        );
        text(
            "산타기게임(산과 선비 충돌 확인)",
            300,
            a + 4350,
            width / 2,
            height / 2
        );
        text(
            "과거시험 문제(객관식 답안 버튼 생성, 시간 제한 기능 추가)",
            80,
            a + 4420,
            width - 150,
            height / 2
        );
        text("방문 열기 인터랙션", 300, a + 4490, width / 2, height / 2);
        text("엔딩크레딧 불꽃놀이 효과", 300, a + 4560, width / 2, height / 2);
        text(
            "TTS 나레이션 및 캐릭터 목소리 구현(TTS 클로바더빙)",
            90,
            a + 4630,
            width - 150,
            height / 2
        );
        text(
            "관리 피하기 게임 BGM(Udio 활용)",
            300,
            a + 4700,
            width / 2,
            height / 2
        );
        text(
            "인터랙션 효과음 및 게임 bgm(Udio 활용)",
            80,
            a + 4770,
            width - 120,
            height / 2
        );
        fill("#2FB960");
        text("-- 멤버별 참여 내용 --", 300, a + 4970, width / 2, height / 2);
        fill(255);
        textSize(35);
        text(
            "문환주 : 기술 총괄, 활쏘기 인터랙션 제작, 코드 병합, 디버깅, 장면 간편 이동 제작, 애니메이션 제작, 일부 오브젝트 디자인(활쏘기 인터랙션의 나무),일부 배경 디테일 추가(활쏘기 인터랙션 실패 배경 등), 사운드 삽입",
            50,
            a + 5040,
            width - 100,
            height / 2
        );
        text(
            "최우형 : 개발팀, Scene1 class, mazegame, 미로게임 인터렉션 제작, 1조 전체 피드백, 자막 대본 종합, 자막 디자인 제작",
            50,
            a + 5240,
            width - 90,
            height / 2
        );
        text(
            "이조안 : 분기점 선택지(scene5클래스),채색/보정,코고는 소리",
            70,
            a + 5440,
            width - 100,
            height / 2
        );
        text(
            "이가은 : 구렁이 움직임 구현, 장면 명암 넣기, 자막 수정",
            75,
            a + 5640,
            width - 100,
            height / 2
        );
        text(
            "임준환 : 새끼 까치들 주위를 맴도는 어미 까치의 움직임 인터랙션, 마지막 장면에 들어갈 캐릭터 그리기, 대본 번역",
            60,
            a + 5840,
            width - 100,
            height / 2
        );
        text(
            "임지후 : 까치 묻어주는 인터렉션 제작, 2조 코드 병합 담당 / 전체 병합 코드 자막 버그 수정/ 자막 대본 보정/분기점 복귀 버튼 생성/ 기타 객체 좌표 및 히트박스 개선",
            50,
            a + 6040,
            width - 90,
            height / 2
        );
        text(
            "김수정 : 장면 선화 및 배경, 디자인 총괄, 엔딩 장면 콘텐츠 병합, 구렁이피하기게임 코드 제작",
            60,
            a + 6240,
            width - 70,
            height / 2
        );
        text(
            "최유진 : 일러스트 채색, 까치가 장애물을 피해서 날아가는 게임 코드 제작, 엔딩 크레딧 코드 제작",
            50,
            a + 6440,
            width - 70,
            height / 2
        );
        text(
            "주현승 : 구렁이가 혓바닥 낼름거리는 코드 제작, 음성 녹음, 인터랙션 기획",
            50,
            a + 6640,
            width - 60,
            height / 2
        );
        text(
            "권현우 : 까치가 종에 머리를 부딪치는 인터랙션 제작, 종소리 효과음 녹음 ",
            50,
            a + 6840,
            width - 60,
            height / 2
        );
        text(
            "박서연 : 총괄 팀장, 디자인팀(장면 채색 및 명암, 선비 retest 다짐 장면 제작, 일부 숲 배경 제작), 과거시험 문제 코드 구현(answer), 어려운 문제 시험지 제작, 3조 자막 제작 및 수정, 3조 전체 피드백 및 일부 추가 장면 기획(spgame 이전 장면들), 엔딩 크레딧 코드 수정, fireworks 효과 코드 구현, 사운드 추가(intro 및 outro, eating, success, failed sound 등), 까치 날갯짓 사운드 녹음(flying.mp3), 팀 전체 장면 피드백 및 인터랙션 기획",
            60,
            a + 7040,
            width - 150,
            height / 2
        );
        text(
            "장시영 : EasyQuestion 장면, 선화 채색 및 명암, TTS 더빙 제작, 까치 울음 소리 녹음",
            50,
            a + 7440,
            width - 70,
            height / 2
        );
        text(
            "이재현 : 관리 피하기 게임 제작, 3조 장면 코드들 클래스화 및 병합, 관리 피하기 게임 배경음악 제작",
            50,
            a + 7640,
            width - 100,
            height / 2
        );
        text(
            "김준우 : 개발팀/산 점프 게임 구현/3조 돌아가는 버튼 구현/3조 코드에서 오류 수정 후 코드 재병합(문제 인터렉션 후 reset 오류 해결 등)/3조 자막 수정 및 오류 피드백/3조 자잘한 코드 구현(문 여는 장면에서 문 열리는 정도에 따라 까치 클릭 여부 수정 등)/산 점프 게임 설명 화면 디자인/산 점프 게임 점프 효과음 녹음",
            50,
            a + 7840,
            width - 100,
            height / 2
        );
        text(
            "유원상 : 방문 열기 인터랙션 제작, 캐릭터 그리기",
            60,
            a + 8170,
            width - 50,
            height / 2
        );
        textSize(70);
        fill("#FFEC1A");
        text("Thank You For Playing!", 60, a + 8640, width - 100, height / 2);
        pop();
    }
} // end of class Ending
class Charac {
    img;
    g = 0.1;
    vx = -5;
    vy;
    x;
    y;
    sy;
    sizex;
    sizey;
    constructor(name, b, c) {
        this.img = loadImage(name);
        this.x = random(200, 500);
        this.vx = random(1, 5);
        this.sy = random(-10, -4);
        this.vy = this.sy;
        this.sizex = b;
        this.sizey = c;
    }
    drawing() {
        push();
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.sizex, this.sizey);
        pop();
        this.vy += this.g;
        this.y += this.vy;
        this.x += this.vx;
        if (
            this.x > width - 100 - this.sizex / 2 ||
            this.x < 100 + this.sizex / 2
        ) {
            this.vx *= -1;
        }
        if (this.y > height - 100 - this.sizey / 2) {
            this.vy = this.sy;
        }
    }
}
