$(document).ready(function() { 

//set array for animal
	var topics= ['bird', 'dog', 'cat', 'monkey', 'fox', 'lion','tiger'];

	// Loops through the array of array animal
		for (var i = 0; i < topics.length; i++){
			// Then dynamicaly generates buttons for each movie in the array
			// Note the jQUery syntax here... 
		    var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('livething'); // Added a class 
		    a.attr('data-name', topics[i]); // Added a data-attribute
		    a.text(topics[i]); // Provided the initial button text
		    $('#animalsButtons').append(a); // Added the button to the HTML
		};
	
	//not understanding about Buttons function at all... all this is pretty much cut paste and written by someone else.
	//no idea about function at all.

	$(document).on("click", '.livething', function(){

		$('#animals').empty();

		var searchAnimal=$(this).data("name");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchAnimal+"&api_key=dc6zaTOxFJmzC&limit=10";
			
			//search under ajax
			$.ajax({
				url: queryURL, method: 'GET'
				})
				.done(function(response) {
					console.log(response);
				


		//Output for the response.  basically copy from other homework. 

		        var results = response.data;

		        for (var i=0; i < results.length; i++) {


		                var gifDiv = $('<div>');

		                var rating = results[i].rating;

		                var p = $('<p>').text( "Rating: " + rating);
	 
		                
		                var personImage = $('<img>');
		                	personImage.attr('src', results[i].images.fixed_height_still.url);

		                	//adding pausing attribute for the gif (This I have figure out and put the following)
		                	personImage.attr('data-still', results[i].images.fixed_height_still.url);
		                	personImage.attr('data-animate', results[i].images.fixed_height.url);
		                	personImage.attr('data-state','still')
		                	personImage.attr('class','gif')
		            
						gifDiv.append(personImage);
		                gifDiv.append(p);
		                
		             

		        		$('#animals').prepend(gifDiv);

	         	}
	         	//make the gif pausing or animate -- this copy from other section of homework

	         	$('.gif').on('click', function(){

		            var state = $(this).attr('data-state');
		    
		            if ( state == 'still'){
		                $(this).attr('src', $(this).data('animate'));
		                $(this).attr('data-state', 'animate');
		            }else{
		                $(this).attr('src', $(this).data('still'));
		                $(this).attr('data-state', 'still');
		            }
	            
	        	});

			}); 

	});

});





