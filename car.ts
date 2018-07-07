// interface ()
// {
//     speed=number;

// }
class Car{
    acceleation=0;
    constructor(public name:string)
    {

    }
    honk=(()=>
    {
        console.log('$this.name is syaing :Tooooot!');
    });
    accelerate=((speed:number)=>{
        this.acceleation=this.acceleation +speed;
    });

}

var car=new Car('BMW');
car.honk;

console.log(car.accelerate);
car.accelerate(60);