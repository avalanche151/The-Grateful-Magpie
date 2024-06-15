
 let gameOver = - 1 ; class Scene1 { cols ;rows ; w = 80 ; // 셀의 너비
grid ; current ; stack = new ArrayList(); yelmode ;redmode ; ballX ;ballY ; // 공의 위치
ballRadius = 15 ; // 공의 반지름
ballImg ; // 공 이미지
backgroundImg ; // 배경 이미지
flagImg ; retryImg ; retryImg_red ; mazehowtoplay ; 
pre ( ) { this.backgroundImg= loadImage( "assets/background2.png" ) ; // 배경 이미지 로드
this.backgroundImg . resize( width, height) ; // 배경 이미지 크기 조정
this.ballImg= loadImage( "assets/mazeseonbi.png" ) ; // 공 이미지 로드
this.flagImg= loadImage( "assets/flag.png" ) ; this.retryImg= loadImage( "assets/retry.png" ) ; this.retryImg_red= loadImage( "assets/retry_red.png" ) ; this.mazehowtoplay= loadImage( "assets/mazehowtoplay.png" ) ; push( ) ; this.runMazeGame( ) ; pop( ) ; } draw ( ) { push( ) ; // 게임 오버 상태가 아니면 계속 실행
if ( gameOver== - 1 ) { push( ) ; image( this.mazehowtoplay, 0 , 0 , width, height) ; text( "Move your mouse along the maze" , 200 , 500 ) ; text( "The game ends when you reach the maze wall" , 200 , 600 ) ; text( "Click the retry button to try again!!" , 200 , 700 ) ; pop( ) ; } if ( gameOver== 0 ) { this.displayMazeGame( ) ; this.yelmode= false ; this.redmode= false ; this.Goal( ) ; isFinished= false ; } else if ( gameOver== 1 ) { push( ) ; fill( 255 , 0 , 0 ) ; textSize( 64 ) ; textAlign( CENTER, CENTER) ; text( "Game Over" , width/ 2 , height/ 2 ) ; this.yelmode= true ; this.redmode= false ; pop( ) ; if ( mouseX> width- 75 && mouseX< width- 5 && mouseY> height- 75 && mouseY< height- 5 ) { this.yelmode= false ; this.redmode= true ; if ( mousePressed) { gameOver= 0 ; } } } if ( gameOver== 2 ) { // 클리어 메시지
push( ) ; fill( 255 ) ; textSize( 64 ) ; textAlign( CENTER, CENTER) ; text( "Game Clear" , width/ 2 , height/ 2 ) ; isFinished= true ; pop( ) ; } pop( ) ; if ( this.yelmode== true && this.redmode== false && gameOver== 1 ) { image( this.backgroundImg, 0 , 0 ) ; push( ) ; fill( 255 , 0 , 0 ) ; textSize( 64 ) ; textAlign( CENTER, CENTER) ; text( "Game Over" , width/ 2 , height/ 2 ) ; pop( ) ; image( this.retryImg, width- 140 , height- 130 , 180 , 180 ) ; } if ( this.redmode== true && this.yelmode== false && gameOver== 1 ) { image( this.backgroundImg, 0 , 0 ) ; push( ) ; fill( 255 , 0 , 0 ) ; textSize( 64 ) ; textAlign( CENTER, CENTER) ; text( "Game Over" , width/ 2 , height/ 2 ) ; pop( ) ; image( this.retryImg_red, width- 140 , height- 130 , 180 , 180 ) ; } } Goal ( ) { // push();
// fill(0);
// stroke(255);
// strokeWeight(2);
// rectMode(CENTER);
// pop();
// textSize(32);
// fill(255);
// textAlign(CENTER, CENTER);
// text("Goal", 40, 40);
image( this.flagImg, width/ 2 - 10 , height/ 2 ) ; if ( mouseX< 80 && mouseX> 0 && mouseY< 80 && mouseY> 0 ) { gameOver= 2 ; } } runMazeGame ( ) { // 미로와 초기 설정
this.cols= floor( width/ this.w) ; this.rows= floor( height/ this.w) ; this.grid= Array.from(new Array(cols), ()=>new Array(rows)); for ( let j = 0 ; this.j< this.rows; this.j++ ) { for ( let i = 0 ; this.i< this.cols; this.i++ ) { this.grid[ this.i] [ this.j] = new Cell ( this.i, this.j) ; } } this.current= this.grid[ 0 ] [ 0 ] ; // 미로 생성
while ( true ) { this.current . visited= true ; let next = this.current . checkNeighbors( ) ; if ( next!= null ) { next . visited= true ; this.stack . add( this.current) ; this.removeWalls( this.current, next) ; this.current= next; } else if ( this.stack . size( ) > 0 ) { this.current= this.stack . remove( this.stack . size( ) - 1 ) ; } else { break ; } } // 공의 초기 위치 설정 (미로의 시작 위치)
this.ballX= this.w/ 2 ; this.ballY= this.w/ 2 ; } displayMazeGame ( ) { // 어두운 배경 그리기
image( this.backgroundImg, 0 , 0 ) ; // 미로 그리기
for ( let j = 0 ; this.j< this.rows; this.j++ ) { for ( let i = 0 ; this.i< this.cols; this.i++ ) { this.grid[ this.i] [ this.j] . show ( ) ; } } // 공 이미지 그리기
imageMode( CENTER) ; image( this.ballImg, this.ballX, this.ballY, this.ballRadius* 5 , this.ballRadius* 5 ) ; // 마우스 위치로 공 이동
this.ballX= constrain( mouseX, this.ballRadius, width- this.ballRadius) ; this.ballY= constrain( mouseY, this.ballRadius, height- this.ballRadius) ; // 충돌 검사
if ( this.checkCollision( this.ballX, this.ballY) ) { gameOver= 1 ; } } checkCollision ( x , y ) { let i = floor( x/ this.w) ; let j = floor( y/ this.w) ; if ( this.i< 0 || this.i>= this.cols|| this.j< 0 || this.j>= this.rows) { return true ; } let cell = this.grid[ this.i] [ this.j] ; let cellX = this.i* this.w; let cellY = this.j* this.w; if ( cell . walls[ 0 ] && y- this.ballRadius< cellY) { return true ; // 상벽 충돌
} if ( cell . walls[ 1 ] && x+ this.ballRadius> cellX+ this.w) { return true ; // 우벽 충돌
} if ( cell . walls[ 2 ] && y+ this.ballRadius> cellY+ this.w) { return true ; // 하벽 충돌
} if ( cell . walls[ 3 ] && x- this.ballRadius< cellX) { return true ; // 좌벽 충돌
} return false ; } Cell = class  { i ;j ; walls = [ true , true , true , true ] ; // 상, 우, 하, 좌
visited = false ; constructor( i , j ) { this . i = i; this . j = j; } show ( ) { push( ) ; let x = this.i* w; let y = this.j* w; stroke( "#1B3F14" ) ; strokeWeight( 4 ) ; if ( this.walls[ 0 ] ) { line( x, y, x+ w, y) ; // 상
} if ( this.walls[ 1 ] ) { line( x+ w, y, x+ w, y+ w) ; // 우
} if ( this.walls[ 2 ] ) { line( x+ w, y+ w, x, y+ w) ; // 하
} if ( this.walls[ 3 ] ) { line( x, y+ w, x, y) ; // 좌
} pop( ) ; } checkNeighbors ( ) { let neighbors = new ArrayList(); let top = ( this.j> 0 ) ? grid[ this.i] [ this.j- 1 ] : null ; let right = ( this.i< cols- 1 ) ? grid[ this.i+ 1 ] [ this.j] : null ; let bottom = ( this.j< rows- 1 ) ? grid[ this.i] [ this.j+ 1 ] : null ; let left = ( this.i> 0 ) ? grid[ this.i- 1 ] [ this.j] : null ; if ( top!= null && ! top . visited) { neighbors . add( top) ; } if ( right!= null && ! right . visited) { neighbors . add( right) ; } if ( bottom!= null && ! bottom . visited) { neighbors . add( bottom) ; } if ( left!= null && ! left . visited) { neighbors . add( left) ; } if ( neighbors . size( ) > 0 ) { let r = floor( random( 0 , neighbors . size( ) ) ) ; return neighbors . get( r) ; } else { return null ; } } } 
removeWalls ( a , b ) { let x = a . i- b . i; if ( x== 1 ) { a . walls[ 3 ] = false ; b . walls[ 1 ] = false ; } else if ( x== - 1 ) { a . walls[ 1 ] = false ; b . walls[ 3 ] = false ; } let y = a . j- b . j; if ( y== 1 ) { a . walls[ 0 ] = false ; b . walls[ 2 ] = false ; } else if ( y== - 1 ) { a . walls[ 2 ] = false ; b . walls[ 0 ] = false ; } } } 