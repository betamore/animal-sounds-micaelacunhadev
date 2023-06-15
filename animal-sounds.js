// Write a function called cowSounds that prints "Cows go MOOOO!"
function cowSounds(){
    print("Cows go MOOOO!")
}

// Write a function called dogSounds that prints "Dogs go WOOOF!"
function dogSounds(){
    print("Dogs go WOOOF!")
}

// Write a function called duckSounds that prints "Ducks go QUACK!"
function duckSounds(){
    print("Ducks go QUACK!")
}

// Write a function called whatSound that accepts a single paramete. If that parameter id Cow it should run the cowSounds function.
// If the parameter is Dog it should run the dogSounds function.
// If the parameter is Duck it should run the duckSounds function.
// For any other input, it should display "I am not sure what noise that animal makes"
function whatSound( animal ){
    if ( animal === "Cow" ) cowSounds()
    else if ( animal === "Dog" ) dogSounds()
    else if ( animal === "Duck" ) duckSounds()
    else print("I am not sure what noise that animal makes")
}


// DONT CHANGE. THIS IS FOR TESTING
let animals = [ "Bat", "Cat", "Cat", "Dog", "Cow", "Duck", "Dog", "Fish", "Cow", "Dog", "Duck", "Duck" ]

for (let animal of animals) {
        whatSound(animal)
}
