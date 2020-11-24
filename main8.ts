class Point {

    private x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x : '+this.x+" y : "+this.y);
    }

    getDistance(point: Point) {

    }

}

let point = new Point(10, 20);
point.draw();
point.y = 30;
point.draw();