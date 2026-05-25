//Aneliz Y. Ortiz Irizarry
//842-22-5850
//mayo 2026
//DOM en JavaScript

// Seleccionando todos los botones que se encuentran dentro de las secciones de preguntas
const buttons = document.querySelectorAll("button");

// Acción que recorre cada botón para asignar su interactividad
buttons.forEach(button =>{
    button.addEventListener( 'click', ()=>{
//Seleccionando el elemento sibling
        const faq = button.nextElementSibling;
//Eligiendo mosotrar el elemento 2 (respuesta)
        const icon = button.children[1];

// Alternando la clase para mostrar/ocultar la respuesta
        faq.classList.toggle('show');
// Rotando la flecha para que la misma gire o regrese a su lugar
        icon.classList.toggle('rotate')
    })
})