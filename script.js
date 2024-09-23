function toggleSeason(season) {
    const seasonalContent = document.getElementById('seasonal-content');
    seasonalContent.innerHTML = ''; // Clear previous content

    const images = {
        xmas: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower1.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower2.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower3.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower4.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower5.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower6.jpg",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/flower7.jpg"
        ]
        // Add other seasonal images here
    };

    if (images[season]) {
        const box = document.createElement('div');
        box.className = 'image-box'; // Single box for all images
        images[season].forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Image for ${season}`;
            box.appendChild(img);
        });
        seasonalContent.appendChild(box);
    }
}
