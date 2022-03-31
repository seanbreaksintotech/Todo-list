const tabs = document.querySelectorAll(".sidetabs li");
const contents = document.querySelectorAll(".content");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('form-popup');


//function to switch between active tabs
tabs.forEach((tab, index) =>{
    tab.addEventListener("click", () =>{
        tabs.forEach(tab => tab.classList.remove("active"))



        tab.classList.add("active");

        contents.forEach(content => content.classList.remove("active"))
        
        contents[index].classList.add("active");


    });
    
})

//todo class

class todoList{
    constructor(title,description,dates,priority){
        this.title = title,
        this.description = description,
        this.dates = dates,
        this.priority = priority
    }
    

}

//function to add todo to list

function addTodoToList(todo){
    

    const tasklist = document.querySelector("#generalbox")
    const task = document.createElement('div')

    task.innerHTML = `
    
    <div id = "todolist">
    <p class = "todotitle">${todo.title}</p>


  <div id= "todos">
 
        <button class="detailbtn"><ion-icon name="ellipsis-horizontal"></ion-icon></button>
   <button id = "todobtn" class="todobtn"><ion-icon name="trash-outline"></ion-icon></button>
    
  </div>

</div>
 `
tasklist.appendChild(task)



//remove task from todolist

function deleteTodo(div){
    if(div.classList.contains("todobtn")){

        div.parentElement.parentElement.remove()
    }
}

tasklist.addEventListener('click', (e) =>{

    deleteTodo(e.target)
})


//view details of task 
function viewDetail(div){

    const modal = document.getElementById("myModal");
    const details = document.createElement('div')


    if(div.classList.contains("detailbtn")){
        modal.style.display = "block"
        
}

details.innerHTML= `
<div class = "modalcontents">
<p>Description:</p>
<p>Due Date:</p>
<p> Priority:</p>

</div> `

modal.appendChild(details)


}

tasklist.addEventListener('click', (e) =>{
    viewDetail(e.target)
})
}

// to see details of todo



const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




popup.addEventListener('submit', (e) =>{
    e.preventDefault();
    const title = document.querySelector("#title").value
    const description = document.querySelector('#textarea').value
    const dates = document.querySelector('#day').value
  


    const todo = new todoList(title,description,dates)
    addTodoToList(todo);
closeForm();
clear();

})

function clear(){
    const title = document.querySelector("#title").value = " ";
    const description = document.querySelector('#textarea').value = " ";
    const dates = document.querySelector('#day').value = " ";
  
}

//tab display on refresh
tabs[0].click();






//function to only select one priority in form popup
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}


//to open and close form popup
function openForm() {
    document.getElementById("form-popup").style.display = "block";
    overlay.classList.add("active");
    popup.classList.add("active");
  }
  
  function closeForm() {
    document.getElementById("form-popup").style.display = "none";
    overlay.classList.remove("active")
  }












