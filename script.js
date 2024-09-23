// Array of seasonal images
const seasonalImages = {
    xmas: [
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower1.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower2.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower3.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower4.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower5.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower6.jpg",
        "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower7.jpg",

        // Add more URLs
    ],
    graduation: [
        "url_to_graduation_image1.jpg",
        "url_to_graduation_image2.jpg",
        // Add more URLs
    ],
    birthday: [
        "url_to_birthday_image1.jpg",
        "url_to_birthday_image2.jpg",
        // Add more URLs
    ],
    halloween: [
        "url_to_halloween_image1.jpg",
        "url_to_halloween_image2.jpg",
        // Add more URLs
    ],
    easter: [
        "url_to_easter_image1.jpg",
        "url_to_easter_image2.jpg",
        // Add more URLs
    ],
    summer: [
        "url_to_summer_image1.jpg",
        "url_to_summer_image2.jpg",
        // Add more URLs
    ],
    current: [
        "url_to_current_image1.jpg",
        "url_to_current_image2.jpg",
        // Add more URLs
    ],
};

// Function to toggle seasonal content
function toggleSeason(season) {
    const contentDiv = document.getElementById("seasonal-content");
    contentDiv.innerHTML = ""; // Clear previous content

    // Check if the season exists in the seasonalImages object
    if (seasonalImages[season]) {
        // Create an image element for each photo
        seasonalImages[season].forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = `${season} flower image`;
            img.style.maxWidth = "150px"; // Set max width for images
            img.style.margin = "10px"; // Add some margin for spacing
            contentDiv.appendChild(img); // Append image to the content div
        });
    }
}
