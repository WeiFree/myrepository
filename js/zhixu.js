$(function(){
	$("li").hover(function(){
		$(this).children("span").stop(true,false).slideDown(500)
		$(this).css("box-shadow","#ccc 0 0 15px ")
	},function(){
	$(this).children("span").stop(true,false).slideUp(500)
	$(this).css("box-shadow","none")
	})
	 $('#dowebok').fullpage();
	 $(".pic").on("click",function(){
	 	$(".mask").css("display","block")
	 	var index=$(".pic").index($(this)); 
	 	$.fn.fullpage.setAllowScrolling(false);
	 	$.ajax({
	 	type:"get",
	 	url:"js/zhixu.json",
	 	datatype:"json",
	 	success:function(date){
	 		
	 		var n=date.dateid[index].name;
	 		var d=date.dateid[index].day;
	 		var t=date.dateid[index].title;
	 		var ad=date.dateid[index].address;
	 		var tx1=date.dateid[index].txt1;
	 		var tx2=date.dateid[index].txt2;
	 		var tx3=date.dateid[index].txt3;
	 		var tx4=date.dateid[index].txt4;
	 		var liT=date.dateid[index].littleTitle;
	 		$(".xxnr-box").html("");
	 		$(".xxnr-box").append($("<img src='img/zhixu/"+n+".jpg' />"));
	 		$(".xxnr-box").append($("<h3>"+t+"</h3>"));
	 		$(".xxnr-box").append($("<p>"+tx1+"</p>"));
	 		if(date.dateid[index].littleTitle!=null||date.dateid[index].littleTitle!=undefined){
	 		$(".xxnr-box").append($("<h5>"+liT[0]+"</h5>"))}
	 		if(date.dateid[index].txt2!=null||date.dateid[index].txt2!=undefined){
	 		$(".xxnr-box").append($("<p>"+tx2+"</p>"));}
	 		if(date.dateid[index].littleTitle!=null||date.dateid[index].littleTitle!=undefined){
	 		$(".xxnr-box").append($("<h5>"+liT[1]+"</h5>"))
	 		}if(date.dateid[index].txt3!=null||date.dateid[index].txt3!=undefined){
	 		$(".xxnr-box").append($("<p>"+tx3+"</p>"));}
	 		if(date.dateid[index].littleTitle!=null||date.dateid[index].littleTitle!=undefined){
	 		$(".xxnr-box").append($("<h5>"+liT[2]+"</h5>"))
	 		}
	 		if(date.dateid[index].txt4!=null||date.dateid[index].txt4!=undefined){
	 		$(".xxnr-box").append($("<p>"+tx4+"</p>"));}
	 		if(date.dateid[index].day!=null||date.dateid[index].day!=undefined){
	 		$(".xxnr-box").append($("<p>"+d+"</p>"));}
	 		if(date.dateid[index].address!=null||date.dateid[index].address!=undefined){
	 		$(".xxnr-box").append($("<p>"+ad+"</p>"));}
	 }
	 })
	 })
	 $(".mask").on("click",function(){
	 	$(this).hide();
	 	$.fn.fullpage.setAllowScrolling(true);
	 	$(".xxnr-box").on("click",function(event){
	 		event.stopPropagation();
	 	})
	 })
})
