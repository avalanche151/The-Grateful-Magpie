let gameOver = -1;
let w = 80;

class Scene1 {
    cols;
    rows;
    w = 80;
    grid;
    current;
    stack = [];
    yelmode;
    redmode;
    ballX;
    ballY;
    ballRadius = 15;
    ballImg;
    backgroundImg;
    flagImg;
    retryImg;
    retryImg_red;
    mazehowtoplay;

    setup() {
        this.backgroundImg = loadImage("./data/background2.png");
        this.ballImg = loadImage("./data/mazeseonbi.png");
        this.flagImg = loadImage("./data/flag.png");
        this.retryImg = loadImage("./data/retry.png");
        this.retryImg_red = loadImage("./data/retry_red.png");
        this.mazehowtoplay = loadImage("./data/mazehowtoplay.png");
        this.backgroundImg.resize(width, height);
        push();
        this.runMazeGame();
        pop();
    }

    draw() {
        push();
        if (gameOver == -1) {
            push();
            image(this.mazehowtoplay, 0, 0, width, height);
            textSize(30);
            fill(255);
            text("Move your mouse along the maze", 200, 500);
            text("The game ends when you reach the maze wall", 200, 600);
            text("Click the retry button to try again!!", 200, 700);
            pop();
        }
        if (gameOver == 0) {
            this.displayMazeGame();
            this.yelmode = false;
            this.redmode = false;
            this.Goal();
            isFinished = false;
        } else if (gameOver == 1) {
            push();
            fill(255, 0, 0);
            textSize(64);
            textAlign(CENTER, CENTER);
            text("Game Over", width / 2, height / 2);
            this.yelmode = true;
            this.redmode = false;
            pop();
            if (mouseX > width - 75 && mouseX < width - 5 && mouseY > height - 75 && mouseY < height - 5) {
                this.yelmode = false;
                this.redmode = true;
                if (mouseIsPressed) {
                    gameOver = 0;
                }
            }
        }
        if (gameOver == 2) {
            push();
            fill(255);
            textSize(64);
            textAlign(CENTER, CENTER);
            text("Game Clear", width / 2, height / 2);
            isFinished = true;
            pop();
        }
        pop();
        if (this.yelmode == true && this.redmode == false && gameOver == 1) {
            image(this.backgroundImg, 0, 0);
            push();
            fill(255, 0, 0);
            textSize(64);
            textAlign(CENTER, CENTER);
            text("Game Over", width / 2, height / 2);
            pop();
            image(this.retryImg, width - 140, height - 130, 180, 180);
        }
        if (this.redmode == true && this.yelmode == false && gameOver == 1) {
            image(this.backgroundImg, 0, 0);
            push();
            fill(255, 0, 0);
            textSize(64);
            textAlign(CENTER, CENTER);
            text("Game Over", width / 2, height / 2);
            pop();
            image(this.retryImg_red, width - 140, height - 130, 180, 180);
        }
    }

    Goal() {
        image(this.flagImg, width / 2 - 10, height / 2);
        if (mouseX < 80 && mouseX > 0 && mouseY < 80 && mouseY > 0) {
            gameOver = 2;
        }
    }

    runMazeGame() {
        this.cols = floor(width / this.w);
        this.rows = floor(height / this.w);
        this.grid = Array.from(new Array(this.cols), () => new Array(this.rows));
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                this.grid[i][j] = new this.Cell(i, j);
            }
        }
        this.current = this.grid[0][0];
        while (true) {
            this.current.visited = true;
            let next = this.current.checkNeighbors(this.grid, this.cols, this.rows);
            if (next != null) {
                next.visited = true;
                this.stack.push(this.current);
                this.removeWalls(this.current, next);
                this.current = next;
            } else if (this.stack.length > 0) {
                this.current = this.stack.pop();
            } else {
                break;
            }
        }
        this.ballX = this.w / 2;
        this.ballY = this.w / 2;
    }

    displayMazeGame() {
        image(this.backgroundImg, 0, 0);
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                this.grid[i][j].show();
            }
        }
        imageMode(CENTER);
        image(this.ballImg, this.ballX, this.ballY, this.ballRadius * 5, this.ballRadius * 5);
        this.ballX = constrain(mouseX, this.ballRadius, width - this.ballRadius);
        this.ballY = constrain(mouseY, this.ballRadius, height - this.ballRadius);
        if (this.checkCollision(this.ballX, this.ballY)) {
            gameOver = 1;
        }
    }

    checkCollision(x, y) {
        let i = floor(x / this.w);
        let j = floor(y / this.w);
        if (i < 0 || i >= this.cols || j < 0 || j >= this.rows) {
            return true;
        }
        let cell = this.grid[i][j];
        let cellX = i * this.w;
        let cellY = j * this.w;
        if (cell.walls[0] && y - this.ballRadius < cellY) {
            return true;
        }
        if (cell.walls[1] && x + this.ballRadius > cellX + this.w) {
            return true;
        }
        if (cell.walls[2] && y + this.ballRadius > cellY + this.w) {
            return true;
        }
        if (cell.walls[3] && x - this.ballRadius < cellX) {
            return true;
        }
        return false;
    }

    Cell = class {
        i;
        j;
        walls = [true, true, true, true];
        visited = false;

        constructor(i, j) {
            this.i = i;
            this.j = j;
        }

        show() {
            push();
            let x = this.i * w;
            let y = this.j * w;
            stroke("#1B3F14");
            strokeWeight(4);
            if (this.walls[0]) {
                line(x, y, x + w, y);
            }
            if (this.walls[1]) {
                line(x + w, y, x + w, y + w);
            }
            if (this.walls[2]) {
                line(x + w, y + w, x, y + w);
            }
            if (this.walls[3]) {
                line(x, y + w, x, y);
            }
            pop();
        }

        checkNeighbors(grid, cols, rows) {
            let neighbors = [];
            let top = this.j > 0 ? grid[this.i][this.j - 1] : null;
            let right = this.i < cols - 1 ? grid[this.i + 1][this.j] : null;
            let bottom = this.j < rows - 1 ? grid[this.i][this.j + 1] : null;
            let left = this.i > 0 ? grid[this.i - 1][this.j] : null;

            if (top && !top.visited) {
                neighbors.push(top);
            }
            if (right && !right.visited) {
                neighbors.push(right);
            }
            if (bottom && !bottom.visited) {
                neighbors.push(bottom);
            }
            if (left && !left.visited) {
                neighbors.push(left);
            }
            if (neighbors.length > 0) {
                let r = floor(random(0, neighbors.length));
                return neighbors[r];
            } else {
                return null;
            }
        }
    };

    removeWalls(a, b) {
        let x = a.i - b.i;
        if (x === 1) {
            a.walls[3] = false;
            b.walls[1] = false;
        } else if (x === -1) {
            a.walls[1] = false;
            b.walls[3] = false;
        }
        let y = a.j - b.j;
        if (y === 1) {
            a.walls[0] = false;
            b.walls[2] = false;
        } else if (y === -1) {
            a.walls[2] = false;
            b.walls[0] = false;
        }
    }
}
