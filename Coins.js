class Coins{
    constructor(x,y){
    var options ={
        isStatic: true
    }
    this.body = Bodies.circle(x, y, 20,options);
        this.radius = 20;
        
       
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("yellow");
        ellipse( pos.x,pos.y, this.radius);
        
      }
}
    
