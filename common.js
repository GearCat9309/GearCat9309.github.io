window.onload = function() {
  onLoad();
}
//登錄
function login(){
	function callBack1(json){
		$("#rtnMessage")[0].innerText = " 登錄成功。";
		$("#logArea").hide();
		$("#id")[0].value = json[1];
		$("#token")[0].value = json[2];
		$("#name")[0].innerText = json[3];
		$("#count")[0].value = "1";
		//讀取現金
		function callBack2(json){
			$("#money")[0].innerText = json[1];
			if(Number(json[1])<1000)
				$("#btnNoMoneyHelp").show();
			else
				$("#btnNoMoneyHelp").hide();
			//都做完了再完整顯示使用者資訊區塊
			$("#userProfile").show();
		}
		parameter = "CasinoUserData?ID="+$("#id")[0].value+"&Token="+$("#token")[0].value
		azureAjax(parameter,callBack2);
	}
	var parameter = "Login?Account="+$("#account")[0].value+"&Password="+$("#password")[0].value;
	azureAjax(parameter,callBack1);
}
//註冊
function register(){
	function callBack(json){
		$("#rtnMessage")[0].innerText = json[1];
	}
	var parameter="Register?Account="+$("#account")[0].value+"&Password="+$("#password")[0].value+"&Name="+$("#registerName")[0].value;
	azureAjax(parameter,callBack);
}