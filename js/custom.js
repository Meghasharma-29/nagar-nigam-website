// navbar

const header = document.querySelector(".navpage-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 40) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
// end







// HERO SLIDER

const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },
  pagination: {
    el: '.hero-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.hero-next',
    prevEl: '.hero-prev'
  },
  a11y: true
});




// ------------end----------------




// --------logomarquee-------



const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



// -----------end------------


$(document).ready(function () {
  var $owl = $("#team-slid2");

  // Destroy previous instance if already initialized
  if ($owl.hasClass('owl-loaded')) {
    $owl.trigger('destroy.owl.carousel');
    $owl.find('.owl-stage-outer').children().unwrap();
  }

  // Initialize Owl Carousel
  $owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 2000, // smooth transition
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: true,
    responsive: {
      0: { items: 1, nav: true },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false }
    },
    navText: [
      "<span><i class='fa-solid fa-chevron-left'></i></span>",
      "<span><i class='fa-solid fa-chevron-right'></i></span>"
    ]
  });

  // Restart autoplay when mouse leaves
  $owl.on('mouseleave', function () {
    $owl.trigger('play.owl.autoplay', [5000]);
  });

  // ðŸ‘‡ Force autoplay restart when the tab becomes visible again
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      $owl.trigger('play.owl.autoplay', [5000]);
    }
  });
});


// ---------------home-slider------------



$(document).ready(function () {
  const teamSlider = $(".team-carousel");

  teamSlider.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,

    // Autoplay settings
    autoplay: true,
    autoplayTimeout: 3000,       // Wait 3 seconds between slides
    autoplayHoverPause: true,    // Pause when mouse is over the slider
    autoplaySpeed: 1000,         // Smooth autoplay transition

    // Smooth movement
    smartSpeed: 1000,
    slideTransition: "ease-in-out",

    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // Previous arrow
  $(".team-prev").on("click", function () {
    teamSlider.trigger("prev.owl.carousel", [1000]);
  });

  // Next arrow
  $(".team-next").on("click", function () {
    teamSlider.trigger("next.owl.carousel", [1000]);
  });
});





// ----------scrolling-image-js--left-right-----

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.to(".loader", {
    delay: 2,
    opacity: 0,
    duration: 1,
    ease: Power3.easeOut
  });

  let container = document.querySelector(".reveal-inview");
  let image = container.querySelector("img");

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });

  let revealContainers = document.querySelectorAll(".reveal-scroll");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
});


// ----------end-------







// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});






