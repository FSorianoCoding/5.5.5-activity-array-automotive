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
        //adding fuel to be equal to 10, but not sure if it will accept since it already
        //exists as = 0 in the BaseClass code.
        this.fuel = 10
        this.maintenance = false
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
            this.availableRoom = false
        }
    }

    // creating new carStart method to call on vehicle start() method that already exists.
    carStart() {
        return super.start()
    }


    // created scheduleService method and created maintenance property to run with method.
    scheduleService(mileage){
        super.mileage = mileage
        if (this.mileage > 30000){
            console.log("Time to schedule a service!")
            return this.maintenance = true
        }
        else {
            console.log("She's still got more to go!")
            return this.maintenance = false
        }
    }
}


