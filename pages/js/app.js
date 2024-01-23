document.addEventListener('DOMContentLoaded', function () {
	// Add smooth scroll behavior to all internal links
	const internalLinks = document.querySelectorAll('a[href^="#"]');
	
	internalLinks.forEach(link => {
	  link.addEventListener('click', function (e) {
		e.preventDefault();
  
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
  
		if (targetElement) {
		  // Scroll smoothly to the target element
		  targetElement.scrollIntoView({
			behavior: 'smooth',
		  });
		}
	  });
	});
  });
  
