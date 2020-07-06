function toggleNavigation(){


    var button = document.getElementById('nav-button');
    var button_state = button.getAttribute('state');

    if (button_state === 'in'){
        slideOut();
        setButtonOutAppearance();
        button.setAttribute('state', 'out');
    }
    else {
        slideIn();
        setButtonInAppearance();
        button.setAttribute('state', 'in');
    }



}

function setButtonOutAppearance() {

}

function setButtonInAppearance() {

}


function slideOut() {
    console.log("in to out");
    var front = document.getElementById('front');
    front.classList.remove('front-slide-in')
    front.classList.add('front-slide-out')

    var back  =  document.getElementById('back');
    back.classList.remove('back-slide-in')
    back.classList.add('back-slide-out')
}


function slideIn() {
    console.log("out to in");
    var front  =  document.getElementById('front');
    front.classList.remove('front-slide-out')
    front.classList.add('front-slide-in')

    var back  =  document.getElementById('back');
    back.classList.remove('back-slide-out')
    back.classList.add('back-slide-in')
}