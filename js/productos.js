function  getPromociones(){
    let promociones=document.querySelector('#variadosProducts')
    let productos=promociones.querySelector('.seccion-productos')
    let producto=productos.querySelectorAll('.producto')
    productos.appendChild(addProduct())
}


function addProduct(){

    let li=document.createElement('li')
    li.classList.add('producto')
     let img=document.createElement('img')
     img.src='img/consola-06.png'
     let div=document.createElement('div')
     div.classList.add('descripcion-producto')
      let titulo=document.createElement('p')
      titulo.textContent='Producto Generico'
      let precio=document.createElement('p')
      precio.textContent='precio Generico'
      precio.setAttribute('id','precio')
      let a=document.createElement('a')
      a.setAttribute('id','ver-producto')
      a.textContent='ver producto'


    div.appendChild(titulo)
    div.appendChild(precio)
    div.appendChild(a)
    li.appendChild(img)
    li.appendChild(div)

    return li
}
