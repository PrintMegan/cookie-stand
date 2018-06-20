'use strict';

var stores = [];
var container = document.getElementById('store');
var hours = ['6am: ', ' 7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

//STORE LOCATIONS TO BE USED
var collegeAndPence = (new SalmonCookies('College and Pence', 8, 23, 65, 6.3));
// var chandlerAnd14th = ( 'Chandler and 14th', 3, 24, 1.4);
// var fresnoAnd14th = ('Fresno and 14th', , , );
// var minnesotaAndBond = ('Minnesota and Bond', , ,);
// var neNeffAndNEWilliamson = ('NE Neff and NE Willimson', , , );
//name, minCust, maxCust, avgSale

//CONSTRUCTOR FUNCTION FOR COOKIE SHOP
function SalmonCookies(location, hoursopen, min, max, avgSales) {
  this.name = location;
  this.hoursopen = hoursopen;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.cookiesPerHr = cookiesPerHr[];
  this.totalSales = 0;
  this.randomCustPerHour = randomCustPerHour[];
};
//calculating random customer number between min and max
SalmonCookies.prototype.randomCust = function () {
  for (var i in hours) {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};
//placing random number into array for accessability later
SalmonCookies.prototype.customerPerHourArray = function () {
  for (var i in hours) {
    this.custPerHour[i] = (this.randomCustPerHour());
  }
};
//multiplying random customer number by average amout of cookie sales. adding it to array
SalmonCookies.prototype.cookiesXcustomer = function () {
  this.customerPerHourArray();
  this.totalSales = 0;

  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.randomCustPerHour[i] * this.avgSales);

    this.totalSales += this.cookiesPerHr[i];
  }
};
//rendering everything to HTML 
SalmonCookies.prototype.renderCookiesEachHour = function () {
  this.cookiesXcustomer();
  var ulEl = document.createElement('ul');
  for (var i in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  //total cookies PER HOUR
  liEl = document.createElement('li');
  liEl.textContent = this.totalSales + ' cookies total';
  ulEl.appendChild(liEl);
  //ADDING NAME OF STREETS 
  var h1 = document.createElement('H1');
  h1.textContent = this.name;
  container.appendChild(h1);
  container.appendChild(ulEl);

};
SalmonCookies.prototype.renderCookiesEachHour();

//DON'T MIND ALL THIS OLD CODE. DON'T MIND ALL THIS OLD CODE. DON'T MIND ALL THIS OLD CODE. DON'T MIND THIS OLD CODE
//I'm still using it.

// //FIRST LOCATION
// var collegeAndPence = {
//   name: 'College And Pence',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// collegeAndPence.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

// //   };
// };
// // //assigns random cust number output  to cust per hour array
// collegeAndPence.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(collegeAndPence.custPerHour[i]);
//   }
// };
// //customer MULTIPLIED BY AVG cookies
// collegeAndPence.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
//rendering cookies per hour
// collegeAndPence.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();
//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies PER HOUR
//   liEl = document.createElement('li');
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   ulEl.appendChild(liEl);
// //ADDING NAME OF STREETS 
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);

// };
// collegeAndPence.renderCookiesEachHour();

// //SECOND LOCATION
// var chandlerAnd14th = {
//   name: 'Chandler and 14th',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.4,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// chandlerAnd14th.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// chandlerAnd14th.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// chandlerAnd14th.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// chandlerAnd14th.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// chandlerAnd14th.renderCookiesEachHour();

// //THIRD LOCATION
// var minnesotaAndBond = {
//   name: 'Minnesota and Bond',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// minnesotaAndBond.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// minnesotaAndBond.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// minnesotaAndBond.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// minnesotaAndBond.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// minnesotaAndBond.renderCookiesEachHour();

// //FOURTH STORE
// var neNeffAndNEWilliamson = {
//   name: 'NE Neff and NE Williamson',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// neNeffAndNEWilliamson.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// neNeffAndNEWilliamson.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// neNeffAndNEWilliamson.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// neNeffAndNEWilliamson.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// neNeffAndNEWilliamson.renderCookiesEachHour();
