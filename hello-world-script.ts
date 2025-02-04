// TYPESCRIPT (Likt Java, man deklarerar datatyp)


// import likt Java
import { User } from "./types/user"
import { Sidekick, Superhero } from "./types/workLab"


// FUNCTIONS

function helloWorld() {
    console.log("Hello world!")
}

function testDataTypes () {

    const name: string = "David"
    const name2: String = "Tommy" // NOT recommended (capital S)
    const age: number = 15
    const currency: number = 289.5
    const isTired: boolean = true
    const isLoggedIn: boolean = false

    const highScoreList: number[] = [250, 150, 0]
    const userNameLsit: Array<string> = ["David", "Tommy", "Florencia"]

    // Otydligt och bryter praxis. Undvik "any".
    let anyDataType: any = ""
    anyDataType = 0
    anyDataType = true
}

function returnNothing() {} // void by default
function returnNothingExplicit(): void {} // behöver inte specificeras, men tydligare
function additionExample(): number {
    return 2 + 2
}

// FUNCTION OF OBJECT
// approach --> without interface

function printCurrentUserWithoutInterface (user: {userName: string, password: string}) {
    console.log(user)
}

function printCurrentUser(user: User) {
    console.log(user.userName)
}

function subtractionExample (x: number, y: number): number {

    return x - y
}

// OBJECTS

const userWithoutInterface: {userName: string, password: string} = {
    userName: "",
    password: ""
}


// INTERFACES

const user: User = {

    userName: "",
    password: ""
}


const david: User = {
    userName: "David",
    password: ""
}


// workLab

const benny: Sidekick = {
    firstName: "Urban",
    lastName: "Svensson",
    age: 63,
    power: "none",
    gender: "U",
    birthPlace: "Borlänge",
    costume: "Trousers",
    isAlive: false
}

const harry: Sidekick = {
    firstName: "Harry",
    lastName: "Svensson",
    age: 63,
    power: "none",
    gender: "U",
    birthPlace: "Borlänge",
    costume: "Trousers",
    isAlive: false
}

const superHero: Superhero = {

    firstName: "Sven",
    lastName: "Johansson",
    age: 64,
    power: "Pensioner",
    gender: "U",
    birthPlace: "Orsa",
    costume: "Long Johns",
    isAlive: false,
    sidekickList:[benny, harry]
}


helloWorld()
printCurrentUser(david)
const sum = subtractionExample(50, 25)
console.log(sum)