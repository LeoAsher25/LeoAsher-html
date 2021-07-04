var typed = new Typed(".typing", {
    strings: ["Coder 🙃", "Gamer 😤", "not Goodboy 😳"],
    typeSpeed: 60,
    backSpeed: 20,
    loop: true
});




var typed = new Typed(".typing-4", {
    strings: ["Nguyễn Văn Hậu", "Leo Asher"],
    typeSpeed: 60,
    backSpeed: 20,
    loop: true
});

$(document).ready(function() {
    $(window).scroll(function() {
        let body = $('html, body');
        let infoSection = $('#home__my-info');
        let hobbiesSection = $('#my-hobbies');
        let contactSection = $('#contact');
        let homeSection = $('.home-section');
        console.log(homeSection.toArray());
        console.log(infoSection.toArray());
        console.log(hobbiesSection.toArray());
        console.log(contactSection.toArray());
        console.log();
        // homeSection.toArray();


        /**         homeSection      */
        homeSection.each(function(i, ele) {
                if (body.scrollTop() >= $(ele).find(".home-section-heading").offset().top - 500) {
                    $(ele).find(".home-section-heading").addClass("showDown");
                }
            })
            /**     end of homeSection */
            /**         infoSection         */
        if ($(infoSection).find(".infor-item") && body.scrollTop() >= $(infoSection).find(".infor-item").offset().top - 500) {
            $(infoSection).find(".infor-item").addClass("showLeft");
        }
        if ($(infoSection).find(".my-infor__img") && body.scrollTop() >= $(infoSection).find(".my-infor__img").offset().top - 500) {
            $(infoSection).find(".my-infor__img").addClass("showLeft");
        }
        if ($(infoSection).find(".contact-me") && body.scrollTop() >= $(infoSection).find(".infor-item").offset().top - 500) {
            $(infoSection).find(".contact-me").addClass("showZoom");
        }

        /**     end of infoSection      */

        /**         hobbiesSection      */
        if ($(hobbiesSection).find(".my-hobbies__item") && body.scrollTop() >= $(hobbiesSection).find(".my-hobbies__item").offset().top - 500) {
            $(hobbiesSection).find(".my-hobbies__item").addClass("showLeft");
        }
        /**         end of hobbiesSection      */

    });
});