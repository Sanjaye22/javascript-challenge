// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
console.log(data);

// //Step 1: Loop through data and console.log each sighting object
// data.forEach(function(ufoSight){
//     console.log(ufoSight);
// });

//Step 2: Use d3 to append one table row "tr" for each ufo sighting
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
//     var row = tbody.append("tr");
// });

// //Step 3: Use "Object.entries to console.log each ufo sighting"
// data.forEach(function(ufosight) {
//     console.log(ufosight);
//     var row = tbody.append("tr");

//     Object.entries(ufosight).forEach(function([key,value]) {
//         console.log(key, value);
//     });
// });

// //Step 4: Use d3 to append 1 cell per ufo sighting value
// data.forEach(function(ufoSight) {
//     console.log(ufoSight);
//         var row = tbody.append("tr");
    
//     Object.entries(ufoSight).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//     });
// });

// // Step 5: Use d3 to update each cell's text with ufo sighting
data.forEach(function(ufoSight) {
  console.log(ufoSight);
  var row = tbody.append("tr");
  Object.entries(ufoSight).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});