let taskList = [];

function addTask(event) {
    event.preventDefault()

    let description = document.getElementById("description");

    if (description.value == "") {
        showMessage();
    } else {
        taskList.push(description.value)
        description.value = "";
        updateTasks();
    }
}

function closeMessage() {
    let alert = document.getElementById("alert");
    alert.style.display = "none";
}

function showMessage() {
    let messageType = document.getElementById("message_type");
    message_type.innerText = "Erro: "

    let message = document.getElementById("message");
    message.innerText = "Você precisa descrever a nova tarefa.";

    let alert = document.getElementById("alert");
    alert.style.display = "block";

    setTimeout(() => {
        closeMessage();
    }, 4000);
}

function updateTasks() {
    let divTasks = document.getElementById("tasks");

    if (taskList.length > 0) {
        let newOl = document.createElement("ol");
        newOl.id = "tasks_box";

        taskList.forEach((task) => {
            let newLi = document.createElement("li");
            newLi.innerText = task;
            
            let checkBtn = document.createElement("a");
            checkBtn.innerHTML = "Confirmar";
            checkBtn.onclick = function () {
                checkTask();
            }

            let removeBtn = document.createElement("a");
            removeBtn.innerText = "Remover";
            removeBtn.onclick = function () {
                removeTask(task);
            };

            newLi.append(checkBtn);
            newLi.append(removeBtn);
            newOl.append(newLi);
        })

        divTasks.replaceChildren(newOl);

        let rdmBtn = document.getElementById("rdmbtn");
        rdmBtn.disabled = false;
    } else {
        let p = document.createElement("p");
        p.innerText = "Insira a primeira tarefa para começar...";
        divTasks.replaceChildren(p);
    }
}

function removeAll() {
    taskList = [];
    updateTasks();
}

function removeTask(task) {
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    updateTasks();
}


// Terminar função

function checkTask(task) {
    let taskIndex = taskList.indexOf(task);
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function showTask(task) {
    let newP = task;
    let divTasks = document.getElementById("tasks");
    divTasks.replaceChildren(newP);
}

function randomizeTask() {
    randomIndex = getRandomInt(0, taskList.length);
    showTask(taskList[randomIndex]);
}
