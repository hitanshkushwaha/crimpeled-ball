class Paper {
    constructor(x,y,r,height){
        var options = {
            isStatic: false,
            'restitution' :0.3,
            'friction' :0.5,
            'density' :1.2
        }
this.r=r
this.body = Bodies.circle(x,y,width,this.r,options);
this.radius = radius;

World.add(world,this.body);

    }
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);

    fill("yellow")
    circle(this.body.position.x, this.body.position.y,this.radius);
}
};