'use strict';

var hours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var container = document.getElementById('store');

//STORE LOCATIONS TO BE USED

var storeTable = document.getElementById('store');
var storesArray = [];

//CONSTRUCTOR FUNCTION FOR COOKIE SHOP
function SalmonCookies(location, hoursopen, min, max, avgSales) {
  this.location = location;
  this.hoursopen = hoursopen;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.randomCustPerHour = [];
  this.cookiesPerHr = [];
  this.totalSales = 0;
  storesArray.push(this);
};

new SalmonCookies('College and Pence', 8, 23, 65, 6.3);
new SalmonCookies('Chandler and 14th', 8, 3, 24, 1.4);
new SalmonCookies('Fresno and 14th', 8, 11, 38, 3.7);
new SalmonCookies('Minnesota and Bond', 8, 30, 28, 2.3);
new SalmonCookies('NE Neff and NE Williamson', 8, 2, 16, 4.6);

// var Form = function (locations, hoursopen, min, max, avgSale){
//   this.locations = locations
//   this.hoursopened =hoursopened
//   this.minC = minC
//   this.maxC =maxC
//   this.avgSale
// }

//random number generator for customers
SalmonCookies.prototype.customGenerator = function () {
  for (var i in hours) {
    var customGenerator = Math.floor(Math.random() * (this.max - this.min) + this.min);
    this.randomCustPerHour[i] = customGenerator;
  }
};//average cookies bought per store * the random number generated
SalmonCookies.prototype.cookiesXcustomer = function () {
  this.customGenerator();
  this.totalSales = 0;
  for (var i in hours) {
    this.cookiesPerHr[i] = Math.ceil(this.randomCustPerHour[i] * this.avgSales);
    this.totalSales += this.cookiesPerHr[i];
  }
};//render table on HTML
SalmonCookies.prototype.render = function () {
  this.cookiesXcustomer();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for (var i in this.cookiesPerHr) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHr[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

//Header of times
var createHeader = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  trEl.appendChild(thEl);

  for (var i in hours) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  storeTable.appendChild(trEl);
};
createHeader();

for (var i in storesArray) {
  storesArray[i].render();
};
//bottom cell that needs to be filled when I figure out the loop
var createFooter = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  for (var i in hours) {
    tdEl = document.createElement('td');
    tdEl.textContent = 'hello';
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
};
createFooter();
//yes tim I know it's not actually a footer. But it helps me remember that it's at the bottom. 

/////////////////////////////////////////////////////////////////////////////
//these will be to add the new information from the form I created. Is this enough comments yet? 
//event listener




//event handler
function handleFormSubmit(event){
  event.preventDefault();

  var location = event.target.location.value;
  var hoursOpen = event.target.hoursOpen.value;
  // var min = event.target.min.value;
   var newSubmit = new Store(location, hoursOpen);
  //  newSubmit.push.this;
newSubmit.push(this);
};