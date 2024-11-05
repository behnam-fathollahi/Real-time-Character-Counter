const textareaEl = document.getElementById("textarea");
const totalCounrerEl =document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-countainer");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})
updateCounter()

function updateCounter(){
   totalCounrerEl.innerText = textareaEl.value.length;
   remainingCounterEl.innerText = textareaEl.getAttribute("maxLength" )- textareaEl.value.length;
}