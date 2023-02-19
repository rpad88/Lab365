const LOCAL_STORAGE_KEY = 'todo:lab365'
const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
const ul = document.querySelector('[data-ul]')

const App = {
    // acrescenta o item no Array e salva no LocalStorage
    save(task) {
        todoList.push(task)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
    },
    // Renderiza a lista salva adicionando eventos
    render() {
        todoList.forEach(todo => {
            const{li, span, deleteIcon} = createLi(todo)
        
            deleteIcon.addEventListener('click', () => {
             removeItem(span.textContent)
             li.remove()
            })
        })
    },
}

document.form.addEventListener('submit', e => {
    e.preventDefault()

    const todo = document.form.taskName.value
    if(todo == null || todo === "") return
    
    App.save(todo)
    const{li, span, deleteIcon} = createLi(todo)
    
       deleteIcon.addEventListener('click', () => {
        removeItem(span.textContent)
        li.remove()
       })
       
    document.form.taskName.value = null
})


// CRIA O <LI> NO HTML
function createLi(todo) {
    // create a <li> tag
    const li = document.createElement('li')
    // create a <span> tag
    const span = document.createElement('span')
    span.innerText = todo //<span> content = todo content
    
    li.appendChild(span) // insert <span> into <li>

    // Delete icon
    const deleteIcon = document.createElement('a')
    deleteIcon.innerHTML = "&times;"
    deleteIcon.classList.add('deleteIcon')
    // Append the <a> inside <li>
    li.appendChild(deleteIcon)

    // append <li> inside <ul>
    ul.appendChild(li)
    return {li, span, deleteIcon}
}

function removeItem(todoName) { 
    console.log(`removendo a tarefa: ${todoName}`);

    const index = todoList.findIndex(todo => todo.toLowerCase() == todoName.toLowerCase())
    console.log('index:' +index)

    todoList.splice(index, 1) //remove o item
    // Salva a nova Lista
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
}

App.render()