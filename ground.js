class Ground{
    constructor(){
        var ground_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(200, 390, 400, 20, ground_options);
        World.add(world, this.body);
        this.width = 400;
        this.height = 20;
    }
     
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}