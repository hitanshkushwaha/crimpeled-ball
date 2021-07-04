class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:5
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
      }
      display(){
  
     if(this.slingshot.bodyA!=null){
      var pointA =this.slingshot.bodyA.position;
      var pointB =this.slingshot.pointB;
      strokeWeight(1)
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
     }
  
     
       
       
      fly(){
        this.slingshot.bodyA=null;
      }
     

    
    }; 



