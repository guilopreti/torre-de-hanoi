// INICIO GUILOPRETI
const arrayBody = document.getElementsByTagName("body")
const body = arrayBody[0]
console.log(body)

const torreStart =  document.createElement("section")
torreStart.classList.add("torre")
const torreOffset =  document.createElement("section")
torreOffset.classList.add("torre")
const torreEnd =  document.createElement("section")
torreEnd.classList.add("torre")
// estilo da base das torres
const baseTorre = document.createElement("div")
baseTorre.classList.add("baseTorre")
const baseTexto = document.createElement("p")
baseTexto.classList.add("baseTexto")
baseTorre.appendChild(baseTexto)
baseTexto.innerText = "Torre de Hanói"
//------------------------------------
body.appendChild(torreStart)
body.appendChild(torreOffset)
body.appendChild(torreEnd)
//adiciona uma base para as torres
body.appendChild(baseTorre)
//-------------------------------------
const discoMaior = document.createElement("div")
discoMaior.classList.add("discoLaranja")
const discoMenor = document.createElement("div")
discoMenor.classList.add("discoRoxo")
const discoMedio = document.createElement("div")
discoMedio.classList.add("discoVerde")


torreStart.appendChild(discoMaior)
torreStart.appendChild(discoMedio)
torreStart.appendChild(discoMenor)


//fim da criação de elementos
let arrayFilhos = []
let arrayPais = []

function adicionarUltimoFilho(){

    let larguraUm = arrayFilhos[0]
    let larguraDois = arrayPais[1].lastElementChild

    if(larguraUm === null){
        arrayFilhos = []
        arrayPais = []
    } else if(larguraDois === null || larguraUm.clientWidth < larguraDois.clientWidth){
        arrayPais[1].appendChild(arrayFilhos[0])
        arrayPais = []
        arrayFilhos = []
    } else{
        arrayPais = []
        arrayFilhos = []
    }
    
    
}

torreStart.addEventListener("click", function(){
    arrayFilhos.push(torreStart.lastElementChild)
    arrayPais.push(torreStart)
    
    if(arrayPais.length === 2){
        
        adicionarUltimoFilho()
    }    
    if(torreEnd.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

torreOffset.addEventListener("click", function(){
    arrayFilhos.push(torreOffset.lastElementChild)
    arrayPais.push(torreOffset)
    if(arrayPais.length === 2){
        adicionarUltimoFilho()
    }    
    if(torreEnd.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

torreEnd.addEventListener("click", function(){
    arrayFilhos.push(torreEnd.lastElementChild)
    arrayPais.push(torreEnd)
    if(arrayPais.length === 2){
        adicionarUltimoFilho()
    }    
    if(torreEnd.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

console.log(torreOffset.lastElementChild)
//FIM GUILOPRETI

//adiciona animação e borda no disco selecionado
torreStart.addEventListener("click", function(){
    torreStart.lastElementChild.style.border = "1px solid black"
    torreStart.lastElementChild.style.transform = "translate(0, -10vh)"
    
   
    
})

torreOffset.addEventListener("click", function(){
    torreOffset.lastElementChild.style.transform = "translate(0, 0)"
})

torreEnd.addEventListener("click", function(){
    torreEnd.lastElementChild.style.transform = "translate(0, 0)"
})
//------------------------------------------------------


