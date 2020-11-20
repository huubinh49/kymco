$accordian = $(".accordian__tab");

$accordian.each(
    (index, item)=>{
        item.onclick = ()=>{
            if(item.classList.contains("--show")){
                item.classList.remove("--show");
            }else{
                $accordian.each(
                    (index, other)=>{
                        other.classList.remove("--show");
                    }
                )
                item.classList.add("--show");
            }
        }
    }
)

// flickity
