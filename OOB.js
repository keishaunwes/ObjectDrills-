class Person{
constructor(name,age){
this.name = name;
this.age = age
}

sayHello = function(){
    alert(`hello my name is ${this.name} and i am ${this.age} years old`)
}
}
// Person.prototype.sleep = function(){
//     alert(`hello this is ${this.name} and im going to bed now `)
// }

var p1 = new Person("Keishaun",25)
var p2 = new Person("Genesis",24)

p1.sayHello();
p2.sayHello()

// p1.sleep()