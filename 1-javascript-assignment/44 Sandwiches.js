const sandwich = (...items) => {
    console.log("Person want following items in sandwich: ")
    for (let i in items) console.log(items[i])
    console.log()
}

sandwich("lettuce", "egg", "chicken")
sandwich("mayonise", "zinger", "cheese")
sandwich("jalapeno", "mashrooms", "olives")