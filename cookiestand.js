'use strict';


var hours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeInput = document.getElementById('storeInput');
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
//locations for constructor
new SalmonCookies('College and Pence', 8, 23, 65, 6.3);
new SalmonCookies('Chandler and 14th', 8, 3, 24, 1.4);
new SalmonCookies('Fresno and 14th', 8, 11, 38, 3.7);
new SalmonCookies('Minnesota and Bond', 8, 30, 28, 2.3);
new SalmonCookies('NE Neff and NE Williamson', 8, 2, 16, 4.6);

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

//Header of AM PM times
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
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
};
function renderAll() {
  storeTable.innerHTML = '';
  createHeader();
  for (var i in storesArray) {
    storesArray[i].render();
  }
  footer();
}
//COLUMN FOR TOTALS
function footer() {
  var grandTotal = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i in hours) {
    var totalSoldPerHour = 0;
    thEl = document.createElement('th');
    for (var j in storesArray) {
      totalSoldPerHour += storesArray[j].cookiesPerHr[i];
    }
    thEl.textContent = totalSoldPerHour;
    trEl.appendChild(thEl);
    grandTotal += totalSoldPerHour;
  }
  thEl = document.createElement('th');
  thEl.textContent = grandTotal;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
renderAll();

// //event handler adding NEW cookiestore through form
function handleFormSubmit(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var hoursopen = event.target.hoursOpen.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSales = parseFloat(event.target.avgSales.value);

  if (!location || !hoursopen || !min || !max || !avgSales)
    return alert('Please fill out form completely');
  event.target.location.value = null;
  event.target.hoursOpen.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avgSales.value = null;
  new SalmonCookies(location, hoursopen, min, max, avgSales);
  {
    renderAll();
  }
};
storeInput.addEventListener('submit', handleFormSubmit);

