// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
console.log(data);

// Use d3 to update each cell's text with ufo sighting
data.forEach(function (ufoSight) {
  console.log(ufoSight);
  var row = tbody.append("tr");
  Object.entries(ufoSight).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

var submitButton = d3.select("#filter-btn").on("click", getdata);

//Complete the event handler function for the form
function getdata() {
  d3.select("tbody").html("");
  d3.event.preventDefault();

  var dateTime = d3.select("#datetime").property("value");
  var selectCity = d3.select("#city").property("value");
  var selectState = d3.select("#state").property("value");
  var selectCountry = d3.select("#country").property("value");
  var selectShape = d3.select("#shape").property("value");

  // initialize tableData as filteredData
  filteredData = tableData;

  if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);}

  if (selectCity) {
    filteredData = filteredData.filter(record => record.city === selectCity);}

  if (selectState) {
    filteredData = filteredData.filter(record => record.state === selectState);}

  if (selectCountry) {
    filteredData = filteredData.filter(record => record.country === selectCountry);}

  if (selectShape) {
    filteredData = filteredData.filter(record => record.shape === selectShape);}


  // Display the filtered dataset
  filteredData.forEach((ufoSightings) => {
    console.log(ufoSightings);

    var row = tbody.append('tr');

    Object.entries(ufoSightings).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
  });
}


