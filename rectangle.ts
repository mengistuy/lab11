class rectangleObject{
    //width:number=0;
    //length: number=0;
    constructor(public width:number=0,public length:number=0){}
}

class Rectangle extends rectangleObject{
    constructor(width:number,length:number){
        super(5,2)
    }
        calcSize ()
        {
            return this.width * this.length;
        }
}
var rectangle=new Rectangle(5,2);
console.log(rectangle.calcSize())