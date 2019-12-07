
var count = 0;

for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("id", i);
    var upperElement = document.getElementsByClassName("upper")[0];
    upperElement.append(row);

    for (var j = 0; j < 20; j++) {

        var sky = document.createElement('div');
        sky.setAttribute("id", "sky");
        sky.setAttribute("class", "sky");
        sky.classList.add("cell");
        sky.classList.add("row-" + i);
        sky.classList.add("col-" + j);
        sky.setAttribute("data1", count);

        row.append(sky);
        sky.addEventListener("click", tileClicked);
        count++;
    }
}

for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    row.classList.add("row-" + i);
    row.setAttribute("id", i);
    var downElement = document.getElementsByClassName("down")[0];
    downElement.append(row);

    for (var j = 0; j < 20; j++) {

        if (i === 0) {
            var grass = document.createElement('div');
            grass.setAttribute("id", "grass");
            grass.setAttribute("class", "grass");
            grass.classList.add("cell");
            grass.classList.add("row-" + i);
            grass.classList.add("col-" + j);
            grass.setAttribute("data1", count);

            count++;

            row.append(grass);
            grass.addEventListener("click", tileClicked);
        }
        else {
            var dirt = document.createElement('div');
            dirt.setAttribute("id", "dirt");
            dirt.setAttribute("class", "dirt");
            dirt.classList.add("cell");
            dirt.classList.add("row-" + i);
            dirt.classList.add("col-" + j);
            dirt.setAttribute("data1", count);

            count++;

            row.append(dirt);
            dirt.addEventListener("click", tileClicked);
        }

    }
}




var white = document.querySelectorAll(".sky.row-2.col-1, .sky.row-2.col-2, .sky.row-3.col-2, .sky.row-3.col-3")

for (i = 0; i < white.length; i++) {
    white[i].setAttribute("id", "cloud");
    white[i].classList.replace("sky", "cloud");

}


var tree = document.querySelectorAll(".sky.row-6.col-15, .sky.row-7.col-15, .sky.row-8.col-15, .sky.row-9.col-15")
for (i = 0; i < tree.length; i++) {
    tree[i].setAttribute("id", "tree");
    tree[i].classList.replace("sky", "tree");

    tree[i].addEventListener("click", tileClicked);

}


var green = document.querySelectorAll(".sky.row-5.col-15, .sky.row-5.col-14, .sky.row-5.col-16, .sky.row-4.col-14, .sky.row-4.col-15, .sky.row-4.col-16, .sky.row-3.col-15, .sky.row-3.col-16")

for (i = 0; i < green.length; i++) {
    green[i].setAttribute("id", "green");
    green[i].classList.replace("sky", "green");

    green[i].addEventListener("click", tileClicked);
}


var stone = document.querySelectorAll(".sky.row-9.col-4, .sky.row-9.col-5, .sky.row-9.col-6, .sky.row-9.col-7, .sky.row-8.col-4, .sky.row-8.col-5, .sky.row-8.col-6, .sky.row-7.col-5, .sky.row-7.col-6, .sky.row-9.col-17, .sky.row-9.col-18, .sky.row-8.col-18")

for (i = 0; i < stone.length; i++) {
    stone[i].setAttribute("id", "stone");
    stone[i].classList.replace("sky", "stone");

    stone[i].addEventListener("click", tileClicked);
}


var elem0 = document.createElement("img");
elem0.setAttribute("src", "./images/axe.png");
elem0.setAttribute("alt", "axe");
elem0.setAttribute("class", "tools");
elem0.setAttribute("id", "axe");

var elem1 = document.createElement("img");
elem1.setAttribute("src", "./images/pickAxe.png");
elem1.setAttribute("alt", "pickAxe");
elem1.setAttribute("class", "tools");
elem1.setAttribute("id", "pickAxe");

var elem2 = document.createElement("img");
elem2.setAttribute("src", "./images/shovel.png");
elem2.setAttribute("alt", "shovel");
elem2.setAttribute("class", "tools");
elem2.setAttribute("id", "shovel");

var inventory = document.createElement("img");
//inventory.setAttribute("src", "./images/black.png");
//inventory.setAttribute("alt", "inventory");
inventory.style.backgroundColor = "black";
inventory.setAttribute("class", "tools");
inventory.classList.add("inventory");
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
var tile;
var activeTool;


