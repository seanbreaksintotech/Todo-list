const tabs = document.querySelectorAll(".sidetabs li");
const contents = document.querySelectorAll(".content");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('form-popup');
const popupProject = document.getElementById('popupForm')

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

class projectList{
    constructor(projectTitle){
        this.projectTitle = projectTitle
        
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
        <p> Priority:${todo.priority} </p>
    </span>

    <p class = "todotitle">${todo.title}</p>


  <div id= "todos1">
 
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
   
}

// add to projectlist

function addProject(project){

    const projectList = document.querySelector('#generalbox2')
    const projectTask = document.createElement('div')

    projectTask.innerHTML = `
    <div class ="projectContainer">
         <div class="projects">
                        <h1>${project.projectTitle}</h1>
                        <div>

                            <button id = "projectbtn" class="projectbtn"><ion-icon name="trash-outline"></ion-icon></button>
                        </div> 
                    </div>
                </div>         `

    projectList.appendChild(projectTask)

    function deleteProject(div){
        if(div.classList.contains("projectbtn")){
    
            div.parentElement.parentElement.remove()
        }
        }
    
        projectList.addEventListener('click', (e) =>{
    
       deleteProject(e.target)
        })
}

// general form submit 
    popup.addEventListener('submit', (e) =>{
    e.preventDefault();
    const title = document.querySelector("#title").value
    const description = document.querySelector('#textarea').value
    const dates = document.querySelector('#day').value
    const priority = document.querySelector('.messageCheckbox:checked').value;


    const todo = new todoList(title,description,dates,priority)
    
    addTodoToList(todo);
    

   
   
    closeForm();
    clear();

})

function clear(){
    const title = document.querySelector("#title").value = " ";
    const description = document.querySelector('#textarea').value = " ";
    
  
}

//Project form submit
popupProject.addEventListener('submit', (e) =>{
    e.preventDefault();
    const projectTitle = document.querySelector('#projectTitle').value
    const todoOne = document.querySelector('#todo1').value
    const todoTwo= document.querySelector('#todo2').value
    const todoThree = document.querySelector('#todo3').value
    const todoFour = document.querySelector('#todo4').value
   


    const project = new projectList(projectTitle,todoOne,todoTwo,todoThree,todoFour)

    addProject(project);
    closeTheForm()
})


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

  function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
    overlay2.classList.add("active")
}
  
  function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
    overlay2.classList.remove("active")
}

//local storage

// class Store{
//     static getTodo(){
//         let todos;
//         if(localStorage.getItem('todos')=== null){
//             todos =[];
//         }else{
//             todos = JSON.parse(localStorage.getItem('todos'));
//         }
//         return todos;

//     }

//     static addTodo(todo){
//         const todos = Store.getTodo();

//         todos.push(todo);
//         localStorage.setItem('todos',JSON.stringify(todos));

//     }
//    static removeTodo(title){
//        const todos = Store.getTodo()

//        todos.forEach((todo,index) =>{
//            if(todo.title === title){
//             todos.splice(index, 1);
//            }
//        });
//        localStorage.setItem('todos', JSON.stringify(todos))
//    }
// }

