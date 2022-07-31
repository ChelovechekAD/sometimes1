function swap_type_sidebar(type){
    if(type == 'catalog'){

        //Catalog

        $('.catalog_key').css({"border-bottom-right-radius":"0px","border-bottom":"none", "border-top":"1px solid black", "border-top-right-radius":"10px", "background":"rgba(255,255,255,0.5)"});
        $('.block_catalog_key').css({"background":"rgba(150,150,150,0.8)"});
        $('.filter_key').css({
            "border-bottom": "1px solid black",
            "border-bottom-left-radius": "10px",
            "border-top-left-radius": "0px",
            "border-top": "none",
            "background":"rgba(150, 150, 150, 0.8)"
        });  
        $('.block_filter_key').css({"background":"none"});
        $('.First_line').show();
        $('.filters').hide();
    }else {

        //FIlter

        $('.filter_key').css({
            "border-top": "1px solid black",
            "border-bottom":"none",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "10px",
            "background":"rgba(255, 255, 255, 0.5)",
        });
        $('.block_catalog_key').css({"background":"none"});
        $('.block_filter_key').css({"background":"rgba(150,150,150,0.8)"});
        $('.catalog_key').css({
            "border-top":"none",
            "border-top-right-radius":"0px",
            "border-bottom": "1px solid black",
            "border-bottom-right-radius": "10px",
            "background":"rgba(150, 150, 150, 0.8)"
        });  
        $('.First_line').hide();
        $('.filters').show();
    }
}


// Functions for filter fields.

    function price_base(){
       
       var $array_price = document.querySelectorAll('.footer_blocks > .price > p');
       max = $array_price[0].textContent;
       for(let i = 0; i < $array_price.length; i++){
            var test = $array_price[i].textContent;
            if(test < max){
                max = test;
            }
       }
       alert(max);
    }
price_base();
