let walls= new Array(); 
let guards= new Array(); 
let Num_Jokbo = 3 ; 
let  GUARD_SIZE = 100 ;
let guard ;
class Spgame { birdX ;birdY ; seonbiX ;seonbiY ; BIRD_SIZE = 100 ; BIRD_SPEED = 5 ; SEONBI_SIZE = 30 ; bird_dir = 1 ; walls ; guards ; isHiding = false ; kkachi ; jokbo ; seonbi ;  UPkkachi ; DOWNkkachi ; RIGHTkkachi ; LEFTkkachi ; background ; P2V ; svol = 0 ; temp1 = true ; // 게임 초기화
clearGame ( ) { 
    this.birdX= 50 ; 
    this.birdY= height- 50 ; 
    this.seonbiX= width- 50 ; 
    this.seonbiY= 150 ; 
    walls=new Array();  
    guards=new Array(); 
    walls . push( new this.Wall ( 0 , 100 , 1200 , 1 ) ) ; 
    walls . push( new this.Wall ( 0 , 0 , 1 , 800 ) ) ; 
    walls . push( new this.Wall ( 0 , 800 , 1200 , 1 ) ) ; 
    walls . push( new this.Wall ( 1200 , 0 , 1 , 800 ) ) ; 
    walls . push( new this.Wall ( 0 , 580 , 200 , 50 ) ) ; 
    walls . push( new this.Wall ( 370 , 650 , 50 , 150 ) ) ; 
    walls . push( new this.Wall ( 190 , 280 , 50 , 180 ) ) ; 
    walls . push( new this.Wall ( 550 , 580 , 190 , 40 ) ) ; 
    walls . push( new this.Wall ( 380 , 400 , 150 , 40 ) ) ; 
    walls . push( new this.Wall ( 880 , 630 , 40 , 170 ) ) ; 
    walls . push( new this.Wall ( 350 , 100 , 40 , 160 ) ) ; 
    walls . push( new this.Wall ( 660 , 280 , 40 , 140 ) ) ; 
    walls . push( new this.Wall ( 820 , 100 , 40 , 210 ) ) ; 
    walls . push( new this.Wall ( 900 , 450 , 300 , 40 ) ) ; 
    guards . push( new this.Guard ( 320 , 320 , 2 , 90 ) ) ; 
    guards . push( new this.Guard ( 600 , 480 , 2 , 90 ) ) ; 
    guards . push( new this.Guard ( 870 , 370 , 2 , 90 ) ) ; } 
    // end of clearGame()
//draw 함수에 넣어 게임을 실행 시킬 메서드
preload(){
    this.P2V= loadSound("./data/Pursuit20Velocity" ); 
}
setup(){
    this.jokbo= loadImage( "./data/jokbo.png" ) ; 
    this.seonbi= loadImage( "./data/seonbi.png" ) ; 
    guard= loadImage( "./data/guard.png" ) ; 
    this.UPkkachi= loadImage( "./data/UPkkachi.png" ) ; 
    this.DOWNkkachi= loadImage( "./data/DOWNkkachi.png" ) ; 
    this.LEFTkkachi= loadImage( "./data/LEFTkkachi.png" ) ;
    this.RIGHTkkachi= loadImage( "./data/RIGHTkkachi.png" ) ; 
    this.background= loadImage( "./data/background.png" ) ;
}
update ( ) { this.svol+= 0.01; this.svol= constrain( this.svol, 0 , 0.7) ; this.P2V . amp( this.svol) ; if ( this.temp1) { this.P2V . loop( ) ; this.temp1= false ; } this.Background( ) ; this.moveBird( ) ; this.handleWalls( ) ; this.handleGuards( ) ; this.handleSeonbi( ) ; this.checkPassCondition( ) ; this.bar( ) ; } // end of update()
// 까치를 움직이는 메인 메서드
handleKeyPress ( keyCode , key ) { 
    if (true) { 
        switch ( keyCode) { 
            case UP_ARROW: 
                if ( ! this.checkCollisionWithWalls( this.birdX, this.birdY- this.BIRD_SPEED, this.BIRD_SIZE) ) { 
                this.birdY-= this.BIRD_SPEED; 
                } 
            break ; 
            case DOWN_ARROW: 
                if ( ! this.checkCollisionWithWalls( this.birdX, this.birdY+ this.BIRD_SPEED, this.BIRD_SIZE) ) { 
                    this.birdY+= this.BIRD_SPEED; 
                } 
                break ; 
            case LEFT_ARROW: 
                if ( ! this.checkCollisionWithWalls( this.birdX- this.BIRD_SPEED, this.birdY, this.BIRD_SIZE) ) { 
                    this.birdX-= this.BIRD_SPEED; 
                } 
                break ; 
            case RIGHT_ARROW: 
                if ( ! this.checkCollisionWithWalls( this.birdX+ this.BIRD_SPEED, this.birdY, this.BIRD_SIZE) ) { 
                    this.birdX+= this.BIRD_SPEED;
                } 
                break ; 
            } 
        } 
        if ( key== ' ' ) { 
            this.isHiding= ! this.isHiding; 
        } } // end of handleKeyPress()
//  까치의 벽 충돌 감지 및 움직임을 부드럽게 해주는 메서드
moveBird ( ) { let newX = this.birdX; let newY = this.birdY; //int bird_dir = 1;
if ( keyPressed) { if ( keyCode== UP_ARROW) { newY-= this.BIRD_SPEED; this.bird_dir= 0 ; } else if ( keyCode== DOWN_ARROW) { newY+= this.BIRD_SPEED; this.bird_dir= 2 ; } else if ( keyCode== LEFT_ARROW) { newX-= this.BIRD_SPEED; this.bird_dir= 3 ; } else if ( keyCode== RIGHT_ARROW) { newX+= this.BIRD_SPEED; this.bird_dir= 1 ; } } if ( ! this.checkCollisionWithWalls( newX, newY, this.BIRD_SIZE) ) { this.birdX= newX; this.birdY= newY; } switch ( this.bird_dir) { case 0 : push( ) ; imageMode( CENTER) ; image( this.UPkkachi, this.birdX, this.birdY, this.BIRD_SIZE, this.BIRD_SIZE) ; pop( ) ; break ; case 1 : push( ) ; imageMode( CENTER) ; image( this.RIGHTkkachi, this.birdX, this.birdY, this.BIRD_SIZE, this.BIRD_SIZE) ; pop( ) ; break ; case 2 : push( ) ; imageMode( CENTER) ; image( this.DOWNkkachi, this.birdX, this.birdY, this.BIRD_SIZE, this.BIRD_SIZE) ; pop( ) ; break ; case 3 : push( ) ; imageMode( CENTER) ; image( this.LEFTkkachi, this.birdX, this.birdY, this.BIRD_SIZE, this.BIRD_SIZE) ; pop( ) ; break ; } // end of switch(bird_dir)
} // end of moveBird()
//  벽 충돌 감지
checkCollisionWithWalls ( x , y , size ) { for ( let i=0;i<walls.length;i++) { if ( walls[i] . isColliding( x, y, size) ) { return true ; } } return false ; } // end of checkCollisionWithWalls
//  벽 그려주는 메서드
handleWalls ( ) { for ( let i=0;i<walls.length;i++) { walls[i] . display( ) ; } } // end of handleWalls
// 관리 그려주는 메서드
handleGuards ( ) { for (let i=0;i<guards.length;i++) { guards[i] . move( walls) ; guards[i] . displaySight( ) ; guards[i] . display( ) ; if ( guards[i] . checkAndHandleInSight( this.birdX, this.birdY) && ! this.isHiding) { //gameOver();
} } } //end of handleGuards()
//  선비 집 그려주는 메서드
handleSeonbi ( ) { push( ) ; noFill( ) ; noStroke( ) ; ellipse( this.seonbiX, this.seonbiY, this.SEONBI_SIZE, this.SEONBI_SIZE) ; pop( ) ; } Background ( ) { push( ) ; imageMode( CENTER) ; image( this.background, 600 , 400 , width, height) ; pop( ) ; } //  선비 집에 도달 했는지 확인하는 메서드
checkPassCondition ( ) { if ( dist( this.birdX, this.birdY, this.seonbiX, this.seonbiY) < this.SEONBI_SIZE/ 2 ) { this.P2V . stop( ) ; this.temp1= true ; this.svol= 0 ; main_scene_code= "b4easy" ; this.clearGame( ) ; } } // end of checkPassCondition()
bar ( ) { push( ) ; noStroke( ) ; fill( 139 , 69 , 19 ) ; rect( 0 , 0 , 1200 , 100 ) ; fill( 34 , 139 , 34 ) ; rect( 0 , 0 , width, 20 ) ; textSize( 40 ) ; fill( 255 ) ; text( "Leftover cheating paper:" , 30 , 70 ) ; pop( ) ; if ( Num_Jokbo== 3 ) { push( ) ; imageMode( CENTER) ; image( this.jokbo, 450 , 55 , 50 , 50 ) ; image( this.jokbo, 550 , 55 , 50 , 50 ) ; image( this.jokbo, 650 , 55 , 50 , 50 ) ; pop( ) ; } else if ( Num_Jokbo== 2 ) { push( ) ; imageMode( CENTER) ; image( this.jokbo, 450 , 50 , 50 , 50 ) ; image( this.jokbo, 550 , 50 , 50 , 50 ) ; pop( ) ; } else if ( Num_Jokbo== 1 ) { push( ) ; imageMode( CENTER) ; image( this.jokbo, 450 , 50 , 50 , 50 ) ; pop( ) ; } } // end of void bar()
// 벽 객체 선언
Wall = class  { x ;y ;w ;h ; constructor( x , y , w , h ) { this . x = x; this . y = y; this . w = w; this . h = h; } 
display ( ) { push( ) ; noFill( ) ; noStroke( ) ; rect( this.x, this.y, this.w, this.h) ; pop( ) ; } // 벽과 충돌 감지
isColliding ( bx , by , size ) { return bx+ size/ 2 > this.x&& bx- size/ 2 < this.x+ this.w&& by+ size/ 2 > this.y&& by- size/ 2 < this.y+ this.h; } } //end of class Wall
// 관리 객체 선언
Guard = class  { x ;y ;sightRange ;speed ; speedX ;speedY ; birdInSightLastFrame ; 
    constructor( x , y , speed , sightRange ) { this . x = x; this . y = y; this . speed = speed; this . sightRange = sightRange; this . birdInSightLastFrame = false ; this.setRandomDirection( ) ; } setRandomDirection ( ) { let angle = random( TWO_PI) ; this . speedX = round( this.speed* cos( angle) ) ; this . speedY = round( this.speed* sin( angle) ) ; } //  관리의 움직임 관리
move ( walls ) { let newX = this.x+ this.speedX; let newY = this.y+ this.speedY; // 관리의 충돌 감지
if ( ! this.checkCollisionWithWalls( newX, newY, GUARD_SIZE) ) { this.x= newX; this.y= newY; } else { this.setRandomDirection( ) ; } // 화면 밖으로 나가지 않도록 해주는 조건문
if ( this.x< 0 || this.x> width|| this.y< 0 || this.y> height) { this.setRandomDirection( ) ; } } //관리가 벽과 충돌 감지
checkCollisionWithWalls ( x , y , size ) { for (let i=0;i<walls.length;i++) { if ( walls[i]. isColliding( x, y, size) ) { return true ; } } return false ; } //관리 그려줌
display ( ) { //fill(194);
//ellipse(x, y, GUARD_SIZE, GUARD_SIZE);
push( ) ; imageMode( CENTER) ; image( guard, this.x, this.y, GUARD_SIZE, GUARD_SIZE) ; pop( ) ; } // 관리 시야 메서드
displaySight ( ) { push( ) ; fill( 255 , 0 , 0 , 100 ) ; stroke( 255 , 0 , 0 ) ; ellipse( this.x, this.y, this.sightRange* 2 , this.sightRange* 2 ) ; pop( ) ; } // 관리의 시야 안에 들어왔는지 확인하는 로직
checkAndHandleInSight ( bx , by ) { let birdInSight = dist( bx, by, this.x, this.y) < this.sightRange; if ( birdInSight&& ! this.birdInSightLastFrame&& Num_Jokbo> 0 ) { Num_Jokbo-= 1 ; } this.birdInSightLastFrame= birdInSight; return birdInSight; } } // end of class Guard
} // end of class Mygame
class Howsp { howsp ; howspkkachi ; howspguard ; howsphome ; scn_idx = 0 ; constructor( ) { 
    this.howsp= loadImage( "./data/howplaysp.png" ) ; 
    this.howspkkachi= loadImage( "./data/howspkkachi.png" ) ; 
    this.howspguard= loadImage( "./data/howspguard.png" ) ; 
    this.howsphome= loadImage( "./data/howsphome.png" ) ; } update ( ) { this.drawing( ) ; } drawing ( ) { //push();
//textSize(50);
//textMode(CENTER);
image( this.howsp, 0 , 0 ) ; switch ( this.scn_idx) { case 0 : image( this.howspkkachi, 0 , 0 ) ; push( ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Use the arrow keys to move the magpie!" , 600 , 400 ) ; pop( ) ; break ; case 1 : image( this.howspguard, 0 , 0 ) ; push( ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Run away from the officers!" , 600 , 400 ) ; pop( ) ; break ; case 2 : image( this.howsphome, 0 , 0 ) ; push( ) ; textSize( 50 ) ; textAlign( CENTER, CENTER) ; fill( 255 ) ; text( "Deliver the cheating paper safely to the seonbi's house!" , 600 , 400 ) ; pop( ) ; break ; case 3 : main_scene_code= "spgame" ; this.scn_idx= 0 ; break ; } // end of switch
} // end of drawing()
keyPressed ( ) { if ( key== ' ' ) { this.scn_idx++ ; } } // end of keyPressed()
} 