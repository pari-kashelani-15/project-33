class Snow{
    constructor(bodyA, pointB){
        var options = {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.snow1 = loadImage('sprites/snow1.jpg');
        this.snow2 = loadImage('sprites/snow2.jpg');
        this.snow3 = loadImage('sprites/snow3.jpg');
        this.snow4 = loadImage('sprites/snow4.webp');
        this.snow5 = loadImage('sprites/snow5.webp');
        this.pointB = pointB
        this.snow = Constraint.create(options);
        World.add(world, this.snow);
    }
  
    display(){
        image(this.snow1,200,200);
        image(this.snow2,100,100);
        image(this.snow3,400,400);
        image(this.snow4,300,300);
        image(this.snow5,500,500);
    

}