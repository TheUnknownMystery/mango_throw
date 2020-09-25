class Band {

   constructor(bodyA, bodyB) {

      var options = {

         bodyA: bodyA,
         bodyB: bodyB,
         stifness: 0.04,
         length: 10
      }

      this.bodyA = bodyA;
      this.bodyB = bodyB;

      this.sling = Constraint.create(options);
      World.add(world, this.sling);

   }

    fly() {
      this.sling.bodyA = null;
   }

   display() {
      if (this.sling.bodyA) { 
      var bodyA = this.sling.bodyA.position;
      var bodyB = this.sling.bodyB.position;
      strokeWeight(4)
      line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
      }

   }

}

