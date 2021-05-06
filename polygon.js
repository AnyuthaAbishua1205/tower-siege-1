class Polygon{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage ("polygon.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle
        var pos= this.body.position
 
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
    
        image (this.image,0,0,this.width,this.height);
       
      }
};