let arr = [];
document.addEventListener("DOMContentLoaded", function() {
    let limpiar = document.getElementById('limpiar');
    let lista = document.getElementById('contenedor');
    limpiar.addEventListener('click', function() {
        localStorage.clear();
        lista.innerHTML = ``;
        arr = [];
    });
});

document.addEventListener("DOMContentLoaded", function(){

    let agregar = document.getElementById('agregar');
    const lista = document.getElementById('contenedor');
    
        agregar.addEventListener('click', function() {
            lista.innerHTML = ``;
            let item = document.getElementById('item').value;
            arr.push(item);
            localStorage.setItem("datos", JSON.stringify(arr));
            arr.forEach(item =>  {
                const il = document.createElement('il');
                il.innerHTML = `
                    ${item} 
                    `;
                lista.appendChild(il);
                });
            item.value = '';
            
        });

    let itemInput = document.getElementById('item');

    item.addEventListener('keydown', function(event){
        if(event.code === "Enter") {
            let item = itemInput.value;
            arr.push(item);
            localStorage.setItem("datos", JSON.stringify(arr));
            lista.innerHTML = '';
            arr.forEach(item =>  { 
                const il = document.createElement('li');
                il.textContent = item;
                lista.appendChild(il);
            });
            itemInput.value = ''; 
        }
    });
});