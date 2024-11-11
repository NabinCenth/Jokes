
let res;
let joke=document.querySelector(".joke");
let promise;
let type;
let nextbtn;
let handleData=async () => {
    promise= await fetch("https://v2.jokeapi.dev/joke/Any");
    res = await promise.json();
    console.log(res.type);
    type=res.type;
    
    if(type=="single"){
        joke.textContent=res.joke;
        } 
  else{
    joke.textContent=res.setup+ " "+res.delivery;
   
}
  }
  handleData();
  document.addEventListener("DOMContentLoaded", () => {
    nextbtn = document.querySelector(".next");
    nextbtn.addEventListener("click", () => {
      handleData();
    });
  });
