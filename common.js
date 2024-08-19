var id;
var token;
var name;
var money;
var tc;
window.onload = function() {
	id = sessionStorage.getItem("id");
	token = sessionStorage.getItem("token");
	name = sessionStorage.getItem("name");
	money = sessionStorage.getItem("money");
	tc = sessionStorage.getItem("tc");
	if(id == null)
	{
		$("#logArea").show();
		$("#userProfile").hide();
	}
	else
	{
		$("#logArea").hide();
		$("#userProfile").show();
	}
	
	if(typeof onLoad === "function" )
		onLoad();
}
//登錄
function login(){
	function callBack1(json){
		$("#rtnMessage")[0].innerText = " 登錄成功。";
		id=json[1];
		token=json[2];
		name=json[3];
		money=json[4];
		tc="1";
		//資料寫入SessionStorage
		sessionStorage.setItem("id",id);
		sessionStorage.setItem("name",name);
		sessionStorage.setItem("token",token);
		sessionStorage.setItem("money",money);
		sessionStorage.setItem("tc",tc);
		//玩家檔案顯示資料
		$('#name')[0].innerText = name;
		$('#money')[0].innerText = money;
		//顯示使用者資料，隱藏登入區塊
		$("#logArea").hide();
		$("#userProfile").show();
		if(typeof afterLogin === "function" )
			afterLogin();
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
//登出
function logout(){
	sessionStorage.setItem("id",null);
	sessionStorage.setItem("name",null);
	sessionStorage.setItem("token",null);
	sessionStorage.setItem("money",null);
	sessionStorage.setItem("tc",null);
	id = null;
	token = null;
	name = null;
	money = null;
	tc = null;
	$("#logArea").show();
	$("#userProfile").hide();
}
//進入其他區域
function Enter(destination,...args){
	//換頁記錄使用者資訊
	if(id != null)
	{
		sessionStorage.setItem("token",token);
		sessionStorage.setItem("money",money);
		sessionStorage.setItem("tc",tc);
	}
	//進電梯需帶入當前樓層
	if(destination == "Elevator")
		sessionStorage.setItem("floorNum",args[0]);
	
	//導向新頁面
	window.location.href = destination + ".html";
}
