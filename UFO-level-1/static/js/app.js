// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
console.log(data);

// Use d3 to update each cell's text with ufo sighting
data.forEach(function (ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

// //Code that will listen for events and search through the `date/time` column to find rows that match user input
// displayData(tableData)

//Select the button
var submitButton = d3.select("#filter-btn");

//Create event handlers
submitButton.on("click", getInfo);

//Complete the event handler function for the form
function getInfo() {
  d3.select("tbody").html("");
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime").property("value");
  console.log(inputElement);
  //Filter
  var filteredData = tableData.filter(record => record.datetime === inputElement);
  console.log(filteredData);

  // Display the filtered dataset
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append('tr');

    Object.entries(ufoSighting).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
  });
}




