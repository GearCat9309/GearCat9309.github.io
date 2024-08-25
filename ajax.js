//呼叫Azure Function
function azureAjax(parameter, callBack){
	//先清空回傳訊息
	$("#rtnMessage")[0].innerText = "";
	
	var azureUrl="https://onlinegame20240626204926.azurewebsites.net/api/";
	if(document.URL.substring(0,4) == "file")
		azureUrl="http://localhost:7035/api/";
	$.ajax({
		url: azureUrl+parameter,
		timeout: 180000,
		dataType: 'json',
		type: "GET",
		success: function(result){
			var json = result;
			if(json[0] == "Err")
			{
				$("#rtnMessage")[0].innerText = json[1];
			}
			else
				callBack(json);
		},
		error: function (xhr, status, error) {
			alert("ajax連線錯誤: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
		}
	});
}
//每個指令都要檢查Token
function checkToken(process){
	if(id == null)
	{
		alert("請先登錄");
		return;
	}
	
	var num = Number(tc);
	//要求重新給Token
	if(num == 10)
	{
		function ajaxSuccess(json){
			tc = "1";
			token = json[1];
			process();
		}
		var parameter = "TokenRenewal?ID="+id+"&Token="+token;
		azureAjax(parameter,ajaxSuccess);
	}
	else
	{
		tc = num+1;
		process();
	}
}