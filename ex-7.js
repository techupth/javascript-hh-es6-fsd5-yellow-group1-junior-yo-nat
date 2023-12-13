const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english;

let result;

function checkScores(scores) {
  return (result = scores ?? "English score is not defined");
}

console.log(result1); // Output: undefined
console.log(checkScores(result2)); // Output: English score is not defined
