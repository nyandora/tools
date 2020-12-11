// 対象ホスト：rview.com
const loginButton = document.getElementById("submit-btn");
const passwordInput = document.getElementById("j_password");

if (loginButton) {
  passwordInput.value = "ログインパスワード";
  loginButton.click();
}
