function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Cat image';
    this.image = 'Cat.png';
}

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Dog image';
    this.image = 'Dog.png';
}

function Bunny(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Bunny image';
    this.image = 'Bunny.png';
}

animals = [new Cat('jeff', 5), new Dog('cooper', 3), new Bunny('snowball', 4)];
names =['jeff','cooper','snowball'];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * (maxIndex+1))
}

function generateRandomName() {
    maxIndex = names.length-1;
    let i=generateRandomIndex(maxIndex) 
    return names[i]
}

function generateRandomAge() {
    return generateRandomIndex(10)
}

function generateRandomAnimal() {
    maxIndex = animals.length - 1 ;
    let i = generateRandomIndex(maxIndex)
    let animal = animals[i]
    let newA;
    if (animal instanceof Cat)
        newA = new Cat(generateRandomName(), generateRandomAge())
    else if (animal instanceof Dog)
        newA = new Dog(generateRandomName(), generateRandomAge())
    else
        newA = new Bunny(generateRandomName(), generateRandomAge())
    return newA
}

function onLoad() {
    let animal=generateRandomAnimal();
    document.getElementById("animalProps").textContent=animal.name + "  " + animal.age + '   yr old';
    let imageTag=document.getElementById('animalImg');
    imageTag.setAttribute('src', animal.image);
    imageTag.setAttribute('alt', animal.image_alt);
}