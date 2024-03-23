// ES5 -> ES6
let input=document.getElementsByTagName('input')[0];
let addBtn=document.querySelector(".add");
let olEl=document.getElementsByTagName('ol')[0];
addBtn.addEventListener("click",()=>{
   if(input.value==""){
        alert("Cannot be emty");
   }else{
    let liEl=document.createElement("li");
    liEl.innerText=input.value;
    olEl.append(liEl);
   input.value="";
   let delbTn=document.createElement("button");
   delbTn.innerHTML="<i class='bi bi-trash3'></i>";
   liEl.append(delbTn)
   let check=document.createElement("button");
   check.innerHTML="<i class='bi bi-calendar-check'></i>";
   liEl.append(check)
   // tag deer class nemdeg ->className
   delbTn.className="del";
   saveData();
   }
   

})
olEl.addEventListener("click",(E)=>{
    console.log(E.target)
    let targetEl=E.target
    let parentparentEl=(targetEl.parentElement).parentElement;
    if(targetEl.className=="bi bi-trash3"){
        parentparentEl.remove();
    }else if(targetEl.className="bi bi-calendar-check"){
    parentparentEl.classList.toggle("checked");                                      
    }
    saveData();
})
//localStorage-> data hadgalah sav
//set Item()-> hadgalah, getItem()->hadgalsnaa duudah
function saveData(){
    localStorage.setItem('ToDo',olEl.innerHTML);
}
function getData(){
    olEl.innerHTML=localStorage.getItem('ToDo')
}
getData();


