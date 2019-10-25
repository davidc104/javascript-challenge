// From data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Show the UFO records in the table with id="ufo-table"
function loadTable(dataRows) {
    // Loop through the records to show each vaule in order
    dataRows.forEach(function (ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

// Inititalize the webpage
loadTable(tableData);

// The Submit Date button is clicked
var submit = d3.select("#filter-btn");

submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clean up the table content
    tbody.html("");

    // user input as variable
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    // Filter Data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // Call loadTable Function to show the selected UFO records
    loadTable(filteredData);
});
