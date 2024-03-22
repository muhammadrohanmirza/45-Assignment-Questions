"use strict";
// Q16)More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
//Answer:
let guest = ["Rohan", "Farhan", "Rehan"];
console.log("Great news! I found a bigger dinner table!");
// adding more guest
guest.unshift("Nafay");
guest.splice(guest.length / 0, 0, "Noman");
guest.push("Ahad");
guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
