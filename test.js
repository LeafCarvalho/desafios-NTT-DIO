function printRoman(number)
{
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        console.log(sym[i]);
    }
    i--;
    }
}
 
//Driver program
 
    let number = 3549;
 
    console.log(printRoman(number))