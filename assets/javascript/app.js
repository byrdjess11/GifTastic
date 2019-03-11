var topics = ["cookies", "babies", "puppies", "smiling", "dancing", "pizza", "babygroot"];

function happyInfo() {

    var topic = $(this).attr("happy-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        happyStuff + "&api_key=T6UUxMapGH667fntbj2AmXuR24SEeQ91&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response) {
            
            var happyDiv = $("<div class='happy'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rated: "  + rating);

            happyDiv.append(p);

            var img = results[i].images.fixed_height.url;

            var image = $("<img>").attr("src", img);

            happyDiv.append(image);

            $("#gif-div").prepend(happyDiv);
      
          });
        
        }

        




