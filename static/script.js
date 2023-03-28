

const nameInput = document.querySelector("#username-input");
const passInput = document.querySelector("#password-input");
const pname = document.createElement("p");
const ppass = document.createElement("p");
let inputValue;


nameInput.addEventListener("input", ()=> {
    inputValue = nameInput.value
    if (!inputValue || inputValue.length < 3)
    {
        nameInput.className = "input-error"

        pname.className = "error-name-message";
        pname.textContent = "Username should be no less than 3 symbols";
        if (!document.querySelector(".error-name-message"))
        {
            document.querySelector("#name-input-container").appendChild(pname);
        }
    }
    else
    {
        nameInput.className = "correct-input"
        if (document.querySelector(".error-name-message")) {
            document.querySelector(".error-name-message").parentNode.removeChild(document.querySelector(".error-name-message"));
        }
    }
})

passInput.addEventListener("input", ()=> {
    inputValue = passInput.value
    if (!inputValue || inputValue.length < 5)
    {
        passInput.className = "input-error"

        ppass.className = "error-pass-message";
        ppass.textContent = "Password should be no less than 5 symbols.";
        if (!document.querySelector(".error-pass-message"))
        {
            document.querySelector("#password-input-container").appendChild(ppass);
        }
    }
    else
    {
        passInput.className = "correct-input"
        if (document.querySelector(".error-pass-message")) {
            document.querySelector(".error-pass-message").parentNode.removeChild(document.querySelector(".error-pass-message"));
        }
    }
})



    const link = document.getElementById("theme-link");

    function ChangeTheme() {
        let light = "light.css";
        let dark = "dark.css";

        let currTheme = link.getAttribute("href");
        let theme = "";

        if (currTheme == light) {
            currTheme = dark;
        } else {
            currTheme = light;
        }

        link.setAttribute("href", currTheme);
    }
