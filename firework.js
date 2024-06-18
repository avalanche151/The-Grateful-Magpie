class ArrayList extends Array {
    constructor() {
        super(...[]);
    }
    size() {
        return this.length;
    }
    add(x) {
        this.push(x);
    }
    get(i) {
        return this[i];
    }
    remove(i) {
        this.splice(i, 1);
    }
}

class Firework {
    particles = new ArrayList();

    drawing() {
        // 캔버스를 약간 어둡게 하여 폭죽 효과를 더 잘 보이게 함
        // 모든 입자를 업데이트하고, 화면에 그림
        for (let i = this.particles.size() - 1; i >= 0; i--) {
            let p = this.particles.get(i);
            p.update();
            p.show();
            if (p.isFinished()) {
                this.particles.remove(i);
            }
        }
    }

    mousePressed() {
        this.explode(mouseX, mouseY);
    }

    // 폭죽 효과를 생성하는 함수
    explode(x, y) {
        for (let i = 0; i < 100; i++) {
            this.particles.add(new this.Particle(x, y));
        }
    }

    Particle = class {
        position;
        velocity;
        lifespan = 255;

        constructor(x, y) {
            this.position = createVector(x, y);
            this.velocity = p5.Vector.random2D();
            this.velocity.mult(random(1, 6)); // 속도를 무작위로 설정하여 입자가 다양한 방향으로 퍼지도록 함
        }

        update() {
            this.position.add(this.velocity);
            this.lifespan -= 4; // 입자의 수명을 줄임
            this.velocity.mult(0.95); // 입자의 속도를 점차 줄임 (공기 저항 효과)
        }

        show() {
            noStroke();
            push();
            fill(random(125, 255), random(125, 255), random(125, 255), this.lifespan);
            ellipse(this.position.x, this.position.y, 10, 10);
            pop();
        }

        isFinished() {
            return this.lifespan < 0;
        }
    }
}

// p5.js의 setup과 draw 함수
let firework;

function setup() {
    createCanvas(windowWidth, windowHeight);
    firework = new Firework();
}

function draw() {
    background(0, 25); // 캔버스를 약간 어둡게 함
    firework.drawing();
}

function mousePressed() {
    firework.mousePressed();
}
