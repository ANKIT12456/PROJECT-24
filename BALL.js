class BALL{

    constructor(x,y){

        var ball_option={
            isStatic:false,
            restitution:0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body=Bodies.circle(x,y,20,ball_option);
        World.add(world,this.body);
    }

    present(){

        var pos=this.body.position;
        var angle=this.body.angle;
        //pos.x=mouseX;
        //pos.y=mouseY;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,20,20);
        pop();
    }
}