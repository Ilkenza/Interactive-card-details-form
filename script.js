const number = document.querySelector("#number")
const cname = document.querySelector("#name")
const datem = document.querySelector("#m")
const datey = document.querySelector("#y")
const cvc = document.querySelector("#cvc")

const form = document.querySelector("form")
const thank = document.querySelector(".thank")

const inpnumb = document.querySelector("#c-num")
const inpname = document.querySelector("#n")
const inpdy = document.querySelector("#dy")
const inpdm = document.querySelector("#dm")
const inpcvc = document.querySelector("#c")

const ername = document.querySelector("#error-c-name")
const ernumb = document.querySelector("#error-c-num")
const erexp = document.querySelector("#error-date")
const ercvc = document.querySelector("#error-cvc")

const btn = document.querySelector("#btn")
const button = document.querySelector("#button")

const nameregex = /^[A-Za-z]{1,}\s[A-Za-z]{1,}$/
const numbregex = /^(\d{4}\s){3}\d{4}$/
const datemregex = /^(0[1-9]|1[0-2])$/
const dateyregex = /^2[3-9]$|3[0]$/
const cvcregex = /^[0-9]{3,4}$/



inpnumb.addEventListener('input', () => {
    inpnumb.value = inpnumb.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    number.textContent = inpnumb.value || "0000 0000 0000 0000";
});

inpname.addEventListener("input", () => {
    inpname.value = inpname.value.replace(/[0-9]/g, '');
    cname.innerText = (inpname.value && inpname.value.replace(/\d{4}(?=.)/g, "$& ")) || "Jane Appleseed";
});


inpcvc.addEventListener('input', () => {
    inpcvc.value = inpcvc.value.replace(/[^0-9]/g, '');
    cvc.textContent = inpcvc.value || "000";
});

[inpdm, inpdy].forEach((input) => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        datem.textContent = inpdm.value || "00";
        datey.textContent = inpdy.value || "00";
    });
});


btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (!nameregex.test(inpname.value)) {
        ername.style.display = "flex"
    } else { ername.style.display = "none" }

    if (!numbregex.test(inpnumb.value)) {
        ernumb.style.display = "flex"
    } else { ernumb.style.display = "none" }

    if (datemregex.test(inpdm.value) && dateyregex.test(inpdy.value)) {
        erexp.style.display = "none"
    } else { erexp.style.display = "flex" }

    if (!cvcregex.test(inpcvc.value)) {
        ercvc.style.display = "flex"
    } else { ercvc.style.display = "none" }
    if (nameregex.test(inpname.value) &&
        numbregex.test(inpnumb.value) &&
        datemregex.test(inpdm.value) &&
        dateyregex.test(inpdy.value) &&
        cvcregex.test(inpcvc.value)) {
        thank.style.display = "flex"
        form.style.display = "none"
    }
})
button.addEventListener("click", () => {
    form.style.display = "block"
    thank.style.display = "none"
})