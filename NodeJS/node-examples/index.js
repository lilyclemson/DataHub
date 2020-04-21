var rect = require("./rectangle");

function solveRect(l, b){
    console.log("Solve for rectangle with l = " + l + "");

    if(l <= 0 || b <= 0){
        console.log("rectangle dimentions should be greater than 0")
    }
    else{
        console.log("the area of the rectangle is " + rect.area(l, b) + '.');
    }

}

solveRect(1,5);