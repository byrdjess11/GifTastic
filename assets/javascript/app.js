var topics = ["cookies", "babies", "puppies", "smiling", "dancing", "pizza", "babygroot"];

function happyInfo() {

    var topic = $(this).attr("happy-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=T6UUxMapGH667fntbj2AmXuR24SEeQ91&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(results) {


            var results = response.data;

            console.log(results)
            
            var happyDiv = $("<div>");

            var rating = results.rating;

            var p = $("<p>").text("Rated: "  + rating);

            happyDiv.append(p);

            var imgUrl = results.images.fixed_height.url;

            var image = $("<img>").attr("src", imgUrl);

            p.append(image);

            $("#gif-div").prepend(happyDiv);

      
          });
        
        }

function renderButtons() {

  $("#buttons-div").empty();

  for (var i = 0; i < topics.length; i++) {

    var btn = $("<button>");

    btn.addClass("happy-btn");
    btn.attr("happy-data", topics[i]);
    btn.text(topics[i]);

    $("#buttons-div").append(btn);


    }
  }

  $("#add-happy").on("click", function(event) {
    event.preventDefault();

    var topic = $("#happy-input").val().trim();

    topics.push(topic);

    renderButtons();

  });


  $(document).on("click", ".happy-btn", happyInfo);

  renderButtons();



