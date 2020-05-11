// from data.js
var tableData = data;

//select elements from index.html
var filterButton = d3.select("#filter-btn");
var restoreButton = d3.select("#restore-btn");
var allButton = d3.select("#all-btn");

var form = d3.select("form");
var tbody=d3.select("tbody");
//set up handlers

filterButton.on("click", runEnter);
restoreButton.on("click", RestoreValues);
allButton.on("click", showAll);
form.on("submit",runEnter);

// $("#table_of_items tbody tr").remove();

// Complete the event handler function for the form
function runEnter() {
  d3.selectAll("tr").remove();
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var matches = []
  // Use the form input to filter the data by date
  tableData.forEach(event => {
    Object.values(event).forEach(value =>{
      if (inputValue === value ){
        matches.push(event);      
                    }
                }
            )
        }
        
    )
    console.log(matches); 

    matches.forEach((match) => {
    if (matches.length) 
    {
        var row = tbody.append("tr");
        Object.entries(match).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);})}
    else
    {   
        var row =tbody.append("tr");
        var cell = row.append("td");
        cell.text("No results found")}
    
        }

        )
    }



function RestoreValues() {
    // var arrInputs = d3.select("#datetime");
    // for (var i = 0; i < arrInputs.length; i++) {
    //     var oCurInput = arrInputs[i];
    //     if (oCurInput.type == "text")
    //         oCurInput.value = oCurInput.defaultValue;
    //     }
    location.reload();
    }

function showAll (){

    tableData.forEach(event => {
    var row = tbody.append("tr");
        Object.entries(event).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);})
    }
    )
}




