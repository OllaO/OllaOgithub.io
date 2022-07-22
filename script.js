var factList = [
  "1 in 4 children in America grow up without learning how to read.",
  "Around 75% of people currently in prison have low literacy skills.",
  "53% of 4th graders admitted to reading recreationally “almost every day,” while only 20% of 8th graders could say the same",
  "2/3 of students who cannot read proficiently by the end of 4th grade will end up in jail or on welfare. Over 70% of America’s inmates cannot read above a 4th grade level",
  "44% of American adults do not read a BOOK in a year."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

 myButton.addEventListener("click", displayFact);

function displayFact () {
  fact.innerHTML = factList[count];
  count++;

  if (count == factList.length) {
    count = 0;
  }
}
