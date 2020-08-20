// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  mini = max - 10;

for(let i = max; i >  mini; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


//VARIABLE CONFIGURACION
let confBusqueda={
    marca:'',
    year:'',
    min:'',
    max:'',
    puertas:'',
    transmision:'',
    color:''
}


// EVENLISTENER AL INICIO
const autos = consultarAutos();

document.addEventListener('DOMContentLoaded', (e) =>{
    mostrarAutos(autos);
    
});


// EVENTLISTENER DE FORMULARIO

const marca = document.querySelector("#marca");
marca.addEventListener('input', e =>{
    confBusqueda.marca = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.marca ='';
        e.target.value = '';
    }
});

const year = document.querySelector("#year");
year.addEventListener('input', e =>{
    confBusqueda.year = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.year ='';
        e.target.value = '';
    }
});

const min = document.querySelector("#minimo");
min.addEventListener('input', e =>{
    confBusqueda.min = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.min ='';
        e.target.value = '';
    }
});

const maximo = document.querySelector("#maximo");
maximo.addEventListener('input', e =>{
    confBusqueda.max = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.max ='';
        e.target.value = '';
    }
});

const puertas = document.querySelector("#puertas");
puertas.addEventListener('input', e =>{
    confBusqueda.puertas = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.puertas ='';
        e.target.value = '';
    }
});

const transmision = document.querySelector("#transmision");
transmision.addEventListener('input', e =>{
    confBusqueda.transmision = e.target.value;
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.transmision ='';
        e.target.value = '';
    }
});

const color = document.querySelector("#color");
color.addEventListener('input', e =>{
    confBusqueda.color = e.target.value;
    //console.log(e);
    const valor= filtrarAutos();
    if(valor === 0){
        confBusqueda.color ='';
        e.target.value = '';
    }
});
// FIN EVENTLISTENER

function mostrarAutos(autos){
    const contenedor = document.querySelector("#resultado");
    //limpiamos el id
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
    autos.forEach(auto => {
         const elemento = document.createElement('p');
         elemento.innerHTML = `
            <p><b>Marca:</b> ${auto.marca} ${auto.modelo} ${auto.transmision} - <b>Año:</b> ${auto.year} - ${auto.puertas} puertas - <b>Color:</b> ${auto.color} - <b>Precio:</b> ${auto.precio}</p>
        `;
        //agrgamos
        contenedor.appendChild(elemento);
        
    });    
}


//PARAMETROS DE FILTRADOS

function filtrarAutos() {
    
    const resultado = consultarAutos().filter(filtarMarca).filter(filtarYear).filter(filtarMinimo).filter(filtarMaximo)
                    .filter(filtarPuertas).filter(filtarTrans).filter(filtarColor);
    console.log(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{      
        alert("No hay resultados");
        return 0;
    }
    
}

function filtarMarca(autos){
    if(confBusqueda.marca){
        return autos.marca === confBusqueda.marca;
    }else{
        return autos;
    }
}

function filtarYear(autos){
        if(confBusqueda.year){
            return autos.year === Number(confBusqueda.year);
        }else{
            return autos;
    }
}

function filtarMinimo(autos){
    if(confBusqueda.min){
        return autos.precio >= Number(confBusqueda.min);
    }else{
        return autos;
}
}

function filtarMaximo(autos){
    if(confBusqueda.max){
        return autos.precio <= Number(confBusqueda.max);
    }else{
        return autos;
}
}

function filtarPuertas(autos){
    if(confBusqueda.puertas){
        return autos.puertas === Number(confBusqueda.puertas);
    }else{
        return autos;
}
}

function filtarTrans(autos){
    if(confBusqueda.transmision){
        return autos.transmision === confBusqueda.transmision;
    }else{
        return autos;
}
}

function filtarColor(autos){
    if(confBusqueda.color){
        return autos.color === confBusqueda.color;
    }else{
        return autos;
}
}




//REGISTROS DE AUTOS

function consultarAutos(){
   return  [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
    
  
}