//llamado de un node al DOM
let root = document.querySelector("#root");
//elemnto de tipo div con atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div_formularios";

//lista de datos String
let formularios = [
    {nombre:"Login", link:"componentes/login/login.html"},
    {nombre:"formularioDeBusqueda", link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre:"formularioDeContacto", link:"componentes/formularioDeContacto/formularioDeContacto.html"}, 
    {nombre:"formualrioDeComentariosReseñas", link:"componentes/formularioDeComentarioReseñas/formularioDeComentariosReseñas.html"},
    {nombre:"formularioDePedidoCompras", link:"componentes/formularioDePedidoCompras/formularioDePedidoCompras.html"}, 
    {nombre:"formularioDeRegistro", link:"componentes/formularioDeRegistro/formularioDeRegistro.html"}, 
];

//forEach (for)
formularios.forEach(itemLista =>{
    
    let div_item = document.createElement("a");
    div_item.className = "items";
    div_item.href = itemLista.link
    div_item.innerText = itemLista;
    
    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);