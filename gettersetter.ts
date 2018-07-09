class Person{
    _firstname:string="";
    get firstname()
    {
        return this._firstname;
    }
  //  set Firstname(firstname:string)
   set firstname(firstname)
    {
        this._firstname=firstname;
    }
    enumerable:boolean=true;
    configurable:boolean=true;
}

var person=new Person();
person._firstname="Asaad";
console.log(person.firstname)

