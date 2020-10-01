// Procurar botão
document.querySelector('#add-time')
// Quando clicar no botão 
.addEventListener('click', cloneField);

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // Limpar campos
    const fields = newFieldContainer.querySelectorAll('input');
    // fields[0].value = "" // time_from
    // fields[1].value = "" // time_to

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento
        field.value = ''
    });

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer); 
}