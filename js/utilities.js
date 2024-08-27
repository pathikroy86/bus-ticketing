
function getValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.innerText;
    return inputValue;
}
function newLiField(inputId, value) {
    const newLi = document.createElement("li");
    newLi.innerText = value;
    document.getElementById(inputId).appendChild(newLi);
}