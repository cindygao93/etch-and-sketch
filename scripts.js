var num = 16;


$(document).ready(function(){

	  generateFixedGrid();

	  $("td").hover(function(){
	  	$(this).css("background-color", "black");
	  });

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

function clearGrid(){

	cells = document.getElementsByTagName('td');
	for (var i=0; i<cells.length; i++){
    	/* change the colour of each cell in the grid*/
    	cells[i].style.backgroundColor = "white";
    }
}

function greyScaleGrid(){
	clearGrid();
	var cellOpacity = 0;

	cells = document.getElementsByTagName('td');
	for (var i=0; i<cells.length; i++){
    	/* change the colour of each cell in the grid*/
    	cells[i].style.opacity = cellOpacity;
    }

	$("td").hover(function(){
	  	$(this).css("opacity", parseFloat($(this).css("opacity")) + 0.2);
	  });



}


/*generate grid prompts the user for a number between 1 and 64. Using  
this number which we will call n, the browser will generate a grid of nxn */
function generateGrid() {

	/*do error checking here*/
	num = prompt("Choose a number between 1 and 64");

    /*create table, folowed by each row */
    $("#grid").remove();

    generateFixedGrid();

};
    