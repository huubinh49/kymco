const data = [
    {
        title: "SỨ MỆNH CỦA KYMCO",
        description:"Trong suốt hơn năm thập kỷ qua, KYMCO không quên sứ mệnh tạo ra các phương tiện cá nhân tiện lợi và hữu ích trong cuộc sống, từ đó giành được trái tim của người tiêu dùng trên toàn thế giới, trong đó có Việt Nam."
    },
    {
        title: "CÔNG NGHỆ NOODOE",
        description:"Noodoe đặt bạn vào trung tâm của mọi thứ và làm cho mọi khoảnh khắc - từ khi bạn tiếp cận KYMCO. Thông qua từng hành trình, từng nơi bạn đi qua, thậm chí là dừng ở chốt đèn đỏ cũng trở thành một trải nghiệm tuyệt vời và thú vị hơn."
    },
]


const main = document.querySelector("main");

if(main.classList.contains("--home") || main.classList.contains("--product_detail")){
    
const $halfSlider = $(".half-slider__carousel").flickity({
    contain:true,
    adaptiveHeight:true,
    imagesLoaded: true
})
const currentHalfSlider = document.querySelector(".half-slider__indicator .current");
const totalHalfSlider = document.querySelector(".half-slider__indicator .total");
const $line = $(".half-slider__description-title .line");
const title = document.querySelector(".half-slider__description-title h2.title");
const description = document.querySelector(".half-slider__description-description.description");
totalHalfSlider.innerHTML = `${($halfSlider.data("flickity").slides.length).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;


const updateTextHalfSlide = (index)=>{
    title.classList.remove("show");
    description.classList.remove("show");
    title.innerText = (data[index].title);
    description.innerText = (data[index].description);
    setTimeout(()=>title.classList.add("show"), 300);
    setTimeout(()=>description.classList.add("show"), 600);
}
updateTextHalfSlide(0);
$halfSlider.on( 'change.flickity', function( event, index ) {
    currentHalfSlider.innerHTML = `${(index+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
    $line.animate({
        width: "toggle"
    }, 150).animate({
        width: "toggle"
    }, 150)

    updateTextHalfSlide(index%2);
})

}
if(main.classList.contains("--network") ){
    $(".network__map").scalize({
        selector :'.item-point',
        // circle, square, content
styleSelector :'square',
// pulse, pulse2, marker
animationSelector :'',
// custom animation classes
animationPopoverIn :'content--show',
animationPopoverOut :'',

// functions
onInit :null,
getSelectorElement :null,
getValueRemove :null

    });
}