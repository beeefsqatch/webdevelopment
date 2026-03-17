const taskList = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function renderTasks(){
    taskList.innerHTML=""

    tasks.forEach((task,index)=>{
        const li=document.createElement("li")

        const span=document.createElement("span")
        span.textContent=task.text

        if(task.completed) span.classList.add("completed")

        span.onclick=()=>{
            task.completed=!task.completed
            saveTasks()
            renderTasks()
        }

        const del=document.createElement("button")
        del.textContent="❌"
        del.onclick=()=>{
            tasks.splice(index,1)
            saveTasks()
            renderTasks()
        }

        li.appendChild(span)
        li.appendChild(del)
        taskList.appendChild(li)
    })
}

function addTask(){
    const input=document.getElementById("taskInput")
    const text=input.value.trim()

    if(text==="") return

    tasks.push({
        text:text,
        completed:false
    })

    input.value=""
    saveTasks()
    renderTasks()
}

renderTasks()