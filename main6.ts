interface Point {
    x: number;
    y: number;
}

function drawPoint(pt: Point) {
    console.log(pt.x);
    console.log(pt.y);
}

drawPoint({x :10, y: 20});