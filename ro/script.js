function toggleSeason(season) {
    const seasonalContent = document.getElementById('seasonal-content');
    seasonalContent.innerHTML = ''; // Clear previous content

    const images = {
        xmas: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/xmas16.webp",
        ],
        
        graduation: [  
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/grad16.webp",  
        ],
        birthday: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birthdays/bd9.webp",
        ],
        halloween: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Halloween/hal16.webp",
        ],
        wedding: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/wed15.webp",
    ],
    easter: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/es16.webp",
    ],
    firstday: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/First/fs16.webp",
    ],
    current: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per14.webp",
    ]
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
