class Person {
    constructor() {
        this._firstname = "";
        this.enumerable = true;
        this.configurable = true;
    }
    get firstname() {
        return this._firstname;
    }
    //  set Firstname(firstname:string)
    set firstname(firstname) {
        this._firstname = firstname;
    }
}
var person = new Person();
person._firstname = "Asaad";
console.log(person.firstname);
