class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const cabbage = new Vegetable('cabbage');

class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    stomach = [];

    eat(food) {
        this.stomach.push(food);
        console.log(`${this.legs} legs helped to get and eat food`);
    }
}

class Rabbit extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed;
    }

    jump() {
        console.log(`${this.legs} legs can jump`);
    }

    eat(food) {
        if (!(food instanceof Vegetable)) {
            throw new Error("The rabbit can only eat vegetables");
        }
        super.eat(food);
    }
}

const rabbit = new Rabbit('powerful', 'White Vienna');

class Snake extends Animal {
    constructor(legs, isPoisonous) {
        super(legs);
        this.isPoisonous = isPoisonous;
    }

    crawl() {
        console.log(`${this.legs} legs can crawl`);
    }

    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error("The snake can only eat rabbits");
        }
        super.eat(food);
    }
}

const snake = new Snake('absent', true);

class Human extends Animal {
    constructor(legs, firstName, lastName) {
        super(legs);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        console.log(`${this.legs} legs can walk`);
    }

    greet() {
        console.log(`${this.firstName} ${this.lastName} says hello`);
    }

    eat(food) {
        if (food instanceof Human) {
            throw new Error("The human can't eat humans");
        }
        super.eat(food);
    }
}

const man = new Human('steady', 'Peter', 'Johnson');
const woman = new Human('strong', 'Samanta', 'Black');
