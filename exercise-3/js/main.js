// Main JavaScript File

// First Exam
var exam1 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:90},
  {id:3, student:'Rose', grade:80},
];

// Second Exam
var exam2 = [
  {id:1, student:'Jade', grade:75},
  {id:2, student:'Billy', grade:85},
  {id:3, student:'Rose', grade:90},
  {id:4, student:'Avery', grade:90},
];

// Third Exam
var exam3 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:80},
  {id:3, student:'Rose', grade:80},
  {id:4, student:'Avery', grade:70},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Select SVG
  var svg = d3.select('#my-svg')
                .attr('width', 500)
                .attr('height', 500);
  // Reusable draw function
  var draw = function(data) {
      var rects = svg.selectAll('rect')
                        .data(data, function(d) {return d.id});
                        
        rects.enter()
            .append('rect')
            .attr('width', 0)
            .attr('fill', 'blue')
            .attr('opacity', 0.7);
            
        rects.transition()
            .duration(500)
            .attr('width', function(d) {return d.grade})
            .attr('height', 20)
            .attr('x', 20)
            .attr('y', function(d) {return +d.id*40});
            
        rects.exit()
            .transition()
            .duration(500)
            .attr('width', 0)
            .remove();
  }

    // Bind data to selection of rects in your svg

    // Enter rect elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements


    // Perform the same data-binding for text


    // enter elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements
    

  // Assign a click event for buttons. Use switch/case to apply logic of which data to use.
  $('button').on('click', function() {
      if ($(this).val() == 'exam1') {
          draw(exam1);
      } else if ($(this).val() == 'exam2') {
          draw(exam2);
      } else {
          draw(exam3);
      }
  })

});
