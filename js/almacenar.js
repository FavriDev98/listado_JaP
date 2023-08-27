let arr = [];
document.addEventListener("DOMContentLoaded", function() {
    let limpiar = document.getElementById('limpiar');
    let lista = document.getElementById('contenedor')
    limpiar.addEventListener('click', function() {
        localStorage.clear();
        lista.innerHTML = ``
        arr = [];
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let agregar = document.getElementById('agregar');
    const lista = document.getElementById('contenedor');
    agregar.addEventListener('click', function() {
        lista.innerHTML = ``
        let item = document.getElementById('item').value;
        arr.push(item);
        localStorage.setItem("datos", arr);
        arr.forEach(item =>  {
            const il = document.createElement('il');
            il.innerHTML = `
                ${item} 
                `;
            lista.appendChild(il);
            })
    })
})
