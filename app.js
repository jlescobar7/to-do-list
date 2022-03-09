
let $tituloPpal = document.querySelector('#titulo-ppal')
let $taskCounter = document.querySelector('#contador-tareas-pendientes')
let $newTaskForm = document.querySelector ('.new-task-form')
let $reseFormButtom = document.querySelector('.clear-boton')
let $taskList = document.querySelector('.tasks-list')

let todos =[
    {
        id: 1646783804402,
        description: 'Practicar mucho JavaScript',
        isDone:false
    },
    {
        id: 1646784404784,
        description: 'Aprender funciones del array en js',
        isDone:false
    },
    {
        id: 1646784404784,
        description: 'Aprender mucho Css',
        isDone:false
    }


];


function renderTodos() {
    $taskList.innerHTML=''
    //renderedTask es un ARRAY que retorna todos.map
    let renderedTasks =todos.map(function(task){
        return`
        <li class="task-list-item">
        <button class="button-list check-task-button">
            <i class="fa-regular fa-circle-check"></i>
        </button>
        <span class="task-description">
         ${task.description} 
         </span>
        <botton type="button" class="button-list remove-task-button">
            <i class="fa-regular fa-trash-can"></i>
        </botton>

    </li>`
        
    })
$taskList.innerHTML = renderedTasks.join('')    

}

renderTodos()

