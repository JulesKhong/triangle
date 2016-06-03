var triangle = function (sideOne, sideTwo, sideThree){
    if (sideOne === sideTwo && side2 === sideThree) {
      return "equilateral";
    }
    else if (sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne){
      return "isosceles"
    }

    else if (sideOne + sideTwo <= sideThree || sideThree + sideOne <= sideTwo || sideTwo + sideThree <= sideOne){
      return "not a triangle"
    }

    else if (sideOne != sideTwo && sideTwo != sideThree && sideOne != sideThree){
      return "scalene"
    }

    else {
      console.log("that didn't work");
    }
};

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
    var sideOne = parseInt($("#side1").val());
    var sideTwo = parseInt($("#side2").val());
    var sideThree = parseInt($("#side3").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    // sideOne = parseInt($("input#sideOne").val());
    // sideTwo = parseInt($("input#sideTwo").val());
    // sideThree = parseInt($("input#sideThree").val());

    $("#result").text(result);
    event.preventDefault();

    });
});
