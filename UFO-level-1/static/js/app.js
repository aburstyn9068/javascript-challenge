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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Get the UFO sightings for the date equal to the input
    var filteredData = tableData;
    if (inputValue != "") {
        filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
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
