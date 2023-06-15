class Person{
    name: string
    age: number
    gender: string
    city: string

constructor(name: string, age: number, gender: string, city: string){
    this.name = name
    this.age = age
    this.gender = gender
    this.city = city
}
}

const personClassObj = new Person("Umer", 21, "Male", "Karachi")
console.log(personClassObj);