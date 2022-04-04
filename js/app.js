let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators =["+", "-", "*", "/", "%"];

let filter = x =>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if (current.length >= 10){
        return false;
    }

    if(current == "0" && x != "." ){

            clearLast()

    }

    if (operators.includes(x) && operators.includes(lastChar)){
    
            return false;   

    }

    return true;
}

let showInDisplay = x=> {
    if(filter(x)){
        displayBox.innerText += x;
    }
}

let clearLast =_=> displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1)
let clearAll= _ => displayBox.innerText="";
let calc = _=>{
    //displaybox ကနောက်ဆုံးအလုံးက operators မ ဖြစ်မှတွက်မယ်
    if (!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
       
        displayBox.innerHTML = eval(displayBox.innerText)

    }
};

keyPad.addEventListener("click",_=>{
    if(displayBox.innerText.length >10){
        displayBox.style.fontSize =35+"px";
    }else if(displayBox.innerText.length >5){
        displayBox.style.fontSize =60+"px";
    }
})