class mango{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.image=loadImage("mango.png")
      // i have made rect body insted of circle so it doesnt become thin (added width)
		this.body=Bodies.rectangle(x,y,w,h ,options)
      	this.w=w
		this.h=h
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.w,this.h)
		pop()
 }
}