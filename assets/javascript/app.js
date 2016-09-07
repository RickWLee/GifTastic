$(document).ready(function() { 


	var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	    console.log(response);
	}); 

  // Initial array of movies
	var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

	// ========================================================

	// Generic function for capturing the movie name from the data-attribute
	function alertMovieName(){
		var movieName = $(this).data("name");

		alert(movieName);
	}

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#moviesView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#moviesView').append(a); // Added the button to the HTML
		}
	}



});