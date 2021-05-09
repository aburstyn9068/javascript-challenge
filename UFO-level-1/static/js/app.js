// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select table body element from html
var tbody = d3.select("tbody");

// Iterate over all entries in the data and append html table
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});