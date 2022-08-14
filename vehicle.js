class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
        //added fuel to parent because it is being invoked in methods below.
        //If this is incorrect to do, please let me know.
        this.fuel = 0
    }


    //flipped lines 21/22 & 24/25 for console.log to work and added return to log the new this. values
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;            
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    // autoPark()
    // {

    // }

    // autoDrive()
    // {
      
    // }

    typeOfVehicle(wheels) {
        // removed "this.numberOfWheels == X &&" from if/else if parameters because code was accepting 0 == wheels only
        if (8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (4 == wheels) {
            console.log(this.model + " " + this.make + " is a Car");
        } else if (2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
