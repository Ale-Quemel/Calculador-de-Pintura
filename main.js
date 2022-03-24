// CONSTANTES

const btn_calcular = document.getElementById("btn__calcular");

const input_ancho = document.getElementById("inp__ancho");

const input_altura = document.getElementById("inp__alto");

const input_manos = document.getElementById("inp__manos");

const una_mano = document.getElementById("1mano");

const dos_manos = document.getElementById("2manos");

const descript_paint_total = document.getElementById("p__dsc");

const listado_de_pinturas = document.querySelector('#listado__pinturas')

// FETCH

fetch('/data.json')
.then ( (res) => res.json())
.then ( (data) => {
    data.forEach((producto) => {
        const li = document.createElement("li")
        li.innerHTML = `
        <h3>${producto.tipo}</h3>
        <h4>Presentación:<h4>
        <p>${producto.presentacion}</p>
        <p>${producto.descripcion}</p>
        <h4>Rendimiento:<h4>
        <p>${producto.rendimiento}</p>
        `
        
        listado_de_pinturas.append(li)
        
    })
})

// FUNCIONES

const calcularM2DeSuperf = (alto, ancho) => alto * ancho;

const cantidadLitros = (superficie, manos) => superficie / manos;

// EVENT: .ONCLICK

btn_calcular.onclick = (e) => {
    e.preventDefault();
    let ancho = input_ancho.value;
    let altura = input_altura.value;
    let metros_sup = ancho * altura;
    let manos = input_manos.value;
    switch (manos) {
    case "1mano":
    p__dsc.innerText = `Para ${calcularM2DeSuperf(
        ancho,
    altura
    )} m2, vas a necesitar ${cantidadLitros(
        metros_sup,
        10
    )} litros de pintura.`;
    break;
    case "2mano":
    p__dsc.innerText = `Para ${calcularM2DeSuperf(
        ancho,
        altura
    )} m2, vas a necesitar ${cantidadLitros(
        metros_sup,
        5
    )} litros de pintura.`;
    break;
    default:
    break;
    }
};



/* TOASTIFY */

const btn__fijador = document.getElementById("btn__fij");
btn__fijador.onclick = () => {
    Swal.fire({
        title: 'Fijador de Superficie',
        text: 'Se mezcla con 3 litros de agua y tiene un rendimiento de 40 m2. Los 4 litros preparados. ',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
};

const btn__interior = document.getElementById("btn__int");
btn__interior.onclick = () => {
    Swal.fire({
        title: 'Pintura de Interior',
        text: 'Un litro rinde 5 m2, dos manos.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
};

const btn__exterior = document.getElementById("btn__ext");
btn__exterior.onclick = () => {
    Swal.fire({
        title: 'Pintura de Exterior',
        text: 'Un litro rinde 4 m2, dos manos. Se recomienda que las manos estén cargadas para lograr una buena impermeabilización.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
};

const btn__masilla = document.getElementById("btn__mas")
btn__masilla.onclick = () => {
    Swal.fire({
        title: 'Masilla o Enduido',
        text: 'Para realizar un planchado, rinde 1 kg por m2 (dos manos). Su rendimiento depende de la superficie a tratar.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
};
