const inputField = document.querySelector('.todoInput');
const myBtn = document.querySelector('.addTask');
const myTodo = document.querySelector('.taskList');
const banner = document.querySelector('.notification');


//========= FUNCTION TO ADD THE TODO =========
function addTodo(){
     const taskText = inputField.value.trim();
    if(taskText !== ''){
        const todoContainer = document.createElement('div');

        todoContainer.classList.add('todoContainer');
        const myList = document.createElement('li');

        myList.textContent = taskText;
         myList.addEventListener('click', () => {
            myList.style.textDecoration = 'line-through';
            myList.style.color = 'rgba(0, 0, 0, 0.5)';
        }
        );
        const deleteBtn = document.createElement('img');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.src = '/test/img/delete-bin-7-line.svg';

        deleteBtn.addEventListener('click', () => {
            myTodo.removeChild(todoContainer);
        });

        todoContainer.appendChild(myList);
        todoContainer.appendChild(deleteBtn);
        myTodo.appendChild(todoContainer);  
        inputField.value = '';
    } else {
        banner.style.display ='block';
        setTimeout(()=>{
            banner.style.display = 'none';
        }, 4000);
    }
}

// ========= EVENTLISTENERS THAT TRIGERS THE FUNCTION =========
myBtn.addEventListener('click', addTodo);

inputField.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        addTodo();
    }
});


