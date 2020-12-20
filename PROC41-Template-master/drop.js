class Drop{

    constructor(x,y){
        var options = {
            'friction':0.1,
            'restitution':0.1
            }
            this.drop=Bodies.circle(x,y,5,options)
            this.radius=5
        World.add(world, this.drop);
    }
    updateY(){     
        if(this.drop.position.y > height){

            Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius)
}
}