let sliders = document.querySelectorAll('.slider');
let inputs = document.querySelectorAll('[type="radio"]');
sliders = [...sliders];
inputs = [...inputs];

let previousSlide = document.querySelector('.previous-icon'),
    nextSlide = document.querySelector('.next-icon');


ChangeSlide();

inputs.forEach(input => {
    input.addEventListener("click", function(e) {
        inputs.forEach(input => {
            input.removeAttribute('checked');
        })
        e.target.setAttribute('checked', "");

        sliders.forEach(slider => {
            slider.classList.remove('active');
        })
        sliders[[].indexOf.call(inputs, e.target)].classList.add('active');

        ChangeSlide();
    })
});

function nextSlideFunc() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('checked')) {
            inputs[i].removeAttribute('checked');
            sliders[i].classList.remove('active');
            if (i + 1 < inputs.length) {
                inputs[i + 1].setAttribute('checked', "");
                sliders[i + 1].classList.add('active');

            } else {
                inputs[0].setAttribute('checked', "");
                sliders[0].classList.add('active');
            }
            ChangeSlide();
            return;
        }
    }

}

function previousSlideFunc() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('checked')) {
            currentSlide = i;
            inputs[i].removeAttribute('checked');
            sliders[i].classList.remove('active');
            if (i - 1 >= 0) {
                inputs[i - 1].setAttribute('checked', "");
                sliders[i - 1].classList.add('active');

            } else {
                inputs[inputs.length - 1].setAttribute('checked', "");
                sliders[inputs.length - 1].classList.add('active');
            }
            ChangeSlide();
            return;
        }
    }
}

nextSlide.addEventListener("click", nextSlideFunc);
previousSlide.addEventListener("click", previousSlideFunc);

function ChangeSlide() {
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('active')) {
            sliders[i].style.transform = `translate3d(0%, 0, 0px)`;
            sliders[i].style.opacity = `1`;
            for (let j = i + 1; j <= i + Math.floor(sliders.length / 2); j++) {
                let ind = j;
                if (j >= sliders.length) {
                    ind = j - sliders.length;
                }
                sliders[ind].style.transform = `translate3d(${Math.abs(j-i) * 30}%, 0, ${(-1) * Math.abs(j-i) * 100}px)`;
                sliders[ind].style.opacity = `${1 - parseFloat(Math.abs(j - i) / 10 * 1.5)}`;
            }
            for (let j = i - 1; j >= i - Math.floor(sliders.length / 2); j--) {
                let ind = j;
                if (j < 0) {
                    ind = sliders.length + j;
                }
                sliders[ind].style.transform = `translate3d(${(-1) * Math.abs(j-i) * 30}%, 0, ${(-1) * Math.abs(j-i) * 100}px)`;
                sliders[ind].style.opacity = `${1 - parseFloat(Math.abs(j - i) / 10 * 1.5)}`;
                console.log(`${1 - parseFloat(Math.abs(j - i) / 10 * 1.5)}`)
            }
        }
    }
}