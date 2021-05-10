let sliders = document.querySelectorAll('.slider');
let inputs = document.querySelectorAll('[type="radio"]');
sliders = [...sliders];
inputs = [...inputs];

NextSlide();

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

        sliders.forEach(slider => {
            console.log(slider)
        })

        NextSlide();
    })

});


function NextSlide() {
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('active')) {
            sliders[i].style.transform = `translate3d(0%, 0, 0px)`;

            for (let j = i + 1; j <= i + Math.floor(sliders.length / 2); j++) {
                let ind = j;
                if (j >= sliders.length) {
                    ind = j - sliders.length;
                }
                sliders[ind].style.transform = `translate3d(${Math.abs(j-i) * 30}%, 0, ${(-1) * Math.abs(j-i) * 100}px)`;

            }
            for (let j = i - 1; j >= i - Math.floor(sliders.length / 2); j--) {
                let ind = j;
                if (j < 0) {
                    ind = sliders.length + j;
                }
                sliders[ind].style.transform = `translate3d(${(-1) * Math.abs(j-i) * 30}%, 0, ${(-1) * Math.abs(j-i) * 100}px)`;
            }
        }
    }
}