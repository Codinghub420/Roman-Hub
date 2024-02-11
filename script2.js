function convert(num){
    const ones=["","I","II","III","IV","V","VI","VII","VIII","IX"];
    const tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    const hundreds=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    const thousands=["","M","MM","MMM"];
    let ans = thousands[Math.floor(num/1000)] + hundreds[Math.floor((num%1000)/100)] + tens[Math.floor((num%100)/10)] + ones[num%10];
    document.querySelector('#result').innerHTML = ans;
    if(num>=4000){
        document.querySelector('#result').innerHTML = "Error!";
        document.querySelector('#result').style.textalign="center";
        alert("abe 3999 max hota hai");
    }
}
function reset(){
    window.location.reload();
}