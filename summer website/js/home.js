$('.text').hover(function () {
    $(this).animate({'height':'10vw'}, 1000)
    $('.text1').fadeTo(1000, 1)
}, function() {
    $(this).animate({'height':'5vw'}, 1000)
    $('.text1').fadeTo(1000, 0)
})

