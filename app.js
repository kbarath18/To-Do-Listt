


var container = document.querySelector("#container");

function addTask(){
    var inputBox = document.querySelector("input").value;
    let newElement = document.createElement("h2");
    newElement.textContent = inputBox;

   
    container.appendChild(newElement);

   


    

    var input = document.querySelector("input").value = "";

    if (inputBox.value === "") {
        inputBox.setAttribute("placeholder", placeholder);
    } 

    // for(let i = 0;i<document.querySelectorAll("h2").length;i++){
    //     document.querySelectorAll("h2")[i].addEventListener("click", function (event) {
    //         event.target.remove();
            
    //     });
    
    // }

    for(let i = 0;i<document.querySelectorAll("h2").length;i++){
        document.querySelectorAll("h2")[i].addEventListener("click", function(event){
            var taskName = event.target.textContent;
            var h2Element = event.target;

            h2Element.innerHTML = "<del>" + taskName + "</del>"


        })
    }
  
}

document.querySelector("input").addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        addTask();
    }
})













