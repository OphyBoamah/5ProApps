'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const loginForm = document.querySelector('.login')
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const user = 'Steven Thomas Williams';
const createUsernames = function (acs) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('')
  })
}
createUsernames(accounts);
console.log(accounts)
// const eurToUsd = 1.1;

// // let mov = 1300;
// const movementUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements);
// console.log(movementUSD);

// const movementDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });
// console.log(movementDescriptions);
// Current balance
// const countdown = () => {
//   // Update the count down every 1 second
// var x = setInterval(function() {

//   // Time calculations for days, hours, minutes and seconds
//   // var minutes = Math.floor((1000 * 60 * 60) / (1000 * 60));
//   // var seconds = 00
    
//     var d = new Date(); //get current time
//     var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
//     var fiveMin = 60 * 1; //five minutes is 300 seconds!
//     var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
//     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    

//     // Output the result in an element with id="demo"
//   // labelTimer.textContent = `${minutes} : ${seconds}`;
//   labelTimer.textContent = result;

//   // If the count down is over, write some text 
//   if (result <= 0) {
//     clearInterval(x);
//     alert("Logged Out");
//     containerApp.style.opacity = 1;
//   }
// }, 1000)
// }

// const currentDate = () => {
//   var todaysDate = new Date(); 
//   // For todays date;
//   Date.prototype.today = function () { 
//     return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
//   }
//   // For the time now
//   Date.prototype.timeNow = function () {
//       return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
//   }
//   const datetime =  new Date().today() + " , " + new Date().timeNow();
//   labelDate.textContent = datetime;
// }

// // Authentication
// const authentication = () => {
//   // Check if account is in the db
//    if (inputLoginUsername.value === "js" && inputLoginPin.value === "1111") {
//      containerApp.style.opacity = 1;
//      loginForm.reset();
//      currentDate();
//      countdown();
//   // Greet user
//     labelWelcome.textContent = "Good Afternoon, Ophy!"
//      console.log("Its here")
//  } else {
//    alert("Login is incorrect! Try again.")
//  }
//   // Redirect to main page
// }
// // - If wrong, alert Error
// // - If correct, welcome user and display dashboard info
//   // btnLogin.addEventListener('click', authentication);
//   // btnLogin.addEventListener('mouseenter', authentication);
//   btnLogin.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter' && input.value) {
//       console.log(e.key)
//       // authentication()
//     }
//   });

// ['click', 'mouseenter'].forEach( evt =>
//   btnLogin.addEventListener(evt, authentication)
// )