$(function(){
	for(var i=1;i<19;i++){
		$(".gywmul").append($("<li><img src='img/chenggong/"+i+".jpg'/></li>"))
	}
	$(window).on("scroll",function(){
		
		if($(window).scrollTop()>=1700){
			var j=300;
			$(".gywmul").slideDown(300)
			for(var i=0;i<18;i++){
				$(".gywmul li").eq(i).show(j);
				
				j=j+200;
			}
		}
		
	})
	
    $(".gywmul li img").on("click",function(){
    	
       
        if(this.mozRequestFullScreen){
            this.mozRequestFullScreen();
        }else if(this.webkitRequestFullScreen){
            this.webkitRequestFullScreen();
        }else{
            this.requestFullScreen();
        }
    })


})
