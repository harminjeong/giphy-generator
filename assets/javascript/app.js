$(document).ready(function () {

    var movies = ["The Matrix", "The Departed", "Inception", "The Godfather", "Gladiator", "Interstellar", "Saving Private Ryan"]

    function renderButtons() {
        $(".movieButtons").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $(".movieButtons").append(a);
        }
    }
    function displayMovieGif() {

        var movie = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=90yEQeZ9Y39imuC6eO1llo4Gx9NaVZMm&q=" + movie + "&limit=10offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(queryURL);
            console.log(response);

            var data = response.data;
            for (var i = 0; i < data.length; i++) {
                var movieUrl = data[i].images.fixed_height.url;
                $("<div>").append("#images")
                var movieImage = $("<img>")
                // var movies = response.data
                movieImage.attr("src", movieUrl);
                movieImage.attr("alt", "movie image");
                $("#images").append(movieImage);
            }
        })
    }
    $("#add-movie").on("click", function (event) {

        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();

    })
    $(document).on("click", ".movie", displayMovieGif);
    renderButtons();


})