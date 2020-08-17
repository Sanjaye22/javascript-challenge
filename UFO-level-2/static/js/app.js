// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
console.log(data);

// Use d3 to update each cell's text with ufo sighting
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