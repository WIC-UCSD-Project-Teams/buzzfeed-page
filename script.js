function revealAnimal() {
    // Get the image element where the animal picture will be displayed
    const animalImg = document.getElementById('animal-img');
    
    // Array containing paths to different animal images
    const animals = [
        'images/cat.png',
        'images/dog.jpeg',
        'images/fox.jpeg',
        'images/porcupine.jpg'
    ];
    
    // Generate a random index to select a random animal image from the array
    const randomIndex = Math.floor(Math.random() * animals.length);
    
    // Set the 'src' attribute of the image element to the randomly selected animal image
    animalImg.src = animals[randomIndex];
    
    // Make sure the image is visible by setting its display style to 'block'
    animalImg.style.display = 'block';
}

function getJoke() {
    // Get the paragraph element where the joke will be displayed
    const jokeElement = document.getElementById('joke');
    
    // Display a loading message while fetching the joke
    jokeElement.innerText = 'Loading...';

    // Make a GET request to the joke API to fetch a random joke
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' // Request JSON format
        }
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        // Display the joke text in the paragraph element
        jokeElement.innerText = data.joke;
    })
    .catch(error => {
        // Display an error message if the fetch fails
        jokeElement.innerText = 'Oops! Something went wrong. Please try again!';
        console.error('Error fetching joke:', error); // Log the error to the console
    });
}
