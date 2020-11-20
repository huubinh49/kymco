$carousel = $(".showcase__content-carousel");
$carousel.flickity({
    adaptiveHeight:true,
    imagesLoaded: true,
    contain:true,
    groupCell: 3,
})
window.onresize = ()=>{
    $carousel.flickity('resize')
}
window.onloadeddata = ()=>{
    $carousel.flickity('resize')
}

const $list = $(".list");
$list.each(
    (i, list)=>{
        let options = Array.from(list.children);
        options.forEach(
            opt =>{
                opt.onclick = ()=>{
                    options.forEach(opt => opt.classList.remove("--selected"));
                    opt.classList.add("--selected");
                }
            }
        )   
    }
)
const data = [
    {
        "img_section":"",
        "img_small_section": "",
        "title": "THOẢI MÁI VI VU THÀNH THỊ",
        "description": "Các sản phẩm với thiết kế sang trọng, tiện lợi, phù hợp để di chuyển trong thành phố.",
        "description_second": "Bao gồm Like 50, Candy Hi 50, People One 125",
        "carousel":[
            {
                "name": "LIKE 50",
                "img":"",
                "price": "23.490.000 VND"
            },
            {
                "name": "CANDY HI 50",
                "img":"",
                "price": "23.100.000 VND"
            },
            {
                "name": "PEOPLE ONE 125",
                "img":"",
                "price": "40.390.000 VND"
            },
        ]
    },
    {
        "img_section":"",
        "img_small_section": "",
        "title": "TẬN THƯỞNG CẢM GIÁC PHIÊU LƯU",
        "description": "Các sản phẩm với thiết kế thể thao, mạnh mẽ, phù hợp cho những chuyến du lịch, phượt...",
        "description_second": "Bao gồm K-pipe 50, K-pipe 125",
        "carousel":[
            {
                "name": "K-PIPE 50",
                "img":"",
                "price": "20.500.000 VND"
            },
            {
                "name": "K-PIPE 125",
                "img":"",
                "price": "24.490.000 VND"
            }
        ]
    },
    {
        "img_section":"",
        "img_small_section": "",
        "title": "ĐẲNG CẤP DOANH NHÂN THÀNH ĐẠT",
        "description": "Dòng sản phẩm cao cấp của Kymco",
        "description_second": "Bao gồm X-Town",
        "carousel":[
            {
                "name": "AK-550",
                "img":"",
                "price": "CHƯA CÔNG BỐ"
            }
        ]
    },
]

//tabs toggle
const allTitle = document.querySelector(".products__tabs .tabs__header .--all");
const filterTitle = document.querySelector(".products__tabs .tabs__header .--demand");
const $allSection = $(".products__showcase")
const $filterSection = $(".products__filter")
allTitle.onclick = ()=>{
    allTitle.classList.add("--selected");
    filterTitle.classList.remove("--selected");
    $allSection.css(
    {
        display : "flex"
    
    });
    $filterSection.css(
    {
        display : "none"
    
    });
}
filterTitle.onclick = ()=>{
    filterTitle.classList.add("--selected");
    allTitle.classList.remove("--selected");
    $filterSection.css(
    {
        display : "flex"
    
    });
    $allSection.css(
    {
        display : "none"
    
    });
}
//animation range input
$priceRange = $(".price-range__slider");
const $pointMin = $(".price-range__slider .point.--min");
const $pointMax = $(".price-range__slider .point.--max");
const $minPrice = $("#min-price");
const $maxPrice = $("#max-price");
const MAX_PRICE = 127000000;
const MIN_PRICE = 13500000;
let target = null;
let isHolding = false;
document.onmousedown = (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("point"))
    {
        target = e.target;
        holding(e);
        isHolding = true;
    }
}
function holding(e) {   
    e.preventDefault();
    document.onmouseup = exitDrag;
    document.onmousemove = drag;
  }
const calcPercent = (a, b)=>{
    return a/b*100;
}
const formatMoney = (a)=>{
    return new Intl.NumberFormat('de-DE').format(a.toFixed(0))
}
function drag(e){
    e.preventDefault();
    if(isHolding && target){
        let dis = 0;
        if(target.classList.contains("--max")){
            dis = Math.max(Math.max(calcPercent($pointMin.position().left, $priceRange.width()), 0), Math.min(calcPercent(e.clientX - $priceRange.position().left,$priceRange.width()), 100))
            $maxPrice.text(`${formatMoney(dis*(MAX_PRICE-MIN_PRICE)/100 + MIN_PRICE)} VND`);
        }else{
            dis = Math.max(0, Math.min(calcPercent(e.clientX - $priceRange.position().left,$priceRange.width()), Math.min(calcPercent($pointMax.position().left, $priceRange.width()), 100)))
            $minPrice.text(`${formatMoney(dis*(MAX_PRICE-MIN_PRICE)/100 + MIN_PRICE)} VND`);
        }
        
        target.style.left = `${dis}%`;
    }
}
function exitDrag(){
    document.onmouseup = null;
    document.onmousemove = null;
    isHolding =false;
    target = null;
}