export interface Superhero {

    firstName: string,
    lastName: string,
    age: number,
    power: string,
    gender: string,
    birthPlace: string,
    costume: string,
    isAlive: boolean
    sidekickList: Sidekick []
}

export interface Sidekick {

    firstName: string,
    lastName: string,
    age: number,
    power: string,
    gender: string,
    birthPlace: string,
    costume: string,
    isAlive: boolean
}