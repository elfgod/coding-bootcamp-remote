/*        */

let age, minAge, mid, maxAge;
minAge = 18, midAge = 21, maxAge = 30;

age = parseInt(prompt(`Enter your age`));

if (age >= minAge) {
    if (age <= maxAge) {
        if (age <= midAge) {
            console.log("you have 10% discount");
        }
        else {
            console.log("you have 20% discount")
        }    
    }
    else {
    console.log("you have no discount sorry");
    }
}
else {
    console.log("wrong input");
     }