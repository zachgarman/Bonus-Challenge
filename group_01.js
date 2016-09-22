
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

//For loop cycles through each employee's array inside the
//provided array 'employees'
var companyArray =[];
for (var i = 0; i < employees.length; i++) {
  companyArray.push(bonus(employees[i]));
}


//this function returns a new array for each individual employee with
//['name', 'bonus percentage', 'total salary', and 'total bonus']

function bonus (ind) {
  var newArray = [];
//First index of array is the employee's name.
  newArray.push(ind[0]);
//Second index is the percentage of their bonus as a string
  newArray.push((bonusCalc(ind) * 100) + '%');

  var salary = parseInt(ind[2]);
  var totalComp = salary + salary * bonusCalc(ind);
//Third index is the employee's total compensation as a number.
  newArray.push(totalComp);
  var totalBonus = totalComp - salary;
  totalBonus = Math.round(totalBonus);
//Fourth index is the total bonus amount for the employee.
  newArray.push(totalBonus);
  console.log(newArray);
  return newArray;
}

//Calculates the bonus as a decimal and returns it.
function bonusCalc (ind) {
  var rating = ind[3];
  var bonusPer = 0;
  var salary = parseInt(ind[2]);

//Switch calculates bonus based on their rating.
  switch (rating) {
    case 5:
      bonusPer = 0.10;
      break;
    case 4:
      bonusPer = 0.06;
      break;
    case 3:
      bonusPer = 0.04;
      break;
    default:
      bonusPer = 0;
      break;
  }
//If employee ID is 4 numbers or less, they have worked at
//the company for at least 15 years.  They get a 5% bonus.
  if (ind[1].length <= 4) {
    bonusPer += 0.05;
  }
//If the employee already makes more than $65,000, they get
//shafted by 1% of their bonus.
  if (salary > 65000) {
    bonusPer -= 0.01;
  }
//No employee can receive a bonus of more than 13%.
  if (bonusPer > 0.13) {
    bonusPer = 0.13;
  }

  return bonusPer;
}
