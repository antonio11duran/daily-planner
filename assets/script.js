var timeBox = document.getElementById("inputGroup-sizing-lg");
var inputBox = document.querySelector("#input-box");

console.log(timeBox.value);

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000
)

if (timeBox.value == moment().format("hA")) {
    inputBox.setAttribute("background-color", "red");
}