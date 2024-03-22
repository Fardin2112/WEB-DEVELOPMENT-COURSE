function Car (name,color,milage,price){
    this.name = name;
    this.color = color;
    this.milage = milage;
    this.price = price;
    this.pick = function (){
        alert("picking is in progress...")
    }
}

var car1 = new car("swift","red",20,"8 lakhs");
car1.pick()
