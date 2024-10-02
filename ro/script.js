function toggleSeason(season) {
    const seasonalContent = document.getElementById('seasonal-content');
    seasonalContent.innerHTML = ''; // Clear previous content
    document.getElementById('backToTop').style.display = "block"; // Show button

    const video = {
        graduation: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/vid1.webm"
        ],
        baptism: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/vid1.webm",
        ],
        wedding: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/vid2.webm",
        ],
    };

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
        toamna: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img16.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img17.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img18.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img19.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Toamna/img20.webp",

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
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Grad/img17.webp",
        ],
        birthday: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Birth/img16.webp",


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
        baptism: [
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img1.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img2.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img3.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img4.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img5.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img6.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img7.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img8.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img9.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img10.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img11.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img12.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img13.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img14.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img15.webp",
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Baptism/img16.webp",
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
        ],
        current: [
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
            "https://raw.githubusercontent.com/floraria-margarete/floraria-margarete/main/photos/Personal/per1.webp",

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

    // Add videos
    if (video[season]) {
        const videoBox = document.createElement('div');
        videoBox.className = 'video-box'; // Single box for all videos
        video[season].forEach(videoUrl => {
            const vid = document.createElement('video');
            vid.src = videoUrl;
            vid.controls = true;  // Add play/pause controls
            vid.width = 320;      // Set video width (optional)
            vid.height = 240;     // Set video height (optional)
            videoBox.appendChild(vid);
        });
        seasonalContent.appendChild(videoBox);
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



// Scroll to the top of the welcome section
function scrollToTop() {
    const welcomeSection = document.getElementById('welcome');
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
}

// Optionally, hide the button when the seasonal content is clicked again
function hideBackToTop() {
    document.getElementById('backToTop').style.display = "none"; // Hide button
}

