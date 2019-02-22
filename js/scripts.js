// // var equilateral = side1 === side2 === side3;
// //
// // var isosceles = side1 === side2 || side1 === side3 || side2 === side3;
// //
// // var scalene = side1 !=== side2 !=== side3;

// var equilateral = function(side1, side2, side3) {
//   return (side1 + side2 + side3);
// };

// var isosceles = function(side1, side2, side3) {
//   return (side1 + side2 + side3) / 2;
// };

// var scalene = function(side1, side2, side3) {
//   return (side1 + side2 + side3);
// };

// // var notatriangle = function(side1, side2, side3) {
// //   return side1 !=== side2 !=== side3;
// // };

$(document).ready(function() {
  $("form#inputs").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    // cos A = (b2 + c2 − a2) / 2bc -- to determine if it is a triangle

    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
      console.log("its a triangle!")

      // to determine one angle of the triangle
      var cosA = Math.cos((Math.pow(side2,2) + Math.pow(side3,2) - Math.pow(side1,2)) /  (2*(side2*side3)))
      console.log(cosA);
    } else {
      console.log("Not a triangle")
    }

    if ((side1 !== side2) || (side1 !== side3) || (side2 !== side3)) {
      // no congruent sides
      console.log("its a scalene triangle")
      $( "div#output" ).text("its a scalene triangle")

    } else if ((side1 === side2) && (side1 === side3) && (side2 === side3))  {
      // three congruent sides
      console.log("its equialateral triangle")
      $( "div#output" ).text("its an equilateral triangle")

    } else if ((side1 === side2) || (side1 === side3)) {
    
        // two equal sides
        console.log("its a isosceles triangle")
        $( "div#output" ).text("its a isosceles triangle")
    }
  
    


  });
});
