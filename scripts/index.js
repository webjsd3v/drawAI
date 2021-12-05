const features = document.querySelector('.features');
const lead = document.querySelector('.lead');
const samples = document.querySelector('.samples');
let mySwiper

function mobileSlider(slider){
    if(window.innerWidth <= 620 && slider.dataset.parent == 'false'){
         mySwiper = new Swiper( slider ,{
            slidesPreView: 1,
            slideClass: 'swiper-slide',
            pagination:{
                el: '.swiper-pagination',
                clickable: true,
            }
        })
        slider.dataset.parent = "true"
    }

    if(window.innerWidth > 620){
        slider.dataset.parent = "false";
        if(slider.classList.contains('swiper-initialized')){
            mySwiper.destroy()
        }
    }
}


mobileSlider(features)
mobileSlider(lead)
mobileSlider(samples)


window.addEventListener('resize', () => {
    mobileSlider(features)
    mobileSlider(lead)
    mobileSlider(samples)
})