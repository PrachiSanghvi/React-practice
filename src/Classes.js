class Person {
  constructor(name = 'test', age = 0){
    this.name = name;
    this.age = age;
  }
  getGretting(){
    return `Hi.I am ${this.name}`;
  }
  getDesciption() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class student extends Person {
  constructor(name,age,stream = 'commerce') {
    super(name,age);
    this.stream = stream;
  }
  hasStream(){
    return !!this.stream;
  }
  getDesciption() {
    let desc = super.getDesciption();
    if (this.hasStream) {
      desc += `Their stream is ${this.stream}.`
    }
    return desc;
  }
}

class Traveler extends Person {
  constructor(name,age,homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGretting() {
    let desc = super.getGretting();
    if (this.hasHomeLocation) {
      desc += `I'm visiting from ${this.homeLocation}.`
    }
    return desc;
  }
}

const Student1 = new student('prachi',23,'Computer Science');
console.log(Student1.getDesciption());

const Traveler1 = new Traveler('prachi','Ahmedabad');
console.log(Traveler1.getDesciption());