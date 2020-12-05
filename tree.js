class tree
{
	constructor()
	{
      var options={
			isStatic:false
			}
		this.image=loadImage("tree.png")
	    this.body=Bodies.rectangle(1100,530,200,20,options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			imageMode(CENTER);
			image(this.image,1000,300,650,650)
			pop()
			
	}

}