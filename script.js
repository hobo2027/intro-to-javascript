// get button
const lukeBtn = document.getElementById("lukeButton");
const chanceBtn = document.getElementById('chanceButton')

// comment single line
/*   

anything in here 
*/
// console.log('hey luke!')

console.log(3 + 3);
console.log("Luke");
console.log("Luke" + " " + "Parsons");
console.log(3 - 1);
console.log(3 * 1);
console.log(3 / 1);
// console.log("Luke is " + 14 + " years old.");

const luke = {
  firstName: "Luke",
  lastName: "Parsons",
  age: 14,
  interests: ["Basketball", "Collect classic video games"]
};
const chance = {
  firstName: "Chance",
  lastName: "Smith",
  age: 35,
  interests: ["Mtn Bike", "Code", 'Legos']
};

function tellMeAboutPerson(person) {
  alert(
    person.firstName + " is " + person.age + " years old and likes: " + person.interests.join(",")
  );
}

// send message on click
lukeBtn.addEventListener("click", () => tellMeAboutPerson(luke));
chanceBtn.addEventListener('click', () => tellMeAboutPerson(chance));
