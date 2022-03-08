let input_value = document.querySelector(".input_value");
let buffer = 0;
document
  .querySelector(".number_place")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerHTML);
  });

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerenderScreen();
}
function handleSymbol(value){
    switch (value){
        case "C":
            buffer = '';
            currentTotal = 0;
            previousOperator = null;
            break;
        case "←":
            if(buffer.length === 1){ //if the screen is any single number, always turn it to 0 when deleting
                buffer = '';
            }
            else{
                buffer = buffer.substring(0,buffer.length-1); //delete the numbers one by one
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleNumber(value){
    if(buffer == "0"){
        buffer = value;
    }else{
        buffer += value;
    }
}


function rerenderScreen() {
  input_value.value = buffer;
}
