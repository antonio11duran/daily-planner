var nineBox = document.getElementById("nine");
var tenBox = document.getElementById("ten");
var elevenBox = document.getElementById("eleven");
var twelveBox = document.getElementById("twelve");
var oneBox = document.getElementById("one");
var twoBox = document.getElementById("two");
var threeBox = document.getElementById("three");
var fourBox = document.getElementById("four");
var fiveBox = document.getElementById("five");

var arrayBox = [nineBox, tenBox, elevenBox, twelveBox, oneBox, twoBox, threeBox, fourBox, fiveBox];

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000
)

var now = moment();
var currentHour = parseInt(moment().format("H"));

console.log(currentHour);
console.log(typeof currentHour);

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function activeHour() {
    for (var h = 0; h < hours.length; h++) {
    if (currentHour == hours[h]) {
        for (var i = h + 1; i < arrayBox.length; i++) {
            arrayBox[h].style.backgroundColor = "red";
            arrayBox[i].style.backgroundColor = "green";
        }
    }}
}

activeHour();

var nineButton = document.getElementById("nineButton");
nineButton.onclick = saveData;

function saveData() {
    
    }