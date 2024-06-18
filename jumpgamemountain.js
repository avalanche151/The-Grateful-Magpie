let sunbix = 100 ; 
let sunbiy = 650 ;
let n = 0 ; 
let moonx = 100 ; 
let moony = 25 ; 
let sunx = - 190 ; 
let suny = 20 ; 
let cloud1x = 400 ; 
let cloud1y = 10 ; 
let cloud2x = - 400 ; 
let cloud2y = 10 ; 
let bx = - 2400 ;
let radius = 40 ;
class JumpGameMountain { bbong ; mountain ; sunbi ; moon ; sun ; cloud1 ; cloud2 ; background ;   speedx = 2 ; //1.7, 2.8
    speedy = 0 ; g = 0.4; //0.1, 0.6
    
    mounA  ; 
    mounB ;
    mounC  ; 
    mounD  ; 
    mounE  ; //230
    mounF  ; 
    mounG   ; 
    mounH ; 
    mounI  ; 
    mounJ ; 
    mounK  ; 
    mounL  ; 
    mounM  ;
    mounN  ; 
    mounO  ; 
    mounP  ; 
    preload() { this.bbong= loadSound("./data/bbong" );  }
    setup ( ) { 
      this.mounA = new this.Mountaincheck ( 260 , 605 , 80 , 195 ) ; 
      this.mounB = new this.Mountaincheck ( 275 , 540 , 55 , 260 ) ;
      this.mounC = new this.Mountaincheck ( 275 , 620 , 405 , 180 ) ; 
      this.mounD = new this.Mountaincheck ( 370 , 500 , 250 , 300 ) ; 
      this.mounE = new this.Mountaincheck ( 380 , 460 , 200 , 340 ) ; //230
      this.mounF = new this.Mountaincheck ( 440 , 230 , 40 , 570 ) ; 
      this.mounG = new this.Mountaincheck ( 425 , 250 , 70 , 300 ) ; 
      this.mounH = new this.Mountaincheck ( 440 , 230 , 40 , 570 ) ; 
      this.mounI = new this.Mountaincheck ( 400 , 350 , 120 , 110 ) ; 
      this.mounJ = new this.Mountaincheck ( 620 , 565 , 50 , 55 ) ; 
      this.mounK = new this.Mountaincheck ( 670 , 700 , 40 , 100 ) ; 
      this.mounL = new this.Mountaincheck ( 700 , 750 , 40 , 50 ) ; 
      this.mounM = new this.Mountaincheck ( 910 , 680 , 255 , 120 ) ;
      this.mounN = new this.Mountaincheck ( 927 , 550 , 210 , 130 ) ; 
      this.mounO = new this.Mountaincheck ( 950 , 450 , 100 , 100 ) ; 
      this.mounP = new this.Mountaincheck ( 970 , 400 , 70 , 60 ) ; 
      this.mounQ = new this.Mountaincheck ( 990 , 380 , 40 , 20 ) ; 
      this.mountain= loadImage( "./data/mountain4.png" ) ; 
      this.sunbi= loadImage( "./data/seonbi_moun.png" ) ; 
      this.moon= loadImage( "./data/moon_moun.png" ) ; 
      this.sun= loadImage( "./data/sun_moun.png" ) ; 
      this.cloud1= loadImage( "./data/cloud_moun.png" ) ; 
      this.cloud2= loadImage( "./data/cloud_moun.png" ) ; 
      this.background= loadImage( "./data/background_moun3.png" ) ;
      sunbix= 100 ; 
      sunbiy= 650 ; 
      n= 0 ; 
      moonx= 100 ; 
      moony= 25 ; 
      sunx= - 190 ; 
      suny= 20 ;
      cloud1x= 400 ; 
      cloud1y= 10 ; 
      cloud2y= 10 ; 
      bx= - 2400 ; 
      } update ( ) { //move();
    //restartcheck();
    this.drawing( ) ; //moonmove();
    //sunmove();
    } move ( ) { sunbix+= this.speedx; sunbiy+= this.speedy; this.speedy= this.speedy+ this.g; } // end of move()
    restartcheck ( ) { if ( sunbiy+ radius/ 2 > height|| sunbiy- radius/ 2 - 10 < 0 ) { n= 0 ; sunbix= 100 ; sunbiy= 650 ; moonx= 100 ; sunx= - 190 ; cloud1x= 400 ; cloud2x= - 400 ; bx= - 2400 ; } } // end of restartcheck()
    drawing ( ) { push( ) ; background( 0 ) ; image( this.background, bx, 0 , 3600 , 800 ) ; image( this.mountain, 0 , 0 , 1200 , 800 ) ; //ellipse(sunbix, sunbiy, radius, radius);
    image( this.moon, moonx, moony, 120 , 140 ) ; image( this.cloud1, cloud1x, cloud1y, 400 , 200 ) ; image( this.cloud2, cloud2x, cloud2y, 400 , 200 ) ; image( this.sun, sunx, suny, 200 , 200 ) ; noStroke( ) ; fill( "#D8980B" ) ; rect( 0 , 670 , 200 , 130 ) ; image( this.sunbi, sunbix- 100 , sunbiy- 168 , 200 , 200 ) ; pop( ) ; if ( n== 1 ) { this.move( ) ; this.moonmove( ) ; this.cloudmove( ) ; bx+= 3 ; if ( moonx> 1100 ) { this.sunmove( ) ; } this.restartcheck( ) ; this.endgame( ) ; this.mounA . drawing( ) ; this.mounB . drawing( ) ; this.mounC . drawing( ) ; this.mounD . drawing( ) ; this.mounE . drawing( ) ; this.mounF . drawing( ) ; this.mounG . drawing( ) ; this.mounH . drawing( ) ; this.mounI . drawing( ) ; this.mounJ . drawing( ) ; this.mounK . drawing( ) ; this.mounL . drawing( ) ; this.mounM . drawing( ) ; this.mounN . drawing( ) ; this.mounO . drawing( ) ; this.mounP . drawing( ) ; this.mounQ . drawing( ) ; } else if ( n== 3 ) { //background(0);
    main_scene_code= "b4answer" ; } } // end of draw()
    /*
      void mousePressed() {
        n = 1;
        speedy = -7; //-5.5
      }  // end of mouseClicked()
      */
    moonmove ( ) { moonx+= 2.8; // 3.8
    } // end of moonmove
    sunmove ( ) { sunx+= 2.2; //3
    } // end of sunmove
    cloudmove ( ) { cloud1x+= 2.6; if ( moonx> 500 ) { cloud2x+= 2.5; } } endgame ( ) { if ( sunbix- radius/ 2 > 1200 ) { n= 3 ; } } keyPressed ( ) {   if ( keyCode== CONTROL) { this.bbong . play( ) ; //main_scene_code = "answer";
    n= 1 ; this.speedy= - 7 ; //-5.5
    } } 
    Mountaincheck = class  { mounx ; mouny ; mounw ; mounh ; 
      constructor( _x , _y , _w , _h ) { this.mounx= _x; this.mouny= _y; this.mounw= _w; this.mounh= _h; } 
      mountaincheck ( ) { 
        let closestX = constrain( sunbix, this.mounx, this.mounx+ this.mounw) ; 
        let closestY = constrain( sunbiy, this.mouny, this.mouny+ this.mounh) ; //float distanceX = sunbix - closestX;
    //float distanceY = sunbiy - closestY;
    //float distanceSquared = distanceX * distanceX + distanceY * distanceY;
    let distanceSquared = dist( sunbix, sunbiy, closestX, closestY) ; if ( distanceSquared< radius/ 2 ) { n= 0 ; sunbix= 100 ; sunbiy= 650 ; moonx= 100 ; sunx= - 190 ; cloud1x= 400 ; cloud2x= - 400 ; bx= - 2400 ; } } // end of mountaincheck()
    drawing ( ) { this.mountaincheck( ) ; //rect(mounx, mouny, mounw, mounh);
    } // end of draw()
    } // end of Mountaincheck
    } // end of class JumpGameMountain
class Howmoun { howmoun ; howmoun1 ; howmoun2 ; scn_idx = 0 ; 
  constructor( ) { 
    this.howmoun= loadImage( "./data/howmoun.png" ) ;
    this.howmoun1= loadImage( "./data/howmoun1.png" ) ; 
    this.howmoun2= loadImage( "./data/howmoun2.png" ) ;
   } update ( ) { this.drawing( ) ; } drawing ( ) { image( this.howmoun, 0 , 0 ) ; switch ( this.scn_idx) { case 0 : push( ) ; tint( 0 , 200 ) ; image( this.howmoun1, 0 , 0 ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Use the L-ctrl key to jump the seonbi!" , 600 , 400 ) ; pop( ) ; break ; case 1 : push( ) ; tint( 0 , 200 ) ; image( this.howmoun2, 0 , 0 ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Don't touch the mountains!" , 600 , 80 ) ; pop( ) ; break ; case 2 : main_scene_code= "jumpgamemountain" ; this.scn_idx= 0 ; break ; } // end of switch
    } // end of drawing()
    keyPressed ( ) { if ( key== ' ' ) { this.scn_idx++ ; } } // end of keyPressed()
    } // end of class Howmoun
    