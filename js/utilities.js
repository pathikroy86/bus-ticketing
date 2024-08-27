
function newLiField(inputId, value) {
    const newLi = document.createElement("li");
    newLi.innerText = value;
    document.getElementById(inputId).appendChild(newLi);
}
function removeDisable(inputId) {
    const field = document.getElementById(inputId);
    field.removeAttribute("disabled");
}