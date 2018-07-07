// interface ()
// {
//     speed=number;
// }
var Car = /** @class */ (function () {
    function Car(acceleation, name) {
        var _this = this;
        this.acceleation = acceleation;
        this.name = name;
        this.honk = (function () {
            console.log('$this.name is syaing :Tooooot!');
        });
        this.accelerate = (function (speed) {
            _this.acceleation = _this.acceleation + speed;
        });
    }
    return Car;
}());
var car = new Car(60, 'BMW');
car.honk;
