const todoList = document.querySelector('#todo-list');
const submit = document.querySelector('#submit');
const text = document.querySelector('.input');
const filterOption = document.querySelector('.filter');

//Events
document.addEventListener('DOMContentLoaded', getList)
submit.addEventListener("click", getInput);
todoList.addEventListener('click', act);
filterOption.addEventListener("click", filterList)

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
    saveList(text.value);
    text.value = "";
    
}
function act(e){
    const item = e.target;
console.log(item.classList);
    if(item.classList[0] === "del-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocal(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }
    if(item.classList[0] === "confirm-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('complete');
        
    }
}

function filterList(e){
 const todos = todoList.childNodes;
 console.log(todos);
 todos.forEach(function(x){
     switch(e.target.value){
         case "all":
             x.style.display = "flex";
             break;
         case "completed":
             if(x.classList.contains('complete')){
                x.style.display = "flex";
             }else{
                 x.style.display = "none";
             }
                break;
         case "uncomplete":
            if(!x.classList.contains('complete')){
                x.style.display = "flex";
             }else{
                 x.style.display = "none";
             }
             break;
     }
 });
}

function saveList(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getList(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   todos.forEach(function(todos){
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
    newTodo.innerText = todos;
    //APPENDING THE ELEMENT
    div.appendChild(newTodo)
    div.appendChild(cnfrmBtn);
    div.appendChild(delBtn);
    todoList.appendChild(div);
   });
}
function removeLocal(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const index = todo.children[0].innerText;
    todos.splice(todos.indexOf(index),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}