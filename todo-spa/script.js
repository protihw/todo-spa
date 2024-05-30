let taskList = [];

function addTask(event) {
    event.preventDefault();

    let description = document.getElementById("description");

    if (description.value == "") {
        showMessage();
    } else {
        taskList.push({ description: description.value, completed: false });
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
    messageType.innerText = "Erro: ";

    let message = document.getElementById("message");
    message.innerText = "Você precisa descrever a nova tarefa.";

    let alert = document.getElementById("alert");
    alert.style.display = "block";

    setTimeout(() => {
        closeMessage();
    }, 4000);
}

function updateTasks() {
    let rdmBtn = document.getElementById("rdmbtn");
    let divTasks = document.getElementById("tasks");

    if (taskList.length > 0) {
        let newOl = document.createElement("ol");
        newOl.id = "tasks_box";

        taskList.forEach((task, index) => {
            createElements(newOl, task, index)
        });

        divTasks.replaceChildren(newOl);

        rdmBtn.disabled = false;
    } else {
        let p = document.createElement("p");
        p.innerText = "Insira a primeira tarefa para começar...";
        divTasks.replaceChildren(p);

        rdmBtn.disabled = true;
    }
}

function removeAll() {
    taskList = [];
    updateTasks();
}

function removeTask(index) {
    taskList.splice(index, 1);
    updateTasks();
}

function checkTask(index) {
    taskList[index].completed = true;
    updateTasks();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function showTask(task) {
    let newP = document.createElement("p");
    newP.innerText = task;
    let divTasks = document.getElementById("tasks");
    divTasks.replaceChildren(newP);
}

function randomizeTask() {
    let randomIndex = getRandomInt(0, taskList.length);
    showTask(taskList[randomIndex].description);
}

function searchTask(event) {
    event.preventDefault();
    let query = document.getElementById("query").value;

    filteredTaskList = taskList.filter((task) => {
        // Retorna as tarefas que possuem a string digitada pelo usuário no input "query"
        return String(task.description).toLowerCase().indexOf(String(query).toLowerCase()) > -1;
    });
}

function createElements(newOl, task, index) {
    let newSpan = document.createElement("span");
    newSpan.innerText = task.description;

    if (task.completed) {
        newSpan.classList.add('completed-task');
    }

    let newLi = document.createElement("li");

    let olIcons = document.createElement("ol");
    let liCheck = document.createElement("li");
    let liRemove = document.createElement("li");

    let elementA1 = document.createElement("a");
    let checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check";
    checkBtn.onclick = function () {
        checkTask(index);
    };

    let elementA2 = document.createElement("a");
    let removeBtn = document.createElement("i");
    removeBtn.className = "fa fa-times";
    removeBtn.onclick = function () {
        removeTask(index);
    };

    elementA1.append(checkBtn);
    elementA2.append(removeBtn);
    liCheck.append(elementA1);
    liRemove.append(elementA2);
    olIcons.append(liCheck);
    olIcons.append(liRemove);
    newLi.append(newSpan);
    newLi.append(olIcons);
    newOl.append(newLi);
}

window.onload = updateTasks;