const createPerson = (fullName, mass, height) => {
  return {
    fullName,
    mass,
    height,
    calcBMI() {
      const aux = this.mass / (this.height * this.height);
      this.bmi = aux;
      return aux;
    },
  };
};

const mark = createPerson("Mark Miller", 78, 1.69);
mark.calcBMI();
const john = createPerson("John Smith", 92, 1.95);
john.calcBMI();

const logMessage = (winner, loser) => {
  const outputMessage = `${winner.fullName}'s BMI (${winner.bmi}) is higher than ${loser.fullName}'s (${loser.bmi})!`;
  console.log(outputMessage);
};

if (mark.bmi > john.bmi) {
  logMessage(mark, john);
} else if (mark.bmi < john.bmi) {
  logMessage(john, mark);
}
