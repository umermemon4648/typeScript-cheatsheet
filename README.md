# TypeScript Cheatsheet

## Data Types in TypeScript


 **String:**
  ```typescript
  const myName : String = "Umer"
   ```

 **Number:**
  ```typescript
  const myAge : Number = 21
   ```

 **Boolean:**
  ```typescript
  const isProgrammer : Boolean = true
   ```

 **Array:**
  ```typescript
  const hobbies : String[] = ['Coding', 'Open source contribution','Travelling']
   ```

 **Tuples:**
 Tuples allow you to create an array of different element specified with its type
  ```typescript
  const marks : [string, number] = ['Math', 90]
   ```

 **any:**
 The any type in TypeScript is a generic type used when a variable’s type is unknown, does not allow type checking
  ```typescript
  const config: any = {
  title: "Some config",
  files: ["file1.js", "file2.js"],
  options: {
    preset: "node-ts",
  },
};

console.log(config)
   ```


**enum:**
 enum allow us to create constant variable that are meanst to immutable
  ```typescript
  enum Direction{
  left= "LEFT",
  right= "RIGHT",
  top= "TOP",
  down= "DOWN",
};
let myDir : Direction = Direction.top
console.log(myDir)
   ```

```typescript
  enum Direction{
  left,
  right,
  top,
  down,
};

let myDir : Direction = Direction.top //will give 2 as enum starts with 0
console.log(myDir)
   ```

### funtions:
 In typescript function may be assigned with two ways
 1- function type
 2- argument type

**function type:**
```typescript
function returnString(str:string) :Number{
    let a = parseInt(str)
    console.log(typeof a);
    return a
}
  
  console.log(returnString("123"))
   ```

**argument type:**
```typescript
function add(a:Number, b: Number){
    return a+b
}
  
  console.log(add(1,6))
   ```

**void function type:**
using arrow function
```typescript
const sayHello = () : void=>{
   console.log("Hello! Dev")
}
  sayHello()
   ```

using norma function
```typescript
function sayHello() : void{
   console.log("Hello! Dev")
}
  sayHello()
   ```


**arrow function:**
```typescript
const multiply = (a:number, b: number) : number=>{
    return a*b
}
  
  console.log(multiply(2,6))
   ```

