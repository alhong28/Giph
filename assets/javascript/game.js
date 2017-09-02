var topic = ["Kanye West", "Russel Crowe", "Godzilla", "Matt Damon", "Ash Ketchum", 
"Jason Stathem"];  


//making the button in array


// button function
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response) {
   	for (var i = 0; i <topic.length; i++){

	var gifButton = $("<button>");

	giButton.attr(topic, topic[i]);

	$(".searches").prepend(gifButton)

		}



 	}

});

//need to have search look through giphy

//ned to have search make button in top div

//need to make the gifs append with rating in the gif div



