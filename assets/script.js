const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const imageBanner = document.querySelector(".banner-img")
const texte = document.querySelector(".banner-txt");

let i = 0;
// flèche gauche 
arrowLeft.addEventListener("click", () => {
	i--;
	if (i < 0) {
		i = slides.length - 1;
	}

// Mise à jour de l'image et du texte
imageBanner.src = "assets/images/slideshow/" + slides[i].image;
texte.innerHTML = slides[i].tagLine;
});

// flèche droite
arrowRight.addEventListener("click", () => {
	i++;
	if (i > slides.length) {
		i=0;
	}

// Mise à jour de l'image et du texte
imageBanner.src = "assets/images/slideshow/" + slides[i].image;
texte.innerHTML = slides[i].tagLine;
});