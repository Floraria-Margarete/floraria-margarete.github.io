function toggleSeason(season) {
    const seasonalContent = document.getElementById('seasonal-content');
    const content = {
        xmas: '<h3>X-MAS and New Years Flowers</h3><img src="path/to/xmas-flower.jpg" alt="X-Mas Flowers">',
        graduation: '<h3>Graduation Flowers</h3><img src="path/to/graduation-flower.jpg" alt="Graduation Flowers">',
        birthday: '<h3>Birthday Flowers</h3><img src="path/to/birthday-flower.jpg" alt="Birthday Flowers">',
        halloween: '<h3>Halloween Flowers</h3><img src="path/to/halloween-flower.jpg" alt="Halloween Flowers">',
        easter: '<h3>Easter Flowers</h3><img src="path/to/easter-flower.jpg" alt="Easter Flowers">',
        summer: '<h3>Summer Flowers</h3><img src="path/to/summer-flower.jpg" alt="Summer Flowers">',
        current: '<h3>Current Seasonal Offering</h3><img src="path/to/current-offering.jpg" alt="Current Seasonal Offering">'
    };

    if (seasonalContent.innerHTML.includes(content[season])) {
        seasonalContent.innerHTML = ''; // Collapse
    } else {
        seasonalContent.innerHTML = content[season]; // Expand
    }
}
