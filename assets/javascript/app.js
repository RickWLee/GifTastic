$(document).ready(function() { 

	// // 
	


  // Initial array of movies
	var animals= ['bird', 'dog', 'cat', 'monkey', 'fox'];

	

	// Create Animal button on the html
	// function createButtons(){ 

		//clear up Div for id = animalsButtons
		

		// Loops through the array of array animal
		for (var i = 0; i < animals.length; i++){
			// Then dynamicaly generates buttons for each movie in the array
			// Note the jQUery syntax here... 
		    var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('livething'); // Added a class 
		    a.attr('data-name', animals[i]); // Added a data-attribute
		    a.text(animals[i]); // Provided the initial button text
		    $('#animalsButtons').append(a); // Added the button to the HTML
		};
	// }

	// createButtons();

	// function getInfo(){
$('.livething').on("click", function(){

	$('#animals').empty();

	var searchAnimal=$(this).data("name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchAnimal+"&api_key=dc6zaTOxFJmzC&limit=10";
		
		
		$.ajax({
			url: queryURL, method: 'GET'
			})
			.done(function(response) {
				console.log(response);
			


	//Output for the response

	        var results = response.data;

	        for (var i=0; i < results.length; i++) {


	                var gifDiv = $('<div>');

	                var rating = results[i].rating;

	                var p = $('<p>').text( "Rating: " + rating);

	                var personImage = $('<img>');
	                personImage.attr('src', results[i].images.fixed_height.url);

	                gifDiv.append(p);
	                gifDiv.append(personImage);

	                $('#animals').prepend(gifDiv);
	   
         	}
		}); 

	});

});





