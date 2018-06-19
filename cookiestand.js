'use strict';

//NAME OF LOCATIONS
//1st and Pike
//SeaTac Airport
//Seattle Center
//Capitol Hill
//Alki

//MIN CUSTOMERS
//23
// 3
// 11
// 20
// 2

//MAX CUSTOMERS
//65
//24
//38
//38
//16

//AVG COOKIE SALE
//6.3
//1.2
//3.7
//2.3
//4.6


//names of stores
// collegeAndPence, ChandlerAnd14th, fresnoAnd14th, minnesotaAndBond, neNeffAndNEWWilliamson
// var times; ['6am',' 7am', '8am', '9am', '10am', '11am'];
var store = [];
var locations = [];
var storeListUlLi = document.getElementById('stores');
var cookiesPerHrListUlLi = document.getElementById('cookies');
var hours;
hours: ['6am', ' 7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//FIRST LOCATION
var collegeAndPence = {
  name: 'College And Pence',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesPerHr: [],
  
  //random customer generator
  randomCust: function () {
    //TODO: fix math dummy
    return Math.floor(Math.random() * this.minCust + this.maxCust);
    console.log(this.randomCust);
  },
  //multiplying avg sale num and random customer number for average cookies per customer
  cookies: function () {
    return (this.avgSale * this.randomCust());
    //for loop to go through hour array
    for (hours = 0; hours < 15; hours++) {
      collegeAndPence.cookiesPerHr.push(collegeAndPence.cookies());
      
      //I'm not sure what I'm doing here, but I'm trying to get it to show up on html. Doing a crap job though
      var elName = document.getElementById('one');
      elName.textContent = collegeAndPence.name;
      console.log('hi im here');
      var elCookies = document.getElementById('cookies');
      elCookies.textContent = collegeAndPence.cookiesPerHr();
      
    }
  }
};

locations.push(collegeAndPence.name),
// locations.push(chandl'),
// locations.push('Fresno and 14th'),
// locations.push('Minnesota and Bond'),
// locations.push('NE Neff and NE Williamson');
console.log(locations);


console.log(collegeAndPence.cookies());
console.log(collegeAndPence.randomCust());





//Bare bones code. working on first location before adding the rest.
// };
// console.log(collegeAndPence);
// var chandlerAnd14th = {
//   name: 'chandlerAnd14th',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
//   // speak function (){
//   //   document.write(this.randomCust);
//   // },
// };

// var fresnoAnd14th = {
//   name: 'fresnoAnd14th',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
//   // speak function (){
//   //   document.write(this.randomCust);
//   // },
// };



// var minnesotaAndBond = {
//   name: 'minnesotaAndBond',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
//   // console.log(randomCust),
//   // speak function (){
//   //   document.write(this.randomCust);
//   // },
// };
// var neNeffAndNEWilliamson = {
//   name: 'neNeffAndNEWilliamson',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
// };

