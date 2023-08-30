const emailInput = document.getElementById("email")
const errorSpan = document.querySelector(".alert span")
const submitButton =document.getElementById("button")
const modal = document.getElementById("modal")
const modalEmail= document.getElementById("modalEmail")
const closeModalButton = document.querySelector("#modal button")




submitButton.addEventListener("click", (event) => {
event.preventDefault();

const email = emailInput.value.trim()

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(email === "" || !emailRegex.test(email)){
errorSpan.textContent = 'Valid email required';
emailInput.classList.add("error")
emailInput.setAttribute("placeholder", "Not Filled")
}else{
    errorSpan.textContent = ""
    emailInput.value = ""
    emailInput.classList.remove("error")
    modal.style.display = "block"
    modalEmail.textContent = email


}

})




closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"
    
})


window.addEventListener("load", () => {
    emailInput.classList.remove("error")

})