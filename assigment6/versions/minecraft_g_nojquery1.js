

var tile;
var activeTool;


function tileClicked(event) {
    tile = event.target.className;
    if (activeTool !== undefined && tileLegal(tile)) {
        inventory.setAttribute("src", "./images/" + tile + ".png");
    }
}


for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("id", i);
    var downElement = document.getElementById("down");
    downElement.appendChild(row);

    for (var j = 0; j < 20; j++) {

        if (i === 0) {
            var grass = document.createElement('div');
            grass.setAttribute("class", "grass");
            grass.setAttribute("id", j);
            row.append(grass);
            grass.addEventListener("click", tileClicked);
        }
        else {
            var dirt = document.createElement('div');
            dirt.setAttribute("class", "dirt");
            dirt.setAttribute("id", j);
            row.append(dirt);
            dirt.addEventListener("click", tileClicked);
        }


    }
}


for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("id", i);
    var upperElement;
    upperElement = document.getElementById("upper").append(row);

    for (var j = 0; j < 20; j++) {

        var sky = document.createElement('div');
        sky.setAttribute("class", "sky");
        sky.setAttribute("id", j);
        row.append(sky);
        sky.addEventListener("click", tileClicked);
    }
}

for (var k = 1; k < 5; k++) {
    var stone = document.createElement('div');
    stone.setAttribute("class", "stone");
    stone.setAttribute("id", k);
    row.append(stone);
    stone.addEventListener("click", tileClicked);
}

for (var w = 1; w < 5; w++) {
    var wood = document.createElement('div');
    wood.setAttribute("class", "wood");
    wood.setAttribute("id", wood);
    row.append(wood);
    wood.addEventListener("click", tileClicked);
}





// $(".down div.dirt").on("click", function (e) {
//     let $item = $(this);
//     $item.removeClass("dirt");
//     $item.addClass("sky");

// })

// $(".down div.grass").on("click", function (e) {
//     let $item = $(this);
//     $item.removeClass("grass");
//     $item.addClass("sky");
// })

// $(".down div.sky").on("click", function (e) {
//     let $item = $(this);
//     $item.removeClass("sky");
//     $item.addClass("dirt");
// })

// $(".down div.sky").on("click", function (e) {
//     let $item = $(this);
//     $item.removeClass("sky");
//     $item.addClass("grass");
// })




var elem0 = document.createElement("img");
elem0.setAttribute("src", "./images/axe.png");
elem0.setAttribute("height", "60px");
elem0.setAttribute("width", "60px");
elem0.setAttribute("alt", "axe");
elem0.setAttribute("class", "tools");
elem0.setAttribute("id", "axe");

var elem1 = document.createElement("img");
elem1.setAttribute("src", "./images/pickAxe.png");
elem1.setAttribute("height", "60px");
elem1.setAttribute("width", "60px");
elem1.setAttribute("alt", "pickAxe");
elem1.setAttribute("class", "tools");
elem1.setAttribute("id", "pickAxe");

var elem2 = document.createElement("img");
elem2.setAttribute("src", "./images/shovel.png");
elem2.setAttribute("height", "60px");
elem2.setAttribute("width", "60px");
elem2.setAttribute("alt", "shovel");
elem2.setAttribute("class", "tools");
elem2.setAttribute("id", "shovel");

var inventory = document.createElement("img");
inventory.setAttribute("src", "./images/black.png");
inventory.setAttribute("height", "60px");
inventory.setAttribute("width", "60px");
inventory.setAttribute("alt", "inventory");
inventory.setAttribute("class", "tools");
inventory.setAttribute("id", "inventory");

var elems = [elem0, elem1, elem2, inventory];

const toolList = ["axe", "pickAxe", "shovel", "inventory"];

var sideBarDiv = document.getElementsByClassName("sidebar")[0];
var newDiv;
for (i = 0; i < elems.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", i);
    sideBarDiv.appendChild(newDiv);
    newDiv.appendChild(elems[i]);
    elems[i].addEventListener("click", selectTool);

}


function legalTool(tool) {
    // קוד לבדוק אם מותר לבחור בTOOL

    return true;
}

function restOfTools(arr, tool) {
    var restOfToolsArr = arr;
    var indexOfActive = arr.indexOf(tool);
    restOfToolsArr.splice(indexOfActive, 1);
    return restOfToolsArr;
}

function selectTool(event) {

    activeTool = event.target.id;
    document.body.style.cursor = "url(./cursors/" + activeTool + ".cur), auto";

    var remainingToolsArr = restOfTools(toolList, activeTool);
    console.log(remainingToolsArr);
    for (var i = 0; i < remainingToolsArr.length; i++) {
        document.getElementById(remainingToolsArr[i]).style.background = "white";
    }
    if (legalTool(activeTool)) { document.getElementById(activeTool).style.background = "blue"; }
    else { document.getElementById(activeTool).style.background = "red"; }
}



function tileLegal(tile) {

    if ((activeTool === "shovel") && (tile === "dirt" || tile === "grass") ||
        (activeTool === "axe") && (tile === "wood") || (activeTool === "pickAxe") && (tile === "stone")) {

        // tile.setAttribute("class", "sky");
        // tile.setAttribute("class", "sky");
         return true;}
} 
