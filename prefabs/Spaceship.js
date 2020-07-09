// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, spaceshipSpeed) {
      super(scene, x, y, texture, frame);
  
      scene.add.existing(this);
      this.points = pointValue;
      this.spaceshipSpeed = spaceshipSpeed;
    }

    update() {
        //move spaceship left
        this.x -= this.spaceshipSpeed;
        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.reset();
        }
    } 

    reset() {
        this.x = game.config.width;
    }
}