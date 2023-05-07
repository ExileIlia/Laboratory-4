const btn = document.getElementById('btn1'); 
const box = document.getElementById('checkbox'); 

btn.addEventListener('click',(e)=>{
    e.preventDefault(); 
    box.checked = !box.checked;
})


