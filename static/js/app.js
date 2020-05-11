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
form.on("submit", runEnter);



// Complete the event handler function for the form
function runEnter() {
  d3.selectAll("td").remove();
  d3.event.preventDefault();
  // Select the input from datetime

  //filters on date
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  var matches;
  console.log(inputDate);
  if (inputDate === null || inputDate===''){
      console.log('if statement');
    matches=tableData;
  
    } else {
        matches = tableData.filter(event => {
            return event.datetime === inputDate;
              })
        }
  console.log(matches); 

  //filters on country
  var inputElement = d3.select("#country");
  var inputCountry = inputElement.property("value");
  console.log(inputCountry);
  if (inputCountry === null || inputCountry===''){
      console.log('if statement');   
    } else {
        matches = tableData.filter(event => {
            return event.country === inputCountry;
              })}
  console.log(matches); 

  //filters on state
  var inputElement = d3.select("#state");
  var inputState = inputElement.property("value");
  console.log(inputState);
  if (inputState === null || inputState===''){
      console.log('if statement'); 
    } else {
        matches = tableData.filter(event => {
            return event.state === inputState;
              })}
  console.log(matches);

    //filters on city
    var inputElement = d3.select("#city");
    var inputCity = inputElement.property("value");
    console.log(inputCity);
    if (inputCity === null || inputCity===''){
        console.log('if statement');   
      } else {
          matches = tableData.filter(event => {
              return event.city === inputCity;
                })}
    console.log(matches);

     //filters on shape
     var inputElement = d3.select("#shape");
     var inputShape = inputElement.property("value");
     console.log(inputShape);
     if (inputShape === null || inputShape===''){
         console.log('if statement');    
       } else {
           matches = tableData.filter(event => {
               return event.shape === inputShape;
                 })}
     console.log(matches);   

    if (matches.length){  
    matches.forEach((match) => {
    
        var row = tbody.append("tr");
        Object.entries(match).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);})})}
    else
    {   alert("no results found");
        console.log("no results found");
        var row =tbody.append("tr");
        var cell = row.append("td");
        cell.text("No results found")}
}
    
    




function RestoreValues() {
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




