$(document).ready(function() { 

	// // 
	// var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

	// $.ajax({url: queryURL, method: 'GET'})
	//  .done(function(response) {
	//     // console.log(response);
	// }); 

  // Initial array of movies
	var animals= ['bird', 'dog', 'cat', 'pokemon', 'naruto'];

	// ========================================================

	// Generic function for capturing the movie name from the data-attribute
	// function alertName(){
	// 	var searchName = $(this).data("name");

	// 	alert(searchName);
	// }

	// ========================================================

	// Generic function for displaying movie data 
	function createButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		// $('#animalsButtons').empty();

		// Loops through the array of movies
		for (var i = 0; i < animals.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    // a.addClass('animals'); // Added a class 
		    a.attr('data-name', animals[i]); // Added a data-attribute
		    a.text(animals[i]); // Provided the initial button text
		    $('#animalsButtons').append(a); // Added the button to the HTML
		};
	}

	createButtons();


});