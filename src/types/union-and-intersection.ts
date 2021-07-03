interface Bird {
    eat(): void;
    fly(): void;
}

interface Fish {
    eat(): void;
    swim(): void;
}

// on union types you can only invoke methods defined on ALL types
function getSmallPet(pet: Fish | Bird) {
    pet.eat();
}

// on intersection types you can invoke all methods
function getFlyingFish(pet: Fish & Bird) {
    pet.eat();
    pet.fly();
    pet.swim();
}
