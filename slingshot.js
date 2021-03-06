class Slingshot {
    constructor(body1, point2) {

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }