class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('x : '+this._x+" y : "+this._y);
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        if(value < 0)
            throw new Error("value is less than 0");
        else
            this._x = value;            
    }

}

let point = new Point(1, 2);
point.draw();
point.x = 10;
point.draw();