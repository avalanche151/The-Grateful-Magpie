{ class JumpGameMountain { bbong ; mountain ; sunbi ; moon ; sun ; cloud1 ; cloud2 ; background ; x = 100 ; y = 650 ; radius = 40 ; speedx = 2 ; //1.7, 2.8
    speedy = 0 ; g = 0.4; //0.1, 0.6
    n = 0 ; moonx = 100 ; moony = 25 ; sunx = - 190 ; suny = 20 ; cloud1x = 400 ; cloud1y = 10 ; cloud2x = - 400 ; cloud2y = 10 ; bx = - 2400 ; mounA = new Mountaincheck ( 260 , 605 , 80 , 195 ) ; mounB = new Mountaincheck ( 275 , 540 , 55 , 260 ) ; mounC = new Mountaincheck ( 275 , 620 , 405 , 180 ) ; mounD = new Mountaincheck ( 370 , 500 , 250 , 300 ) ; mounE = new Mountaincheck ( 380 , 460 , 200 , 340 ) ; //230
    mounF = new Mountaincheck ( 440 , 230 , 40 , 570 ) ; mounG = new Mountaincheck ( 425 , 250 , 70 , 300 ) ; mounH = new Mountaincheck ( 440 , 230 , 40 , 570 ) ; mounI = new Mountaincheck ( 400 , 350 , 120 , 110 ) ; mounJ = new Mountaincheck ( 620 , 565 , 50 , 55 ) ; mounK = new Mountaincheck ( 670 , 700 , 40 , 100 ) ; mounL = new Mountaincheck ( 700 , 750 , 40 , 50 ) ; mounM = new Mountaincheck ( 910 , 680 , 255 , 120 ) ; mounN = new Mountaincheck ( 927 , 550 , 210 , 130 ) ; mounO = new Mountaincheck ( 950 , 450 , 100 , 100 ) ; mounP = new Mountaincheck ( 970 , 400 , 70 , 60 ) ; mounQ = new Mountaincheck ( 990 , 380 , 40 , 20 ) ; constructor( p ) { this.mountain= loadImage( "mountain4.png" ) ; this.sunbi= loadImage( "seonbi_moun.png" ) ; this.moon= loadImage( "moon_moun.png" ) ; this.sun= loadImage( "sun_moun.png" ) ; this.cloud1= loadImage( "cloud_moun.png" ) ; this.cloud2= loadImage( "cloud_moun.png" ) ; this.background= loadImage( "background_moun3.png" ) ; this.bbong= loadSound("bbong.mp3" ); } setup ( ) { this.x= 100 ; this.y= 650 ; this.n= 0 ; this.moonx= 100 ; this.moony= 25 ; this.sunx= - 190 ; this.suny= 20 ; this.cloud1x= 400 ; this.cloud1y= 10 ; this.cloud2x= - 400 ; this.cloud2y= 10 ; this.bx= - 2400 ; } update ( ) { //move();
    //restartcheck();
    this.drawing( ) ; //moonmove();
    //sunmove();
    } move ( ) { this.x+= this.speedx; this.y+= this.speedy; this.speedy= this.speedy+ this.g; } // end of move()
    restartcheck ( ) { if ( this.y+ this.radius/ 2 > height|| this.y- this.radius/ 2 - 10 < 0 ) { this.n= 0 ; this.x= 100 ; this.y= 650 ; this.moonx= 100 ; this.sunx= - 190 ; this.cloud1x= 400 ; this.cloud2x= - 400 ; this.bx= - 2400 ; } } // end of restartcheck()
    drawing ( ) { push( ) ; this.background( 0 ) ; image( this.background, this.bx, 0 , 3600 , 800 ) ; image( this.mountain, 0 , 0 , 1200 , 800 ) ; //ellipse(x, y, radius, radius);
    image( this.moon, this.moonx, this.moony, 120 , 140 ) ; image( this.cloud1, this.cloud1x, this.cloud1y, 400 , 200 ) ; image( this.cloud2, this.cloud2x, this.cloud2y, 400 , 200 ) ; image( this.sun, this.sunx, this.suny, 200 , 200 ) ; noStroke( ) ; fill( "#D8980B" ) ; rect( 0 , 670 , 200 , 130 ) ; image( this.sunbi, this.x- 100 , this.y- 168 , 200 , 200 ) ; pop( ) ; if ( this.n== 1 ) { this.move( ) ; this.moonmove( ) ; this.cloudmove( ) ; this.bx+= 3 ; if ( this.moonx> 1100 ) { this.sunmove( ) ; } this.restartcheck( ) ; this.endgame( ) ; this.mounA . drawing( ) ; this.mounB . drawing( ) ; this.mounC . drawing( ) ; this.mounD . drawing( ) ; this.mounE . drawing( ) ; this.mounF . drawing( ) ; this.mounG . drawing( ) ; this.mounH . drawing( ) ; this.mounI . drawing( ) ; this.mounJ . drawing( ) ; this.mounK . drawing( ) ; this.mounL . drawing( ) ; this.mounM . drawing( ) ; this.mounN . drawing( ) ; this.mounO . drawing( ) ; this.mounP . drawing( ) ; this.mounQ . drawing( ) ; } else if ( this.n== 3 ) { //background(0);
    main_scene_code= "b4answer" ; } } // end of draw()
    /*
      void mousePressed() {
        n = 1;
        speedy = -7; //-5.5
      }  // end of mouseClicked()
      */
    moonmove ( ) { this.moonx+= 2.8; // 3.8
    } // end of moonmove
    sunmove ( ) { this.sunx+= 2.2; //3
    } // end of sunmove
    cloudmove ( ) { this.cloud1x+= 2.6; if ( this.moonx> 500 ) { this.cloud2x+= 2.5; } } endgame ( ) { if ( this.x- this.radius/ 2 > 1200 ) { this.n= 3 ; } } keyPressed ( ) { if ( key== CODED) { if ( keyCode== CONTROL) { this.bbong . play( ) ; //main_scene_code = "answer";
    this.n= 1 ; this.speedy= - 7 ; //-5.5
    } } } 
    Mountaincheck = class  { mounx ; mouny ; mounw ; mounh ; /*constructor( _x , _y , _w , _h ) { this.mounx= _x; this.mouny= _y; this.mounw= _w; this.mounh= _h; } */mountaincheck ( ) { /*if(dist() > mounx && y+radius/2 > mouny && x+radius/2 < mounx+mounw && y+radius/2 < mouny+mounh) {
          n = 0;
          x = 100;
          y = 650;
        }*/
    let closestX = constrain( x, this.mounx, this.mounx+ this.mounw) ; let closestY = constrain( y, this.mouny, this.mouny+ this.mounh) ; //float distanceX = x - closestX;
    //float distanceY = y - closestY;
    //float distanceSquared = distanceX * distanceX + distanceY * distanceY;
    let distanceSquared = dist( x, y, closestX, closestY) ; if ( distanceSquared< radius/ 2 ) { n= 0 ; x= 100 ; y= 650 ; moonx= 100 ; sunx= - 190 ; cloud1x= 400 ; cloud2x= - 400 ; bx= - 2400 ; } } // end of mountaincheck()
    drawing ( ) { this.mountaincheck( ) ; //rect(mounx, mouny, mounw, mounh);
    } // end of draw()
    } // end of Mountaincheck
    } // end of class JumpGameMountain
    class Howmoun { howmoun ; howmoun1 ; howmoun2 ; scn_idx = 0 ; constructor( ) { this.howmoun= loadImage( "howmoun.png" ) ; this.howmoun1= loadImage( "howmoun1.png" ) ; this.howmoun2= loadImage( "howmoun2.png" ) ; } update ( ) { this.drawing( ) ; } drawing ( ) { image( this.howmoun, 0 , 0 ) ; switch ( this.scn_idx) { case 0 : push( ) ; tint( 0 , 200 ) ; image( this.howmoun1, 0 , 0 ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Use the L-ctrl key to jump the seonbi!" , 600 , 400 ) ; pop( ) ; break ; case 1 : push( ) ; tint( 0 , 200 ) ; image( this.howmoun2, 0 , 0 ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Don't touch the mountains!" , 600 , 80 ) ; pop( ) ; break ; case 2 : main_scene_code= "jumpgamemountain" ; this.scn_idx= 0 ; break ; } // end of switch
    } // end of drawing()
    keyPressed ( ) { if ( key== ' ' ) { this.scn_idx++ ; } } // end of keyPressed()
    } // end of class Howmoun
    } 