/**
 * 
 */
 
$(function(){

 
	$("button#joinBtn").click(function(){
		let uidVal = $("#userid").val();
		let pwdVal = $("#password").val();
		let emailVal = $("#email").val();
		
		if(uidVal == "" || pwdVal == "" || emailVal == "" ) {
			alert("가입 정보를 모두 입력하세요.");
			$("#userid").focus();
			return false;
		} else {
		
			let user = { 
				userid: uidVal, 
				password: pwdVal, 
				email: emailVal 
			}
			alert(user.email);  	// alert() 출력은 객체의 항목을 지정해야 합니다.
			console.log(user);
			
			
			$.ajax({
				type: "POST",
				url: "/join",
				data: JSON.stringify(user),
				contentType: "application/json; charset=utf-8"
			}).done(function(response){
				console.log(response);
				location="/";     // 주석처리 하면 처리결과를 
						  // Console에서 확인할 수 있습니다.
			}).fail(function(error){
				alert("에러 발생 : " + error);
			});
			
			
		} 
	});

});