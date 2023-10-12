const Spinel = document.getElementById('spinel1');
const escondidos = document.getElementById('escondidos');
const estrella = document.getElementById('estrella');
const estrellas = document.getElementById('estrellas');
const contenedoraro = document.getElementById('contenedor-aro');

Spinel.addEventListener('click',()=>{ 
    escondidos.classList.toggle('active');
})

estrella.addEventListener('click',()=>{
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema','oscuro');
})

estrellas.addEventListener('click',()=>{
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('tema','claro');
})

const guardarTema =() => {
    if(localStorage.getItem('tema')==='oscuro'){
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }else{
        
        document.body.classList.remove('dark-mode');
    }
}

guardarTema();
