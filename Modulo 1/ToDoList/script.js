const LOCAL_STORAGE_KEY = 'todo:lab365'
const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
const ul = document.querySelector('[data-ul]') //list of new todos
const doneList = document.querySelector('[data-done]') //list of completed todos
const searchInput = document.querySelector('[data-search]')
const modal = document.querySelector('dialog') //tag <dialog>
const editForm = document.editForm //form open on modal when click to edit todo
const editInput = document.querySelector('#editInput') //input inside editForm

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

            check(span, li)
        })
    },    
    // REMOVE ALL <li> FROM HTML
    clear() {
        while(ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild)
        }
    }
}

//* SEARCH FUNCTION
function search(){

    App.clear() //CLEAR DE <ul> TO SHOW ONLY FOUND ITENS
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
            const{li, span, editBtn, deleteIcon} = createLi(result)
            
            editBtn.addEventListener('click', () => {
                console.log("editBtn clicado");
                editItem(span.textContent)
            })

            deleteIcon.addEventListener('click', () => {
                removeItem(span.textContent)
                li.remove()
            })
        })
    }
}

const handleSearch = document.searchForm.addEventListener('input', search)


//* FORM TO ADD A NEW TODO
document.form.addEventListener('submit', e => {
    e.preventDefault()

    const todoText = document.form.taskName.value
    if(todoText == null || todoText === "") return
    const{li, span, editBtn, deleteIcon} = createLi(todoText)

    App.save(todoText)

    editBtn.addEventListener('click', () => {
        console.log("editBtn clicado");
        editItem(span.textContent)
    })

    deleteIcon.addEventListener('click', () => {
        removeItem(span.textContent)
        li.remove()
    })
    
    check(span, li)
       
    document.form.taskName.value = null
})


// CRIA O <LI> NO HTML
function createLi(todoText) {
    // create a <li> tag
    const li = document.createElement('li')
    // create a <span> tag
    const span = document.createElement('span')
    span.innerText = todoText //<span> content = todo content

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

    let index = todoList.findIndex(todo => todo.toLowerCase() == todoName.toLowerCase())
    console.log('index:' +index)

    todoList.splice(index, 1) //remove o item
    // Salva a nova Lista
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
}

function editItem(name) {
    console.log('editItem chamado')
    modal.showModal()
    editInput.value = name
    let index = todoList.findIndex(
        (todo) => todo.toLowerCase() == name.toLowerCase()
    )
    
    editForm.addEventListener('submit', (e) => {
        e.preventDefault()
        todoList[index] = editInput.value
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
        editInput.value = null
        modal.close()
        App.clear()
        App.render()
    })
}

function check(span, li) {
    li.addEventListener("dblclick", () => {
        console.log('span clicado')
        span.classList.toggle('complete')

        span.classList.contains('complete')
            ? doneList.appendChild(li)
            : ul.appendChild(li)
    })
}

document.onload = App.render()