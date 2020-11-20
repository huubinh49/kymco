const $homeSlider = $(".home-slider .carousel").flickity({
    contain: true,
    adaptiveHeight:true,
    imagesLoaded: true
})


const flkty = $homeSlider.data('flickity');
const number = $(".home-slider__indicator p .current.strong")
const total = $(".home-slider__indicator p .total")
number.text(`${(1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`)
total.text(`${(flkty.slides.length).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`)
$homeSlider.on( 'change.flickity', function( event, index ) {
    number.text(`${(index+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`)
});

// const $cards = $(".products__cards .card");
// $cards.each(
//     (i, card)=>{
//         card.onclick = ()=>{
//             $cards.each(
//                 (i, others) => others.classList.remove(".hovering")
//             )
//             card.classList.add(".hovering")
//         }
//     }
// )
