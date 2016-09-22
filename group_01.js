
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


var companyArray =[];
for (var i = 0; i < employees.length; i++) {
  companyArray.push(bonus(employees[i]));
}


//this function returns a new array for each individual employee with
//['name', 'bonus percentage', 'total salary', and 'total bonus']

function bonus (ind) {
  var newArray = [];
  newArray.push(ind[0]);                              //ind name
  newArray.push((bonusCalc(ind) * 100) + '%');         //bonus percentage

  var salary = parseInt(ind[2]);
  var totalComp = salary + salary * bonusCalc(ind);

  newArray.push(totalComp);                           //total compensation
  var totalBonus = totalComp - salary;
  totalBonus = Math.round(totalBonus);
  newArray.push(totalBonus);                          //total Bonus amount
  console.log(newArray);
  return newArray;
}

//calculates the bonus as a decimal and returns it.
function bonusCalc (ind) {
  var rating = ind[3];
  var bonusPer = 0;
  var salary = parseInt(ind[2]);

  switch (rating) {
    case 5:
      bonusPer = .10;
      break;
    case 4:
      bonusPer = .06;
      break;
    case 3:
      bonusPer = .04;
      break;
    default:
      bonusPer = 0;
      break;
  }

  if (ind[1].length <= 4) {
    bonusPer += 0.05;
  }

  if (salary > 65000) {
    bonusPer -= 0.01;
  }

  if (bonusPer > 0.13) {
    bonusPer = 0.13;
  }

  return bonusPer;
}
