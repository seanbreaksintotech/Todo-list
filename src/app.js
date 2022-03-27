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












