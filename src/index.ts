// object types can be Expressed using {} and property names
let a: {houseNumber: number; streetName: string}
a = {
    streetName: "Fale Street",
    houseNumber: 909
}
// a = {
//     streetName: "you dey play"
// } wont work because both passed are required
// Can use optional operator (?) to denote optionality
let b: {houseNumber: number; streetName?: string}

// Interfaces to reuse object types
interface Address {
    houseNumber: number,
    streetName?: string
}

let c: Address = { houseNumber: 39}
