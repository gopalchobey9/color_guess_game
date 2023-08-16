const rgb = document.getElementById('rgb');
const options= document.getElementById('optionContainer');
const scoreContainer = document.getElementById("span");
const spann = document.getElementById("span");
const resett = document.getElementById("reset");
let score=0;
let result=null;



function randomNumber(min,max){
    return min+ Math.floor(Math.random()*(max-min)+1);
}
function randomrgb(){
    const r= randomNumber(0,255);
    const g= randomNumber(0,255);
    const b= randomNumber(0,255);
    return `rgb(${r}, ${g}, ${b})`;    
}

function scoreincre(){
    score+=1;
    console.log(score);
    spann.innerHTML=score;
    
    

}


function validateResult(el) {
const res=el.target.style.backgroundColor;
console.log(result);
console.log(res);
console.log(res===result)
if(res===result){
    scoreincre();
}    
else{
score=0;
}
window.localStorage.setItem('score',score);
startgame();
}

function startgame( ){
    score= Number(window.localStorage.getItem('score')?? 0);
    spann.innerText=score;
    options.innerHTML=null;
     result = randomrgb();
    rgb.innerHTML= result;
    const mynum=randomNumber(0,4);
    console.log(mynum);
    for(let i =1; i<=4; i++){
        const div = document.createElement('div');
        // console.log(randomrgb());
        if(i===mynum){
            div.style.backgroundColor=result;
        }
        else 
        {   
        div.style.backgroundColor=randomrgb();
        }
        div.addEventListener('click',validateResult)
        options.append(div);
        // console.log(div);
    }
}
function resetfun(){
   if( confirm("are u sure to reset ")){
    window.localStorage.setItem('score',"0");
    score=0;
    spann.innerText=0;
    // document.write("reseted")
    console.log("reseted")}
    else {
        console.log("not reseted")
    }
}

window.addEventListener("load",startgame());
// resett.addEventListener('click',resetfun);

