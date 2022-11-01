// Describe base class Entity that can store name
// Implement child classes Stuff, Box, User.Box can store some stuff[].Every box belongs to user
// Add example of usage of these classes, e.g., create some instances, display data related to them

class Entity {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hey, I am ${this.name}.`);
    }
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
    }

    introduce() {
        super.introduce();
    }
}

class Box extends Entity {
    constructor(name) {
        super(name);
    }

    introduce() {
        super.introduce();
    }

    stuff = [];
    addThings(...stuff) {
        stuff.forEach((item) => this.stuff.push(item.name));
    }
}

class User extends Entity {
    constructor(name) {
        super(name);
    }

    introduce() {
        super.introduce();
    }

    packBox(box) {
        this.box = box;
        //console.log(this);
    }
}

const pen = new Stuff('pen');
const pencil = new Stuff('pencil');
const paper = new Stuff('paper');
const keyboard = new Stuff('keyboard');
const compMouse = new Stuff('computer mouse');
const printer = new Stuff('printer');
const coffee = new Stuff('coffee');
const tea = new Stuff('tea');
const sugar = new Stuff('sugar');
pen.introduce();
pencil.introduce();
paper.introduce();
// keyboard.introduce();
// compMouse.introduce();
// printer.introduce();
// coffee.introduce();
// sugar.introduce();
// tea.introduce();

const officeBox = new Box('box with office supplies');
const devicesBox = new Box('box with devices');
const kitchenBox = new Box('box for kitchen');
officeBox.introduce();
devicesBox.introduce();
kitchenBox.introduce();
officeBox.addThings(pen, pencil, paper);
devicesBox.addThings(keyboard, compMouse, printer);
kitchenBox.addThings(coffee, sugar, tea);

const John = new User('John');
const Sam = new User('Sam');
const Dean = new User('Dean');
John.introduce();
Sam.introduce();
Dean.introduce();
John.packBox(officeBox);
Sam.packBox(devicesBox);
Dean.packBox(kitchenBox);

function execute() {
    let movement = [];
    movement = [John, Sam, Dean];

    console.log('Hey, guys! We are moving to another office.');
    
    movement.forEach((person) => {
        console.log(`${person.name}, your box is a ${person.box.name}. It contains ${person.box.stuff.join(', ')}.`)
    });
}

execute();
