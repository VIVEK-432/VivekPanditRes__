/*<<<<<<<<<<<< MENU BAR >>>>>>>>>>>>*/

const showMenu =(toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show-menu')
		})
	}
}

showMenu('nav-toggle','nav-menu')

// <<<<<ACTIVE AND REMOVE MENU>>>>>>>>//

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
	// <<<<<<<<< ACTIVE LINK >>>>>>> //

	navLink.forEach(n => n.classList.remove('active'));
	this.classList.add('active');

	// <<<<<<<<< REMOVE MENU MOBILE >>>>>>> //
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// <<<<<<<<<<<SCROLL SECTION LINK >>>>>>>>>>>>>>>>//
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollUP = window.pageUPoffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop -50;
		sectionId = current.getAttribute('id')

		if (scrollUP > sectionTop && scrollUP <= sectionTop + sectionHeight) {
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
		}
		else {
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}
window.addEventListener('scroll', scrollActive)

// <<<<<<<<<<<<<<<< SCROLL UP BY BUTTON >>>>>>>>>>>>>>>>>//
function scrollHeader(){
	const nav = document.getElementById('header')

	if (this.scrollUP >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// <<<<<<<<<<<<< SCROLL TOP >>>>>>>>>>>>>>//
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');

	if(this.scrollUP >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// <<<<<<<<<<<<< DARK MODE >>>>>>>>>>>>>>>//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Getting the Dark Theme after validating the dark-theme class......

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//Giving validation to previous selection of MODES.........
if (selectedTheme) {

	// If the validation is sucessfull,is to about the activation of DARK-MODE & deactivation........
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// ACTIVATION & DEACTIVATION  the by click button...
themeButton.addEventListener('click', () =>{
	// remove & add dark mode theme by icon changing..
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// Get the current theme & icon chosen....
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

// <<<<<<<<<<<< SCROLL REVEAL ANIMATION >>>>>>> //
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: true
});

// <<<<<<<<<<< SCROLL HOME >>>>>>>>>>>>> //
sr.reveal('.home_title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home_img',{delay: 400});
sr.reveal('.home_social-icon',{interval: 200});

// <<<<<<<<<<<< SCROLL ABOUT >>>>>>>>> //
sr.reveal('.about_img',{});
sr.reveal('.about_subtitle',{delay: 400});
sr.reveal('.about_text',{delay: 400});

// <<<<<<<<<<<< SCROLL SKILLS >>>>>>>>>>>>> //
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills_img', {delay: 400});

// <<<<<<<<<<<< SCROLL PROJECT >>>>>>>>>>>>> //
sr.reveal('.work_img', {interval: 200});


// <<<<<<<<<<< SCROLL CONTACT >>>>>>>>>>>> //
sr.reveal('.contact_subtitle', {});
sr.reveal('.contact_text', {interval: 200});
sr.reveal('.contact_input', {delay: 400});
sr.reveal('.contact_button', {delay: 600});
