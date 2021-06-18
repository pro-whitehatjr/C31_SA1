class Link{
    constructor(bodyA,bodyB)
    {
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[6],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 

    detach()
    {
      World.remove(engine.world,this.link);
     
    }
}

