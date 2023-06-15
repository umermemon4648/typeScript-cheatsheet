interface ComplexObj{
    fullname: String[],
    age: Number,
    isMale: boolean,
    calculateSum: (a: number, b: number)=> number
}

const myObj: ComplexObj = {
    fullname: ["Muhammad", "Umer"],
    age: 21,
    isMale: true,
    calculateSum: (a, b)=>{
        return a + b
    },
}
const result = myObj.calculateSum(4,7)
console.log(result);
console.log(myObj);
