// script.js

// Function to fetch movie data
function fetchMovieData() {
    fetch('https://www.kvikmyndir.is/api/movie')
        .then(response => response.json())
        .then(data => {
            // Process and display movie data here
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
}

// Call the fetchMovieData function when your page loads or as needed
fetchMovieData();
