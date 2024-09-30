function toggleSeason(season) {
    const seasonalContent = document.getElementById('seasonal-content');
    seasonalContent.innerHTML = ''; // Clear previous content
    document.getElementById('backToTop').style.display = "block"; // Show button

    const images = {
        xmas: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Xmas/img16.webp",
        ],
        easter: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Easter/img16.webp",
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
        graduation: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img16.webp",
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
        valentines: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Valentines/img16.webp",
        ],
        martie: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Martie/img16.webp",
        ],
        wedding: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img16.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img17.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img18.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img19.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img20.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img21.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img22.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img23.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Wedding/img24.webp",
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
        ],
        cryogenic: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Cryogenic/img16.webp",
        ],
        soap: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Soap/img12.webp",
        ],
        silk: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Silk/img16.webp",
        ],
        succulent: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Succulent/img16.webp",
        ],
        potted: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Potted/img16.webp",
        ],
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

// Add back the .html extension if it's missing
if (window.location.pathname.endsWith("/Welcome")) {
    window.history.replaceState(null, "", window.location.pathname.replace("/Welcome", "/welcome.html"));
}
if (window.location.pathname.endsWith("/Location")) {
    window.history.replaceState(null, "", window.location.pathname.replace("/Location", "/location.html"));
}
if (window.location.pathname.endsWith("/Store")) {
    window.history.replaceState(null, "", window.location.pathname.replace("/Store", "/store.html"));
}
if (window.location.pathname.endsWith("/Seasonal")) {
    window.history.replaceState(null, "", window.location.pathname.replace("/Seasonal", "/seasonal.html"));
}

if (window.location.pathname.endsWith("welcome.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("welcome.html", "Welcome"));
}
if (window.location.pathname.endsWith("location.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("location.html", "Location"));
}
if (window.location.pathname.endsWith("store.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("store.html", "Store"));
}
if (window.location.pathname.endsWith("seasonal.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("seasonal.html", "Seasonal"));
}


// Scroll to the top of the welcome section
function scrollToTop() {
    const welcomeSection = document.getElementById('welcome');
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
}

// Optionally, hide the button when the seasonal content is clicked again
function hideBackToTop() {
    document.getElementById('backToTop').style.display = "none"; // Hide button
}