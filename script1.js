function roman(ch){
    switch(ch){
        case'I','i':return 1;
        case'V','v':return 5;
        case'X','x':return 10;
        case'L','l':return 50;
        case'C','c':return 100;
        case'D','d':return 500;
        case'M','m':return 1000;
        default:return 0;
    }
}
function convert(num) {
let len = num.length;
let sum = 0;
for (let i = 0; i < len; i++) {
let char = num.charAt(i);
let value = roman(char);
if (i < len - 1) {
    let nextValue = roman(num.charAt(i + 1));
    if (nextValue > value) {
        sum += nextValue - value;
        i++; 
                        continue;
    }
}
sum += value;
}
document.getElementById('result').innerHTML = sum;
}


function reset(){
    window.location.reload();
}