// Sticky Nav
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 30) {
      $('.navbar').addClass('fixed-top scroll-down')
    } else {
      $('.navbar').removeClass('fixed-top scroll-down')
    }
  })
})



// Animate on scroll logic
AOS.init({
  once: true,
  easing: 'ease-in-out',
  offset: 160,
  duration: 600,
})

// Slick Slider Configuration for my-work images
$(document).ready(function () {
  $('.slider-mobile').slick({
    slidesToShow: 3,
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  })
})

// Slick Slider Configuration for my-work images
$(document).ready(function () {
  $('.slider-gallery').slick({
    slidesToShow: 4,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  })
})

// Logic for dropdown toggle on mobile (gallery)
$(function () {
  $('.gallery li a').click(function () {
    $('.dropdown-gallery:first-child').text($(this).text())
    $('.dropdown-gallery:first-child').val($(this).text())
  })
})

// Logic for dropdown toggle on mobile (my-work)
$(function () {
  $('.my-work li a').click(function () {
    $('.dropdown-my-work:first-child').text($(this).text())
    $('.dropdown-my-work:first-child').val($(this).text())
  })
})

// logic to change active tab pane for gallery section on mobile
$(document).ready(function () {
  $('.gallery li a').on('click', function () {
    $('.gallery li a').removeClass('active')
    $(this).addClass('active')
    var href = $(this).attr('href').substring(1)
    $('.tab-pane-gallery').removeClass('active show')
    $('.tab-pane-gallery[id="' + href + '"]').toggleClass('active show')
  })
})

// logic to change active tab pane for my-work section on mobile
$(document).ready(function () {
  $('.my-work li a').on('click', function () {
    $('.my-work li a').removeClass('active')
    $(this).addClass('active')
    var href = $(this).attr('href').substring(1)
    $('.tab-pane-my-work').removeClass('active show')
    $('.tab-pane-my-work[id="' + href + '"]').toggleClass('active show')
  })
})

// Hover config for patners section svg images
$('.svg-hover')
  .mouseover(function () {
    $(this).attr('src', $(this).data('hover'))
  })
  .mouseout(function () {
    $(this).attr('src', $(this).data('src'))
  })

// logic to insert clicked image into the modal
$('.image').on('click', event => {
  let src = event.target.src
  $('.image_modal').attr('src', src)
})

// logic to insert texts and information on clicked image into modal
$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var name = button.data('name')
  var date = button.data('date')
  var modal = $(this)
  modal.find('.couple-name').text(name)
  modal.find('.wedding-date').text(date)
})

$('.magnify').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  tLoading: 'Loading image #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
})
