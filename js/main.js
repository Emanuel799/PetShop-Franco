const products = data.response

//--------------------------------------------------------------------------------

let arrayFarm = []
let arrayToy = []
    products.forEach(product =>{
        if (product.tipo == 'Medicamento'){
            arrayFarm.push(product)
        } else if (product.tipo == 'Juguete') {
            arrayToy.push(product)
        }
    })
console.log(arrayFarm)
console.log(arrayToy)
//--------------------------------------------------------------------------------

// let imagenesJugueteria = data.response[0].imagen && data.response[0].tipo == 'juguetes' 
let tablaFarmacia = document.getElementById('farmImg')
let tablaJugueteria = document.getElementById('toyImg')
if (tablaFarmacia){
    tabla(arrayFarm,tablaFarmacia)
} else if (tablaJugueteria) {
    tabla(arrayToy,tablaJugueteria)
}

function tabla(array,tabla) {
    array.forEach(product =>{
    let div = document.createElement('div') //aqui creo los divs
    div.innerHTML = 
    `<div class="ordenarTablas">
     <h4>${product.nombre}</h4>
     <img src="${product.imagen}">
      <div class="parrafos">
       <p>${product.descripcion}</p>
       <p>Precio:${product.precio}</p>
       <p>Stock:${product.stock}</p>
       <p class="last">${(product.stock < 5)? "¡Últimas unidades!" : ""}</p>
      </div>
    </div>`
    tabla.appendChild(div)
})
}


// products.forEach(product => {
//     if(product.stock < 5) {
//         let stock = document.getElementsByClassName('stock')
//         stock.forEach.innerHTML = `<p class="last">¡Ultimas unidades!</p>`
//     }
// })

//--------------------------------------------------------------------------------

let submitButton = document.getElementById("button")
if(submitButton != null) {
    submitButton.addEventListener('click', change)
    
        function change() {
            if(submitButton) {
                alert('Su formulario ha sido enviado, !Muchas gracias por escribirnos!')
            }
        }
}


//--------------------------------------------------------------------------------




