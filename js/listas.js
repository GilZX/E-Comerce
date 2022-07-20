console.log("Trabajando con Listas");
const Santiago={
    "nombre":"santiago",
    "localidad":"125-NE / 200-NO"
}
const Viña={
    "nombre":"Viña",
    "localidad":"255-NE / 100-NO"
}



const chile=[Santiago,Viña]

function  getCiudad(lista,ciudad){

    lista.forEach(element => {

        if(element.nombre==ciudad){
            console.log("Localidad " + element.nombre)
            
            return element
        }

    });

}
let preferencia=getCiudad(chile,"Viña");





const santiago="Santiago";
const bogota="Bogota";
const buenosAires="Buenos Aires ";

const destinosCiudad=["Santiago","Bogota","Buenos Aires"]

const ciudades=new Array();
destinosCiudad.push("san salvador");
ciudades.push("San Salvador");

console.log(ciudades);

console.log(destinosCiudad.find((ciudad)=>{return ciudad}))














