class Point {

    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('x : '+this.x+" y : "+this.y);
    }

    getDistance(point: Point) {

    }

}

let point = new Point(10, 20);
point.draw();