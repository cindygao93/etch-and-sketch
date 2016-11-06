var num = 16;


$(document).ready(function(){
	  $("td").hover(function(){
	      $(this).css("background-color", "yellow");
	  });

	  /*$("body").append('<div></div>');*/

	  generateFixedGrid();

	  /*alert("i am outside loop");
	  console.log("i am outside loop");

	  for (i = 0; i < 2; i++) { 
      	/*$(#grid).append("div#first");
      	alert("I am inside loop")
      	var name = prompt("what is your name?", "")

	  }*/
	  /*$("#grid")*/

	  /*generateGrid();*/

});

function generateFixedGrid() {
	var grid = document.createElement("table");
    grid.setAttribute("id","grid");


    /*$("body").append(grid);*/
    /*var board = document.createElement("div");
    board.setAttribute("id", "board");
    document.getElementById("board").appendChild(grid);
    document.body.appendChild(board);*/

    /*var container = document.createElement("div");
    container.setAttribute("id","grid");

    document.body.appendChild(container);*/
    document.body.appendChild(grid);



    /*creates mew rows based on given numerical inputs*/
    for (var i=0; i<num; i++){
    	/* each item means it is a new row, therefore create a new row*/
    	var row = grid.insertRow(i);
    	for (var j=0; j<num; j++){
    		row.insertCell(j);
    	}
    }

    /* this function allows the cells of the table to change colour when you hover over the cell with your mouse*/
    $("td").hover(function(){
	      $(this).css("background-color", "black");
	  });


}


/*generate grid prompts the user for a number between 1 and 64. Using  
this number which we will call n, the browser will generate a grid of nxn */
function generateGrid() {
	alert("hello");

	/*do error checking here*/
	num = prompt("Choose a number between 1 and 64");

    /*create table, folowed by each row */
    $("#grid").remove();

    var grid = document.createElement("table");
    grid.setAttribute("id","grid");
    document.body.appendChild(grid);



    /*creates mew rows based on given numerical inputs*/
    for (var i=0; i<num; i++){
    	/* each item means it is a new row, therefore create a new row*/
    	var row = grid.insertRow(i);
    	for (var j=0; j<num; j++){
    		row.insertCell(j);
    	}
    }

    /* this function allows the cells of the table to change colour when you hover over the cell with your mouse*/
    $("td").hover(function(){
	      $(this).css("background-color", "black");
	  });

};
    