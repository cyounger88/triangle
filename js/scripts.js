// var equilateral = side1 === side2 === side3;
//
// var isosceles = side1 === side2 || side1 === side3 || side2 === side3;
//
// var scalene = side1 !=== side2 !=== side3;

var equilateral = function(side1, side2, side3) {
  return (side1 + side2 + side3);
};

var isosceles = function(side1, side2, side3) {
  return (side1 + side2 + side3) / 2;
};

var scalene = function(side1, side2, side3) {
  return (side1 + side2 + side3);
};

// var notatriangle = function(side1, side2, side3) {
//   return side1 !=== side2 !=== side3;
// };

$(document).ready(function() {
  $("form#inputs").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
      console.log("its a triangle!")
      var cosA = Math.cos((Math.pow(side2,2) + Math.pow(side3,2) - Math.pow(side1,2)) /  (2*(side2*side3)))
      console.log(cosA);
    } else {
      console.log("Not a triangle")
    }

    


  });
});
