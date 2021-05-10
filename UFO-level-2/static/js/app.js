// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    // Get the UFO sightings for the entered information
    var filteredData = tableData;
    if (dateValue != "") {
        filteredData = tableData.filter(sighting => sighting.datetime === dateValue);
    }
    if (cityValue != "") {
        filteredData = filteredData.filter(sighting => sighting.city === cityValue);
    }
    if (stateValue != "") {
        filteredData = filteredData.filter(sighting => sighting.state === stateValue);
    }
    if (countryValue != "") {
        filteredData = filteredData.filter(sighting => sighting.country === countryValue);
    }
    if (shapeValue != "") {
        filteredData = filteredData.filter(sighting => sighting.shape === shapeValue);
    }
    console.log(filteredData);
    writeTable(filteredData);    
};

function writeTable(inputData) {
    // Select table body element from html
    var tbody = d3.select("tbody");
    // Clear old table body data
    d3.select("tbody").selectAll("tr").remove(); 
    // Iterate over all entries in the data and append html table   
    inputData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Display all UFO sighting info
writeTable(tableData);
