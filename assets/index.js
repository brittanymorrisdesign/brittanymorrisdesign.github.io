$(document).ready(function() {
  // parallax js
  $(document).ready(function() {
    const $window = $(window);
    $('section[data-type="background"]').each(function() {
      const $bgobj = $(this); // assigning the object

      $(window).scroll(function() {
        const yPos = -($window.scrollTop() / $bgobj.data('speed'));

        // Put together our final background position
        const coords = `50% ${yPos}px`;

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
      });
    });
  });

  // menu transition js
  $(document).ready(function() {
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('.navbar').addClass('navbar-scroll');
      } else {
        $('.navbar').removeClass('navbar-scroll');
      }
      if (scroll > 200) {
        $('.navbar').addClass('bg-fade');
      } else {
        $('.navbar').removeClass('bg-fade');
      }
    });
  });

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const { hash } = this;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  const navMain = $('.navbar-collapse'); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on('click', 'a:not([data-toggle])', null, function() {
    navMain.collapse('hide');
  });

  // Scroll Button
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('.scroll-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow', function() {});
  });
});
