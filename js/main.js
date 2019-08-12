$(document).ready(function() {
  const pageId = $('main').attr('id')
  switch (pageId) {
    case 'main-page':{
      initMainPageFunctions()
      break
    }
  }
})

function initMainPageFunctions() {
  salesSlider()
}
function salesSlider() {
  $('.first_section__slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  })
}