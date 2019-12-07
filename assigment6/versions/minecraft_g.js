for (var i = 0; i < 10; i++) {
    var $row = $(document.createElement('div'));
    $row.addClass("row");
    $row.attr('id', i);
    $(".down").append($row);
    for (var j = 0; j < 20; j++) {

        if (i === 0) {
            var $grass = $(document.createElement('div'));
            $grass.addClass("grass");
            $grass.attr('id', j);
            $row.append($grass);
            
        }
        else {
            var $dirt = $(document.createElement('div'));
            $dirt.addClass("dirt");
            $dirt.attr('id', j);
            $row.append($dirt);
        }


    }
}


for (var i = 0; i < 10; i++) {
    var $row = $(document.createElement('div'));
    $row.addClass("row");
    $row.attr('id', i);
    $(".upper").append($row);
    for (var j = 0; j < 20; j++) {

        var $sky = $(document.createElement('div'));
        $sky.addClass("sky");
        $sky.attr('id', j);
        $row.append($sky);
    }
}
//$('#country .save') 
var $clouds = $('#3 .sky')
//let $clouds = $(".upper .row");
//let $row1 = $clouds.$("#3");
//let $box1 = $row.$("#3");
$clouds.removeClass("sky");
$clouds.addClass("white");

$(".down div.dirt").on("click", function (e) {
    let $item = $(this);
    $item.removeClass("dirt");
    $item.addClass("sky");

})

$(".down div.grass").on("click", function (e) {
    let $item = $(this);
    $item.removeClass("grass");
    $item.addClass("sky");
})

$(".down div.sky").on("click", function (e) {
    let $item = $(this);
    $item.removeClass("sky");
    $item.addClass("dirt");
})

$(".down div.sky").on("click", function (e) {
    let $item = $(this);
    $item.removeClass("sky");
    $item.addClass("grass");
})




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

var elem3 = document.createElement("img");
elem3.setAttribute("src", "./images/black.png");
elem3.setAttribute("height", "60px");
elem3.setAttribute("width", "60px");
elem3.setAttribute("alt", "inventory");
elem3.setAttribute("class", "tools");
elem3.setAttribute("id", "inventory");

var elems = [elem0, elem1, elem2, elem3];

var sideBarDiv = document.getElementsByClassName("sidebar")[0];
var newDiv;
for (i = 0; i < 4; i++) {
    newDiv = document.createElement('div');
    sideBarDiv.appendChild(newDiv);
    newDiv.appendChild(elems[i]);
    elems[i].addEventListener("click", select);

}

var activeTool;
var screenSquareClicked;

function select(event){
    activeTool = event.target.id;
    alert(activeTool) ; 
}

function screenSquare(event){
    screenSquareClicked = event.target.class;
    alert(screenSquareClicked) ; 
}





for (var i = 0; i < 10; i++) {
    var $row = $(document.createElement('div'));
    $row.addClass("row");
    $row.attr('id', i);
    $(".down").append($row);
    for (var j = 0; j < 20; j++) {

        if (i === 0) {
            var $grass = $(document.createElement('div'));
            $grass.addClass("grass");
            $grass.attr('id', j);
            $row.append($grass);
            
        }
        else {
            var $dirt = $(document.createElement('div'));
            $dirt.addClass("dirt");
            $dirt.attr('id', j);
            $row.append($dirt);
        }


    }
}


for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.addClass("row");
    row.attr('id', i);
    getElementsByClassName("upper").append(row);
    for (var j = 0; j < 20; j++) {

        var sky = document.createElement('div');
        sky.addClass("sky");
        sky.attr('id', j);
        row.append(sky);
    }
}