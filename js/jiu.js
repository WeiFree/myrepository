$(function(){
	$(".pic1").hover(
		function(){
			$(this).animate({width:"20%"}).siblings().animate({width:"11.2%"})
		},
		function(){
			$(".pic1").stop(true,false);
			$(".pic1").animate({width:"12.3%"})
			$(this).children(".bywenzi").hide(800);
		}
	)
	$(".pic1").on("click",function(){
		$(this).animate({width:"65%"}).siblings().animate({width:"4.8%"})
		$(this).children(".bywenzi").slideDown(650);
	})
	$(".bywenzi span").on("click",function(){
		$(this).parent(".bywenzi").hide(800)
		$(".pic1").animate({width:"12.3%"})
	})
	$(".zhiwei li").on("click",function(){
		var index=$(this).index();
		$(this).addClass("xz").siblings("li").removeClass("xz");
		$(".nr1").eq(index).addClass("block").siblings(".nr1").removeClass("block")
	})
	$(window).on("scroll",function(){
		if($(window).scrollTop()>=3000){
		$(".wenzi2").slideDown(200);
		var j=500;
		console.log(1111)
		for(var i=0;i<13;i++){
			
			$(".wenzi2 span").eq(i).show(j);
			
			j=j+100;
		}
	}
			
	})
	$(".cptu a").hover(function(){
		$(this).children("img").addClass("cptuhov");
		$(this).children("div").fadeIn(500)
	},function(){
		$(this).children("img").removeClass("cptuhov");
		$(this).children("div").fadeOut(500)
	}
	)

})
