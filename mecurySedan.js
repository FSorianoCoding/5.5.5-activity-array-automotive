//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// Create a Car class that extends the Vehicle class (located in the vehicle.js).
// Add a constructor.
// Add the super keyword to call the parent class constructor.
// Add the properties listed in the Properties chart above.
// Add the methods with psuedo logic listed in the Methods chart above.



class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage,){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        //adding fuel to be equal to 10, but not sure if it will accept.
        this.fuel = 10
        this.scheduleService = false
        this.availableRoom = true
    }

    loadPassenger(num){
        this.passenger = this.passenger + num
        if(this.passenger <= this.maximumPassengers){
            console.log("Let's ride!")
            return this.availableRoom == true
        } 
        else {
            console.log("Not enough room.")
            return this.availableRoom = false
        }
    }
}


