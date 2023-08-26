/*num = 0
num1=0
num2=0


//first set

document.getElementById("btn1").onclick=function(){
    num=num+1
    console.log(num);
    document.getElementById('head').innerHTML=num;
}

document.getElementById('btn2').onclick=function(){
    num=0
    console.log(num);
    document.getElementById('head').innerHTML=num;
}
document.getElementById("btn3").onclick=function(){
    num=num-1
    console.log(num);
    document.getElementById('head').innerHTML=num;
    if(num<=0){
        alert("Hey you choosing negative number");
        num=0
        document.getElementById("head").innerHTML="error";
    }
}

//second set

document.getElementById("btn4").onclick=function(){
    num1=num1+1
    console.log(num1);
    document.getElementById('head2').innerHTML=num1;
}

document.getElementById('btn5').onclick=function(){
    num1=0
    console.log(num1);
    document.getElementById('head2').innerHTML=num1;
}
document.getElementById("btn6").onclick=function(){
    num1=num1-1
    console.log(num1);
    document.getElementById('head2').innerHTML=num1;
}

//Result section 

// document.getElementById("btn7").onclick=function(){

//     if(check7.checked){
//         num2=num+num1
//     console.log(num)
//     document.getElementById("head3").innerHTML=num2;
//     }
//     else{
//         alert("please check the operation")
//     }
// }
document.getElementById("btn8").onclick=function(){
    num2=num-num1
    console.log(num2);
    document.getElementById("head3").innerHTML=num2;

}
document.getElementById("btn9").onclick=function(){
    num2=num*num1
    console.log(num2);
    document.getElementById("head3").innerHTML=num2;

}
document.getElementById("btn10").onclick=function(){
    num2=num/num1
    console.log(num2);
    document.getElementById("head3").innerHTML=num2;

}

document.getElementById("btn11").onclick=function(){
    if (check7.checked){
        num2=num+num1
        console.log(num2)
        document.getElementById("head3").innerHTML=num2;
    }
    else{
        alert("sddddddddddd");
    }
}*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((result) => console.log(result));
