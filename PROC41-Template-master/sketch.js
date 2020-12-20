const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, worls;
var rand;
var thunderCreatedFrame = 0
var umbrella, thunderbolt;
var maxDrops = 100;
var drops = []
var thunderbolt1_img, thunderbolt2_img, thunderbolt3_img, thunderbolt4_img;

function preload() {
    thunderbolt1_img = loadImage("images/thunderbolt/1.png")
    thunderbolt2_img = loadImage("images/thunderbolt/2.png")
    thunderbolt3_img = loadImage("images/thunderbolt/3.png")
    thunderbolt4_img = loadImage("images/thunderbolt/4.png")
}

function setup() {
    createCanvas(500, 1000)

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500)
    thunderbolt = createSprite(250, 150, 50, 50)
 
 //creating drops
 if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

}

    Engine.run(engine);
}

function draw() {
    background(10)

    Engine.update(engine);

    
    rand = Math.round(random(1, 4));
        if (frameCount%80===0){
            thunderCreatedFrame = frameCount;
            thunderbolt = createSprite(random(10,370), random(10,30), 10, 10);
           
            switch (rand) {
                case 1: thunderbolt.addImage("thunderbolt1", thunderbolt1_img);
                    break;
                case 2: thunderbolt.addImage("thunderbolt1", thunderbolt2_img);
                    break;
                case 3: thunderbolt.addImage("thunderbolt1", thunderbolt3_img);
                    break;
                case 4: thunderbolt.addImage("thunderbolt1", thunderbolt4_img);
                    break;
                case 5: thunderbolt.addImage("thunderbolt1", thunderbolt5_img);
                    break;
                    default: break;
            }
            thunderbolt.scale = random(0.3,0.6)
        }
      
        if(thunderCreatedFrame + 10 ===frameCount && thunderbolt){
            thunderbolt.destroy();
        }

        umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
    drawSprites();
}
