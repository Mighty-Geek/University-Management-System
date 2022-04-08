const login_button_s = document.querySelector(".s-login");
const login_button_f = document.querySelector(".f-login");
const flash_msg = document.querySelector(".flash-msg");
const first_login = document.querySelector(".first-login");
const second_login = document.querySelector(".second-login");
var name_input = document.getElementById("name-input");
const submit = document.querySelector(".submit");


function flashMsg() {
    flash_msg.classList.remove("delete");
    flash_msg.innerHTML = `<span>🖐 Welcome to IGDTUW portal, ${name_input.value}!</span>`;
}

function enableLogin() {
    first_login.classList.add("delete");
    second_login.classList.remove("delete");
}

login_button_s.addEventListener("click", enableLogin);
login_button_f.addEventListener("click", enableLogin);

submit.addEventListener("click", flashMsg);


