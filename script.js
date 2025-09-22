    function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active')); 
      document.getElementById(pageId).classList.add('active');
    }
    

const heroImages = document.querySelectorAll(".hero-sec img");
let currentIndex = 0;

setInterval(() => {
    // remove active from current
    heroImages[currentIndex].classList.remove("active");

    // move to next image
    currentIndex = (currentIndex + 1) % heroImages.length;

    // add active to new image
    heroImages[currentIndex].classList.add("active");
}, 3000); // change every 3s
