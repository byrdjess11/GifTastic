var topics = ["cookies", "babies", "puppies", "smiling", "dancing", "pizza", "babygroot"];

function happyInfo() {


    var topic = $(this).attr("happy-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=T6UUxMapGH667fntbj2AmXuR24SEeQ91&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            for(var i = 0; i < topic.length; i++) {
            var happyDiv = $("<div>");

            var rating = response.data[i].rating;

            var p = $("<p>").text("Rated: "  + rating);

            happyDiv.append(p);

            var imgUrl = response.data[i].images.preview_gif.url;

            console.log(imgUrl);

            var image = $("<img>").attr("src", imgUrl);

            happyDiv.append(image);

            $("#gif-div").prepend(happyDiv);

            }

      
          });

        
        }

function renderButtons() {

  $("#buttons-div").empty();

  for (var i = 0; i < topics.length; i++) {

    var btn = $("<button> <br>");

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
  




