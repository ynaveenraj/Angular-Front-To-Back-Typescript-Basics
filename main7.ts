class Point {

    x: number;
    y: number;

    draw() {
        console.log('x : '+this.x+" y : "+this.y);
    }

    getDistance(point: Point) {

    }

}

let point = new Point();
point.draw();
point.x = 10;
point.y = 20;
point.draw();