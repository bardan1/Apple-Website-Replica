$(document).ready(function() {
  var slideIndex = 0;
  var slides = $('.slider-container .product2'); 
  var totalSlides = 8;
  var slideWidth = slides.eq(0).outerWidth();
  var rightPressCount = 0; // Counter for right arrow presses

  toggleArrows(); // Initial call to toggle arrows based on initial slide index

  $('.next-slide').click(function() {
    if (slideIndex < totalSlides - 1) { // Check if not at the last slide
      slideIndex++;
      updateSlider();
      toggleArrows();
    }
  });

  $('.prev-slide').click(function() {
    if (slideIndex > 0) { // Check if not at the first slide
      slideIndex--;
      updateSlider();
      toggleArrows();
    }
  });

  function updateSlider() {
    var slideOffset = -slideIndex * slideWidth;
    $('.slider-container').css('transform', 'translateX(' + slideOffset + 'px)');
  }

  function toggleArrows() {
    if (slideIndex === 0) {
      $('.prev-slide').hide(); // Hide previous arrow if at the beginning
    } else {
      $('.prev-slide').show(); // Show previous arrow if not at the beginning
    }
    if (slideIndex === totalSlides - 1) {
      $('.next-slide').hide(); // Hide next arrow if at the end
    } else {
      $('.next-slide').show(); // Show next arrow if not at the end
    }
  }
});

$(document).ready(function() {
  var slideIndex2 = 0; // Change the variable name to distinguish from the first slider
  var slides2 = $('.slider-container2 .product3'); // Select the product3 elements
  var totalSlides2 = 6; // Set the total number of slides for the second slider
  var slideWidth2 = slides2.eq(0).outerWidth(); // Get the width of each slide
  var rightPressCount2 = 0; // Counter for right arrow presses

  toggleArrows2(); // Initial call to toggle arrows based on initial slide index

  $('.next-slide2').click(function() {
    if (slideIndex2 < totalSlides2 - 1) { // Check if not at the last slide
      slideIndex2++;
      updateSlider2();
      toggleArrows2();
    }
  });

  $('.prev-slide2').click(function() {
    if (slideIndex2 > 0) { // Check if not at the first slide
      slideIndex2--;
      updateSlider2();
      toggleArrows2();
    }
  });

  function updateSlider2() {
    var slideOffset2 = -slideIndex2 * slideWidth2;
    $('.slider-container2').css('transform', 'translateX(' + slideOffset2 + 'px)');
  }

  function toggleArrows2() {
    if (slideIndex2 === 0) {
      $('.prev-slide2').hide(); // Hide previous arrow if at the beginning
    } else {
      $('.prev-slide2').show(); // Show previous arrow if not at the beginning
    }
    if (slideIndex2 === totalSlides2 - 1) {
      $('.next-slide2').hide(); // Hide next arrow if at the end
    } else {
      $('.next-slide2').show(); // Show next arrow if not at the end
    }
  }
});

$(document).ready(function() {
  var slideIndex3 = 0; // Change the variable name to distinguish from the first and second sliders
  var slides3 = $('.slider-container3 .product4'); // Select the product4 elements
  var totalSlides3 = 5; // Set the total number of slides for the third slider
  var slideWidth3 = slides3.eq(0).outerWidth(); // Get the width of each slide
  var rightPressCount3 = 0; // Counter for right arrow presses

  toggleArrows3(); // Initial call to toggle arrows based on initial slide index

  $('.next-slide3').click(function() {
    if (slideIndex3 < totalSlides3 - 1) { // Check if not at the last slide
      slideIndex3++;
      updateSlider3();
      toggleArrows3();
    }
  });

  $('.prev-slide3').click(function() {
    if (slideIndex3 > 0) { // Check if not at the first slide
      slideIndex3--;
      updateSlider3();
      toggleArrows3();
    }
  });

  function updateSlider3() {
    var slideOffset3 = -slideIndex3 * slideWidth3;
    $('.slider-container3').css('transform', 'translateX(' + slideOffset3 + 'px)');
  }

  function toggleArrows3() {
    if (slideIndex3 === 0) {
      $('.prev-slide3').hide(); // Hide previous arrow if at the beginning
    } else {
      $('.prev-slide3').show(); // Show previous arrow if not at the beginning
    }
    if (slideIndex3 === totalSlides3 - 1) {
      $('.next-slide3').hide(); // Hide next arrow if at the end
    } else {
      $('.next-slide3').show(); // Show next arrow if not at the end
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var searchIcon = document.getElementById("searchIcon");
  var searchBar = document.getElementById("searchBar");
  var closeSearch = document.getElementById("closeSearch");

  searchIcon.addEventListener("click", function() {
    searchBar.style.display = "block";
  });

  closeSearch.addEventListener("click", function() {
    searchBar.style.display = "none";
  });
});
