// boton limpiar
document.addEventListener("DOMContentLoaded", function() {
    let limpiar = document.getElementById('limpiar');
    let lista = document.getElementById('contenedor')
    limpiar.addEventListener('click', function() {
        localStorage.clear();
        lista.innerHTML = ``
    })
})

// boton agregar a la lista
document.addEventListener("DOMContentLoaded", function() {
    let agregar = document.getElementById('agregar');
    let arr = [];
    let il = document.createElement('il');
    let lista = document.getElementById('contenedor');
    agregar.addEventListener('click', function() {
        let item = document.getElementById('item').value;
        arr.push(item);
        localStorage.setItem("datos", arr);
            for (let i = 0; i < arr.length; i++)
            il.innerHTML = `
                ${arr[i]} 
            `;
            lista.appendChild(il);
    })
})