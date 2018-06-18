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

var collegeAndPence = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomCust: Math.floor(Math.random() * minCust + maxCust),
};

var chandlerAnd14th = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  randomCust: Math.floor(Math.random() * minCust + maxCust),
};

var fresnoAnd14th = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  randomCust: Math.floor(Math.random() * minCust + maxCust ),
};



var minnesotaAndBond= {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
 randomCust: Math.floor(Math.random() * minCust + maxCust),
};
var neNeffAndNEWilliamson ={
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  randomCust: Math.floor(Math.random() * minCust + maxCust),
};

// cookie.render function(){
//   var randomCust = document.getElementById('storeone');

//   for(var i in this.randomCust){

//   }
// }
// console.log(cookie.render);