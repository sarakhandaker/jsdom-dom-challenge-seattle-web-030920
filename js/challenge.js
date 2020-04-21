const plus=document.getElementById("plus")
const counter=document.getElementById("counter")
const minus=document.getElementById("minus")
const heart=document.getElementById("heart")
const pause = document.getElementById('pause')
const comment = document.getElementById('comment-form');

let timer= true

function incrementSeconds() {
    if (timer) {
    counter.innerText = parseInt(counter.innerText)+1;
    }
}

const timerVar = setInterval(incrementSeconds, 1000);

plus.addEventListener('click', function(e){
    if (timer){
let num= parseInt(counter.innerText)+1
counter.innerText=`${num}`
    }
})

minus.addEventListener('click', function(e){
let num= parseInt(counter.innerText)-1
if (timer){
counter.innerText=`${num}`
}
})
let likeArray=[]

heart.addEventListener('click', function(e){
    if (timer){
    let counterNum=parseInt(counter.innerText)
    likeArray.push(counterNum)
    let num=count(likeArray, counterNum)
        if (num == 1) {
            let ul = document.getElementsByClassName("likes")[0]
            let li = document.createElement("li")
            li.id=counterNum
            li.innerText=`${counterNum} has been liked ${num} time`
            ul.appendChild(li)}
        else {
            li=document.getElementById(counterNum)
            li.innerText=`${counterNum} has been liked ${num} times`
        }
    }
})

pause.addEventListener('click', function(e) {
    if (timer) {
    timer=false
    pause.innerText = "resume"
    }
    else {
    timer=true
    pause.innerText = "pause"
    }
}
)

  comment.addEventListener('submit', function(e) {
    event.preventDefault();
        let p = document.createElement('p')
        p.innerHTML = document.getElementById('comment-input').value
        document.body.appendChild(p)
        event.target.reset();
  });

  function count(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    return n;
}