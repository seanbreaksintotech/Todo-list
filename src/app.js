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
 
        <button class="todobtn"><ion-icon name="ellipsis-horizontal"></ion-icon></button>
   <button class="todobtn"><ion-icon name="trash-outline"></ion-icon></button>
    
  </div>

</div>
 `
tasklist.appendChild(task)
 
}

popup.addEventListener('submit', (e) =>{
    e.preventDefault();
    const title = document.querySelector("#title").value
    const description = document.querySelector('#textarea').value
    const dates = document.querySelector('#day').value
   


    const todo = new todoList(title,description,dates)
    addTodoToList(todo);
closeForm();

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












