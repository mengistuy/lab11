var person={_firstname:""};
Object.defineProperty(person,"firstName",{
    get:function(){
        return this._firstname;
    },
    set:function (value){
        this._firstname=value.toUppesrCase();
    },
    enumerable:true,
    configurable:true
});

person.firstname="Asaad";
console.log(person.firstname);