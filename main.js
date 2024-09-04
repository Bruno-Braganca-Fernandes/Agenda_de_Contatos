const form = document.getElementById("form")
const numbers = []
const names = []

let contacts = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addContact()
    updateTable()
    updateContactCount()
})

function addContact() {
    const inputContactName = document.getElementById('contact-name')
    const inputContactNumber = document.getElementById('contact-number')

    if (names.includes(inputContactName.value)) {
        if (!confirm(`O nome "${inputContactName.value}" já está presente na lista de contatos. Tem certeza que deseja adicionar outro?`)) {
            return
        }
    }

    names.push(inputContactName.value)
    numbers.push(parseFloat(inputContactNumber.value))

    let contact = '<tr>';
    contact += `<td>${inputContactName.value}</td>`
    contact += `<td>${inputContactNumber.value}</td>`
    contact += `<td><button onclick="editContact(${names.length - 1})">Editar</button></td>`;
    contact += `<td><button onclick="deleteContact(${names.length - 1})">Excluir</button></td>`;
    contact += '</tr>'

    contacts += contact

    inputContactName.value = ''
    inputContactNumber.value = ''
}

function updateTable() {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = contacts
}

function editContact(index) {
    const newName = prompt("Digite o novo nome:", names[index]);
    const newNumber = prompt("Digite o novo número:", numbers[index]);

    if (newName !== null && newNumber !== null) {
        names[index] = newName;
        numbers[index] = parseFloat(newNumber);

        contacts = '';
        for (let i = 0; i < names.length; i++) {
            contacts += `<tr>`;
            contacts += `<td>${names[i]}</td>`;
            contacts += `<td>${numbers[i]}</td>`;
            contacts += `<td><button onclick="editContact(${i})">Editar</button></td>`;
            contacts += `<td><button onclick="deleteContact(${i})">Excluir</button></td>`;
            contacts += `</tr>`;
        }

        updateTable();
    }
}

function deleteContact(index) {
    if (confirm(`Tem certeza que deseja excluir o contato "${names[index]}"?`)) {
        names.splice(index, 1);
        numbers.splice(index, 1);

        contacts = '';
        for (let i = 0; i < names.length; i++) {
            contacts += `<tr>`;
            contacts += `<td>${names[i]}</td>`;
            contacts += `<td>${numbers[i]}</td>`;
            contacts += `<td><button onclick="editContact(${i})">Editar</button></td>`;
            contacts += `<td><button onclick="deleteContact(${i})">Excluir</button></td>`;
            contacts += `</tr>`;
        }

        updateTable();
        updateContactCount()
    }
}

function updateContactCount() {
    const contactCount = numbers.length;
    document.getElementById("telefone-numbers").innerText = contactCount;
}