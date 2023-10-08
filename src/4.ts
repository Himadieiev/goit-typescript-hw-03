class Key {
    private signature: number;

    constructor(){
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key){
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key | null;
    protected tenants: Person[];

    constructor(key: Key) {
       this.key = key;
       this.door = false;
       this.tenants = [];
    }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person inside");
    } else {
      console.log("Person outside");
    }
  }
}



class MyHouse extends House {
    constructor(key: Key) {
    super(key);
  }

  openDoor(enteredKey: Key) {
    if (enteredKey.getSignature() === this.key!.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("Invalid key, the door isn't open");
    }
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};