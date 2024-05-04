document.addEventListener('DOMContentLoaded',function () {
    
});

function crearProducto() {
    const idproducto = document.getElementById('idproducto');
    const nombre = document.getElementById('nombre');
    const precio = document.getElementById('precio');
    const tr = document.createElement('tr');
    tr.setAttribute('id',idproducto.value)
    const tdId = document.createElement('td');
    tdId.textContent = idproducto.value;
    const tdNombre = document.createElement('td');
    tdNombre.textContent = nombre.value
    const tdPrecio = document.createElement('td');
    tdPrecio.textContent = precio.value;
    const tdButton = document.createElement('td');
    const tdEditar = document.createElement('td');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.setAttribute('onclick', `eliminarProducto(${idproducto.value})`);
    button.setAttribute('type', 'button');
    button.textContent = 'Eliminar'
    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('type','button');
    buttonEdit.setAttribute('onclick',`editarProducto(${idproducto.value})`);
    buttonEdit.classList.add('btn', 'btn-warning');
    buttonEdit.textContent = 'Editar'

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdButton);
    tdButton.appendChild(button);
    tdButton.appendChild(buttonEdit)
    const tbody = document.getElementById('listadoproductos');
    tbody.appendChild(tr);

    // limpiarFormulario();
    idproducto.value = '';
    nombre.value = '';
    precio.value = '';

};

function eliminarProducto(idproducto) {
    document.getElementById(idproducto).remove();
};

function editarProducto(idproducto) {
    const tr = document.getElementById(idproducto);
};

function limpiarFormulario(){
    const idproducto = document.getElementById('idproducto');
    idproducto.value = '';
    const nombre = document.getElementById('nombre');
    nombre.value = '';
    const precio = document.getElementById('precio');
    precio.value = '';
};

