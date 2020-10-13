class Box{
    constructor(x, y,width,height){
        var ball_options={
            'restitution':0.5
        }
        this.ball = Bodies.rectangle(random(50, 350),y,width,height, ball_options);
        this.width = width;
        this.height = height;
        this.Image = loadImage("GameDesign1.jpg")
        World.add(world,this.ball);
         
    }

    display(){
        var pos = this.ball.position;
     //   rectMode(CENTER);
    //   rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.Image, pos.x, pos.y, this.width, this.height)
    

    }
}