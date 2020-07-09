class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_music', './assets/gamemusic.mp3');
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
    create() {
        //menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#470d70',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- textSpacer, 'HUNGRY DRAGONS', menuConfig).setOrigin(0,5);
        this.add.text(centerX, centerY, 'Use < > arrows to move & (F) to Feed', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#722f73';
        menuConfig.color = '#f677fb';
        this.add.text(centerX, centerY + textSpacer, 'Press < for Easy or > for Hard', menuConfig).setOrigin(0.5);

     // define keys
keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");  
          this.sound.play('sfx_music');  
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");
          this.sound.play('sfx_music');     
        }
      }
  }