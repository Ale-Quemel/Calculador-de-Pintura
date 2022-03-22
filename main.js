
function calcularM2DeSuperf (x, y) {
    superficie = (x * y)
    return superficie
}
function cantidadLitros(a, b) { // calcula la cantidad de litros basado en que 10 litros por cada 40m2(sacado por internet)
    let litros = (a / b)
    return litros
}
let btn_calcular = document.getElementById("btn__calcular");

let input_ancho = document.getElementById("inp__ancho");

let input_altura = document.getElementById("inp__alto");

/* let input_manos = document.getElementById("inp__manos"); */


let una_mano = document.getElementById("1mano");

let dos_manos = document.getElementById("2manos")


let descript_paint_total = document.getElementById("p__dsc");

 btn_calcular.onclick = (e) => {
    e.preventDefault()
    let ancho = input_ancho.value
    let altura = input_altura.value
    let unaMano = una_mano.value
    let dosManos = dos_manos.value
    
    let metros_sup = (ancho * altura)

    let manos = [];
    if (manos = "unaMano") {
        p__dsc.innerText = `Para ${calcularM2DeSuperf(ancho, altura)} m2, vas a necesitar ${cantidadLitros(metros_sup, 10)} litros de pintura.`
    } else if (manos = "dosManos") {
        p__dsc.innerText = `Para ${calcularM2DeSuperf(ancho, altura)} m2, vas a necesitar ${cantidadLitros(metros_sup, 5)} litros de pintura.`
    };
} 

/* TOASTIFY */

let btn__fijador = document.getElementById("btn__fij");
btn__fijador.onclick = () => {
    Toastify({

        text: "FIJADOR (+ AGUA) 1 LT = 40 M2",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, rgb(111, 148, 204) , rgb(33, 98, 196) )",
          }
        
        }).showToast();
}

let btn__interior = document.getElementById("btn__int");
btn__interior.onclick = () => {
    Toastify({

        text: "PARA INTERIOR 1 LT = 10 M2",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, rgb(216, 198, 116) , rgb(196, 166, 33))",
          }
        
        }).showToast();
}

let btn__exterior = document.getElementById("btn__ext");
btn__exterior.onclick = () => {
    Toastify({

        text: "PARA EXTERIOR 1 LT = 8 M2",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, rgb(202, 106, 127) , rgb(196, 33, 60))",
          }
        
        }).showToast();
}

let btn__masilla = document.getElementById("btn__mas")
btn__masilla.onclick = () => {
    Toastify({

        text: "MASILLA 1 KG = 1 M2",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, rgb(199, 200, 211) , rgb(161, 162, 172))",
          }
        
        }).showToast();
}


const listado_de_pinturas = document.querySelector('#listado__pinturas')

fetch('/data.json')
    .then ( (res) => res.json())
    .then ( (data) => {
        data.forEach((producto) => {
            const li = document.createElement("li")
            li.innerHTML = `
            <h3>${producto.tipo}</h4>
            <p>Presentación: ${producto.presentacion}</p>
            <p>${producto.descripcion}</p>
            <p>Rendimiento: ${producto.rendimiento}</p>
            <p>Código: ${producto.id}</p>
        `

            listado_de_pinturas.append(li)
            
        })
    })

