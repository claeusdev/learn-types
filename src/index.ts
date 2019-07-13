export interface HasPhoneNumber {
  name: string;
  phone: number;
}
export interface HasEmail {
  name: string;
  email: string;
}

// Intersection types
let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? { name: "Nana", phone: 209384092384 }
    : { name: "Nana", email: "nana@example.com" };

// union types

let otherContactInfo: HasEmail & HasPhoneNumber = {
    name: "Nana",
    email: "nana@yahoo.com",
    phone: 34908509489
}