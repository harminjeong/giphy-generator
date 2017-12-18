$(document).ready(function(){

    var movies=["The Matrix", "The Departed", "Inception", "The Godfather", "Gladiator", "Interstellar", "Saving Private Ryan"]
    
    function renderButtons(){

        $(".movieButtons").empty();

        for (var i = 0; i < movies.length; i++){
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $(".movieButtons").append(a);
        }
    }

    $("#add-movie").on("click", function(event){
        var movie = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=90yEQeZ9Y39imuC6eO1llo4Gx9NaVZMm&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            console.log(queryURL);
            console.log(response)
            var movieUrl = response.data.image_original_url;
            var movieImage = $("<img>")
            var movies = response.data
            movieImage.attr("src", movieUrl);
            movieImage.attr("alt", "movie image");

            $("#images").prepend(movieImage);
        })
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();

    })
    renderButtons();

    // function displayMovieGif(){

    // }
})