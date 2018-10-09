
$(document).ready(function(){


 $("body").niceScroll();



var x =$(" .Downy  .social .fa");
 

x.eq(0).mouseenter(function(){
	$(this).css("color" , "rgba(228,64,95,1)");
});

x.eq(0).mouseleave(function(){
	$(this).css("color" , "#fff");
});




x.eq(1).mouseenter(function(){
	$(this).css("color" , "#274da3");
});

x.eq(1).mouseleave(function(){
	$(this).css("color" , "#fff");
});


x.eq(2).mouseenter(function(){
	$(this).css("color" , "red");
});

x.eq(2).mouseleave(function(){
	$(this).css("color" , "#fff");
});



x.eq(3).mouseenter(function(){
	$(this).css("color" , "#2aa9e0");
});

x.eq(3).mouseleave(function(){
	$(this).css("color" , "#fff");
});


	//tool box function

$(" .gear-check").click(function(){

	$(".color-options").fadeToggle(2000);

});


// change color

var colorli=$(".color-options ul li");

colorli.
eq(0).css("backgroundColor","#e41b17").end()
.eq(1).css("backgroundColor","#009aff").end()
.eq(2).css("backgroundColor","#808080").end()
.eq(3).css("backgroundColor","#654236").end()
.eq(4).css("backgroundColor","#934f15");


//

colorli.click(function(){


	$("link[href*='color']").attr("href",$(this).attr("data-value"));
	
	//console.log();

});

	var scrolltop=$("#scroll-top")

	$(window).on("scroll",function(){

		var sc =$(window).scrollTop();
		if(sc>500){
			$("#scroll-top").fadeIn(1000);
		}
		else{
			$("#scroll-top").fadeOut(1000);
		}

	});


		$("#scroll-top").click(function(){
			$(" html ,body").animate({scrollTop:0},600)
		});


		$(window).scroll(example); 

function example() {
    
    console.log($(window).scrollTop());
};
});



//loading screen


$(window).on("load", function (e) {
		
	$(".sk-cube-grid").fadeOut(1000,function(){
		$("body").css("overflow","auto");
		$(".overlay").fadeOut(2000,function(){
			(this).redove();
		});
	});
})