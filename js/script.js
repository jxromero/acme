$(document).ready(function() {
    let menuFlag = true;
    setSlick();
    setHeight($(".cards ul li"));
    setHeight($(".event ul .text-box"));
    toggleHeader();

    $('header button').click(function() {
        if(menuFlag) {
            menuFlag = false
            $('header ul').slideToggle('fast', function() {
                menuFlag = true;
                $('body').toggleClass('openDropDown')
            });
        }
    })
})

$(window).resize(function() {
    setHeight($(".cards ul li"));
    setHeight($(".event ul .text-box"));
    toggleHeader();
})

function toggleHeader() {
    let wW = window.outerWidth;
    if(wW > 425) {
        $('header ul').css('display', 'flex')
        $('body').removeClass('openDropDown')
    } else {
        $('header ul').css('display', 'block')
        $('header ul').hide()
    }
}

function setHeight(data){ 
    var maxHeight = 0; 
    var ctr = 0; 
    data.each(function( index ) { 
        $( this ).css("height", ""); 
    }); 
    data.each(function( index ) {
        ctr = $( this ).innerHeight(); 
        if(ctr>maxHeight){ 
            maxHeight = ctr; 
        }; 
    });
    data.each(function( index ) {
        $( this ).css("height", maxHeight + "px"); 
    }); 
}  

function setSlick() {
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: null,
        nextArrow: null,
        responsive: [
          {
            breakpoint: 425,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });
}