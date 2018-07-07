var Person = /** @class */ (function () {
    function Person() {
        this._firstname = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Person.prototype.getFirstname = function () {
        return this._firstname;
    };
    Person.prototype.setFirstname = function (firstname) {
        this._firstname = firstname;
    };
    return Person;
}());
var person = new Person();
person.setFirstname("Asaad");
console.log(person.getFirstname());