function tileClicked(e) {

    if (activeTool !== undefined && tileLegal(e)) {
        var arr;
        if (activeTool === "inventory") {
            var el = e.target.getAttribute("data1");

            var x = parseInt(el);
            var nextdivClass;
            let list = document.getElementsByClassName("cell");
            for (var f = 0; f < list.length; f++) {
                if (parseInt(list[f].getAttribute("data1")) === (x + 20)) {
                    nextdivClass = list[f].classList;

                }

            }

            if (!nextdivClass.contains("sky") && !nextdivClass.contains("green") && !nextdivClass.contains("tree")) {

                if (document.getElementsByClassName("inventory")[0].id === "grass") {
                    e.target.classList.replace("sky", "grass");
                    e.target.setAttribute("id", "grass");
                }
                else if (document.getElementsByClassName("inventory")[0].id === "dirt") {
                    e.target.classList.replace("sky", "dirt");
                    e.target.setAttribute("id", "dirt");

                }
                else if (document.getElementsByClassName("inventory")[0].id === "stone") {
                    e.target.classList.replace("sky", "stone");
                    e.target.setAttribute("id", "stone");

                }

            }
            else {
                document.getElementsByClassName("inventory")[0].style.background = "red";

                setTimeout(
                    () => {
                        document.getElementsByClassName("inventory")[0].style.background = "blue";
                    },
                    300
                );

            }

            if (!nextdivClass.contains("sky")) {
                if (document.getElementsByClassName("inventory")[0].id === "tree") {
                    e.target.classList.replace("sky", "tree");
                    e.target.setAttribute("id", "tree");

                }
                else if (document.getElementsByClassName("inventory")[0].id === "green") {
                    e.target.classList.replace("sky", "green");
                    e.target.setAttribute("id", "green");

                }
            }
            else {
                document.getElementsByClassName("inventory")[0].style.background = "red";

                setTimeout(
                    () => {
                        document.getElementsByClassName("inventory")[0].style.background = "blue";
                    },
                    300
                );

            }

        }

        else {
            //if()
            arr = e.target.id;

            document.getElementsByClassName("inventory")[0].setAttribute("src", "./images/" + arr + ".png");
            if (document.getElementsByClassName("inventory")[0].id !== arr) {
                document.getElementsByClassName("inventory")[0].setAttribute("id", arr);
            }

            e.target.classList.replace(arr, "sky");
        }


    }
}

function tileLegal(tile) {

    var item = tile.target.classList;
    
    if ((activeTool === "shovel") && (item.contains("dirt") || item.contains("grass")) ||
        (activeTool === "axe") && (item.contains("tree") || item.contains("green")) ||
        (activeTool === "pickAxe") && (item.contains("stone")) || (activeTool === "inventory") && (item.contains("sky"))) {
        if (activeTool === "inventory") {

            document.getElementsByClassName("inventory")[0].style.background = "blue";
        }
        else if ((activeTool === "shovel") || (activeTool === "axe") || (activeTool === "pickAxe")) {
            document.getElementById(activeTool).style.background = "blue";
        }
        return true;
    }
    else {
        if (activeTool === "inventory") {
            document.getElementsByClassName("inventory")[0].style.background = "red";

            setTimeout(
                () => {
                    document.getElementsByClassName("inventory")[0].style.background = "blue";
                },
                300
            );


        }
        else {
            document.getElementById(activeTool).style.background = "red";

            setTimeout(
                () => {
                    document.getElementById(activeTool).style.background = "blue";
                },
                300
            );
        }

        return false;
    }
}


function legalTool(tool) {
    return activeTool !== undefined && tileLegal(tool);

}

function selectTool(event) {

    for (var i = 0; i < toolList.length; i++) {
        let x = document.getElementsByClassName("tools")
        x[i].style.background = "white";
    }
    if( !(event.target.id=="inventory")){
        if (event.target.classList.contains("inventory")) {
            activeTool = "inventory";
            document.getElementsByClassName("inventory")[0].style.background = "blue";
        }
        else {
            document.getElementsByClassName("inventory")[0].id = "inventory";
            activeTool = event.target.id;
            document.getElementById(activeTool).style.background = "blue";
            document.body.style.cursor = "url(./cursors/" + activeTool + ".cur), auto";
    
        }
       
    }
    else{
        event.target.style.backgroundColor = "red";

        setTimeout(
            () => {

                event.target.style.backgroundColor = "black";
            },
            200
        );
        
    }
 

}

function restOfTools(arr, tool) {
    var restOfToolsArr = arr;
    var indexOfActive = arr.indexOf(tool);
    restOfToolsArr.splice(indexOfActive, 1);
    return restOfToolsArr;
}


