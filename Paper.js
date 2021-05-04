class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            'restitution' :0.3,
            'friction' :0.5,
            'density' :1.2
        }

this.body = Bodies.circle(x,y,width,height,options);
this.radius = radius;

World.add(world,this.body);

    }
display(){
    ellipseMode(RADIUS);

    fill("yellow")
    circle(this.body.position.x, this.body.position.y,this.radius);
}
};