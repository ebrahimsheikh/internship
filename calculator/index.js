var buttons = document.getElementsByClassName("number");
var ops  =document.getElementsByClassName("op");
var num1 = 0;
var num2 = 0;
var num1Used = false;
var op = "";

for (var i = 0 ; i < buttons.length ; i++ ) {
    buttons[i].addEventListener("click",function (){
        document.querySelector('#text').value += this.name;
    });
}

for (var i = 0 ; i < ops.length ; i++){
    ops[i].addEventListener("click",function(){
        op = this.name;
        if(num1Used){
            num2 = document.querySelector('#text').value;
        }else{
            num1 = document.querySelector('#text').value;
            num1Used = true;
        }
        document.querySelector('#text').value = "";
    });
}

document.getElementById("Ac").addEventListener("click",function(){
    document.querySelector('#text').value = "";
    num1 = 0;
    num2  =0;
    op = "";
    num1Used = false;

})

document.getElementById("eq").addEventListener("click",function(){
    num2 = document.querySelector('#text').value;
    num1 = calculate(parseFloat(num1),parseFloat(num2),op);
    document.querySelector('#text').value = num1;
    
})

function calculate(var1,var2,op){
    switch (op) {
        case "+":
            console.log(var1+var2);
            return (var1+var2);
            break;
        case "-":
            return var1-var2;
            break;
        case "x":
            return var1*var2;
            break;
        case "/":
            return var1/var2;
            break;
        default:
            break;
    }
}
