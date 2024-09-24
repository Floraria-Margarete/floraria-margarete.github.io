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

    // Scroll to the seasonal content
    seasonalContent.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.dropbtn').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});


// Close the dropdown when clicking outside of it
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropdown.style.display === 'block' && !dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
        dropdown.style.display = 'none'; // Close dropdown
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const langOptions = document.querySelectorAll(".lang-option");
    const bannerTitle = document.querySelector(".banner-title");

    langOptions.forEach(option => {
        option.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");
            if (selectedLang === "en") {
                bannerTitle.textContent = bannerTitle.getAttribute("data-lang-en");
            } else if (selectedLang === "ro") {
                bannerTitle.textContent = bannerTitle.getAttribute("data-lang-ro");
            }
        });
    });
});
