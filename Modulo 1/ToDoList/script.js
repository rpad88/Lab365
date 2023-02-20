const LOCAL_STORAGE_KEY = 'todo:lab365'
const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
const ul = document.querySelector('[data-ul]')
const searchInput = document.querySelector('[data-search]')

const App = {
    // acrescenta o item no Array e salva no LocalStorage
    save(task) {
        todoList.push(task)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
    },
    // Renderiza a lista salva adicionando eventos
    render() {
        todoList.forEach(todo => {
            const{li, span, editBtn, deleteIcon} = createLi(todo)

            editBtn.addEventListener('click', () => {
                console.log(span.textContent);
                editItem(span.textContent)
            })
        
            deleteIcon.addEventListener('click', () => {
             removeItem(span.textContent)
             li.remove()
            })
        })
    },    
}

// REMOVE ALL <li> FROM HTML
function clear() {
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild)
    }
}

//* SEARCH FUNCTION
document.searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    clear() //CLEAR DE <ul> TO SHOW ONLY FOUND ITENS
    const search = searchInput.value
    var results = []
    if(search === '' || search == null) {
        App.render()
        return
    }

    if(search.length > 1) {
        results = todoList.filter(item => {
            return item.toLowerCase().includes(search.toLowerCase())
        })
        results.forEach(result => {
            const{li, span, deleteIcon} = createLi(result)
            
                deleteIcon.addEventListener('click', () => {
                 removeItem(span.textContent)
                 li.remove()
                })
        })
    }
})

//* FORM TO ADD A NEW TODO
document.form.addEventListener('submit', e => {
    e.preventDefault()

    const todo = document.form.taskName.value
    if(todo == null || todo === "") return
    const{li, span, editBtn, deleteIcon} = createLi(todo)

    App.save(todo)

    editBtn.addEventListener('click', () => {
        console.log("editBtn clicado");
        editItem(span.textContent)
    })

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

    // EDIT BUTTON
    const editBtn = document.createElement('a')
    editBtn.innerHTML = `
    <span class="material-icons editBtn">
    edit
    </span>`
    
    
    li.appendChild(span) // insert <span> into <li>
    li.appendChild(editBtn)

    // DELETE BUTTON
    const deleteIcon = document.createElement('a')
    deleteIcon.innerHTML = `
    <span class="material-icons deleteIcon">
    delete
    </span>`
    // deleteIcon.classList.add('deleteIcon')
    // Append the <a> inside <li>
    li.appendChild(deleteIcon)

    // append <li> inside <ul>
    ul.appendChild(li)
    return {li, span, editBtn,deleteIcon}
}

function removeItem(todoName) { 
    console.log(`removendo a tarefa: ${todoName}`);

    const index = todoList.findIndex(todo => todo.toLowerCase() == todoName.toLowerCase())
    console.log('index:' +index)

    todoList.splice(index, 1) //remove o item
    // Salva a nova Lista
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
}

function editItem(name) {
    console.log('editItem chamado')
    document.form.taskName.value = name
    let index = todoList.findIndex(
        (todo) => todo.toLowerCase() == name.toLowerCase()
    );
    console.log(`antes: ${todoList[index]}`);
    todoList[index] = document.form.taskName.value
    console.log(`depois: ${todoList[index]}`);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
    document.form.taskName.value = null
    // App.render()
}

App.render()