 // [processing-p5-convert] import processing.sound.*;
 
 let img1 ;
 let img2 ;
 let img3 ;
 let ending2;
 let img4 ; 
 let bang ; 
 let img5 ;
 let img6 ;
 let img7 ;
 let img52 ;
 let img9 ;
 let img10 ;
 let img11 ;
 let img12 ;
 let img13 ;
 let ba ;
 let img14 ;
 let img8 ;
 let IMG8 ;
 let sun ;
 let succ = true ;
 let plus ;
 let sunsnake ;
 let magpie1 ;
 let magpie2 ;
 let magpie3 ; 
 let tongue ;
 let tongueimg2 ;
 let bamsky ;
 let bamsky2 ;
 let floor1 ;let kkachided ;let sunbihand ;let bury1 ;let bury2 ;let buriedflower ; let before ;let after ;
  let Img1 ;
  let Img2 ;
  let Sunbi ;
  let snake ;
  let ssnake ;
  let matdori ; 
  let chaseSpeed = 1 ;
  let  nose ;
  let eatingsound ;
  let  chasingsound ;
  let flying ; 
  let savedseonbi ;
  let ladyissnake ; let mat = true ;
  let s2 = new Array(18); 
  let bellsound;
  let s ; 
  let k ;  
  let bgdx1 = 0 ;
  let bgdx2 = 1200 ;
  let branch ;
  let bgimg ;
  let burylv1 ;
  let burylv2 ;
  let burylv3 ;
  let burylv4 ;
  let buried=false ; 
  let hand ;
  let burycount = 0 ; 
  let handX = 600 ; 
  let xhandY = 900 ;
 let scenenumber = - 1 ; let endingsound ; let textX=0 ;
 let textY ; 
 let message = "Move your mouse slowly to bury the magpie." ; let font2 ; let easing = 0.05; //맨위 변수 추가
 let cans = false ; let sunbi , snaket 
 let Branch = class  { bx ;by ; img ; //constructor
  constructor( tempx , tempy , image ) { this.bx= tempx; this.by= tempy; this.img= image; } display ( ) { push( ) ; image( this.img, this.bx, this.by) ; pop( ) ; } move ( ) { this.bx-= 6 ; } } 
 class Kachi {
  constructor(x, y, img1, img2, img3) {
    this.x = x;
    this.y = y;
    this.images = [img1, img2, img3];
    this.currentImageIndex = 0;
    this.animationSpeed = 0.1;
    this.frameCount = 0;
  }

  move() {
    // 예시: x 좌표를 일정 속도로 이동
  
  this.y+=6;
    if (this.x > width) {
      this.x = -this.images[0].width;
    }
    if(mouseIsPressed){this.y-=12;}
    this.y=constrain(this.y,0,height);
  }
  display() {
    // 현재 프레임에 따라 이미지 인덱스를 업데이트
    this.frameCount += this.animationSpeed;
    if(mouseIsPressed){
    if (this.frameCount >= 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.frameCount = 0;
    }
    }
    else{
      this.currentImageIndex=0;
    } 

    // 현재 이미지 표시
    push();
    imageMode(CENTER)
    image(this.images[this.currentImageIndex], this.x, this.y,300,200);
    pop();
  }

  collapse(b) {
    // 충돌 감지 로직 (예시)
    if ( this.x>= b . bx- 25 && this.x<= b . bx+ 25 && this.y>= b. by&& this.y<= b . by+ 500 ) { 
      return true ;
    } 
    else { 
      return false ; 
    }
  }
}


    let magpiemoving = false ; 
    let scoreUpdated = false ;
    let score = 0 ;
    function guageBar( ){ noStroke( ) ; let barX = width/ 2 - barWidth/ 2 ; 
      let barTop = centerY - barHeight/ 2 ; 
      fill( 218 ) ; 
      rect( barX- 300 , barTop, barWidth, barHeight, 10 , 10 , 10 , 10 ) ;
      fill( 0 , 255 , 0 ) ; 
      rect( barX- 300 , centerY- greenZoneHeight/ 2 , barWidth, greenZoneHeight, 10 , 10 , 10 , 10 ) ; 
      fill( 255 , 0 , 0 ) ; 
      rect( barX- 300 , redY, barWidth, redRectHeight, 10 , 10 , 10 , 10 ) ; 
      if ( moving) 
        { 
          redY+= redSpeed; 
          if ( redY<= barTop|| redY>= barTop+ barHeight- redRectHeight) { 
            redSpeed*= - 1 ; 
          } 
        } 
        if ( ! moving&& redY>= centerY- greenZoneHeight/ 2 && redY<= centerY+ greenZoneHeight/ 2 && ! scoreUpdated) { 
          score++ ; 
          scoreUpdated= true ; 
          magpiemoving= true ; 
        } 
        else if ( ! moving&& ! scoreUpdated) { 
          score= max( 0 , score- 1 ) ; 
          scoreUpdated= true ; 
        } 
        if ( moving) { 
          scoreUpdated= false ; 
        } 
      } 


      let magpieimg
      let currentimg ;
      let magpieX ; 
      let magpieY ;
      let magpiebellimg
      let barWidth = 40 ; 
      let barHeight = 400 ; 
      let greenZoneHeight = 80 ; 
      let redRectHeight = 10 ; 
      let centerY ;
      let redY ; 
      let redSpeed = 10 ; 
      let moving = true ;  
      let magpieSpeed = 30 ; 
      let dirisChanged ;
      let previsChanged = false ; 
      let magpieMovingRight = true ; 
      let magpieMovingLeft = false ;
      let waiting = false ; 
      let switchTime ;
      let bellimg ;
      let bellsoundplayed=false;
      let delayAfterMovement=false;
      let delayStartTime ; 
      function magpieMoving ( ) { 
        image(currentimg, magpieX- 324 , magpieY- 100 ) ; 
        if ( magpiemoving) { 
          currentimg= magpiebellimg; 
          bellsoundplayed= false ; 
          if ( magpieMovingRight&& ! waiting) { 
            magpieX+= magpieSpeed; 
            if ( magpieX>= width- 350 ) { 
              magpieMovingRight= false ; 
              waiting= true ; 
              magpieMovingLeft= true ; 
              switchTime= millis( ) ; 
              dirisChanged= ! dirisChanged; 
            } 
          } 
          else if ( waiting) { 
            if ( millis( ) - switchTime>= 300 ) { 
              waiting= false ; // Keep currentimg as magpiebellimg while waiting
              magpieMovingRight= false ; 
              magpieMovingLeft= true ; 
            } 
          } 
          else if ( magpieMovingLeft&& ! waiting) { 
            magpieX-= magpieSpeed; 
            if ( magpieX<= width- 450 ) { 
              magpieMovingRight= true ; 
              magpieMovingLeft= false ; 
              magpiemoving= false ; 
              dirisChanged=previsChanged; 
              delayAfterMovement= true ; 
              delayStartTime= millis( ) ; 
              if ( !bellsoundplayed) { 
                bellsound . play( ) ; 
                bellsoundplayed= true ; 
              } 
            } 
          } 
        } 
        else if ( delayAfterMovement) { 
          if ( millis( ) - delayStartTime>= 500 ) { 
            currentimg= magpieimg; 
            delayAfterMovement= false ; 
          } 
        } 
      }
  class Team2 {  //added values
 //for game_fly

 constructor( p ) { 
   
   } 
   Font ; 
   imagecnt = 0 ; 
      font ;  Speed = 5 ;  //주현승 & 김수정 클래스
 Tongue =class  { next = true ;X1 ;X2=0 ;Y1 ;Y2=0 ; X ; Speed ; imgHalfWidth ; useFirstImage ; lastSwitchTime ; constructor( img8 , IMG8 , Speed ) { this . img8 = img8; this . IMG8 = IMG8; this . X = width/ 2 ; // 혀의 초기 x 좌표를 400으로 설정
 this . Speed = Speed; this.imgHalfWidth = img8 . width/ 2 ; this . useFirstImage = true ; this . lastSwitchTime = millis( ) ; } 
 move ( ) { 
  this.X+= this.Speed; 
  if ( this.X+ this.imgHalfWidth> 1000 || this.X- this.imgHalfWidth< 800 ) { // 혀가 400과 500 사이에서 움직이도록 설정
 this.Speed= this.Speed* - 1 ; } } 
 display ( ) { 
  if ( millis( ) - this.lastSwitchTime>= 1000 ) { 
    this.useFirstImage= ! this.useFirstImage; 
    this.lastSwitchTime= millis( ) ; 
  } 
  let currentImg = this.useFirstImage? img6: tongueimg2;
  push();
  imageMode(CENTER); 
  image( currentImg, this.X- this.imgHalfWidth, height/ 3.3- currentImg . height/ 4+400 , currentImg . width, currentImg . height) ;
  pop();
 } 
 drawScene1 ( ) { 
  background( 255 ) ; 
  image( img5, 350 , 200 , 400 , 600 ) ; 
  tongue . move( ) ; 
  tongue . display( ) ; 
} drawScene2 ( ) { 
  background( "#7C6311" ) ; chaseSpeed= plus+ chaseSpeed; 
  this.X1= mouseX; 
  this.Y1= mouseY; 
  let dx = this.X1- this.X2; 
  let dy = this.Y1- this.Y2; 
  let distance = sqrt( dx* dx+ dy* dy) ; 
  if ( distance<= 10 ) { 
    this.next= false ; 
  } 
  if ( this.next) { 
    this.X2+= ( dx* chaseSpeed/ distance) * 0.7; this.Y2+= ( dy* chaseSpeed/ distance) * 0.7; 
    push( ) ; 
    imageMode( CENTER) ; 
    image( img52, this.X2, this.Y2, 750 , 500 ) ; 
    image( sunbi, this.X1, this.Y1, 200 , 200 ) ; 
    pop( ) ; 
  } 
    else { push( ) ; 
      textSize( 40 ) ; 
      textAlign( CENTER, CENTER) ; 
      text( "NEXT" , width/ 2 , height/ 2 ) ; 
      pop( ) ; 
    } 
  } 
} //주현승 & 김수정 클래스 끝
 //임지후 변수들
  x1 ;x2 ;x3 ;y1 ;y2 ;y3 ;r1 ;r2 ;  //임지후 변수 끝
 //권현우&최유진 변수
 //for game_bang
  
//권현우&최유진 변수 끝
 //임지후 클래스
 beforeandafter = class  { /*constructor( ) { } */displaybefore ( ) { background( before) ; } displayafter ( ) { background( after) ; } } 
 
 Sunbihand = class{ /*constructor( ) { } */
  dx;dy; 
  angle; 
  rectX = 600 ; rectY = 900 ;
  screencnt = 0 ; speed ; rectXSize = 500 ; rectYSize = 400 ; rotationSpeed = 0.02;
  bury ( ) { 
    // mouseX 값 출력
 if ( mouseX<= 400 && mouseX> 396 || mouseX>= 800 && mouseX<= 804 ) { 
  burycount+= 1 ; 
} 
if ( burycount== 1 ) { 
  burylv1= false ; 
  burylv2= true ; 
} if ( burycount== 2 ) {
   burylv2= false ; 
   burylv3= true ; 
   sstart= true ; 
  } 
  if ( burycount== 3 ) { 
    burylv3= false ; burylv4= true ; 
  } 
} 
armdisplay ( ) { 
  let targetX = mouseX; 
  let targetY = mouseY;
  if ( hand== true ) {
    noStroke( ) ;
    this.dx = targetX- this.rectX; 
    this.dy = targetY- this.rectY; 
    this.angle = atan2( this.dy, this.dx) ; 
    push( ) ; 
    push( ) ; 
    translate( this.rectX, this.rectY) ; 
    rotate( this.angle) ; 
    fill( "#5190a7" ) ; // 새로운 변환 행렬을 스택에 추가
 rotate( HALF_PI* 5 ) ; // 90도 회전
 image( sunbihand, - 431 , - 889 , 777 , 671 ) ; // 이전 변환 행렬로 돌아감
    rectMode( CENTER) ; 
    rect( 0 , 1 , this.rectYSize, this.rectXSize) ; 
    pop( ) ; 
    pop( ) ; 
  } 
} 
} 
 kkachidead = class{ 
  back ( ) { 
    background( floor1) ; 
  } 
 display ( ) { 
  if ( burylv1== true ) { 
    image( kkachided, - 44 , 0 ) ; 
  } 
  if ( burylv2== true ) { 
    image( kkachided, - 44 , 0 ) ; 
    image( bury1, - 44 , 0 ) ; 
  } 
  if ( burylv3== true ) { 
    image( kkachided, - 44 , 0 ) ; 
    image( bury2, - 70 , 0 ) ; // image(buriedflower,574,15,520,662);
  } 
  if ( burylv4== true ) { 
    image( kkachided, - 44 , 0 ) ; 
    image( bury2, - 70 , 0 ) ; 
    image( buriedflower, 574 , 15 , 520 , 662 ) ; 
    hand= false ; 
    buried= true ; 
    push( ) ; 
    if ( sstart) { //audio set
      s2[ 16 ] . play ( ) ; 
      sstart= false ; 
    } //fill(0, 128);
 //rect(100, 650, 1000, 100);
    pop( ) ; //textFont(font, 50);
 //fill(255);
    subtitle( "Rest in peace, magpie.." , "Seonbi" , "#dedeff" ) ; //text("Rest in peace, magpie..", 120, 720);
  } 
} 
} //임지후 클래스 끝
 //권현우 & 최유진 클래스
//권현우 & 최유진 클래스 끝
 //장면전환 클래스
 Scenenumber =class  {  time ;passed ;a ;b ;c ;
  kachi= new Kachi ( 150 , 100 , magpie1,magpie2,magpie3) ; 
  Scene ( ) { if ( scenenumber== 0 ) { image( img9, 0 , 0 ) ; if ( mat== true ) { s2[ 1 ] . stop ( ) ;  matdori . play( ) ; eatingsound . loop( ) ; mat= false ; } subtitle( "Yummy!" , "Seonbi" , "#dedeff" ) ; } //scene 0
 if ( scenenumber== - 1 ) { //added
 if ( sstart) { //audio set
 s2[ 1 ] . play ( ) ; 
 sstart= false ; 
} 
 image( ladyissnake, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Help yourself, please." , "Woman" , "#ffc0cb" ) ; } if ( scenenumber== 1 ) { if ( sstart) { //audio set
 eatingsound . stop( ) ; matdori . stop( ) ; s2[ 2 ] . play ( ) ; sstart= false ; } background( img10) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "What a great place to stay!" , "Seonbi" , "#dedeff" ) ; } if ( scenenumber== 2 ) { if ( sstart) { //audio set
 s2[ 2 ] . stop ( ) ; nose . loop( ) ; sstart= false ; } background( img11) ; push( ) ; fill( 0 , 128 ) ; rect( 50 , 620 , 1100 , 100 ) ; pop( ) ; textFont( font, 50 ) ; fill(255);text( "Zzz..." , 60 , 700 ) ; } if ( scenenumber== 3 ) { background( img12) ; push( ) ; fill( 0 , 128 ) ; pop( ) ; } if ( scenenumber== 4 ) { background( img13) ; push( ) ; fill( 0 , 128 ) ; rect( 50 , 620 , 1100 , 100 ) ; pop( ) ; textFont( font, 50 ) ;fill(255); text( "..." , 60 , 700 ) ; } if ( scenenumber== 5 ) { if ( sstart) { //audio set
 nose . stop( ) ; s2[ 3 ] . play ( ) ; sstart= false ; } background( img14) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "...!!!! HUH??!" , "Seonbi" , "#dedeff" ) ; //text("...!!!! HUH??!", 60, 700);
 } if ( scenenumber== 6 ) { if ( sstart) { //audio set
 s2[ 3 ] . stop ( ) ; ssnake . loop( ) ; s2[ 4 ] . play ( ) ; sstart= false ; } image( snaket, 0 , 0 , 1200 , 800 ) ; tongue . move( ) ; tongue . display( ) ; push( ) ; //fill(0, 128);
 //rect(49, 575, 1105, 175);
 pop( ) ; //textFont(font, 50);
 subtitle( "What the..! A Python?!\nDang it..I should escape!" , "Seonbi" , "#dedeff" ) ; //text("What the..! A Python?!", 80, 648);
 //text("Dang it..I should escape!", 81, 700);
 } //game_fly
 if ( scenenumber== 7 ) { tongue . drawScene2( ) ; if ( sstart) { //audio set
 chasingsound . loop( ) ; s2[ 4 ] . stop ( ) ; sstart= false ; } } if ( scenenumber== 8 ) { if ( sstart) { //audio set
 ssnake . stop( ) ; chasingsound . stop( ) ; s2[ 5 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1110, 100);
 pop( ) ; //textFont(font, 48);
 subtitle( "Please.. I just wanted to save the magpies..\nPlease show me mercy.." , "Seonbi" , "#dedeff" ) ; //text("Please.. I just wanted to save the magpies. Please show me mercy..", 74, 693);
 push( ) ; //fill(0);
 //textFont(font, 23);
 pop( ) ; } if ( scenenumber== 9 ) { if ( sstart) { //audio set
 s2[ 5 ] . stop ( ) ; s2[ 6 ] . play ( ) ; sstart= false ; } image( sunsnake, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 150);
 pop( ) ; //textFont(font, 50);
 subtitle( "Hmm.. If the bell rings three times before sunrise,\nI'll spare your life." , "Python" , "#deffde" ) ; //text("Hmm.. If the bell rings three times before sunrise, ", 120, 700);
 //text("I'll spare your life. ", 120, 750);
 push( ) ; //fill(0);
 //textFont(font, 25);
 pop( ) ; } if ( scenenumber== 10 ) { if ( sstart) { //audio set
 s2[ 6 ] . stop ( ) ; s2[ 7 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "But there will be nobody around the bell now.." , "Seonbi" , "#dedeff" ) ; //text("But there will be nobody around the bell now..", 120, 700);
 push( ) ; //fill(0);
 //textFont(font, 24);
 pop( ) ; } if ( scenenumber== 11 ) { if ( sstart) { //audio set
 s2[ 7 ] . stop ( ) ; s2[ 8 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Oh my god.. I'm doomed now!" , "Seonbi" , "#dedeff" ) ; //text("Oh my god.. I'm doomed now!", 117, 700);
 } if ( scenenumber== 12 ) { if ( sstart) { //audio set
 s2[ 8 ] . stop ( ) ; s2[ 9 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Oh no.. Mr.Seonbi is in danger!" , "Magpie" , "#cccccc" ) ; //text("Oh no.. Mr.Seonbi is in danger!", 120, 700);
 } if ( scenenumber== 13 ) { if ( sstart) { //audio set
 s2[ 9 ] . stop ( ) ; s2[ 10 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "I gotta save Mr.seonbi.. Please help me." , "Magpie" , "#cccccc" ) ; //text("I gotta save Mr.seon.. Please help me.", 120, 700);
 //textFont(font, 26)
 this.time= millis( ) ; 
 this.passed= this.time; 
} if ( scenenumber== 14 ) { bgdx1-= 6 ; bgdx2-= 6 ; if ( bgdx1< - 1200 ) { bgdx1= 1200 ; } if ( bgdx2< - 1200 ) { bgdx2= 1200 ; } image( bamsky, bgdx1, 0 ) ; image( bamsky2, bgdx2, 0 ) ; //for game clear
 this.time= millis( ) ; //show branches
 for ( let i = 0 ; i< branch . length; i++ ) { branch[ i] . display ( ) ; branch[ i] . move ( ) ; //interaction (branches)
 if ( this.kachi . collapse( branch[ i] ) ) { bang . play( ) ; //reset branches
 for ( let j = 0 ; j< branch . length; j++ ) { this.a= int ( random( 0 , 2 ) ) ; if ( this.a== 0 ) { this.b= 0 ; this.c= img3; } else { this.b= 300 ; this.c= img4; } branch[ j] = new Branch ( 650 + j* 500 , this.b, this.c) ; } this.passed= this.time; } else if ( this.time- this.passed>= 14000 ) { //game clear
 this.passed= this.time; scenenumber++ ; } } //show kachi
 this.kachi . display( ) ; this.kachi . move( ) ; textFont( font, 27 ) ; fill(255);text( "Press mouse to soar up" , 50 , 50 ) ; text( "Release to head down" , 50 , 80 ) ; //scenenumber 14 설명텍스트 추가
 } if ( scenenumber== 15 ) { flying . stop( ) ; background( "#363C9D" ) ; textFont( font, 78 ) ; fill(255); text( "Success!!" , ( width/ 2 ) - 150 , height/ 2 ) ; if ( this.time- this.passed>= 3000 ) { scenenumber++ ; } } if ( scenenumber== 16 ) { if ( sstart) { //audio set
 s2[ 10 ] . stop ( ) ; s2[ 11 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Finally I reached the bell.." , "Magpie" , "#cccccc" ) ; //text("Finally I reached the bell..", 120, 700);
 } if ( scenenumber== 17 ) { if ( sstart) { //audio set
 s2[ 11 ] . stop ( ) ; s2[ 12 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Now, I'll hit the bell. Please help me again!" , "Magpie" , "#cccccc" ) ; //text("Now, I'll hit the bell. Please help me again!", 120, 700);
 //textFont(font, 26);
 } if ( scenenumber== 18 ) { background( bgimg) ; guageBar( ) ; magpieMoving( ) ; //image(bellimg, width - 607, centerY - 275);
 fill( 255 ) ; textFont( font, 25 ) ; fill( 0 ) ; if ( score>= 3 ) { scenenumber++ ; } textFont( font, 29 ) ; fill( 220 ) ; if ( frameCount% 100 > 50 ) { textFont( commentFont) ; text( "Press S in the right timing!" , 100 , 100 ) ; } } if ( scenenumber== 19 ) { image( bgimg, 0 , 0 ) ; fill( 255 ) ; textFont( font, 50 ) ; if ( succ== true ) { bellsound . play( ) ; succ= false ; } text( "Success!!" , width/ 2 - 90 , height/ 2 ) ; } if ( scenenumber== 20 ) { //added
 if ( sstart) { //audio set
 s2[ 12 ] . stop ( ) ; s2[ 13 ] . play ( ) ; sstart= false ; } image( savedseonbi, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 600, 1100, 130);
 pop( ) ; //textFont(font, 50);
 subtitle( "The bell rang..? This is a miracle!" , "Seonbi" , "#dedeff" ) ; //text("Seonbi : The bell rang..? This is a miracle!", 100, 670);
 } if ( scenenumber== 21 ) { //added
 if ( sstart) { //audio set
 s2[ 13 ] . stop ( ) ;s2[ 14 ] . play ( ) ; sstart= false ; } image( savedseonbi, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 600, 1100, 130);
 pop( ) ; //textFont(font, 50);
 subtitle( "How could this be..? Well, you can go now..." , "Python" , "#deffde" ) ; //text("Python : How could this be..? Well, you can go now...", 100, 720);
 } if ( scenenumber== 22 ) { if ( sstart) { //audio set
 endingsound . loop( ) ; s2[ 14 ] . stop ( ) ; s2[ 15 ] . play ( ) ; sstart= false ; } ba . displaybefore( ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "The magpie sacrificed itself for me..?" , "Seonbi" , "#dedeff" ) ; //text("The magpie sacrificed itself for me..?", 120, 700);
 } 
 if ( scenenumber== 23 ) { 
  k . back( ) ; 
  k . display( ) ; 
  s . armdisplay( ) ; 
  s . bury( ) ; 
  if ( buried== false ) { 
    let targetX = ( width- 100 ) - mouseX; 
    textX= lerp( textX, targetX, easing) ; 
    textX= constrain( textX, 0 , width-textWidth( message)) ; textSize( 33 ) ; text( message, textX- 50 , 50 ) ; } //scenenumber 22 설명텍스트 추가
 } if ( scenenumber== 24 ) { if ( sstart) { //audio set
 s2[ 16 ] . stop ( ) ;  s2[ 17 ] . play ( ) ; sstart= false ; } ba . displayafter( ) ; push( ) ; fill( 0 , 128 ) ; rect( 0 , 600 , 1200 , 120 ) ; pop( ) ; textFont( font, 48 ) ; fill( 255 ) ; text( "Mr.Seonbi has passed the test!" , 300 , 655 ) ; text( "** THE END **" , 450 , 710 ) ; push( ) ; /* fill("#0F2089");
          rect(1100, 700, 100, 100);
          fill(255);
          pop();
          textFont(font, 35);
          text("Re", 1140, 750);*/
 pop( ) ; } if ( scenenumber== 25 ) { s2[ 17 ] . stop ( ) ; ending2.update( ) ; } } } 
 mousePressed ( ) { ending2 . mousePressed( ) ; } 
 SCENE ;
 preload(){
  ssnake= loadSound("./data/snake" );
  matdori= loadSound("./data/matdori" ); 
  nose= loadSound("./data/nose" ); 
  eatingsound= loadSound("./data/eatingsound" ); 
  endingsound= loadSound("./data/2teamEndingSound" ); 
  chasingsound= loadSound("./data/chasingsound" ); 
  flying= loadSound("./data/flying" );
  bang= loadSound("./data/bang" ); 
  bellsound= loadSound("./data/bellsound" ); 
  for ( let i = 1 ; i< s2 . length; i++ ) { 
    s2[ i] = loadSound("./data/s2" + i ); 
 }
  ending2=new Ending();
 }
 setup ( ) {  
    ending2.setup();
    scenenumber= - 1 ; 
    magpie1= loadImage( "./data/magpie1.png" ) ; 
    magpie2= loadImage( "./data/magpie2.png" ) ; 
    magpie3= loadImage( "./data/magpie3.png" ) ; 
    img9= loadImage( "./data/picture1.png" ) ; 
    img10= loadImage( "./data/picture2.jpg" ) ; 
    img11= loadImage( "./data/picture3.jpg" ) ; 
    img12= loadImage( "./data/picture4.jpg" ) ; 
    img13= loadImage( "./data/picture5.png" ) ; 
    img14= loadImage( "./data/picture6.png" ) ; 
    bamsky= loadImage( "./data/bamsky.png" ) ; 
    bamsky2= loadImage( "./data/bamsky2.png" ) ;
    sunbi= loadImage( "./data/afraidseonbi.png" ) ; 
    font= loadFont( "./data/NanumGothic.ttf" ) ; 
    ba= new this.beforeandafter ( ) ;
    burylv1= true ; 
    burylv2= false ; 
    burylv3= false ; 
    hand= true ; 
    s= new this.Sunbihand ( ) ; 
    k= new this.kkachidead ( ) ; 
    img5= loadImage( "./data/snake.png" ) ; 
    img52= loadImage( "./data/snake2.png" ) ; 
    img6= loadImage( "./data/tongue.png" ) ; 
    img7= loadImage( "./data/home.jpg" ) ; 
    snaket= loadImage( "./data/snaketurn.png" ) ; 
    tongueimg2= loadImage( "./data/tongue2.png" ) ; 
    tongue= new this.Tongue ( img6, tongueimg2, this.Speed) ; 
    this.x1= width/ 2 ; 
    this.y1= height/ 2 ; 
    this.x2= width/ 2 ; 
    this.y2= height/ 2 ; 
    plus= 0.1; 
    before= loadImage( "./data/kachidie.png" ) ; 
    after= loadImage( "./data/geupje.png" ) ; 
    floor1= loadImage( "./data/DirtB.png" ) ; 
    sunbihand= loadImage( "./data/sunbihand.png" ) ; 
    kkachided= loadImage( "./data/kkachidead.png" ) ; 
    bury1= loadImage( "./data/bury1.png" ) ; 
    bury2= loadImage( "./data/bury2.png" ) ; 
    buriedflower= loadImage( "./data/buriedflower.png" ) ; //for game_fly
 sun= loadImage( "./data/sunbiappeal.png" ) ; 
 sunsnake= loadImage( "./data/snakesunbi.png" ) ; 
 img1= loadImage( "./data/magpie.png" ) ; 
 img2= loadImage( "./data/kachi_background.png" ) ; 
 img3= loadImage( "./data/branch.png" ) ; 
 img4= loadImage( "./data/branch_r.png" ) ; 
 savedseonbi= loadImage( "./data/savedseonbi.png" ) ; //added
 ladyissnake= loadImage( "./data/ladyissnake.png" ) ; //added
 this.SCENE= new this.Scenenumber ( ) ; 
 branch= new Array(9); 
 font= loadFont( "./data/NanumGothic.ttf" ) ; 
 for ( let i = 0 ; i< branch . length; i++ ) { 
  this.a= int ( random( 0 , 2 ) ) ; 
  if ( this.a== 0 ) { 
    this.b= 0 ; 
    this.c= img3; 
  } 
  else { 
    this.b= 300 ; 
    this.c= img4; 
  } 
  branch[ i] = new Branch ( 650 + i* 500 , this.b, this.c) ; 
} 
this.passed= 0 ; //for game_bang
bgimg= loadImage( "./data/bambackground.png" ) ; 
magpieimg= loadImage( "./data/magpie.png" ) ; 
magpiebellimg= loadImage( "./data/mag.png" ) ;
 //bellimg = loadImage("bell1.png");
 centerY= height/ 2 ; 
 redY= centerY- greenZoneHeight/ 2 ; 
 magpieX= width- 450 ; magpieY= centerY; 
 currentimg= magpieimg;
 } 
draw ( ) { 
  this.SCENE.Scene( ) ; 
} 
keyPressed ( ) { //keyPressed 함수 수정
 if ( scenenumber!= 14 && scenenumber!= 18 && scenenumber!= 23&& scenenumber!= 25) { 
  scenenumber++ ; sstart= true ; 
} 
if ( ( scenenumber== 23 && buried== true ) || ( scenenumber== 24 && buried== true ) ) { 
  scenenumber++ ; sstart= true ; 
} 
if ( scenenumber== 18 ) { 
  if ( key== 's' ) { moving= ! moving; redSpeed= 10 + 3 * score; } 
} }  
 
 } 