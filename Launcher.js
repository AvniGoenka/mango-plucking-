class Launcher{
    constructor(bodyA,pointB){
     var options={
     bodyA: bodyA,
     pointB:pointB,
     stiffness:0.04,
     length:30
     }
     this.pointB=pointB
     this.sling= Constraint.create(options);
     World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(stoneObj){
        this.sling.bodyA=stoneObj;
    }
    display(){
    if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    strokeWeight(4);
    console.log(pointA,pointB)
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
    }
}