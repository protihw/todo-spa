function incluir() {
    let description = document.getElementById("description");

    if (description.value == "") {
        let alert = document.getElementById("alert");
        let message_type = document.getElementById("message_type");
        message_type.innerText = "Erro: "
        let message = document.getElementById("message");
        message.innerText = "Você precisa descrever a nova tarefa.";
        alert.style.display = "block";
    }
}