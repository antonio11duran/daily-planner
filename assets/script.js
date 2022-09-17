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
        } else if (currentHour <= 8) {
            arrayBox[h].style.backgroundColor = "green";
        }
    };
}

activeHour();

var nineButton = document.getElementById("nineButton");
var tenButton = document.getElementById("tenButton");
var elevenButton = document.getElementById("elevenButton");
var twelveButton = document.getElementById("twelveButton");
var oneButton = document.getElementById("oneButton");
var twoButton = document.getElementById("twoButton");
var threeButton = document.getElementById("threeButton");
var fourButton = document.getElementById("fourButton");
var fiveButton = document.getElementById("fiveButton");

function nineData() {
    var nineText = nineBox.value;
    localStorage.setItem("nineTodo", nineText);
}

function tenData() {
    var tenText = tenBox.value;
    localStorage.setItem("tenTodo", tenText);
}

function elevenData() {
    var elevenText = elevenBox.value;
    localStorage.setItem("elevenTodo", elevenText);
}

function twelveData() {
    var twelveText = twelveBox.value;
    localStorage.setItem("twelveTodo", twelveText);
}

function oneData() {
    var oneText = oneBox.value;
    localStorage.setItem("oneTodo", oneText);
}

function twoData() {
    var twoText = twoBox.value;
    localStorage.setItem("twoTodo", twoText);
}

function threeData() {
    var threeText = threeBox.value;
    localStorage.setItem("threeTodo", threeText);
}

function fourData() {
    var fourText = fourBox.value;
    localStorage.setItem("fourTodo", fourText);
}

function fiveData() {
    var fiveText = fiveBox.value;
    localStorage.setItem("fiveTodo", fiveText);
}

function renderNine() {
    var savedNine = localStorage.getItem("nineTodo");
    if (savedNine !== null) {
        nineBox.textContent = savedNine;
    } else {
        return;
    }
}

function renderTen() {
    var savedTen = localStorage.getItem("tenTodo");
    if (savedTen !== null) {
        tenBox.textContent = savedTen;
    } else {
        return;
    }
}

function renderEleven() {
    var savedEleven = localStorage.getItem("elevenTodo");
    if (savedEleven !== null) {
        elevenBox.textContent = savedEleven;
    } else {
        return;
    }
}

function renderTwelve() {
    var savedTwelve = localStorage.getItem("twelveTodo");
    if (savedTwelve !== null) {
        twelveBox.textContent = savedTwelve;
    } else {
        return;
    }
}

function renderOne() {
    var savedOne = localStorage.getItem("oneTodo");
    if (savedOne !== null) {
        oneBox.textContent = savedOne;
    } else {
        return;
    }
}

function renderTwo() {
    var savedTwo = localStorage.getItem("twoTodo");
    if (savedTwo !== null) {
        twoBox.textContent = savedTwo;
    } else {
        return;
    }
}

function renderThree() {
    var savedThree = localStorage.getItem("threeTodo");
    if (savedThree !== null) {
        threeBox.textContent = savedThree;
    } else {
        return;
    }
}

function renderFour() {
    var savedFour = localStorage.getItem("fourTodo");
    if (savedFour !== null) {
        fourBox.textContent = savedFour;
    } else {
        return;
    }
}

function renderFive() {
    var savedFive = localStorage.getItem("fiveTodo");
    if (savedFive !== null) {
        fiveBox.textContent = savedFive;
    } else {
        return;
    }
}

nineButton.addEventListener("click", function (event) {
    event.preventDefault();
    nineData();
    renderNine();
});

tenButton.addEventListener("click", function (event) {
    event.preventDefault();
    tenData();
    renderTen();
});

elevenButton.addEventListener("click", function (event) {
    event.preventDefault();
    elevenData();
    renderEleven();
});

twelveButton.addEventListener("click", function (event) {
    event.preventDefault();
    twelveData();
    renderTwelve();
});

oneButton.addEventListener("click", function (event) {
    event.preventDefault();
    oneData();
    renderOne();
});

twoButton.addEventListener("click", function (event) {
    event.preventDefault();
    twoData();
    renderTwo();
});

threeButton.addEventListener("click", function (event) {
    event.preventDefault();
    threeData();
    renderThree();
});

fourButton.addEventListener("click", function (event) {
    event.preventDefault();
    fourData();
    renderFour();
});

fiveButton.addEventListener("click", function (event) {
    event.preventDefault();
    fiveData();
    renderFive();
});

function init() {
    renderNine();
    renderTen();
    renderEleven();
    renderTwelve();
    renderOne();
    renderTwo();
    renderThree();
    renderFour();
    renderFive();
}

init();