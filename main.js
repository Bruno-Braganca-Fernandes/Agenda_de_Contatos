const form = document.getElementById("form")
const numbers = []
const names = []

let contacts = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addContact()
    updateTable()
})

function addContact() {
    const inputContactName = document.getElementById('contact-name')
    const inputContactNumber = document.getElementById('contact-number')

    if (names.includes(inputContactName.value)) {
        const confirma = confirm(`O nome "${inputContactName.value}" já está presente na lista de contatos. Tem certeza que deseja adicionar outro?`)
        if (!confirma) {
            return
        }
    }

    names.push(inputContactName.value)
    numbers.push(parseFloat(inputContactNumber.value))

    let contact = '<tr>';
    contact += `<td>${inputContactName.value}</td>`
    contact += `<td>${inputContactNumber.value}</td>`
    contact += '</tr>'

    contacts += contact

    inputContactName.value = ''
    inputContactNumber.value = ''
}

function updateTable() {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = contacts
}