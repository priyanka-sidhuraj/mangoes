class stone
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.image=loadImage("stone.png");
		this.body=Bodies.rectangle(x,y,w,h, options)
      	this.h=h;
		this.w=w
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.w,this.h)
			pop()
			
	}

}
