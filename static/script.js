
const nameInput = document.querySelector("#name-input");
const passInput = document.querySelector("#pass-input");
const pname = document.createElement("p");
const ppass = document.createElement("p");
let inputValue;


nameInput.addEventListener("input", ()=> {
    inputValue = nameInput.value
    if (!inputValue || inputValue.length < 1 || inputValue.length > 10)
    {
        nameInput.className = "input-error"
         
        pname.className = "error-name-message";
        pname.textContent = "Имя не короче 1 и не больше 3ёх символов. Без цифр и спец. символов";
         // document.querySelector("#name-input-container").append("Name field required", p);
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
nameInput.addEventListener("blur", ()=> {
    if (!inputValue || inputValue.length < 1 || inputValue.length > 10)
    {
        nameInput.className = "input-error"
        
        pname.className = "error-name-message";
        pname.textContent = "Имя не короче 3-ёх символов";
         // document.querySelector("#name-input-container").append("Name field required", p);
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
    if (!inputValue || inputValue.length < 6 || inputValue.length > 25)
    {
        passInput.className = "input-error"
         
        ppass.className = "error-pass-message";
        ppass.textContent = "Пароль не короче 6 и не длиннее 25 символов.";
         if (!document.querySelector(".error-pass-message"))
         {
            document.querySelector("#pass-input-container").appendChild(ppass);
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


passInput.addEventListener("blur", ()=> {
    if (!inputValue || inputValue.length < 6 || inputValue.length > 25)
    {
        passInput.className = "input-error"
         
        ppass.className = "error-pass-message";
        ppass.textContent = "Пароль не короче 6 и не длиннее 25 символов";
         if (!document.querySelector(".error-pass-message"))
         {
            document.querySelector("#pass-input-container").appendChild(ppass);
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

const handleChange = (isChecked) => {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}