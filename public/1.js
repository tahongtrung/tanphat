 $(function(){

 	//hàm thêm 1 class vào 1 class
	$('.nutmenu').click(function(){
		$('.menutrai').addClass('ra');
		return false;
	})

	//hàm xóa 1 class khỏi 1 class
	$('.tat').click(function(){
		$('.menutrai').removeClass('ra');
		return false;
	})
	 
})  
 