let person1 = {
  name: "Keisha",
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};
let person2 = {
  name: "Genesis",
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};
let person3 = {
  name: "Coby",
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};
let person4 = {
  name: "Marcus",
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};
let person5 = {
  name: "Keyontay",
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};

class Person {
  constructor(name, age, hometown) {
    this.name = name;
    this.hometown = hometown;
    this.age = age;
    this.sayHello = function() {
      console.log(
        `Hello my name is ${this.name} im from ${this.hometown} and i am currently ${this.age}`
      );
    };
  }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

let keishaun = new Person("keishuan", 25, "Chicago");
let Keyontay = new Person("keyontay", 15, "Chicago");
let Genesis = new Person("Genesis", 24, "Chicago");
let Marcus = new Person("Marcus", 23, "Birmingham");
let Coby = new Person("coby", 22, "Tuscaloose");

class Vehicle {
  constructor(manufacture, wheels, type) {
    this.manufacture = manufacture;
    this.wheels = wheels;
    this.type = type;
  }
  
  carInfo() {
    console.log(
      `This is a ${this.manufacture} it has ${this.wheels} wheels and the model is a ${this.type}`
    );
  }
}

mustang = new Vehicle(`Mustang`, 4, `Ford`);

class Trucks extends Vehicle {
  constructor(manufacture, wheels, type, doors, truckbed) {
    super(manufacture, wheels, type);
    this.truckbed = truckbed;
    this.doors = doors;
  }

  truckInfo() {
    console.log(
      `This is a truck it has ${this.doors} doors and having a truckbed is ${this.truckbed}`
    );
  }
}

class Sedan extends Vehicle {
  constructor(manufacture, wheels, type, doors, mpg, size) {
    super(manufacture, wheels, type);
    this.mpg = mpg
    this.size = size 
    this.doors = doors
  }
  sInfo() {
    console.log(
      `This is a Sedan it has ${this.mpg} mpg and having a size of ${this.size} you and the family will all love`
    );
  }
}

class Motocy extends Vehicle {
    constructor(manufacture, wheels, type, doors, mpg){
        super(manufacture, wheels, type, doors, mpg)
        this.manufacture = manufacture
        this.wheels = wheels
        this.type = type
        this.mpg = mpg
       

    }
    mInfo(){
        console.log(`This is my new ${this.manufacture} it gets ${this.mpg} by the mile but it is a motorcycle so it only has ${this.wheels} wheels`)
    }
}

denai = new Trucks("ford", 4, "tyr", 4, true);
sedanman = new Sedan("ford", 4, "sedan", 4, "30", "lg");
kawasaki = new Motocy("kawasaki",2,"fast",0,"37")
keishaun.sayHello();
Keyontay.sayHello();
Genesis.sayHello();
Marcus.sayHello();
Coby.sayHello();
mustang.carInfo();
denai.truckInfo();
sedanman.sInfo();
kawasaki.mInfo()
