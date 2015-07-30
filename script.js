var nav = document.getElementsByClassName('nav');
var info = document.getElementsByClassName('info');
var section = document.getElementsByClassName('info-section');
var about = document.getElementsByClassName('section-about');
var resume = document.getElementsByClassName('section-resume');
var works = document.getElementsByClassName('section-works');
var contact = document.getElementsByClassName('section-contact');

document.body.addEventListener("click",function(e){
    if (e.target.nodeName.toLowerCase() == "a") {
        if (e.target.getAttribute('id') == "name") {
            for (var i = 0; i < nav.length; i++) {
                nav[i].style.height = '90%';
                if (e.target.getAttribute('id') == nav[i].getAttribute('id')) e.target.style.backgroundSize = '25%';
                else nav[i].style.backgroundSize = '60%';
            }
            info[0].style.height = '0';
            section[0].style.opacity = '0';

        }
        else {
            for (var i = 0; i < nav.length; i++) {
                nav[i].style.height = '10%';
                if (e.target.getAttribute('id') == nav[i].getAttribute('id')) e.target.style.backgroundSize = '25%';
                else nav[i].style.backgroundSize = '60%';
            }
            info[0].style.height = '80%';
            section[0].style.opacity = '1';
        }

        if (e.target.getAttribute('id') == "about") {
            about[0].style.opacity = '1';
            resume[0].style.opacity = '0';
            works[0].style.opacity = '0';
            contact[0].style.opacity = '0';

            about[0].style.zIndex = '3';
            resume[0].style.zIndex = '2';
            works[0].style.zIndex = '2';
            contact[0].style.zIndex = '2'
        }
        else if (e.target.getAttribute('id') == "resume") {
            about[0].style.opacity = '0';
            resume[0].style.opacity = '1';
            works[0].style.opacity = '0';
            contact[0].style.opacity = '0';

            about[0].style.zIndex = '2';
            resume[0].style.zIndex = '3';
            works[0].style.zIndex = '2';
            contact[0].style.zIndex = '2'
        }
        else if (e.target.getAttribute('id') == "works") {
            about[0].style.opacity = '0';
            resume[0].style.opacity = '0';
            works[0].style.opacity = '1';
            contact[0].style.opacity = '0';

            about[0].style.zIndex = '2';
            resume[0].style.zIndex = '2';
            works[0].style.zIndex = '3';
            contact[0].style.zIndex = '2'
        }
        else if (e.target.getAttribute('id') == "contact") {
            about[0].style.opacity = '0';
            resume[0].style.opacity = '0';
            works[0].style.opacity = '0';
            contact[0].style.opacity = '1';

            about[0].style.zIndex = '2';
            resume[0].style.zIndex = '2';
            works[0].style.zIndex = '2';
            contact[0].style.zIndex = '3'
        }
    }
} );