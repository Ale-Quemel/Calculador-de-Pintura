let color = document.getElementById('color')
let derecha = document.getElementById('right')
let izq = document.getElementById('front')
color.addEventListener('change',(e)=>{
    console.log(e.target.value);
    derecha.style.background = e.target.value
    izq.style.background = e.target.value
})