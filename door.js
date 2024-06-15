
    class Door {
        backgroundImg;
        doorImg = loadImage("한옥문.png");
        doorX; // The x-coordinate of the door image
        doorY; // The y-coordinate of the door image
        doorScale = 1; // Scale factor for the door image (e.g., 0.5 for half size)
        doorYOffset = 75; // Offset for the y-coordinate of the door image
        dragging = false;
        doorWidth = doorImg.width * doorScale;
        doorHeight = doorImg.height * doorScale;
        drg;
        temp1 = true;
        constructor(p) {
            this.backgroundImg = loadImage("한옥내부에서본까치.png");
            this.doorX = (width - this.doorWidth) / 2 - 125; // Start at the center of the canvas
            this.doorY = (height - this.doorHeight) / 2 - 60 + this.doorYOffset; // Apply the y-offset
            this.drg = loadSound("drg.mp3");
        }
        setup() {
            this.doorX = (width - this.doorWidth) / 2 - 125; // Start at the center of the canvas
            this.doorY = (height - this.doorHeight) / 2 - 60 + this.doorYOffset; // Apply the y-offset
        }
        update() {
            this.mainDraw();
        }
        mainDraw() {
            background(255); // Clear the background
            image(this.backgroundImg, 0, 0, width, height); // Draw the background image scaled to canvas size
            let doorWidth = this.doorImg.width * this.doorScale;
            let doorHeight = this.doorImg.height * this.doorScale;
            push();
            fill(0, 50);
            quad(350, 250, 350, 480, 600, 480, 600, 250);
            pop();
            image(
                this.doorImg,
                this.doorX,
                this.doorY,
                this.doorWidth,
                this.doorHeight
            ); // Draw the scaled door image
        } //  end of mainDraw()
        mousePressed() {
            let doorWidth = this.doorImg.width * this.doorScale;
            let doorHeight = this.doorImg.height * this.doorScale; // Check if the mouse is over the door image
            if (
                mouseX >= this.doorX &&
                mouseX <= this.doorX + this.doorWidth &&
                mouseY >= this.doorY &&
                mouseY <= this.doorY + this.doorHeight
            ) {
                this.dragging = true;
            } else if (
                this.doorX >= 570 &&
                mouseX >= 350 &&
                mouseX <= 600 &&
                mouseY >= 260 &&
                mouseY <= 480
            ) {
                kkachisound.stop();
                main_scene_code = "b4spgame";
            }
        } // end of mousePRessed
        mouseReleased() {
            this.dragging = false;
            this.drg.stop();
            this.temp1 = true;
        }
        mouseDragged() {
            if (this.dragging) {
                if (this.temp1) {
                    this.drg.cue(0);
                    this.drg.loop();
                    this.temp1 = false;
                }
                let doorWidth = this.doorImg.width * this.doorScale;
                this.doorX = mouseX - this.doorWidth / 2; // Update doorX to follow the mouse's x-coordinate
                this.doorX = constrain(this.doorX, 322, 575); // Keep the door within the canvas bounds
            }
        } // end of mouseDragged()
    } //end of class Door
    
