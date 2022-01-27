// Wedding invites functions/loops/conditionals example:

// Lets imagine we have some wedding invites that need to go out. We have a list of guests that includes their name and address.
// For the purposes of this example imagine that console logging the name and address is equivalent to sending an invite.

////////////////////////////////////////////
// let attendee = [
//     {
//         name: "John",
//         address: "123 Main Street"
//     },
//     {     ////// the "variable has a :"
//         name: "Amanda",
//         address: "345 Something Ave"
//     }
// ]
//////////////////////////////////////////////

//below we have objects inside of an array with multiple diffrerent objects that have different information.


//const faves = ["music", "food", "sleep"] <-- also an array

const attendees = [ // <-- this is an array
    {
        name: "John Doe",
        address: "123 Main St",
        meal: "Chicken",
        relation: "Groom"

    },
    {
        name: "Jessica Sterling",
        address: "1245 Broad St",
        meal: "Chicken",
        relation: "Groom"
    },
    {
        name: "Jakobi Smith",
        address: "578 South Main St",
        meal: "Steak",
        relation: "Bride"
    },
    {
        name: "Ashley Mayer",
        address: "900 Pinnnical Cross Dr",
        meal: "Veg",
        relation: "Bride"
    },
    {
        name: "Jay Donaldson",
        address: "455 Academy St",
        meal: "Steak",
        relation: "Groom"
    },
    {
        name: "Harold Buttons",
        address: "858 Pluarl Ave",
        meal: "Veg",
        relation: "Groom"
    },
    {
        name: "Jon Murphy",
        address: "1738 North Plains Rd",
        meal: "Chicken",
        relation: "Bride"
    }
];

/// we are console.log the info, ${attendeees} is the name of the array, the [0] is the information in the array as arrays start at 0 then count by one. 
// console.log(`${attendees[0].name}, address: ${attemdees[0].address}`)
// console.log(`${attendees[1].name}, address: ${attemdees[1].address}`)
// console.log(`${attendees[2].name}, address: ${attemdees[2].address}`)
// console.log(`${attendees[3].name}, address: ${attemdees[3].address}`)

//Old function same as an arrow function
// function sendInvite () {

// }

//Arrow function // arr is in the "placeholder"
const sendInvite = (arr) => {
    console.log(`${arr[0].name}, address: ${arr[0].address}`)
}

//call the function "sendInvite"
// sendInvite(attendees[0]);
// sendInvite(attendees[1]);
// sendInvite(attendees[2]);

// console.log(attendees.length)

// const sendInvite = (arr) => {
//     console.log(`${arr[0].name}, address: ${arr[0].address}`)
// };



console.log(`${attendees.name[0].name} is going to eat ${attendees[0].meal}. Their relation is to the ${attendees[0].relation}`);



const checkMeal = (arr) => {
    console.log(`${arr.name} is going to eat ${arr.meal}. Their relation is to the ${arr.relation}`);
}


const guestLoop = () => {
    for (let i = 0; i < arr.length; i++) {
        op(arr[i])
}

guestLoop(checkMeal, attendees);
guestLoop(sendInvite, attendees);


//// below it is taking a filter onto the array name attendees, then it is taking guest relations and comparing it to the bride.
let brideTable = attendees.filter(guest => {
    if(guest.relation === "Bride"){
        true
    }
}).map(guest =>) {
    return {
        name: guest.name,
        meal: guest.meal,
    }
}


// let size9 = shoes.filter(size =>{
//     if(size === `9.5`) {
//         return true
//     }
// })





//.length goes through the entire array in this case its in the attendees array since thats where it is being called "attendees.length"
for(let i = o; i < attendees.length; i++){
    sendInvite(attendees[i]);
};