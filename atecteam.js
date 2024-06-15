 // [processing-p5-convert] import processing.sound.*;
 let scenenumber = - 1 ; let endingsound ; let textX ; let textY ; let message = "Move your mouse slowly to bury the magpie." ; let font2 ; let easing = 0.05; //맨위 변수 추가
 let cans = false ; let sunbi , snaket , tongueimg2 ; class Team2 { ending = new Ending ( ) ; //added values
 savedseonbi ;ladyissnake ; //for game_fly
 img9 ;img10 ;img11 ;img12 ;img13 ;img14 ; imagecnt = 0 ; Font ; Img1 ;Img2 ;Sunbi ;snake ; ssnake ; matdori ; nose ;eatingsound ;chasingsound ;flying ; s2 = new Array(18); constructor( p ) { this.bang= loadSound("bang.mp3" ); this.bellsound= loadSound("bellsound.mp3" ); for ( let i = 1 ; i< this.s2 . length; i++ ) { this.s2[ i] = loadSound("s2" + i+ ".mp3" ); } this.ssnake= loadSound("snake.mp3" ); this.matdori= loadSound("matdori.mp3" ); this.nose= loadSound("nose.mp3" ); this.eatingsound= loadSound("eatingsound.mp3" ); endingsound= loadSound("2teamEndingSound.mp3" ); this.chasingsound= loadSound("chasingsound.mp3" ); this.flying= loadSound("flying.mp3" ); } kachi ; branch ; a ;b ; time ;passed ; font ; sun ;sunsnake ;img1 ;img2 ;img3 ;img4 ;c ; bang ; img5 ;img6 ;img7 ;img52 ; magpie1 ;magpie2 ;magpie3 ; tongue ; Speed = 5 ; X1 ;X2 ;Y1 ;Y2 ; plus ; chaseSpeed = 1 ; next = true ; //주현승 & 김수정 클래스
 Tongue =class  { img8 ;IMG8 ; X ; Speed ; imgHalfWidth ; useFirstImage ; lastSwitchTime ; /*constructor( img8 , IMG8 , Speed ) { this . img8 = img8; this . IMG8 = IMG8; this . X = width/ 2 ; // 혀의 초기 x 좌표를 400으로 설정
 this . Speed = Speed; this . imgHalfWidth = img8 . width/ 2 ; this . useFirstImage = true ; this . lastSwitchTime = millis( ) ; } */move ( ) { this.X+= this.Speed; if ( this.X+ this.imgHalfWidth> 1000 || this.X- this.imgHalfWidth< 800 ) { // 혀가 400과 500 사이에서 움직이도록 설정
 this.Speed= this.Speed* - 1 ; } } display ( ) { if ( millis( ) - this.lastSwitchTime>= 1000 ) { this.useFirstImage= ! this.useFirstImage; this.lastSwitchTime= millis( ) ; } let currentImg = this.useFirstImage? img6: tongueimg2; image( currentImg, this.X- this.imgHalfWidth, height/ 3.3- currentImg . height/ 4 , currentImg . width, currentImg . height) ; } drawScene1 ( ) { background( 255 ) ; image( img5, 350 , 200 , 400 , 600 ) ; tongue . move( ) ; tongue . display( ) ; } drawScene2 ( ) { background( "#7C6311" ) ; chaseSpeed= plus+ chaseSpeed; X1= mouseX; Y1= mouseY; let dx = X1- X2; let dy = Y1- Y2; let distance = sqrt( dx* dx+ dy* dy) ; if ( distance<= 10 ) { next= false ; } if ( next) { X2+= ( dx* chaseSpeed/ distance) * 0.7; Y2+= ( dy* chaseSpeed/ distance) * 0.7; push( ) ; imageMode( CENTER) ; image( img52, X2, Y2, 750 , 500 ) ; image( sunbi, X1, Y1, 200 , 200 ) ; pop( ) ; } else { push( ) ; textSize( 40 ) ; textAlign( CENTER, CENTER) ; text( "NEXT" , width/ 2 , height/ 2 ) ; pop( ) ; } } } //주현승 & 김수정 클래스 끝
 //임지후 변수들
 floor ;kkachided ;sunbihand ;bury1 ;bury2 ;buriedflower ; before ;after ; x1 ;x2 ;x3 ;y1 ;y2 ;y3 ;r1 ;r2 ; screencnt = 0 ; speed ; rectX = 600 ; rectY = 900 ; rectXSize = 500 ; rectYSize = 400 ; rotationSpeed = 0.02; burycount = 0 ; handX = 600 ; handY = 900 ; burylv1 ;burylv2 ;burylv3 ;burylv4 ;buried ; hand ; //임지후 변수 끝
 //권현우&최유진 변수
 //for game_bang
 scoreUpdated = false ; barWidth = 40 ; barHeight = 400 ; greenZoneHeight = 80 ; redRectHeight = 10 ; centerY ;redY ; redSpeed = 10 ; moving = true ; score = 0 ; magpieX ; magpieY ; magpieSpeed = 30 ; dirisChanged ;previsChanged = false ; bgdx1 = 0 ;bgdx2 = 1200 ; magpieMovingRight = true ; magpieMovingLeft = false ; magpieMoving = false ; waiting = false ; switchTime ; bgimg ;magpieimg ;bellimg ;magpiebellimg ;currentimg ;bamsky ;bamsky2 ; //권현우&최유진 변수 끝
 //임지후 클래스
 beforeandafter = class  { /*constructor( ) { } */displaybefore ( ) { background( before) ; } displayafter ( ) { background( after) ; } } 
 sunbihand = class{ /*constructor( ) { } */bury ( ) { console.log( mouseX) ; // mouseX 값 출력
 if ( mouseX<= 400 && mouseX> 396 || mouseX>= 800 && mouseX<= 804 ) { burycount+= 1 ; } if ( burycount== 1 ) { burylv1= false ; burylv2= true ; } if ( burycount== 2 ) { burylv2= false ; burylv3= true ; sstart= true ; } if ( burycount== 3 ) { burylv3= false ; burylv4= true ; } } armdisplay ( ) { if ( hand== true ) { noStroke( ) ; let targetX = mouseX; let targetY = mouseY; let dx = targetX- rectX; let dy = targetY- rectY; let angle = atan2( dy, dx) ; push( ) ; push( ) ; translate( rectX, rectY) ; rotate( angle) ; fill( "#5190a7" ) ; // 새로운 변환 행렬을 스택에 추가
 rotate( HALF_PI* 5 ) ; // 90도 회전
 image( sunbihand, - 431 , - 889 , 777 , 671 ) ; // 이전 변환 행렬로 돌아감
 rectMode( CENTER) ; rect( 0 , 1 , rectYSize, rectXSize) ; pop( ) ; pop( ) ; } } } 
 kkachidead = class{ back ( ) { background( floor) ; } display ( ) { if ( burylv1== true ) { image( kkachided, - 44 , 0 ) ; } if ( burylv2== true ) { image( kkachided, - 44 , 0 ) ; image( bury1, - 44 , 0 ) ; } if ( burylv3== true ) { image( kkachided, - 44 , 0 ) ; image( bury2, - 70 , 0 ) ; // image(buriedflower,574,15,520,662);
 } if ( burylv4== true ) { image( kkachided, - 44 , 0 ) ; image( bury2, - 70 , 0 ) ; image( buriedflower, 574 , 15 , 520 , 662 ) ; hand= false ; buried= true ; push( ) ; if ( sstart) { //audio set
 s2[ 16 ] . cue ( 0 ) ; s2[ 16 ] . play ( ) ; sstart= false ; } //fill(0, 128);
 //rect(100, 650, 1000, 100);
 pop( ) ; //textFont(font, 50);
 //fill(255);
 subtitle( "Rest in peace, magpie.." , "Seonbi" , "#dedeff" ) ; //text("Rest in peace, magpie..", 120, 720);
 } } } //임지후 클래스 끝
 mat = true ; //권현우 & 최유진 클래스
 Branch = class  { bx ;by ; img ; //constructor
 /*constructor( tempx , tempy , image ) { this.bx= tempx; this.by= tempy; this.img= image; } */display ( ) { push( ) ; image( this.img, this.bx, this.by) ; pop( ) ; } move ( ) { this.bx-= 6 ; } } 
 Kachi =class  { kx ;ky ;kspeed ; img ; //constructor
 /*constructor( tempx , tempy , image ) { this.kx= tempx; this.ky= tempy; this . img = image; } *///kachi picture
 display ( ) { push( ) ; imageMode( CENTER) ; //picture
 pop( ) ; if ( mousePressed) { if ( frameCount% 15 <= 5 ) { image( magpie1, this.kx- 150 , this.ky- 100 , 300 , 200 ) ; } if ( frameCount% 15 > 5 && frameCount% 15 <= 10 ) { image( magpie2, this.kx- 150 , this.ky- 100 , 300 , 200 ) ; } if ( frameCount% 15 > 10 ) { image( magpie3, this.kx- 150 , this.ky- 100 , 300 , 200 ) ; } } else { image( magpie1, this.kx- 150 , this.ky- 100 , 300 , 200 ) ; } } //if mousepressed, kachi goes up
 //mousepressed false, kachi goes down
 move ( ) { if ( mousePressed) { this.kspeed= - 8 ; if ( cans) { flying . cue( 0 ) ; flying . loop( ) ; cans= false ; } } else { this.kspeed= 8 ; flying . stop( ) ; cans= true ; } if ( this.ky>= 25 && this.ky<= 775 ) { this.ky+= this.kspeed; } else if ( this.ky< 50 ) { if ( mousePressed== false ) { this.ky+= this.kspeed; } } else { if ( mousePressed) { this.ky+= this.kspeed; } } } //collapsing(branch)
 collapse ( b ) { if ( this.kx>= b . bx- 25 && this.kx<= b . bx+ 25 && this.ky>= b . by&& this.ky<= b . by+ 500 ) { return true ; } else { return false ; } } } //권현우 & 최유진 클래스 끝
 succ = true ; //장면전환 클래스
 Scenenumber =class  { Scene ( ) { if ( scenenumber== 0 ) { image( img9, 0 , 0 ) ; if ( mat== true ) { s2[ 1 ] . stop ( ) ; matdori . cue( 0 ) ; matdori . play( ) ; eatingsound . cue( 0 ) ; eatingsound . loop( ) ; mat= false ; } subtitle( "Yummy!" , "Seonbi" , "#dedeff" ) ; } //scene 0
 if ( scenenumber== - 1 ) { //added
 if ( sstart) { //audio set
 s2[ 1 ] . cue ( 0 ) ; s2[ 1 ] . play ( ) ; sstart= false ; } image( ladyissnake, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Help yourself, please." , "Woman" , "#ffc0cb" ) ; } if ( scenenumber== 1 ) { if ( sstart) { //audio set
 eatingsound . stop( ) ; matdori . stop( ) ; s2[ 2 ] . cue ( 0 ) ; s2[ 2 ] . play ( ) ; sstart= false ; } background( img10) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "What a great place to stay!" , "Seonbi" , "#dedeff" ) ; } if ( scenenumber== 2 ) { if ( sstart) { //audio set
 s2[ 2 ] . stop ( ) ; nose . cue( 0 ) ; nose . loop( ) ; sstart= false ; } background( img11) ; push( ) ; fill( 0 , 128 ) ; rect( 50 , 620 , 1100 , 100 ) ; pop( ) ; textFont( font, 50 ) ; text( "Zzz..." , 60 , 700 ) ; } if ( scenenumber== 3 ) { background( img12) ; push( ) ; fill( 0 , 128 ) ; pop( ) ; } if ( scenenumber== 4 ) { background( img13) ; push( ) ; fill( 0 , 128 ) ; rect( 50 , 620 , 1100 , 100 ) ; pop( ) ; textFont( font, 50 ) ; text( "..." , 60 , 700 ) ; } if ( scenenumber== 5 ) { if ( sstart) { //audio set
 nose . stop( ) ; s2[ 3 ] . cue ( 0 ) ; s2[ 3 ] . play ( ) ; sstart= false ; } background( img14) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "...!!!! HUH??!" , "Seonbi" , "#dedeff" ) ; //text("...!!!! HUH??!", 60, 700);
 } if ( scenenumber== 6 ) { if ( sstart) { //audio set
 s2[ 3 ] . stop ( ) ; ssnake . loop( ) ; s2[ 4 ] . cue ( 0 ) ; s2[ 4 ] . play ( ) ; sstart= false ; } image( snaket, 0 , 0 , 1200 , 800 ) ; tongue . move( ) ; tongue . display( ) ; push( ) ; //fill(0, 128);
 //rect(49, 575, 1105, 175);
 pop( ) ; //textFont(font, 50);
 subtitle( "What the..! A Python?!\nDang it..I should escape!" , "Seonbi" , "#dedeff" ) ; //text("What the..! A Python?!", 80, 648);
 //text("Dang it..I should escape!", 81, 700);
 } //game_fly
 if ( scenenumber== 7 ) { tongue . drawScene2( ) ; if ( sstart) { //audio set
 chasingsound . cue( 0 ) ; chasingsound . loop( ) ; s2[ 4 ] . stop ( ) ; sstart= false ; } } if ( scenenumber== 8 ) { if ( sstart) { //audio set
 ssnake . stop( ) ; chasingsound . stop( ) ; s2[ 5 ] . cue ( 0 ) ; s2[ 5 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1110, 100);
 pop( ) ; //textFont(font, 48);
 subtitle( "Please.. I just wanted to save the magpies..\nPlease show me mercy.." , "Seonbi" , "#dedeff" ) ; //text("Please.. I just wanted to save the magpies. Please show me mercy..", 74, 693);
 push( ) ; //fill(0);
 //textFont(font, 23);
 pop( ) ; } if ( scenenumber== 9 ) { if ( sstart) { //audio set
 s2[ 5 ] . stop ( ) ; s2[ 6 ] . cue ( 0 ) ; s2[ 6 ] . play ( ) ; sstart= false ; } image( sunsnake, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 150);
 pop( ) ; //textFont(font, 50);
 subtitle( "Hmm.. If the bell rings three times before sunrise,\nI'll spare your life." , "Python" , "#deffde" ) ; //text("Hmm.. If the bell rings three times before sunrise, ", 120, 700);
 //text("I'll spare your life. ", 120, 750);
 push( ) ; //fill(0);
 //textFont(font, 25);
 pop( ) ; } if ( scenenumber== 10 ) { if ( sstart) { //audio set
 s2[ 6 ] . stop ( ) ; s2[ 7 ] . cue ( 0 ) ; s2[ 7 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "But there will be nobody around the bell now.." , "Seonbi" , "#dedeff" ) ; //text("But there will be nobody around the bell now..", 120, 700);
 push( ) ; //fill(0);
 //textFont(font, 24);
 pop( ) ; } if ( scenenumber== 11 ) { if ( sstart) { //audio set
 s2[ 7 ] . stop ( ) ; s2[ 8 ] . cue ( 0 ) ; s2[ 8 ] . play ( ) ; sstart= false ; } image( sun, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Oh my god.. I'm doomed now!" , "Seonbi" , "#dedeff" ) ; //text("Oh my god.. I'm doomed now!", 117, 700);
 } if ( scenenumber== 12 ) { if ( sstart) { //audio set
 s2[ 8 ] . stop ( ) ; s2[ 9 ] . cue ( 0 ) ; s2[ 9 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Oh no.. Mr.Seonbi is in danger!" , "Magpie" , "#cccccc" ) ; //text("Oh no.. Mr.Seonbi is in danger!", 120, 700);
 } if ( scenenumber== 13 ) { if ( sstart) { //audio set
 s2[ 9 ] . stop ( ) ; s2[ 10 ] . cue ( 0 ) ; s2[ 10 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "I gotta save Mr.seonbi.. Please help me." , "Magpie" , "#cccccc" ) ; //text("I gotta save Mr.seon.. Please help me.", 120, 700);
 //textFont(font, 26);
 time= millis( ) ; passed= time; } if ( scenenumber== 14 ) { bgdx1-= 6 ; bgdx2-= 6 ; if ( bgdx1< - 1200 ) { bgdx1= 1200 ; } if ( bgdx2< - 1200 ) { bgdx2= 1200 ; } image( bamsky, bgdx1, 0 ) ; image( bamsky2, bgdx2, 0 ) ; //for game clear
 time= millis( ) ; //show branches
 for ( let i = 0 ; i< branch . length; i++ ) { branch[ i] . display ( ) ; branch[ i] . move ( ) ; //interaction (branches)
 if ( kachi . collapse( branch[ i] ) ) { bang . play( ) ; //reset branches
 for ( let j = 0 ; j< branch . length; j++ ) { a= int ( random( 0 , 2 ) ) ; if ( a== 0 ) { b= 0 ; c= img3; } else { b= 300 ; c= img4; } branch[ j] = new Branch ( 650 + j* 500 , b, c) ; } passed= time; } else if ( time- passed>= 14000 ) { //game clear
 passed= time; scenenumber++ ; } } //show kachi
 kachi . display( ) ; kachi . move( ) ; textFont( font, 27 ) ; text( "Press mouse to soar up" , 50 , 50 ) ; text( "Release to head down" , 50 , 80 ) ; //scenenumber 14 설명텍스트 추가
 } if ( scenenumber== 15 ) { flying . stop( ) ; background( "#363C9D" ) ; textFont( font, 78 ) ; text( "Success!!" , ( width/ 2 ) - 150 , height/ 2 ) ; if ( time- passed>= 3000 ) { scenenumber++ ; } } if ( scenenumber== 16 ) { if ( sstart) { //audio set
 s2[ 10 ] . stop ( ) ; s2[ 11 ] . cue ( 0 ) ; s2[ 11 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Finally I reached the bell.." , "Magpie" , "#cccccc" ) ; //text("Finally I reached the bell..", 120, 700);
 } if ( scenenumber== 17 ) { if ( sstart) { //audio set
 s2[ 11 ] . stop ( ) ; s2[ 12 ] . cue ( 0 ) ; s2[ 12 ] . play ( ) ; sstart= false ; } image( img2, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "Now, I'll hit the bell. Please help me again!" , "Magpie" , "#cccccc" ) ; //text("Now, I'll hit the bell. Please help me again!", 120, 700);
 //textFont(font, 26);
 } if ( scenenumber== 18 ) { background( bgimg) ; guageBar( ) ; magpieMoving( ) ; //image(bellimg, width - 607, centerY - 275);
 fill( 255 ) ; textFont( font, 25 ) ; fill( 0 ) ; if ( score>= 3 ) { scenenumber++ ; } textFont( font, 29 ) ; fill( 220 ) ; if ( frameCount% 100 > 50 ) { textFont( commentFont) ; text( "Press S in the right timing!" , 100 , 100 ) ; } } if ( scenenumber== 19 ) { image( bgimg, 0 , 0 ) ; fill( 255 ) ; textFont( font, 50 ) ; if ( succ== true ) { bellsound . play( ) ; succ= false ; } text( "Success!!" , width/ 2 - 90 , height/ 2 ) ; } if ( scenenumber== 20 ) { //added
 if ( sstart) { //audio set
 s2[ 12 ] . stop ( ) ; s2[ 13 ] . cue ( 0 ) ; s2[ 13 ] . play ( ) ; sstart= false ; } image( savedseonbi, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 600, 1100, 130);
 pop( ) ; //textFont(font, 50);
 subtitle( "The bell rang..? This is a miracle!" , "Seonbi" , "#dedeff" ) ; //text("Seonbi : The bell rang..? This is a miracle!", 100, 670);
 } if ( scenenumber== 21 ) { //added
 if ( sstart) { //audio set
 s2[ 13 ] . stop ( ) ; s2[ 14 ] . cue ( 0 ) ; s2[ 14 ] . play ( ) ; sstart= false ; } image( savedseonbi, 0 , 0 ) ; push( ) ; //fill(0, 128);
 //rect(50, 600, 1100, 130);
 pop( ) ; //textFont(font, 50);
 subtitle( "How could this be..? Well, you can go now..." , "Python" , "#deffde" ) ; //text("Python : How could this be..? Well, you can go now...", 100, 720);
 } if ( scenenumber== 22 ) { if ( sstart) { //audio set
 endingsound . cue( 0 ) ; endingsound . loop( ) ; s2[ 14 ] . stop ( ) ; s2[ 15 ] . cue ( 0 ) ; s2[ 15 ] . play ( ) ; sstart= false ; } ba . displaybefore( ) ; push( ) ; //fill(0, 128);
 //rect(50, 620, 1100, 100);
 pop( ) ; //textFont(font, 50);
 subtitle( "The magpie sacrificed itself for me..?" , "Seonbi" , "#dedeff" ) ; //text("The magpie sacrificed itself for me..?", 120, 700);
 } if ( scenenumber== 23 ) { k . back( ) ; k . display( ) ; s . armdisplay( ) ; s . bury( ) ; if ( buried== false ) { let textWidth = textWidth( message) ; let targetX = ( width- 100 ) - mouseX; textX= lerp( textX, targetX, easing) ; textX= constrain( textX, 0 , width- textWidth) ; textSize( 33 ) ; text( message, textX- 50 , 50 ) ; } //scenenumber 22 설명텍스트 추가
 } if ( scenenumber== 24 ) { if ( sstart) { //audio set
 s2[ 16 ] . stop ( ) ; s2[ 17 ] . cue ( 0 ) ; s2[ 17 ] . play ( ) ; sstart= false ; } ba . displayafter( ) ; push( ) ; fill( 0 , 128 ) ; rect( 0 , 600 , 1200 , 120 ) ; pop( ) ; textFont( font, 48 ) ; fill( 255 ) ; text( "Mr.Seonbi has passed the test!" , 300 , 655 ) ; text( "** THE END **" , 450 , 710 ) ; push( ) ; /* fill("#0F2089");
          rect(1100, 700, 100, 100);
          fill(255);
          pop();
          textFont(font, 35);
          text("Re", 1140, 750);*/
 pop( ) ; } if ( scenenumber== 25 ) { s2[ 17 ] . stop ( ) ; ending . update( ) ; } } } 
 mousePressed ( ) { this.ending . mousePressed( ) ; } SCENE ; s ; k ; ba ; setup ( ) { scenenumber= - 1 ; 
    this.magpie1= loadImage( "assets/magpie1.png" ) ; this.magpie2= loadImage( "assets/magpie2.png" ) ; this.magpie3= loadImage( "assets/magpie3.png" ) ; this.img9= loadImage( "assets/picture1.png" ) ; this.img10= loadImage( "assets/picture2.jpg" ) ; this.img11= loadImage( "assets/picture3.jpg" ) ; this.img12= loadImage( "assets/picture4.jpg" ) ; this.img13= loadImage( "assets/picture5.png" ) ; this.img14= loadImage( "assets/picture6.png" ) ; this.bamsky= loadImage( "assets/bamsky.png" ) ; this.bamsky2= loadImage( "assets/bamsky2.png" ) ; sunbi= loadImage( "assets/afraidseonbi.png" ) ; this.font= loadFont( "assets/H2sa1M-48.vlw" ) ; this.before= loadImage( "assets/geupje.png" ) ; this.ba= new beforeandafter ( ) ; this.burylv1= true ; this.burylv2= false ; this.burylv3= false ; this.buried= false ; this.hand= true ; this.s= new this.sunbihand ( ) ; this.k= new kkachidead ( ) ; createCanvas( 1200 , 800 ) ; this.img5= loadImage( "assets/snake.png" ) ; this.img52= loadImage( "assets/snake2.png" ) ; this.img6= loadImage( "assets/tongue.png" ) ; this.img7= loadImage( "assets/home.jpg" ) ; snaket= loadImage( "assets/snaketurn.png" ) ; tongueimg2= loadImage( "assets/tongue2.png" ) ; this.tongue= new Tongue ( this.img6, tongueimg2, this.Speed) ; this.x1= width/ 2 ; this.y1= height/ 2 ; this.x2= width/ 2 ; this.y2= height/ 2 ; this.plus= 0.1; this.before= loadImage( "assets/kachidie.png" ) ; this.after= loadImage( "assets/geupje.png" ) ; this.floor= loadImage( "assets/DirtB.png" ) ; this.sunbihand= loadImage( "assets/sunbihand.png" ) ; this.kkachided= loadImage( "assets/kkachidead.png" ) ; this.bury1= loadImage( "assets/bury1.png" ) ; this.bury2= loadImage( "assets/bury2.png" ) ; this.buriedflower= loadImage( "assets/buriedflower.png" ) ; //for game_fly
 this.sun= loadImage( "sunbiappeal.png" ) ; this.sunsnake= loadImage( "snakesunbi.png" ) ; this.img1= loadImage( "magpie.png" ) ; this.img2= loadImage( "kachi_background.png" ) ; this.img3= loadImage( "branch.png" ) ; this.img4= loadImage( "branch_r.png" ) ; this.savedseonbi= loadImage( "savedseonbi.png" ) ; //added
 this.ladyissnake= loadImage( "ladyissnake.png" ) ; //added
 this.SCENE= new Scenenumber ( ) ; this.kachi= new Kachi ( 150 , 100 , this.img1) ; this.branch= new Array(9); this.font= loadFont( "H2sa1M-48.vlw" ) ; for ( let i = 0 ; i< this.branch . length; i++ ) { this.a= int ( random( 0 , 2 ) ) ; if ( this.a== 0 ) { this.b= 0 ; this.c= this.img3; } else { this.b= 300 ; this.c= this.img4; } this.branch[ i] = new Branch ( 650 + i* 500 , this.b, this.c) ; } this.passed= 0 ; //for game_bang
 this.bgimg= loadImage( "assets/bambackground.png" ) ; this.magpieimg= loadImage( "assets/magpie.png" ) ; this.magpiebellimg= loadImage( "assets/mag.png" ) ; //bellimg = loadImage("bell1.png");
 this.centerY= height/ 2 ; this.redY= this.centerY- this.greenZoneHeight/ 2 ; this.magpieX= width- 450 ; this.magpieY= this.centerY; this.currentimg= this.magpieimg; } draw ( ) { this.SCENE . Scene( ) ; } keyPressed ( ) { //keyPressed 함수 수정
 if ( scenenumber!= 14 && scenenumber!= 18 && scenenumber!= 23 && this.buried== false ) { scenenumber++ ; sstart= true ; } if ( ( scenenumber== 23 && this.buried== true ) || ( scenenumber== 24 && this.buried== true ) ) { scenenumber++ ; sstart= true ; } if ( scenenumber== 18 ) { if ( key== 's' ) { this.moving= ! this.moving; this.redSpeed= 10 + 3 * this.score; } } } bellsoundplayed = false ; delayAfterMovement = false ; delayStartTime ; bellsound ; guageBar ( ) { noStroke( ) ; let barX = width/ 2 - this.barWidth/ 2 ; let barTop = this.centerY- this.barHeight/ 2 ; fill( 218 ) ; rect( barX- 300 , barTop, this.barWidth, this.barHeight, 10 , 10 , 10 , 10 ) ; fill( 0 , 255 , 0 ) ; rect( barX- 300 , this.centerY- this.greenZoneHeight/ 2 , this.barWidth, this.greenZoneHeight, 10 , 10 , 10 , 10 ) ; fill( 255 , 0 , 0 ) ; rect( barX- 300 , this.redY, this.barWidth, this.redRectHeight, 10 , 10 , 10 , 10 ) ; if ( this.moving) { this.redY+= this.redSpeed; if ( this.redY<= barTop|| this.redY>= barTop+ this.barHeight- this.redRectHeight) { this.redSpeed*= - 1 ; } } if ( ! this.moving&& this.redY>= this.centerY- this.greenZoneHeight/ 2 && this.redY<= this.centerY+ this.greenZoneHeight/ 2 && ! this.scoreUpdated) { this.score++ ; this.scoreUpdated= true ; this.magpieMoving= true ; } else if ( ! this.moving&& ! this.scoreUpdated) { this.score= max( 0 , this.score- 1 ) ; this.scoreUpdated= true ; } if ( this.moving) { this.scoreUpdated= false ; } } magpieMoving ( ) { image( this.currentimg, this.magpieX- 324 , this.magpieY- 100 ) ; if ( this.magpieMoving) { this.currentimg= this.magpiebellimg; this.bellsoundplayed= false ; if ( this.magpieMovingRight&& ! this.waiting) { this.magpieX+= this.magpieSpeed; if ( this.magpieX>= width- 350 ) { this.magpieMovingRight= false ; this.waiting= true ; this.magpieMovingLeft= true ; this.switchTime= millis( ) ; this.dirisChanged= ! this.dirisChanged; } } else if ( this.waiting) { if ( millis( ) - this.switchTime>= 300 ) { this.waiting= false ; // Keep currentimg as magpiebellimg while waiting
 this.magpieMovingRight= false ; this.magpieMovingLeft= true ; } } else if ( this.magpieMovingLeft&& ! this.waiting) { this.magpieX-= this.magpieSpeed; if ( this.magpieX<= width- 450 ) { this.magpieMovingRight= true ; this.magpieMovingLeft= false ; this.magpieMoving= false ; this.dirisChanged= this.previsChanged; this.delayAfterMovement= true ; this.delayStartTime= millis( ) ; if ( ! this.bellsoundplayed) { this.bellsound . play( ) ; this.bellsoundplayed= true ; } } } } else if ( this.delayAfterMovement) { if ( millis( ) - this.delayStartTime>= 500 ) { this.currentimg= this.magpieimg; this.delayAfterMovement= false ; } } } } 