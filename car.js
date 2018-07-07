// interface ()
// {
//     speed=number;
// }
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.name = name;
        this.acceleation = 0;
        this.honk = (function () {
            console.log('$this.name is syaing :Tooooot!');
        });
        this.accelerate = (function (speed) {
            _this.acceleation = _this.acceleation + speed;
        });
    }
    return Car;
}());
var car = new Car('BMW');
car.honk;
console.log(car.accelerate);
car.accelerate(60);
