console.log("This is ES6+ Assignment questions.")


/*
Try converting these codes to ES6 syntax-
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);

//////////////////

let aloo=1;
if(aloo==1){
    let a=2;
    console.log(a);
}
console.log(aloo)
*/

/*

var multiply = function(x, y) {
  return x * y;
};

////////////////////

let multiply=(x,y)=> x*y;

*/


/*

var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

////////////////////////////////////////////////////////////////////////

let customer = {
    name: "Bhaalo"
  };
  let card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50

  };

  let message= `Hello  ${customer.name} wants to buy ${card.amount} ${card.product} for price of  ${card.unitprice}  per piece`;
  console.log(message);

*/
/*

var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
console.log(CEO);
console.log(Mentor)

////////////////////////////


var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
const[CEO,, Mentor]=Neog;
console.log(CEO)
console.log(Mentor)
*/

/*

var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);

/////////////////////////////////

var arr = ["MA", "TA", "PA", "CA"];

const[firstname,lastname]=arr;
console.log(firstname);
console.log(lastname);

*/

/*
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};

/////////////////////////


const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj={Aaloo, Bhaloo}
console.log('hi',Obj.Aaloo + Obj.Bhaloo)

*/

/*


var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

//////////////////////////////////////


const a = 5;
const b = 10;
console.log(`Fifteen is ${a+b} and n0t ${2*a+b}`);



*/

/*

var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};

/////////////////////////////////////////////////////////////

var arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: function multiply(num1, num2) {
      return num1 * num2;
    }
  };
//   sum(2,2)
//   multiply(5,5)


// note do not use arrow function inside of an object.
*/

 /*


var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;

///////////////////////////////////////////////////

const avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
const operation = avengers.operation,
  members = avengers.members;

 */


  //2. Convert ES6 toES5.

  /*

const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)


////////////

function packIt(a,b,c,d,d){
    console.log(a,b,c,d,d)
   
} packIt(1,2,3,5,5)

  */

/*

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome) ///Namaste welcome ///desturcurting and default value.


const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)
*/




    // const packIt = (...args) => console.log(args)

    // packIt(1,2,3,5,5)


    // function packIT(...args){
    //     console.log(args)

    // }

    // packIT(1,2,3,4,4,5)