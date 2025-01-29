document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      
      navigation: {
        nextEl: '.slider-btn.next',
        prevEl: '.slider-btn.prev',
      },
      
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },
      
      on: {
        init: function () {
          initializeCardHoverEffects();
        }
      }
    });
  });
  
  function initializeCardHoverEffects() {
    document.querySelectorAll('.food-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        if (!this.closest('.swiper-slide-active')) {
          this.style.transform = 'translateY(-10px)';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        if (!this.closest('.swiper-slide-active')) {
          this.style.transform = 'translateY(0)';
        }
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    const cartModal = document.getElementById('cartModal');
    const backToMenuBtn = document.getElementById('backToMenuBtn');

    cartIcon.addEventListener('click', function() {
      cartModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    backToMenuBtn.addEventListener('click', function() {
      cartModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  
    cartModal.addEventListener('click', function(e) {
      if (e.target === cartModal) {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  const requestButton = document.querySelector('.request-button');
  const requestModal = document.getElementById('requestDishModal');
  const cancelRequestBtn = document.getElementById('cancelRequestBtn');
  const requestDishForm = document.getElementById('requestDishForm');

  requestButton.addEventListener('click', function() {
    requestModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  cancelRequestBtn.addEventListener('click', function() {
    requestModal.classList.remove('active');
    document.body.style.overflow = '';
    requestDishForm.reset();
  });

  requestModal.addEventListener('click', function(e) {
    if (e.target === requestModal) {
      requestModal.classList.remove('active');
      document.body.style.overflow = '';
      requestDishForm.reset();
    }
  });

  requestDishForm.addEventListener('submit', function(e) {
    e.preventDefault();
    requestModal.classList.remove('active');
    document.body.style.overflow = '';
    requestDishForm.reset();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');
  
    if (playButton && video) {
      playButton.addEventListener('click', function() {
        if (video.paused) {
          video.play();
          playButton.style.display = 'none';
        }
      });
  
      video.addEventListener('ended', function() {
        playButton.style.display = 'block';
      });
  
      video.addEventListener('pause', function() {
        playButton.style.display = 'block';
      });
  
      video.addEventListener('play', function() {
        playButton.style.display = 'none';
      });
  
      video.addEventListener('click', function() {
        if (video.paused) {
          video.play();
          playButton.style.display = 'none';
        } else {
          video.pause();
          playButton.style.display = 'block';
        }
      });
    }
  });