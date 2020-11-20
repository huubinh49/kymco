$recruitment = $(".recruitment ");

$recruitment.height($recruitment.find(".container").outerHeight())
window.onresize = ()=>{
    $recruitment.height($recruitment.find(".container").outerHeight())
    
};
