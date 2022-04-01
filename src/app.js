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
    <a href="#"><span class="tooltip"></span></a>
    <span class="tooltip">   <h1> Details </h1>
        <p> ${todo.description}</p>
        <p>  </p>
    </span>

    <p class = "todotitle">${todo.title}</p>


  <div id= "todos">
 
    <p> ${todo.dates}</p>
   <button id = "todobtn" class="todobtn"><ion-icon name="trash-outline"></ion-icon></button>
    
  </div>

    </div>


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
   
}

// to see details of todo






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












