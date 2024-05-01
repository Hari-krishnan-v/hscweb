// Nav Sticky

const mainnav = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 2) {
    mainnav.classList.add('sticky');
  } else {
    mainnav.classList.remove('sticky');
  }
});
// dropdown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-item");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// header_menu

function toggleMenu() {
  let menu = document.querySelector('.header_menu');
  let barsIcon = document.querySelector('.menu_side_area i');

  // Toggle the left position to show/hide the menu
  menu.style.left = menu.style.left === '0px' ? '-250px' : '0px';

  // Toggle the class names between 'fa-bars' and 'fa-xmark'
  if (barsIcon.classList.contains('fa-bars')) {
      barsIcon.classList.remove('fa-bars');
      barsIcon.classList.add('fa-xmark');
  } else {
      barsIcon.classList.remove('fa-xmark');
      barsIcon.classList.add('fa-bars');
  }
}

// slick 

$('.comentslick').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// Any Questions?

document.getElementById('accordionContainer').addEventListener('click', function (event) {
  var target = event.target;

  // Check if the clicked element is an accordion header
  if (target.classList.contains('accordion-header')) {
    var section = target.nextElementSibling;

    // Toggle the active class to trigger the transition
    section.classList.toggle('active');

    // Hide all other sections
    var allSections = document.querySelectorAll('.accordion-section-content');
    allSections.forEach(function (otherSection) {
      if (otherSection !== section && otherSection.classList.contains('active')) {
        otherSection.classList.remove('active');
      }
    });
  }
});








