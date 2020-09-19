/* Program that reads input by user of military time and calculates what part of the day is. */

let time = parseInt(prompt("enter military time, 0 to 24."));

if (time >= 0 && time <= 6) {
    console.log("I think you need to rest more mr or mrs");
}
else if (time >= 6 && time <= 12) {
  console.log("Good morning mr or mrs");
}
else if (time >= 12 && time <= 18) {
  console.log("Good afternoon mr or mrs");
}
else if (time >= 18 && time <= 24) {
  console.log("Good evening mr or mrs");
}
else {
  console.log("wrong time zone please enter value between 0 and 24 we using military time.");
}