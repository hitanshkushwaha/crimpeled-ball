class Paper {
    constructor(x,y,r,){
        var options = {
            isStatic: false,
            'restitution' :0.3,
            'friction' :0.5,
            'density' :1.2
        }
this.r=r
this.body = Bodies.circle(x,y,this.r,options);
//this.radius = radius;
this.image = loadImage("Paper.png")
World.add(world,this.body);

    }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);

    
    //circle(this.body.position.x, this.body.position.y,this.radius);
}
};