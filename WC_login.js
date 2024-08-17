class FormSection extends HTMLElement {
	connectedCallback() {
	//登錄
    this.innerHTML = `
	<div class="row justify-content-center" id="logArea">
		<div class="col-6">
			<div class="row mb-1">
				<div class="col-3 px-1 text-center">帳號</div>
				<div class="col-9 px-1">
					<input type="text" class="form-control form-control-sm bg-dark text-white" id="account" maxlength="30"/>
				</div>
			</div>
			<div class="row mb-1">
				<div class="col-3 px-1 text-center">姓名</div>
				<div class="col-9 px-1">
					<input type="text" class="form-control form-control-sm bg-dark text-white" id="registerName" maxlength="30"/>
				</div>
			</div>
		</div>
		<div class="col-6">
			<div class="row mb-1">
				<div class="col-3 px-1 text-center">密碼</div>
				<div class="col-9 px-1">
					<input type="password" class="form-control form-control-sm bg-dark text-white" id="password" maxlength="30"/>
				</div>
			</div>
			<div class="row mb-1">
				<div class="col-12 text-end">
					<button class="btn btn-success btn-sm" onclick="login()">登錄</button> 
					<button class="btn btn-success btn-sm" onclick="register()">註冊</button>
					<input type="text" id="id" style="display:none"/>
					<input type="text" id="token" style="display:none"/>
					<input type="text" id="count" style="display:none"/>
				</div>
			</div>
		</div>
	</div>`;
	//玩家檔案
	this.innerHTML += `
	<div class="row justify-content-center" id="userProfile" style="display:none">
		<div class="col-6">
			<div class="row mb-1">
				<div class="col-3 px-1 text-center">姓名:</div>
				<div class="col-9 px-1">
					<span id="name"></span>
				</div>
			</div>
			<div class="row mb-1">
			</div>
		</div>
		<div class="col-6">
			<div class="row mb-1">
				<div class="col-3 px-1 text-center">現金:</div>
				<div class="col-9 px-1">
					<span id="money"></span>
				</div>
			</div>
		</div>
	</div>`;
  }
}
customElements.define('login-template', FormSection);