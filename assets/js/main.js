/*<<<<<<<<<<<< MENU BAR >>>>>>>>>>>>*/

const showMenu =(toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if(toggle && nav){
		toggle.addEventlistener('click', ()=>{
			nav.classList.toggle('show')
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
	navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventlistener('click', linkAction));

// <<<<<<<<<<<< SCROLL REVEAL ANIMATION >>>>>>> //
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration 2000,
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
sr.reveal('.skill_subtitle', {});
sr.reveal('.skill_name', {distance: '20px', delay: 50, interval: 100});
sr.reveal('.skill_img', {delay: 400});

// <<<<<<<<<<<< SCROLL PROJECT >>>>>>>>>>>>> //
sr.reveal('.work_img', {interval: 200});


// <<<<<<<<<<< SCROLL CONTACT >>>>>>>>>>>> //
sr.reveal('.contact_subtitle', {});
sr.reveal('.contact_text', {interval: 200});
sr.reveal('.contact_input', {delay: 400});
sr.reveal('.contact_button', {delay: 600});