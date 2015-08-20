$(document).ready(function(){
    var
        sections = $('.contentSection'),
        sAbout = $('#about'),
        sResume = $('#resume'),
        sPortfolio = $('#portfolio'),
        sContact = $('#contact'),
        mmAbout = $('#mmButtonAbout'),
        mmResume = $('#mmButtonResume'),
        mmPortfolio = $('#mmButtonPortfolio'),
        mmContact = $('#mmButtonContact'),
        amMain = $('#amButtonMain'),
        amAbout = $('#amButtonAbout'),
        amResume = $('#amButtonResume'),
        amPortfolio = $('#amButtonPortfolio'),
        amContact = $('#amButtonContact');

    mmAbout.on('click', function(){
        if (sAbout.hasClass('active')){
            sAbout.removeClass('active');
            mmAbout.removeClass('active')
        } else {
            if (sAbout.siblings().hasClass('active')){
                sAbout.siblings().removeClass('active');
                mmAbout.siblings().removeClass('active');
                setTimeout(function(){sAbout.addClass('active');mmAbout.addClass('active')}, 500);
            } else {
                sAbout.addClass('active');
                mmAbout.addClass('active');
            }
        }
    });

    mmResume.on('click', function(){
        if (sResume.hasClass('active')){
            sResume.removeClass('active');
            mmResume.removeClass('active')
        } else {
            if (sResume.siblings().hasClass('active')){
                sResume.siblings().removeClass('active');
                mmResume.siblings().removeClass('active');
                setTimeout(function(){sResume.addClass('active');mmResume.addClass('active');}, 500);
            } else {
                console.log('ok');
                sResume.addClass('active');
                mmResume.addClass('active');
            }
        }
    });

    mmPortfolio.on('click', function(){
        if (sPortfolio.hasClass('active')){
            sPortfolio.removeClass('active');
            mmPortfolio.removeClass('active');
        } else {
            if (sPortfolio.siblings().hasClass('active')){
                sPortfolio.siblings().removeClass('active');
                mmPortfolio.siblings().removeClass('active');
                setTimeout(function(){sPortfolio.addClass('active');mmPortfolio.addClass('active');}, 500);
            } else {
                console.log('ok');
                sPortfolio.addClass('active');
                mmPortfolio.addClass('active');
            }
        }
    });

    mmContact.on('click', function(){
        if (sContact.hasClass('active')){
            sContact.removeClass('active');
            mmContact.removeClass('active');
        } else {
            if (sContact.siblings().hasClass('active')){
                sContact.siblings().removeClass('active');
                mmContact.siblings().removeClass('active');
                setTimeout(function(){sContact.addClass('active');mmContact.addClass('active');}, 500);
            } else {
                console.log('ok');
                sContact.addClass('active');
                mmContact.addClass('active');
            }
        }
    });

    amMain.on('click', function(){
        sections.removeClass('active')
    });

    amAbout.on('click', function(){
        if (sAbout.hasClass('active')){
            sAbout.removeClass('active')
        } else {
            if (sAbout.siblings().hasClass('active')){
                sAbout.siblings().removeClass('active');
                setTimeout(function(){sAbout.addClass('active')}, 500);
            } else {
                sAbout.addClass('active');
            }
        }
    });

    amResume.on('click', function(){
        if (sResume.hasClass('active')){
            sResume.removeClass('active')
        } else {
            if (sResume.siblings().hasClass('active')){
                sResume.siblings().removeClass('active');
                setTimeout(function(){sResume.addClass('active')}, 500);
            } else {
                console.log('ok');
                sResume.addClass('active');
            }
        }
    });

    amPortfolio.on('click', function(){
        if (sPortfolio.hasClass('active')){
            sPortfolio.removeClass('active')
        } else {
            if (sPortfolio.siblings().hasClass('active')){
                sPortfolio.siblings().removeClass('active');
                setTimeout(function(){sPortfolio.addClass('active')}, 500);
            } else {
                console.log('ok');
                sPortfolio.addClass('active');
            }
        }
    });

    amContact.on('click', function(){
        if (sContact.hasClass('active')){
            sContact.removeClass('active')
        } else {
            if (sContact.siblings().hasClass('active')){
                sContact.siblings().removeClass('active');
                setTimeout(function(){sContact.addClass('active')}, 500);
            } else {
                console.log('ok');
                sContact.addClass('active');
            }
        }
    });
});