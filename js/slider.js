$(function () {

    let allImg = $('.slider .all-img img'),
        imgMin = $('.slider .img-min'),
        btnNext = $('.slider .next'),
        btnPrev = $('.slider .prev'),
        action1 = {width: "0"},
        action2 = {width: "100%"};

    $('.Horizontal').on('click' , function () {

        action1 = {width: 0};
        action2 = {width: "100%"};
    });

    $('.linear').on('click' , function () {

        action1 = {height: 0};
        action2 = {height: '80%'};
    });

    $('.flash').on('click' , function () {

        action1 = {opacity: 0};
        action2 = {opacity: 1};
    });

    imgMin.css('backgroundImage',"url(" + allImg.first().attr('src') + ")");

    allImg.on('click', function () {
        imgMin.stop();
        allImg.removeClass('active');
        $(this).addClass('active');

        imgMin.animate(action1, 'fast', _ => {

            imgMin.css({backgroundImage: "url(" + $(this).attr('src') + ")"})
                .animate(action2 , 500)

        });
    });

    btnNext.on('click', function () {
        imgMin.stop();
        if (!$('.slider .all-img div').has('.active').is(':last-child')) {

            $('.slider .all-img img.active').parent().next().children().click()
        }else {

            allImg.first().click()
        }

    });

    btnPrev.on('click', function () {
        imgMin.stop();

        if (!$('.slider .all-img div').has('.active').is(':first-child')) {

            $('.slider .all-img img.active').parent().prev().children().click()
        }else {

            allImg.last().click()
        }
    });

});