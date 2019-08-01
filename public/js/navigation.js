// const navSlide = () => {
// 	const burger = document.querySelector('.burger');
// 	const nav = document.querySelector('.nav-links');
// 	const navLinks = document.querySelectorAll('.nav-links li');

// 	burger.addEventListener('click',()=>{
// 		//toggle Nav
// 		nav.classList.toggle('nav-active');
// 		//Animate Links
// 		navLinks.forEach((link, index) => {
// 			if(link.style.animation) {
// 			link.style.animation = '';
// 			} else {
// 			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
// 			}
// 		});
// 	//burger animation
// 	burger.classList.toggle('toggle');
// 	}); 
// }

// navSlide();

function burgerClick()
{
	
	console.log("burger click");

	const navLinks = document.getElementById('navLinksId');

	if (navLinks.classList.contains('display-flex'))
	{
		console.log('remove class');
		navLinks.classList.remove('display-flex');
		nav.classList.toggle('nav-active');
	}
	else
	{
		console.log('add class');
		navLinks.classList.add('display-flex');

		//toggle Nav
		nav.classList.toggle('nav-active');
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
			link.style.animation = '';
			} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
			}
		});
	}
	
}