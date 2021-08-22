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

// for union types the value must be either of type 'Fish', 'Bird' or of 'Fish & Bird'
getSmallPet({ eat: () => console.log("eat"), fly: () => console.log("fly") });
getSmallPet({ eat: () => console.log("eat"), swim: () => console.log("swim") });
getSmallPet({ eat: () => console.log("eat"), fly: () => console.log("fly"), swim: () => console.log("swim") });

// for intersection types the value must be of type 'Fish & Bird'
getFlyingFish({ eat: () => console.log("eat"), fly: () => console.log("fly"), swim: () => console.log("swim") });
