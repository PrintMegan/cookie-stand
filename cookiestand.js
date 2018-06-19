'use strict';

//names of stores
// collegeAndPence, ChandlerAnd14th, fresnoAnd14th, minnesotaAndBond, neNeffAndNEWWilliamson

var container = document.getElementById('store');


var hours = ['6am: ', ' 7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

//FIRST LOCATION
var collegeAndPence = {
  name: 'College And Pence',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesPerHr: [],
  custPerHour: [],
  totalCookiesInADay: 0,
};
// generates random customer number
collegeAndPence.randomCust = function () {
  //TODO: fix math dummy
  for (var i in hours) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

  };
};


// //assigns random cust number output  to cust per hour array
collegeAndPence.customerPerHourArray = function () {
  for (var i in hours) {
    this.custPerHour[i] = (this.randomCust());
    console.log(collegeAndPence.custPerHour[i]);
  }
};
//customer times cookies
collegeAndPence.cookiesXcustomer = function () {
  this.customerPerHourArray();
  this.totalCookiesInADay = 0;

  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

    this.totalCookiesInADay += this.cookiesPerHr[i];
  }
};
//rendering cookies per hour
collegeAndPence.renderCookiesEachHour = function () {
  this.cookiesXcustomer();

  var ulEl = document.createElement('ul');
  for (var i in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  //total cookies and street names added
  liEl.textContent = this.totalCookiesInADay + ' cookies total';
  var h1 = document.createElement('H1');
  h1.textContent = this.name;
  container.appendChild(h1);
  container.appendChild(ulEl);
};
collegeAndPence.renderCookiesEachHour();

//SECOND LOCATION
var chandlerAnd14th = {
  name: 'Chandler and 14th',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.4,
  cookiesPerHr: [],
  custPerHour: [],
  totalCookiesInADay: 0,
};
// generates random customer number
chandlerAnd14th.randomCust = function () {
  //TODO: fix math dummy
  for (var i in hours) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

  };
};


// //assigns random cust number output  to cust per hour array
chandlerAnd14th.customerPerHourArray = function () {
  for (var i in hours) {
    this.custPerHour[i] = (this.randomCust());
    console.log(chandlerAnd14th.custPerHour[i]);
  }
};
//customer times cookies
chandlerAnd14th.cookiesXcustomer = function () {
  this.customerPerHourArray();
  this.totalCookiesInADay = 0;

  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

    this.totalCookiesInADay += this.cookiesPerHr[i];
  }
};
//rendering cookies per hour
chandlerAnd14th.renderCookiesEachHour = function () {
  this.cookiesXcustomer();

  var ulEl = document.createElement('ul');
  for (var i in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  //total cookies and street names added
  liEl.textContent = this.totalCookiesInADay + ' cookies total';
  var h1 = document.createElement('H1');
  h1.textContent = this.name;
  container.appendChild(h1);
  container.appendChild(ulEl);
};
chandlerAnd14th.renderCookiesEachHour();

//THIRD LOCATION
var minnesotaAndBond = {
  name: 'Minnesota and Bond',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  cookiesPerHr: [],
  custPerHour: [],
  totalCookiesInADay: 0,
};
// generates random customer number
minnesotaAndBond.randomCust = function () {
  //TODO: fix math dummy
  for (var i in hours) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

  };
};


// //assigns random cust number output  to cust per hour array
minnesotaAndBond.customerPerHourArray = function () {
  for (var i in hours) {
    this.custPerHour[i] = (this.randomCust());
    console.log(chandlerAnd14th.custPerHour[i]);
  }
};
//customer times cookies
minnesotaAndBond.cookiesXcustomer = function () {
  this.customerPerHourArray();
  this.totalCookiesInADay = 0;

  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

    this.totalCookiesInADay += this.cookiesPerHr[i];
  }
};
//rendering cookies per hour
minnesotaAndBond.renderCookiesEachHour = function () {
  this.cookiesXcustomer();

  var ulEl = document.createElement('ul');
  for (var i in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  //total cookies and street names added
  liEl.textContent = this.totalCookiesInADay + ' cookies total';
  var h1 = document.createElement('H1');
  h1.textContent = this.name;
  container.appendChild(h1);
  container.appendChild(ulEl);
};
minnesotaAndBond.renderCookiesEachHour();

//FOURTH STORE
var neNeffAndNEWilliamson = {
  name: 'NE Neff and NE Williamson',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  cookiesPerHr: [],
  custPerHour: [],
  totalCookiesInADay: 0,
};
// generates random customer number
neNeffAndNEWilliamson.randomCust = function () {
  //TODO: fix math dummy
  for (var i in hours) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

  };
};


// //assigns random cust number output  to cust per hour array
neNeffAndNEWilliamson.customerPerHourArray = function () {
  for (var i in hours) {
    this.custPerHour[i] = (this.randomCust());
    console.log(chandlerAnd14th.custPerHour[i]);
  }
};
//customer times cookies
neNeffAndNEWilliamson.cookiesXcustomer = function () {
  this.customerPerHourArray();
  this.totalCookiesInADay = 0;

  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

    this.totalCookiesInADay += this.cookiesPerHr[i];
  }
};
//rendering cookies per hour
neNeffAndNEWilliamson.renderCookiesEachHour = function () {
  this.cookiesXcustomer();

  var ulEl = document.createElement('ul');
  for (var i in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
    ulEl.appendChild(liEl);
  }
  //total cookies and street names added
  liEl.textContent = this.totalCookiesInADay + ' cookies total';
  var h1 = document.createElement('H1');
  h1.textContent = this.name;
  container.appendChild(h1);
  container.appendChild(ulEl);
};
neNeffAndNEWilliamson.renderCookiesEachHour();
