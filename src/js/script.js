   // navbar animate
   let lastScrollTop = 0;
   let scrollTimeout;
   const navbar2 = document.querySelector('.navbar-news');

   window.addEventListener('scroll', function () {
       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

       if (scrollTop > lastScrollTop) {
           navbar2.style.transform = 'translateY(-100%)';
       } else {
           navbar2.style.transform = 'translateY(0)';
       }

       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

       clearTimeout(scrollTimeout);

       scrollTimeout = setTimeout(function () {
           navbar2.style.transform = 'translateY(0)';
       }, 100);
   });


   
const scrollContainer = document.getElementById("scrollBudaya");
const scrollLeft = document.getElementById("scrollLeftBudaya");
const scrollRight = document.getElementById("scrollRightBudaya");

// Scroll right function
scrollRight.addEventListener("click", function () {
    scrollContainer.scrollBy({
        top: 0,
        left: 300, // Adjust as needed based on your content
        behavior: 'smooth' // Smooth scrolling
    });
});

// Scroll left function
scrollLeft.addEventListener("click", function () {
    scrollContainer.scrollBy({
        top: 0,
        left: -300, // Scroll left by 300 pixels
        behavior: 'smooth'
    });
});

// Update scroll button visibility on scroll
scrollContainer.addEventListener("scroll", function () {
    // Hide left button if at the start
    if (scrollContainer.scrollLeft <= 0) {
        scrollLeft.classList.add("hidden");
    } else {
        scrollLeft.classList.remove("hidden");
    }

    // Hide right button if at the end
    const scrollEnd = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Adding a small tolerance margin to the check
    if (scrollContainer.scrollLeft >= scrollEnd -
        2) { // Small margin (2px) to ensure accurate detection
        scrollRight.classList.add("hidden");
    } else {
        scrollRight.classList.remove("hidden");
    }
});

// Initial button visibility check
window.addEventListener('load', function () {
    if (scrollContainer.scrollLeft <= 0) {
        scrollLeft.classList.add("hidden");
    }
    const scrollEnd = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft >= scrollEnd - 2) { // Small margin for tolerance
        scrollRight.classList.add("hidden");
    }
});

// Scroll Budaya
const scrollContainerMain = document.getElementById("scrollMain");
const scrollLeftMain = document.getElementById("scrollLeftMain");
const scrollRightMain = document.getElementById("scrollRightMain");

let lastClickedButton = null;

// Scroll right function
scrollRightMain.addEventListener("click", function () {
    if (lastClickedButton !== 'right') { // Only allow click if last clicked button wasn't 'right'
        scrollContainerMain.scrollBy({
            top: 0,
            left: 420, // Adjust as needed based on your content
            behavior: 'smooth' // Smooth scrolling
        });
        lastClickedButton = 'right'; // Update last clicked button
    }
});

// Scroll left function
scrollLeftMain.addEventListener("click", function () {
    if (lastClickedButton !== 'left') { // Only allow click if last clicked button wasn't 'left'
        scrollContainerMain.scrollBy({
            top: 0,
            left: -420, // Scroll left by 300 pixels
            behavior: 'smooth'
        });
        lastClickedButton = 'left'; // Update last clicked button
    }
});

document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah default behavior

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 100; // Tinggi navbar atau offset yang diinginkan
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
});

