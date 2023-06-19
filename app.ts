type Car = {
  brand: string;
  model: string;
  
}

type ElectricCar = {
  batteryCapacity: string;
  topSpeed: number;
  milage: string
  engine: string
}

type HybridCar = Car & ElectricCar
const myCar: HybridCar ={
  brand: 'Toyota',
  model: 'Fortuner Legender',
  batteryCapacity: '85 Ah',
  topSpeed: 190,
  milage: '10+ kmpl',
  engine: '2755 cc'
}

console.log(myCar);

