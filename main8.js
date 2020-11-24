var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x : ' + this.x + " y : " + this.y);
    };
    Point.prototype.getDistance = function (point) {
    };
    return Point;
}());
var point = new Point(10, 20);
point.draw();
point.y = 30;
point.draw();
