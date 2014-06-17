/* Author:http://www.raiantspace.com

*/

jQuery(document).ready(function(){
		
	//IMAGE FIT
	jQuery(".imgFill").imgLiquid({fill:true});
	
	//RESPONSIVE NAV
	var navigation = responsiveNav(".navigation", {
        animate: true,        // Boolean: Use CSS3 transitions, true or false
        transition: 250,      // Integer: Speed of the transition, in milliseconds
        label: "Menu",        // String: Label for the navigation toggle
        insert: "after",      // String: Insert the toggle before or after the navigation
        customToggle: "",     // Selector: Specify the ID of a custom toggle
        openPos: "relative",  // String: Position of the opened nav, relative or static
        jsClass: "js",        // String: 'JS enabled' class which is added to <html> el
        init: function(){},   // Function: Init callback
        open: function(){},   // Function: Open callback
        close: function(){}   // Function: Close callback
      });


    jQuery(".item figure").on("click", function(){
        jQuery(".item figure.active").removeClass("active");
        jQuery(this).addClass("active");
    });

    jQuery(window).on('load resize', function(){
        if (jQuery(this).width() >= 770){
            jQuery(window).bind("scroll", function(){
                var sticky_offset = jQuery('.sticky').height();
                var scroll_top = jQuery(window).scrollTop();
                if (scroll_top > sticky_offset) { 
                    jQuery('.sticky').addClass("motion").css({
                        'position': 'fixed', 
                        'top': 0, 
                        'left': 0,
                        'z-index' : 999 
                    });
                }else{
                    jQuery('.sticky').css({
                        "position" : "relative",
                        "top" : 0
                    });
                }   
            });
        };
    });



     	
});



