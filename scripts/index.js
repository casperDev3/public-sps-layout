
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.header__btn_burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuBG = document.querySelector('.burger-menu-bg');
  const menuLinks = document.querySelectorAll('.burger-menu a');
  const closeBtn = document.querySelector('.burger-menu__x');
  const body=document.body;
  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerMenuBG.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('no-scroll')
  });
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
      burgerMenu.classList.remove('active');
      burgerMenuBG.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
  closeBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
    burgerMenuBG.classList.remove('active');
    body.classList.remove('no-scroll');
});


  const ourMindSwiper = new Swiper('.our-mind__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 4,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: '.our-mind__swiper_next',
      prevEl: '.our-mind__swiper_prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1.1,
      },
      479: {
        slidesPerView: 1.7,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  const ourPartners = new Swiper('.our-partners__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: '.our-partners__swiper_next',
      prevEl: '.our-partners__swiper_prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  const ourPartnersAdaptive = new Swiper('.our-partners__swiper-adaptive', {
    loop: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: '.our-partners__swiper_next',
      prevEl: '.our-partners__swiper_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.8,
      },
      479: {
        slidesPerView: 2,
      },
    },
  });
  const teamLife = new Swiper('.team-life__slider', {
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    Infinity: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: '.team-life__swiper_next',
      prevEl: '.team-life__swiper_prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  const developersTabs = new Swiper('.developers__swiper-tabs', {
    loop: true,
    slidesPerView: 9,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 7,
      },
      550: {
        slidesPerView: 9,
      },
      650: {
        slidesPerView: 11,
      },
    },
  });

  // tabs

  const TABS = document.querySelectorAll('.developers__tabs_tab');
  const MAIN_IMAGE = document.querySelectorAll('.developers__image');
  const DEV_POSITION = document.querySelectorAll('.developers__content_dev');

  TABS.forEach((tab) => {
    tab.addEventListener('click', () => {
      TABS.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      const DATA_ATTRIBUTE = tab.getAttribute('data-dev');
      MAIN_IMAGE.forEach((item) => {
        item.classList.add('d-none');
        if (item.getAttribute('data-dev') == DATA_ATTRIBUTE) {
          item.classList.remove('d-none');
        }
      });
      DEV_POSITION.forEach((item) => {
        item.classList.add('d-none');
        if (item.getAttribute('data-dev') == DATA_ATTRIBUTE) {
          item.classList.remove('d-none');
        }
      });
    })
  });


  // principles

  const principlesCard = document.querySelectorAll(".principles__card");

  principlesCard.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    })
  })

  // scroll anim

  const animItems = document.querySelectorAll(".anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('scroll-effect');
        } else {
          if (!animItem.classList.contains("anim-hide")) {
            animItem.classList.remove('scroll-effect');
          }
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300)
});
// -----peralax-------------------------------------------
var rellax = new Rellax('.rellax', {
  center:true
});

// -----steps-------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelector('.portfolio__slider');
  var isDown = false;
  var startX;
  var scrollLeft;

  slider.addEventListener('mousedown', function(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', function() {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', function() {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 2; // Швидкість прокрутки
    slider.scrollLeft = scrollLeft - walk;
  });
});
//acordeon--page----------------------------------------------
const accordionFour = document.querySelectorAll('.global-acordion-page__item')

accordionFour.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.global-acordion-page__item_body')
  const header = accordion.querySelector('.global-acordion-page__item_header')
  header.classList.toggle('active')
    body.classList.toggle('active')
  })
})
//color item----------------------------------------------
const elements = document.querySelectorAll('.tech-case__wrapper_element');
let currentIndex = 0;

function addAndRemoveClass() {
    elements[currentIndex].classList.add('highlight');

    elements[currentIndex].style.webkitFilter = 'grayscale(0%)';
    elements[currentIndex].style.filter = 'grayscale(0%)';
    elements[currentIndex].style.border = '1px solid transparent';
    elements[currentIndex].style.boxShadow = '0px 15px 15px 0px rgba(0, 0, 0, 0.1)';
    elements[currentIndex].style.backgroundColor = 'white';


    const icons = elements[currentIndex].querySelectorAll('i');
    icons.forEach(icon => {
        icon.style.visibility = 'hidden'; 
    });

    const line = elements[currentIndex].querySelector('.element-line');
    const line2 = elements[currentIndex].querySelector('.element-line2');

  
    if (line) {
        line.style.display = 'none';
    }
    if (line2) {
        line2.style.display = 'none';
    }

    setTimeout(() => {
        elements[currentIndex].classList.remove('highlight');
        elements[currentIndex].style.webkitFilter = 'grayscale(100%)';
        elements[currentIndex].style.filter = 'grayscale(100%)';
        elements[currentIndex].style.border = '1px solid rgba(153, 153, 153, 1)';
        elements[currentIndex].style.boxShadow = 'none';
        elements[currentIndex].style.backgroundColor = 'transparent';


        icons.forEach(icon => {
            icon.style.visibility = 'visible';
        });

        if (line) {
          line.style.display = 'block';
      }
      if (line2) {
          line2.style.display = 'block';
      }

        currentIndex = (currentIndex + 1) % elements.length;

        
        setTimeout(addAndRemoveClass, 1500); 
    }, 1500); 
}


addAndRemoveClass();