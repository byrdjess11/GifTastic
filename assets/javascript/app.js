var topics = ["cookies", "babies", "puppies", "smiling", "dancing", "pizza", "babygroot"];

$("button").on("click", function() {


    var happyStuff = $(this).attr("data-happy");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        happyStuff + "&api_key=T6UUxMapGH667fntbj2AmXuR24SEeQ91&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
  
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var happyStuffImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                happyStuffImage.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(happyStuffImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gif-div").prepend(gifDiv);
              }
            }
        });

      

});