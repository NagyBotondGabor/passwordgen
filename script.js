const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const specChars = "$~+!%=();_*?@&#<>[]"

// Generáló gomb működtetése:
document.getElementById("generateBtn").onclick = handleClick;

function handleClick() {
    const values = getInputValue();
    console.log(value);
}
// Üzenetet küldő eljárás:
function sendMessage(message) {
    alert(message);
}

// Értékek kinyerése. Ha hiányzik érték az inputból, akkor üzenetet küldünk, input-ra helyezzük a fókszt, és null-t adunk vissza.
function getInputValue() {
    const inputElements = document.querySelectorAll("input");
    const values = [];
    if (inputElements.length > 0) {
        for (const element of inputElements) {
            if (element.value === ""){
                sendMessage("Minden adat megadása szükséges");
                input.focus();
                return {};
            }
                
        }
        //values.push(Number(input.value));
        values[inputElements[index].id] = inputElements[index.value]
    }
    return values //TODO értékek listáját adja vissza
}
function createPsswdPart(count,collection){
    for (let i = 0; i < count ; i++){
        passwd.push(collection[Math.floor(Math.random()*collection.length)])
    }
}
function getReadyPassw(values){
    const donePassword = [];
    for (let key in values ){
        
    }
}