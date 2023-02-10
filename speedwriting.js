let starting=document.getElementById("submit")
let inp=document.getElementById("text")
let seconds=document.getElementById("third")
let start=document.getElementById("start")
let end=document.getElementById("end")
let first=document.getElementById("first")
let second=document.getElementById("second")
console.log(end)
let arrywords =[
"start",
"form",
"html",
"ali",
"mostafa",
"marwan",
"amira",
"first",
"play",
"run",
"ibrahim",
"walk",
"fish",
"fat",
"small",
"fast",
"walk",
"gamal",
"smart",
"manal",
"look"
];

let normal_second=3;
let starting_score=0;
let end_score =arrywords.length;
let level1="normal"
let level2="easy"
let level3="hard"
starting.onclick=function(){
  inp.style.display="block"
    this.remove()
    inp.focus()
    first.innerHTML=level1
    second.innerHTML=normal_second
    seconds.innerHTML=normal_second;
    start.innerHTML=starting_score;
    end.innerHTML=arrywords.length;
    generate();
    timer();
}

  let mainword=document.getElementById("mainword")
let temp;
function generate(){
 
    let random=arrywords[Math.floor(Math.random()*arrywords.length)]
    arrywords.indexOf(random)
  let indexword=arrywords.indexOf(random)
  arrywords.splice(indexword,1)
  temp = random
  mainword.innerHTML=random

  
}


function timer(){
  let time =setInterval(() => {
    seconds.innerHTML--
    if(seconds.innerHTML ==0){
      clearInterval(time)
      if(inp.value == temp){
        if(arrywords.length >0){
          start.innerHTML++
          generate()
            inp.value=""
            seconds.innerHTML = normal_second
            timer()
        }else{
          start.innerHTML++
          document.getElementById("lose").innerHTML="congratulate"
          document.getElementById("lose").style.color="blue"
          setTimeout(()=>{
             location.reload()
          },3000)
        }
            
      
      }else{
        document.getElementById("lose").innerHTML="you are lose"
        document.getElementById("lose").style.color="red"
        setTimeout(()=>{
           location.reload()
        },2000)
      }
    }
  }, 1000);
}
    
  
 
