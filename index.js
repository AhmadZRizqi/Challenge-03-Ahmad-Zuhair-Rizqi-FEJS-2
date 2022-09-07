// // Challenge 3
// Nomer 1 -------------------------------------------------------------

// Ubah input draft dan crew dibawah
var emptyShip = new Ship(15, 10);

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    draftCrew = 1.5 * crew;

    if (draft > 20) {
        console.log("Banyak Nih Muatan Kapalnya.")
    } else if (draft <= 20) {
        if (draft > draftCrew) {
            console.log("Banyak Nih Muatan Kapalnya.")
        } else if (draft < draftCrew) {
            console.log("Lebih Banyak Muatan Orangnya.")
        } else if (draft === draftCrew) {
            console.log("Muatan Kapal dan Orang Sama Berat.")
        } else {
            "Error: Input correct value"
        }
    }
}
// Nomer 1 END -------------------------------------------------------------

// Nomer 2 -------------------------------------------------------------
class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;

    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, legs, species, status) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
}

class Cat extends Animal {
    constructor(name, age, legs, species, status) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
}

class Dog extends Animal {
    constructor(name, age, legs, species, status, master) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
        this.master = master;
    }
    GreetMaster(){
        return `Hello, master ${this.master}.`;
    }
}

const hewanHiu = new Shark('Hiu', 10, 0, 'Shark', 'Berenang')
console.log(hewanHiu)
console.log(hewanHiu.introduce())

const hewanKucing = new Cat('Kucing', 5, 4, 'Cat', 'Berjalan')
console.log(hewanKucing)
console.log(hewanKucing.introduce())

const hewanAnjing = new Dog('Anjing', 7, 4, 'Dog', 'Berjalan', 'Ahmad Zuhair Rizqi')
console.log(hewanAnjing)
console.log(hewanAnjing.introduce())
console.log(hewanAnjing.GreetMaster())
// Nomer 2 END -------------------------------------------------------------