/*  program that shows the day of the week the user wants to choose */

let weekDay = parseInt(
  prompt(`enter value
0. sunday
1. monday
2. tuesday
3. webnesday
4. thursday
5. friday
6. saturday
`)
);

switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 0:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong input");
}

/* We can’t have several options in the same case statement, 
but we can set the same code to execute for different case. */

/* 

const name = prompt('Favorite Game of Thrones main character:');

let house = '';

switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;

  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
}

 

console.log(`Your favorite character is from the house ${house}.`);

*/
