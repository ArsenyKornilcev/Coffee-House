window.addEventListener("DOMContentLoaded", function () {
	//smooth scrolling through links
	const links = document.querySelectorAll('a[href^="#"]');
	for (let link of links) {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const id = link.getAttribute("href");
			document.querySelector(id).scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}

	const fadeIn = (el, timeout, display) => {
		el.style.opacity = 0;
		el.style.display = display || "block";
		el.style.transition = `opacity ${timeout}s`;
		setTimeout(() => {
			el.style.opacity = 1;
		}, 10);
	};
	const fadeOut = (el, timeout) => {
        el.style.transition = `opacity ${timeout}s`;		
        el.style.opacity = 0;
		setTimeout(() => {
            el.style.display = 'none';
		}, 100);
        
	};
    
	// scroll-up element
	const scrollUp = document.querySelector(".scroll-up");
    let isDisplayed = false;
	window.addEventListener('scroll', function () {
		if (!isDisplayed && this.scrollY > 500) {
            console.log('fadeIn');
			fadeIn(scrollUp, 0.3, 'flex');
            isDisplayed = true;
		} else if(this.scrollY < 500 && isDisplayed){
            console.log('fadeOut');
            isDisplayed = false;
			fadeOut(scrollUp, 0.3);
		}
	});

});
