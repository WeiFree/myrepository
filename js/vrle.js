$(function(){
	var num=0;
	var accoount=$(".lunbo li").length;
	var timer=null;
	for(var i=0;i<accoount;i++){
        var span=$("<span>"+(i+1)+"</span>")
        span.appendTo($(".suqers"))
    }
	$(".suqers span").eq(0).addClass("cur");
	$(".lunbo li:not(:first-child)").hide();
	$(".suqers span").on("click",function(){
		var index=$(this).html()-1;
		num=index;
		$(".lunbo li").fadeOut(500).siblings().eq(index).fadeIn(1000)
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	function autoPlay(){
		if(num>=(accoount-1)){
        num=0;
    }else{
     ++num;
    }
	$(".suqers span").eq(num).trigger("click");    
	}
    timer=setInterval(autoPlay,2000);
    
    $(".lunbo").hover(function(){clearInterval(timer)}, function(){timer = setInterval(autoPlay, 3000);});
    
   $.ajax({
	 	type:"get",
	 	url:"js/vrle.json",
	 	datatype:"json",
	 	success:function(date){
	 		for(var i=0;i<date.dateid.length;i++){
	 		var t=date.dateid[i].title;	
	 		var d=date.dateid[i].day;
	 		var n=date.dateid[i].nr;
	 		var p=date.dateid[i].pic;
	 		var s=date.dateid[i].share;
	 		$(".list-left ul").append($("<li><h2>"+t+"</h2><span>"+d+"</span><p>"+n+"</p><img src='img/vrle/ggxq/"+p+".png'/>"+s+"</li>"))
	 		}
	 	}
})
   })
