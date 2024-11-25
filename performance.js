let contenedor= document.querySelector (".contenedor")

let linkestado= document.querySelector ("#linkestado")
let linkcuerpo= document.querySelector ("#linkcuerpo")
let linkcasa= document.querySelector ("#linkcasa")
let linkflojus= document.querySelector ("#linkflojus")
let linklogica= document.querySelector ("#linklogica")

let descripcionestado= document.querySelector ("#descripcion-estado")
let descripcioncuerpo= document.querySelector ("#descripcion-cuerpo")
let descripcioncasa= document.querySelector ("#descripcion-casa")
let descripcionflojus= document.querySelector ("#descripcion-flojus")
let descripcionlogica= document.querySelector ("#descripcion-logica")

let descripciones = document.querySelectorAll (".descripcion article")


//estadodeconexion
linkestado.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/estadodeconexion6.jpg')"
    }
)

linkestado.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)

linkestado.addEventListener ("click",
    function( ) {

    for (let i=0; i<descripciones.length; i++) { // hace desaparece todas las descripciones  
        descripciones[i] .classList.remove ("aparece")
        descripciones[i] .classList.add ("oculto")

    }
    descripcionestado.classList.remove ("oculto")  // aca es cada una, la hacemos aparecer 
    descripcionestado.classList.add ("aparece") 

    }
)

//cuerpo transparente
linkcuerpo.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/cuerpo1.jpg')"
    }
)

linkcuerpo.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)

linkcuerpo.addEventListener ("click",
    function( ) {

    for (let i=0; i<descripciones.length; i++) { // hace desaparece todas las descripciones  
        descripciones[i] .classList.remove ("aparece")
        descripciones[i] .classList.add ("oculto")

    }
    descripcioncuerpo.classList.remove ("oculto")  // aca es cada una, la hacemos aparecer 
    descripcioncuerpo.classList.add ("aparece") 

    }
)


//casatransparente
linkcasa.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/casatransparente.jpg')"
    }
)

linkcasa.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)

linkcasa.addEventListener ("click",
    function( ) {

    for (let i=0; i<descripciones.length; i++) { // hace desaparece todas las descripciones  
        descripciones[i] .classList.remove ("aparece")
        descripciones[i] .classList.add ("oculto")

    }
    descripcioncasa.classList.remove ("oculto")  // aca es cada una, la hacemos aparecer 
    descripcioncasa.classList.add ("aparece") 

    }
)

//flojus
linkflojus.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/flojus2.jpg')"
    }
)

linkflojus.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)


linkflojus.addEventListener ("click",
    function( ) {

    for (let i=0; i<descripciones.length; i++) { // hace desaparece todas las descripciones  
        descripciones[i] .classList.remove ("aparece")
        descripciones[i] .classList.add ("oculto")

    }
    descripcionflojus.classList.remove ("oculto")  // aca es cada una, la hacemos aparecer 
    descripcionflojus.classList.add ("aparece") 

    }
)

// logicanalogica
linklogica.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/logica2.jpg')"
    }
)

linklogica.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)

linklogica.addEventListener ("click",
    function( ) {

    for (let i=0; i<descripciones.length; i++) { // hace desaparece todas las descripciones  
        descripciones[i] .classList.remove ("aparece")
        descripciones[i] .classList.add ("oculto")

    }
    descripcionlogica.classList.remove ("oculto")  // aca es cada una, la hacemos aparecer 
    descripcionlogica.classList.add ("aparece") 

    }
)



