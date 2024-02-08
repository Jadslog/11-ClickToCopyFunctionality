const copyBtn = document.querySelector(".copy-btn");
const borderRadiusInput = document.querySelector("#border-radius-input");
const box = document.querySelector(".box");
const toastNotification = document.querySelector(".toast-notification");

const updateBorderRadius = (e) => {
    let borderRadiusValue = e.target.value;

    if (borderRadiusValue > 100){
        borderRadiusValue.value = 100;
        borderRadiusInput.classList.add("error");
        box.style.borderRadius = Math.floor(borderRadiusValue) + "px";

        setTimeout(() => {
            borderRadiusInput.classList.remove("error");
        }, 1000);
    } else {
        borderRadiusInput.classList.remove("error");
    }

    box.style.borderRadius = Math.floor(borderRadiusValue) + "px";
};

borderRadiusInput.addEventListener("input", updateBorderRadius);

const copyText = () => {
    let code = "Text to be copied"

    navigator.clipboard.writeText(code).then(() => {
        console.log("Copied code:", code);
    });
};

copyBtn.addEventListener("click", copyText);