                
var boxWidth = 1400;  
var boxHeight = 600;

var circleInfo = [
  {
    x: (boxWidth/2), 
    y: (boxHeight/2), 
    r: 10 
  }
]; //where is it goint to be in my box, and the size of it(circle)

var box = d3.select('.box')  
            .append('svg')
            .attr('class', 'box')
            .attr('width', boxWidth)
            .attr('height', boxHeight);

var drag = d3.behavior.drag()  //creating my drag event like "on" click event
             .on('drag', function() { circle.attr('cx', d3.event.x)
                                            .attr('cy', d3.event.y); });
            

//creating my figure(circle)
var circle = box.selectAll(".draggableCircle")
                .data(circleInfo) //
                .enter()
                .append('svg:circle')
                .attr('class', 'draggableCircle')
                .attr('cx', function(d) { return d.x; })
                .attr('cy', function(d) { return d.y; })
                .attr('r', function(d) { return d.r; })
                .style('fill',"#000066")
                .call(drag);// to use my drag variable, I have to call it.


var enemiesPosition = [];
for(var i =50; i <1000; i++){
  enemiesPosition.push(i);
}



var makeEnemiesPink = box.selectAll(".enemies-pink")
    .data(enemiesPosition)
    .enter()
    .append("svg:image")
    .attr("xlink:href","img/ghost.png")
    .attr('class','enemies-pink')
    .attr('width',30)
    .attr('height',30)
    .attr('x',Math.random() *200)
    .attr('y',Math.random() *200);

var makeEnemiesBlue = box.selectAll(".enemies-blue")
    .data(enemiesPosition)
    .enter()
    .append("svg:image")
    .attr("xlink:href","img/ghost-blue.png")
    .attr('class','enemies-blue')
    .attr('width',30)
    .attr('height',30)
    .attr('x',Math.random() *200)
    .attr('y',Math.random() *200);    



var makeEnemiesOrange = box.selectAll(".enemies-orange")
    .data(enemiesPosition)
    .enter()
    .append("svg:image")
    .attr("xlink:href","img/ghost-orange.png")
    .attr('class','enemies-orange')
    .attr('width',30)
    .attr('height',30)
    .attr('x',Math.random() *200)
    .attr('y',Math.random() *200);


var moveEnemiesPink = function(){ d3.selectAll('.enemies-pink')
    .data(enemiesPosition)
    .transition()
        .attr('x',function(d){return d* (Math.random()*10);})
        .attr('y',function(d){return d* (Math.random()*10);})
       .duration(2000);

}

var moveEnemiesBlue = function(){ d3.selectAll('.enemies-blue')
    .data(enemiesPosition)
    .transition()
        .attr('x',function(d){return d* (Math.random()*10);})
        .attr('y',function(d){return d* (Math.random()*10);})
       .duration(2000);

}

var moveEnemiesOrange = function(){ d3.selectAll('.enemies-orange')
    .data(enemiesPosition)
    .transition()
        .attr('x',function(d){return d* (Math.random()*10);})
        .attr('y',function(d){return d* (Math.random()*10);})
       .duration(2000);

}
setInterval(moveEnemiesPink,1500);
setInterval(moveEnemiesBlue,1500);
setInterval(moveEnemiesOrange,1500);
