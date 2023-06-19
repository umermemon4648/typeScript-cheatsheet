type User = {
  id: number;
  name: string;
  email: string;
  age: number;
} 
const getUserData = (user:User) : string => {
  return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`
}
const user:User = {
  id: 1,
  name: "Muhammad Umer",
  email: "umermemon4648@gmail.com",
  age: 21,
}
const userInfo = getUserData(user)
console.log(userInfo