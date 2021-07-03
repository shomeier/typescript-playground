interface Bird {
    eat(): void;
    fly(): void;
}

interface Fish {
    eat(): void;
    swim(): void;
}

function getSmallPet(pet: Fish | Bird) {
    pet.eat();
}

function getFlyingFish(pet: Fish & Bird) {
    pet.eat();
    pet.fly();
    pet.swim();
}
