$(function(){
	$("#dowebok").fullpage({
		navigation: true,
		navigationPosition:"left",
		navigationColor:"#fff",
		resize:true
	}	);
	$(".four li p").hover(function(){
		$(this).addClass("hov")
	},function(){
		$(this).removeClass("hov")
	}
	)
})
