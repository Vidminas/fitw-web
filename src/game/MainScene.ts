import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor(
    private helloWorld: Phaser.GameObjects.Text | undefined = undefined
  ) {
    super("MainScene");
  }

  init() {
    this.cameras.main.setBackgroundColor("#24252A");
  }

  create() {
    this.helloWorld = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "Hello World",
      {
        font: "40px Arial",
      }
    );
    this.helloWorld.setOrigin(0.5);
  }

  update() {
    this.helloWorld && (this.helloWorld.angle += 1);
  }
}

export default MainScene;
