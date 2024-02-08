var config={
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }

};

var game= new Phaser.Game (config);
var peixinho

function preload () {
    this.load.image('mar','assets/mar.jpeg');
    this.load.image('logo','assets/logo-inteli_branco.png');
    this.load.image('concha', 'assets/peixes/concha.png');
    this.load.image('peixe_verde','assets/peixes/peixe_verde.png');
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png');
    this.load.image('baiacu', 'assets/peixes/baiacu.png');
};
function create () {
   this.add.image(400,100,'mar');
   this.add.image(400,75, 'logo'). setScale(0.5);
   this.add.image(200,500, 'concha');
   this.add.image(500,500, 'crustaceo');
   baiacuu = this.add.image(600,250, 'baiacu');
  peixinho = this.add.image(400,300, 'peixe_verde'). setOrigin(0.5,0.5). setFlip(true, false);
  
   peixinho.setFlip(true, false);

}

function update () {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
   

}