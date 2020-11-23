var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x : ' + this.x + " y : " + this.y);
    };
    Point.prototype.getDistance = function (point) {
    };
    return Point;
}());
var point = new Point();
point.draw();
point.x = 10;
point.y = 20;
point.draw();
