// Wait until the DOM (Document Object Model) is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class "genre-button" (i.e., the genre buttons)
    const genreButtons = document.querySelectorAll(".genre-button");
    
    // Get the <iframe> element by its ID, which will be used to display the Spotify playlist
    const playlist = document.getElementById("playlist");
    
    // Get the <body> element, which will be used to change the background color
    const body = document.body;

    // Loop through each genre button and add a click event listener
    genreButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the genre and background color from the data attributes of the clicked button
            const genre = this.dataset.genre;
            const bgcolor = this.dataset.bgcolor;

            // Change the background color of the page based on the selected genre
            body.style.backgroundColor = bgcolor;

            // Initialize a variable to hold the URL of the Spotify playlist
            let playlistUrl = "";

            // Use a switch statement to assign the correct playlist URL based on the selected genre
            switch (genre) {
                case "rap":
                    playlistUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DX58gKmCfKS2T"; // Example Rap playlist
                    break;
                case "pop":
                    playlistUrl = "https://open.spotify.com/embed/playlist/3ZgmfR6lsnCwdffZUan8EA"; // Example Pop playlist
                    break;
                case "classical":
                    playlistUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0"; // Example Classical playlist
                    break;
                case "kpop":
                    playlistUrl = "https://open.spotify.com/embed/playlist/02F84w6VNyUOx51GOND4Vk"; // Example K-Pop playlist
                    break;
                case "bollywood":
                    playlistUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM"; // Example Bollywood playlist
                    break;
                case "rock":
                    playlistUrl = "https://open.spotify.com/embed/playlist/3qu74M0PqlkSV76f98aqTd"; // Example Rock playlist
                    break;
                default:
                    playlistUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"; // Default playlist if no genre matches
            }

            // Update the <iframe> element's src attribute to change the displayed Spotify playlist
            playlist.src = playlistUrl;
        });
    });
});
