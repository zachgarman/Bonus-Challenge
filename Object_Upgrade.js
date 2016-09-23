
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

//constructor function to convert employee arrays to employee objects
function Person(employee) {
  this.name = employee[0];
  this.employeeID = employee[1];
  this.salary = employee[2];
  this.rating = employee[3];
}
//change each employee array to an object
atticus = new Person (atticus);
jem = new Person (jem);
boo = new Person (boo);
scout = new Person (scout);

var employees = [atticus, jem, boo, scout];

//this function updates the original object for each employee with
//new properties for bonusPercentage, totalComp, and totalBonus

function updatePerson (obj) {

//Object already has the employee name, no addition needed.
//Percentage of the employee bonus as a string added to object
  obj.bonusPercentage = (bonusCalc(obj) * 100) + '%';

  var salary = parseInt(obj.salary);
  var totalComp = salary + salary * bonusCalc(obj);
//Employee's total compensation is added as a number.
  obj.totalComp = totalComp;

  var totalBonus = totalComp - salary;
  totalBonus = Math.round(totalBonus);
//Total bonus amount for the employee calculated
  obj.totalBonus = totalBonus;
}

//Calculates the bonus as a decimal and returns it.
function bonusCalc (ind) {
  var rating = ind.rating;
  var bonusPer = 0;
  var salary = parseInt(ind.salary);
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
  var empID = ind.employeeID;
  if (empID.length <= 4) {
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

//function to convert a string of numbers to currency, just because
function toCurrency(str) {
  if (typeof(str) === 'number') {
    str = str.toString();
  }

  var cents = str.indexOf(".");
  var afterDecimal = (str.length - cents - 1);

  if (cents < 0) {
    str = str + '.00';
  } else if (afterDecimal === 0) {
    str = str + '00';
  } else if (afterDecimal === 1) {
    str = str + '0';
  } else if (afterDecimal > 2) {
    var cut = cents + 3;
    str = str.substring(0, cut);
  }

  var array = str.split('')
  array = array.reverse();
  var newArray = [];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    counter++;
    if (array[i] === '.') {
      counter = 0;
    }
    if (counter > 0 && counter % 3 === 0 && i != array.length - 1) {
      newArray.push(',');
    }
  }
  str = newArray.reverse().join('');

  return '$' + str;
}

//function to only display the necessary info.


function displayNeeded () {
  for (var i = 0; i < employees.length; i++) {
    var person = employees[i];
    var percent = person.bonusPercentage;
    var comp = toCurrency(person.totalComp);
    var bonus = toCurrency(person.totalBonus);
    console.log('Name: ' + person.name + '\n'
                + 'Bonus Percentage: ' + person.bonusPercentage + '\n'
                + 'Total Compensation: ' + comp + '\n'
                + 'Total Bonus: ' + bonus);
  }
}
//For loop cycles through each employee object inside the
//provided array 'employees' and updates all objects
for (var i = 0; i < employees.length; i++) {
  updatePerson(employees[i]);

}
console.log(employees)

displayNeeded();
