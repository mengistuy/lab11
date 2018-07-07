class Person{
    _firstname:string="";
    getFirstname()
    {
        return this._firstname;
    }
    setFirstname(firstname:string)
    {
        this._firstname=firstname;
    }
    enumerable:boolean=true;
    configurable:boolean=true;
}

var person=new Person();
person.setFirstname("Asaad");
console.log(person.getFirstname())

