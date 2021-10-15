const todoList = document.querySelector('#todo-list');
const submit = document.querySelector('#submit');
const text = document.querySelector('.input')

//Events
submit.addEventListener("click", getInput);
todoList.addEventListener('click', act)

//Event Functions
function getInput(e) {
    e.preventDefault(); //PREVENT FROM REFRESHING
    //CREATE A NEW ELEMENT
    const div = document.createElement("div");
    const newTodo = document.createElement('li');
    const cnfrmBtn =document.createElement('button'); 
    const delBtn = document.createElement('button');
    cnfrmBtn.innerHTML = '<i class="fas fa-check"></li>';
    delBtn.innerHTML = '<i class="fas fa-trash"></li>';
    //ADD A CLASS
    div.classList.add("list-container");
    newTodo.classList.add("todo");
    cnfrmBtn.classList.add('confirm-btn');
    delBtn.classList.add('del-btn');
    //GETTING THE TEXT
    newTodo.innerText = text.value;
    //APPENDING THE ELEMENT
    div.appendChild(newTodo)
    div.appendChild(cnfrmBtn);
    div.appendChild(delBtn);
    todoList.appendChild(div);
    text.value = "";
    
}
function act(e){
    const item = e.target;
console.log(item.classList);
    if(item.classList[0] === "del-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "confirm-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }
}