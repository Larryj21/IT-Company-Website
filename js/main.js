$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    // functionality for the "Read More" button in the About Us section
    const btnToggle = document.getElementById('btn_toggle');
    const additionalContent = document.getElementById('additional_content');

    btnToggle.addEventListener('click', () => {
        additionalContent.classList.toggle('open');
        if (additionalContent.classList.contains('open')) {
            btnToggle.innerText = 'Read Less';
            btnToggle.setAttribute('aria-expanded', 'true');
        } else {
            btnToggle.innerText = 'Read More';
            btnToggle.setAttribute('aria-expanded', 'false');
        }
    });
    //-------------------------------------------------------------------

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});
<<<<<<< HEAD

        // Mobile menu toggle functionality - FIXED FOR YOUR CSS STRUCTURE
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.header .navbar');
    const header = document.querySelector('.header');
    
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        if (!navbar) return;
        
        // Toggle display and position
        if (navbar.style.display === 'flex' || navbar.classList.contains('show')) {
            navbar.style.display = 'flex';
            navbar.classList.remove('show');
            navbar.style.top = '-120%';
            if (menuBtn) {
                menuBtn.classList.remove('fa-times');
                menuBtn.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
        } else {
            navbar.style.display = 'flex';
            navbar.classList.add('show');
            navbar.style.top = '5.8rem'; // Match your header height
            if (menuBtn) {
                menuBtn.classList.remove('fa-bars');
                menuBtn.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Click event for hamburger menu button
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.header .navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar && (navbar.style.display === 'flex' || navbar.classList.contains('show'))) {
                navbar.style.display = 'none';
                navbar.classList.remove('show');
                navbar.style.top = '-120%';
                if (menuBtn) {
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar && (navbar.style.display === 'flex' || navbar.classList.contains('show'))) {
            const isClickInside = navbar.contains(e.target) || (menuBtn && menuBtn.contains(e.target));
            if (!isClickInside) {
                navbar.style.display = 'none';
                navbar.classList.remove('show');
                navbar.style.top = '-120%';
                if (menuBtn) {
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            }
        }
    });
    
    // Handle window resize - reset menu on desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1000) {
            if (navbar) {
                navbar.style.display = 'flex';
                navbar.classList.remove('show');
                navbar.style.top = 'auto';
                if (menuBtn) {
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            }
        } else {
            // On mobile, if menu is not supposed to be shown, keep it hidden
            if (navbar && !navbar.classList.contains('show')) {
                navbar.style.display = 'none';
                navbar.style.top = '-120%';
            }
        }
    });
    
    // Theme toggle functionality
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    }
    
    function updateThemeIcon(theme) {
        const icon = document.querySelector('#themeIcon');
        if (icon) {
            if (theme === 'dark') icon.className = 'fas fa-sun';
            else icon.className = 'fas fa-moon';
        }
    }
    
    function toggleTheme() {
        let current = document.documentElement.getAttribute('data-theme');
        let newTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    initTheme();
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 35) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    
    function startCounters() {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
    startCounters();
    
    // Owl Carousel initialization
    if (typeof $ !== 'undefined') {
        $('.testimonials-carousel').owlCarousel({ 
            loop: true, 
            margin: 20, 
            nav: false, 
            dots: true, 
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1000: { items: 3 }
            }
        });
        
        $('.clients-carousel').owlCarousel({ 
            loop: true, 
            margin: 20, 
            nav: false, 
            dots: false, 
            autoplay: true, 
            responsive: {
                0: { items: 2 },
                600: { items: 4 },
                1000: { items: 5 }
            }
        });
    }
    
    // Back to top button
    const backBtn = document.querySelector('.back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backBtn.classList.add('show');
            } else {
                backBtn.classList.remove('show');
            }
        });
        
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const allBodies = document.querySelectorAll('.accordion-body');
            const allSpans = document.querySelectorAll('.accordion-header span');
            
            allBodies.forEach(b => {
                if (b !== body) {
                    b.style.display = 'none';
                }
            });
            allSpans.forEach(span => {
                if (span !== this.querySelector('span')) {
                    span.textContent = '+';
                }
            });
            
            if (body.style.display === 'block') {
                body.style.display = 'none';
                this.querySelector('span').textContent = '+';
            } else {
                body.style.display = 'block';
                this.querySelector('span').textContent = '-';
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will get back to you shortly.');
            this.reset();
        });
    }
});
=======
//this code is for smooth scrolling to sections when clicking navbar links, but only if it's the same page (index.html) to avoid interfering with normal navigation to careers.html#section
$(document).ready(function () {
  $(".navbar a").on("click", function (e) {
    const target = this.hash;
    const currentPath = window.location.pathname;
    const linkPath = this.pathname;

    // Only prevent default if it's the SAME page
    if (target && currentPath === linkPath) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 70
        },
        800
      );
    }
    // else → let it navigate normally (to index.html#section)
  });
});
>>>>>>> e2d26bfe76396a9ddf05e4d65b1d4b68a2d22137
