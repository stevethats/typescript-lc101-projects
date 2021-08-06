import {Payload} from "./Payload"
import {Astronaut} from "./Astronaut"
import {Cargo} from "./Cargo"

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems = [];
    astronauts = [];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass (items: Payload[]): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg (): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }

    canAdd (item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else if (this.canAdd(cargo) === false) {
            return false;
        }
    }

    addAstronaut (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else if (this.canAdd(astronaut) === false) {
            return false;
        }
    }
}