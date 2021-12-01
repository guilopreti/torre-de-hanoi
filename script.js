// INICIO GUILOPRETI

//SELEÃO DE DIFICULDADE
let todosBotoes = document.querySelectorAll("button")

let botaoMedio = document.getElementById("medio")
botaoMedio.addEventListener("click", function(){
    jogoMedio.classList.remove("esconde")
    for(let i = 0; i < todosBotoes.length; i++){
        todosBotoes[i].classList.add("esconde")
    }
    boxVisorTorres.appendChild(resetarTudo)
})

let botaoFacil = document.getElementById("facil")
botaoFacil.addEventListener("click", function(){
    jogoFacil.classList.remove("esconde")
    for(let i = 0; i < todosBotoes.length; i++){
        todosBotoes[i].classList.add("esconde")
    }
    boxVisorTorresFacil.appendChild(resetarTudo)
})

let botaoDificil = document.getElementById("dificil")
botaoDificil.addEventListener("click", function(){
    jogoDificil.classList.remove("esconde")
    for(let i = 0; i < todosBotoes.length; i++){
        todosBotoes[i].classList.add("esconde")
    }
    boxVisorTorresDificil.appendChild(resetarTudo)
})
//

//CRIAÇÃO TORRE 4 DISCOS
const arrayBody = document.getElementsByTagName("body")
const body = arrayBody[0]
console.log(body)

const jogoMedio = document.createElement("section")
jogoMedio.classList.add("esconde")

const jogo = document.createElement("section")
jogo.classList.add("jogo")

const torreStart =  document.createElement("section")
torreStart.classList.add("torre")
const torreOffset =  document.createElement("section")
torreOffset.classList.add("torre")
const torreEnd =  document.createElement("section")
torreEnd.classList.add("torre")


jogo.appendChild(torreStart)
jogo.appendChild(torreOffset)
jogo.appendChild(torreEnd)

jogoMedio.appendChild(jogo)

body.appendChild(jogoMedio)


// estilo da base das torres
const baseTorre = document.createElement("div")
baseTorre.classList.add("baseTorre")


const baseTexto = document.createElement("p")
baseTexto.classList.add("baseTexto")

baseTorre.appendChild(baseTexto)


const boxVisorTorres = document.createElement("div")
boxVisorTorres.classList.add("boxVisorTorres")

//------------------------------------

//seção da base e visor das torres
const secaoBaseVisor = document.createElement("section")
secaoBaseVisor.classList.add("secaoBaseVisor")
//----------------------------------------------------

//adiciona a base das torres, box do visor das torres e textos em uma seção
secaoBaseVisor.appendChild(baseTorre)
secaoBaseVisor.appendChild(boxVisorTorres)
//--------------------------------------

//adiciona a base das torres, box do visor das torres e textos com a body
jogo.appendChild(secaoBaseVisor)

baseTexto.innerText = "Torre de Hanói"
//-------------------------------------

const discoMaior = document.createElement("div")
discoMaior.classList.add("discoLaranja")
const discoMenor = document.createElement("div")
discoMenor.classList.add("discoRoxo")
const discoMedio = document.createElement("div")
discoMedio.classList.add("discoVerde")
const discoBemGrande = document.createElement("div")
discoBemGrande.classList.add("discoAzul")

torreStart.appendChild(discoBemGrande)
torreStart.appendChild(discoMaior)
torreStart.appendChild(discoMedio)
torreStart.appendChild(discoMenor)

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
let filhoStart = torreStart.childElementCount


torreStart.addEventListener("click", function(){
    arrayFilhos.push(torreStart.lastElementChild)
    arrayPais.push(torreStart)
    
    if(arrayPais.length === 2){
        
        adicionarUltimoFilho()
        oqueFazer.innerText = "Selecione um disco"
    }    
    if(arrayPais.length === 1 && arrayFilhos[0] !== null){
        oqueFazer.innerText = "Selecione a torre"
    }
    if(arrayPais.length === 1 && arrayFilhos[0] === null){
        oqueFazer.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreStart.childElementCount !== filhoStart){
        soma += 1
        contMovimento.innerText = `Contador: ${soma}`
        filhoEnd = torreEnd.childElementCount
        filhoOffset = torreOffset.childElementCount
        filhoStart = torreStart.childElementCount
    }
    if(torreEnd.childElementCount === 4){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoOffset = torreOffset.childElementCount

torreOffset.addEventListener("click", function(){
    arrayFilhos.push(torreOffset.lastElementChild)
    arrayPais.push(torreOffset)
    if(arrayPais.length === 2){
        adicionarUltimoFilho()
        oqueFazer.innerText = "Selecione um disco"
    }    
    if(arrayPais.length === 1 && arrayFilhos[0] !== null){
        oqueFazer.innerText = "Selecione a torre"
    }
    if(arrayPais.length === 1 && arrayFilhos[0] === null){
        oqueFazer.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreOffset.childElementCount !== filhoOffset){
        soma += 1
        contMovimento.innerText = `Contador: ${soma}`
        filhoEnd = torreEnd.childElementCount
        filhoOffset = torreOffset.childElementCount
        filhoStart = torreStart.childElementCount
    }
    if(torreEnd.childElementCount === 4){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoEnd = torreEnd.childElementCount

torreEnd.addEventListener("click", function(){
    arrayFilhos.push(torreEnd.lastElementChild)
    arrayPais.push(torreEnd)
    if(arrayPais.length === 2){
        adicionarUltimoFilho()
        oqueFazer.innerText = "Selecione um disco"
    }    
    if(arrayPais.length === 1 && arrayFilhos[0] !== null){
        oqueFazer.innerText = "Selecione a torre"
    }
    if(arrayPais.length === 1 && arrayFilhos[0] === null){
        oqueFazer.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreEnd.childElementCount !== filhoEnd){
        soma += 1
        contMovimento.innerText = `Contador: ${soma}`
        filhoEnd = torreEnd.childElementCount
        filhoOffset = torreOffset.childElementCount
        filhoStart = torreStart.childElementCount
    }
    if(torreEnd.childElementCount === 4){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

console.log(torreOffset.lastElementChild)


let oqueFazer = document.createElement("p")
oqueFazer.innerText = "Selecione um disco"
oqueFazer.classList.add("instruçao")

boxVisorTorres.appendChild(oqueFazer)

let soma = 0
let contMovimento = document.createElement("span")
contMovimento.innerText = "Contador:"
contMovimento.classList.add("contador")

boxVisorTorres.appendChild(contMovimento)
//FINALIZAÇÃO TORRE 4 DISCOS

//CRIANDO MODO 3 DISCOS

const jogoFacil = document.createElement("section")
jogoFacil.classList.add("esconde")

const jogoFc = document.createElement("section")
jogoFc.classList.add("jogo")

const torreStartFacil =  document.createElement("section")
torreStartFacil.classList.add("torre")
const torreOffsetFacil =  document.createElement("section")
torreOffsetFacil.classList.add("torre")
const torreEndFacil =  document.createElement("section")
torreEndFacil.classList.add("torre")


jogoFc.appendChild(torreStartFacil)
jogoFc.appendChild(torreOffsetFacil)
jogoFc.appendChild(torreEndFacil)

jogoFacil.appendChild(jogoFc)

body.appendChild(jogoFacil)

// estilo da base das torres
const baseTorreFacil = document.createElement("div")
baseTorreFacil.classList.add("baseTorre")


const baseTextoFacil = document.createElement("p")
baseTextoFacil.classList.add("baseTexto")

baseTorreFacil.appendChild(baseTextoFacil)


const boxVisorTorresFacil = document.createElement("div")
boxVisorTorresFacil.classList.add("boxVisorTorres")

//------------------------------------

//seção da base e visor das torres
const secaoBaseVisorFacil = document.createElement("section")
secaoBaseVisorFacil.classList.add("secaoBaseVisor")
//----------------------------------------------------

//adiciona a base das torres, box do visor das torres e textos em uma seção
secaoBaseVisorFacil.appendChild(baseTorreFacil)
secaoBaseVisorFacil.appendChild(boxVisorTorresFacil)
//--------------------------------------

//adiciona a base das torres, box do visor das torres e textos com a body
jogoFc.appendChild(secaoBaseVisorFacil)

baseTextoFacil.innerText = "Torre de Hanói"
//-------------------------------------


const discoMaiorFacil = document.createElement("div")
discoMaiorFacil.classList.add("discoLaranja")
const discoMenorFacil = document.createElement("div")
discoMenorFacil.classList.add("discoRoxo")
const discoMedioFacil = document.createElement("div")
discoMedioFacil.classList.add("discoVerde")

torreStartFacil.appendChild(discoMaiorFacil)
torreStartFacil.appendChild(discoMedioFacil)
torreStartFacil.appendChild(discoMenorFacil)

let arrayFilhosFacil = []
let arrayPaisFacil = []

function adicionarUltimoFilhoFacil(){

    let larguraUmFacil = arrayFilhosFacil[0]
    let larguraDoisFacil = arrayPaisFacil[1].lastElementChild

    if(larguraUmFacil === null){
        arrayFilhosFacil = []
        arrayPaisFacil = []
    } else if(larguraDoisFacil === null || larguraUmFacil.clientWidth < larguraDoisFacil.clientWidth){
        arrayPaisFacil[1].appendChild(arrayFilhosFacil[0])
        arrayPaisFacil = []
        arrayFilhosFacil = []
    } else{
        arrayPaisFacil = []
        arrayFilhosFacil = []
    }
    
    
}
let filhoStartFacil = torreStartFacil.childElementCount


torreStartFacil.addEventListener("click", function(){
    arrayFilhosFacil.push(torreStartFacil.lastElementChild)
    arrayPaisFacil.push(torreStartFacil)
    if(arrayPaisFacil.length === 2){
        adicionarUltimoFilhoFacil()
        oqueFazerFacil.innerText = "Selecione um disco"
    }    
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] !== null){
        oqueFazerFacil.innerText = "Selecione a torre"
    }
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] === null){
        oqueFazerFacil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreStartFacil.childElementCount !== filhoStartFacil){
        somaFacil += 1
        contMovimentoFacil.innerText = `Contador: ${somaFacil}`
        filhoEndFacil = torreEndFacil.childElementCount
        filhoOffsetFacil = torreOffsetFacil.childElementCount
        filhoStartFacil = torreStartFacil.childElementCount
    }
    if(torreEndFacil.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoOffsetFacil = torreOffsetFacil.childElementCount

torreOffsetFacil.addEventListener("click", function(){
    arrayFilhosFacil.push(torreOffsetFacil.lastElementChild)
    arrayPaisFacil.push(torreOffsetFacil)
    if(arrayPaisFacil.length === 2){
        adicionarUltimoFilhoFacil()
        oqueFazerFacil.innerText = "Selecione um disco"
    }    
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] !== null){
        oqueFazerFacil.innerText = "Selecione a torre"
    }
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] === null){
        oqueFazerFacil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreOffsetFacil.childElementCount !== filhoOffsetFacil){
        somaFacil += 1
        contMovimentoFacil.innerText = `Contador: ${somaFacil}`
        filhoEndFacil = torreEndFacil.childElementCount
        filhoOffsetFacil = torreOffsetFacil.childElementCount
        filhoStartFacil = torreStartFacil.childElementCount
    }
    if(torreEndFacil.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoEndFacil = torreEndFacil.childElementCount

torreEndFacil.addEventListener("click", function(){
    arrayFilhosFacil.push(torreEndFacil.lastElementChild)
    arrayPaisFacil.push(torreEndFacil)
    if(arrayPaisFacil.length === 2){
        adicionarUltimoFilhoFacil()
        oqueFazerFacil.innerText = "Selecione um disco"
    }    
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] !== null){
        oqueFazerFacil.innerText = "Selecione a torre"
    }
    if(arrayPaisFacil.length === 1 && arrayFilhosFacil[0] === null){
        oqueFazerFacil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreEndFacil.childElementCount !== filhoEndFacil){
        somaFacil += 1
        contMovimentoFacil.innerText = `Contador: ${somaFacil}`
        filhoEndFacil = torreEndFacil.childElementCount
        filhoOffsetFacil = torreOffsetFacil.childElementCount
        filhoStartFacil = torreStartFacil.childElementCount
    }
    if(torreEndFacil.childElementCount === 3){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})


let oqueFazerFacil = document.createElement("p")
oqueFazerFacil.innerText = "Selecione um disco"
oqueFazerFacil.classList.add("instruçao")

boxVisorTorresFacil.appendChild(oqueFazerFacil)

let somaFacil = 0
let contMovimentoFacil = document.createElement("span")
contMovimentoFacil.innerText = "Contador:"
contMovimentoFacil.classList.add("contador")

boxVisorTorresFacil.appendChild(contMovimentoFacil)
//FINALIZAÇÃO TORRE 3 DISCOS


//CRIANDO MODO 5 DISCOS

const jogoDificil = document.createElement("section")
jogoDificil.classList.add("esconde")

const jogoDf = document.createElement("section")
jogoDf.classList.add("jogo")

const torreStartDificil =  document.createElement("section")
torreStartDificil.classList.add("torre")
const torreOffsetDificil =  document.createElement("section")
torreOffsetDificil.classList.add("torre")
const torreEndDificil =  document.createElement("section")
torreEndDificil.classList.add("torre")


jogoDf.appendChild(torreStartDificil)
jogoDf.appendChild(torreOffsetDificil)
jogoDf.appendChild(torreEndDificil)

jogoDificil.appendChild(jogoDf)

body.appendChild(jogoDificil)

// estilo da base das torres
const baseTorreDificil = document.createElement("div")
baseTorreDificil.classList.add("baseTorre")


const baseTextoDificil = document.createElement("p")
baseTextoDificil.classList.add("baseTexto")

baseTorreDificil.appendChild(baseTextoDificil)


const boxVisorTorresDificil = document.createElement("div")
boxVisorTorresDificil.classList.add("boxVisorTorres")

//------------------------------------

//seção da base e visor das torres
const secaoBaseVisorDificil = document.createElement("section")
secaoBaseVisorDificil.classList.add("secaoBaseVisor")
//----------------------------------------------------

//adiciona a base das torres, box do visor das torres e textos em uma seção
secaoBaseVisorDificil.appendChild(baseTorreDificil)
secaoBaseVisorDificil.appendChild(boxVisorTorresDificil)
//--------------------------------------

//adiciona a base das torres, box do visor das torres e textos com a body
jogoDf.appendChild(secaoBaseVisorDificil)

baseTextoDificil.innerText = "Torre de Hanói"
//-------------------------------------


const discoMaiorDificil = document.createElement("div")
discoMaiorDificil.classList.add("discoLaranja")
const discoMenorDificil = document.createElement("div")
discoMenorDificil.classList.add("discoRoxo")
const discoMedioDificil = document.createElement("div")
discoMedioDificil.classList.add("discoVerde")
const discoBemGrandeDificil = document.createElement("div")
discoBemGrandeDificil.classList.add("discoAzul")
const discoColossal = document.createElement("div")
discoColossal.classList.add("discoIndefinido")

torreStartDificil.appendChild(discoColossal)
torreStartDificil.appendChild(discoBemGrandeDificil)
torreStartDificil.appendChild(discoMaiorDificil)
torreStartDificil.appendChild(discoMedioDificil)
torreStartDificil.appendChild(discoMenorDificil)

let arrayFilhosDificil = []
let arrayPaisDificil = []

function adicionarUltimoFilhoDificil(){

    let larguraUmDificil = arrayFilhosDificil[0]
    let larguraDoisDificil = arrayPaisDificil[1].lastElementChild

    if(larguraUmDificil === null){
        arrayFilhosDificil = []
        arrayPaisDificil = []
    } else if(larguraDoisDificil === null || larguraUmDificil.clientWidth < larguraDoisDificil.clientWidth){
        arrayPaisDificil[1].appendChild(arrayFilhosDificil[0])
        arrayPaisDificil = []
        arrayFilhosDificil = []
    } else{
        arrayPaisDificil = []
        arrayFilhosDificil = []
    }
    
    
}
let filhoStartDificil = torreStartDificil.childElementCount


torreStartDificil.addEventListener("click", function(){
    arrayFilhosDificil.push(torreStartDificil.lastElementChild)
    arrayPaisDificil.push(torreStartDificil)
    if(arrayPaisDificil.length === 2){
        adicionarUltimoFilhoDificil()
        oqueFazerDificil.innerText = "Selecione um disco"
    }    
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] !== null){
        oqueFazerDificil.innerText = "Selecione a torre"
    }
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] === null){
        oqueFazerDificil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreStartDificil.childElementCount !== filhoStartDificil){
        somaDificil += 1
        contMovimentoDificil.innerText = `Contador: ${somaDificil}`
        filhoEndDificil = torreEndDificil.childElementCount
        filhoOffsetDificil = torreOffsetDificil.childElementCount
        filhoStartDificil = torreStartDificil.childElementCount
    }
    if(torreEndDificil.childElementCount === 5){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoOffsetDificil = torreOffsetDificil.childElementCount

torreOffsetDificil.addEventListener("click", function(){
    arrayFilhosDificil.push(torreOffsetDificil.lastElementChild)
    arrayPaisDificil.push(torreOffsetDificil)
    if(arrayPaisDificil.length === 2){
        adicionarUltimoFilhoDificil()
        oqueFazerDificil.innerText = "Selecione um disco"
    }    
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] !== null){
        oqueFazerDificil.innerText = "Selecione a torre"
    }
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] === null){
        oqueFazerDificil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreOffsetDificil.childElementCount !== filhoOffsetDificil){
        somaDificil += 1
        contMovimentoDificil.innerText = `Contador: ${somaDificil}`
        filhoEndDificil = torreEndDificil.childElementCount
        filhoOffsetDificil = torreOffsetDificil.childElementCount
        filhoStartDificil = torreStartDificil.childElementCount
    }
    if(torreEndDificil.childElementCount === 5){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})

let filhoEndDificil = torreEndDificil.childElementCount

torreEndDificil.addEventListener("click", function(){
    arrayFilhosDificil.push(torreEndDificil.lastElementChild)
    arrayPaisDificil.push(torreEndDificil)
    if(arrayPaisDificil.length === 2){
        adicionarUltimoFilhoDificil()
        oqueFazerDificil.innerText = "Selecione um disco"
    }    
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] !== null){
        oqueFazerDificil.innerText = "Selecione a torre"
    }
    if(arrayPaisDificil.length === 1 && arrayFilhosDificil[0] === null){
        oqueFazerDificil.innerText = "Esta torre está vazia, clique nela novamente!"
    }
    if(torreEndDificil.childElementCount !== filhoEndDificil){
        somaDificil += 1
        contMovimentoDificil.innerText = `Contador: ${somaDificil}`
        filhoEndDificil = torreEndDificil.childElementCount
        filhoOffsetDificil = torreOffsetDificil.childElementCount
        filhoStartDificil = torreStartDificil.childElementCount
    }
    if(torreEndDificil.childElementCount === 5){
        if(confirm("Você Venceu")){
            window.location.reload()
        }
    }
})


let oqueFazerDificil = document.createElement("p")
oqueFazerDificil.innerText = "Selecione um disco"
oqueFazerDificil.classList.add("instruçao")

boxVisorTorresDificil.appendChild(oqueFazerDificil)

let somaDificil = 0
let contMovimentoDificil = document.createElement("span")
contMovimentoDificil.innerText = "Contador:"
contMovimentoDificil.classList.add("contador")

boxVisorTorresDificil.appendChild(contMovimentoDificil)
//FINALIZAÇÃO TORRE 5 DISCOS

//FIM GUILOPRETI

//adiciona animação e borda no disco selecionado
torreStart.addEventListener("click", function(){
    torreStart.lastElementChild.style.border = "1px solid black"
    torreStart.lastElementChild.style.transform = "translate(0, -20px)"
})

torreOffset.addEventListener("click", function(){
    torreOffset.lastElementChild.style.transform = "translate(0, 0)"
   
})

torreEnd.addEventListener("click", function(){
    torreEnd.lastElementChild.style.transform = "translate(0, 0)"
    torreStart.lastElementChild.style.transform = "translate(0, 0)"

})
//------------------------------------------------------


// let botaoReset = document.createElement("button")
// botaoReset.innerText = "Começar Novamente"

// botaoReset.addEventListener("click", function(){
//     jogoFacil.classList.add("esconde")
//     jogoDificil.classList.add("esconde")
//     jogoMedio.classList.add("esconde")
//     for(let i = 0; i < todosBotoes.length; i++){
//         todosBotoes[i].classList.remove("esconde")
//     }
// })

// body.appendChild(botaoReset)

let resetarMedio = document.createElement("button")
resetarMedio.innerText = "Recomeçar Modo"

resetarMedio.addEventListener("click", function(){
    torreStart.appendChild(discoBemGrande)
    torreStart.appendChild(discoMaior)
    torreStart.appendChild(discoMedio)
    torreStart.appendChild(discoMenor)

    arrayFilhos = []
    arrayPais = []

    filhoStart = torreStart.childElementCount
    filhoOffset = torreOffset.childElementCount
    filhoEnd = torreEnd.childElementCount

    oqueFazer.innerText = "Selecione um disco"

    soma = 0
    contMovimento.innerText = "Contador:"
})

boxVisorTorres.appendChild(resetarMedio)

let resetarFacil = document.createElement("button")
resetarFacil.innerText = "Recomeçar Modo"

resetarFacil.addEventListener("click", function(){
    torreStartFacil.appendChild(discoMaiorFacil)
    torreStartFacil.appendChild(discoMedioFacil)
    torreStartFacil.appendChild(discoMenorFacil)

    arrayFilhosFacil = []
    arrayPaisFacil = []

    filhoStartFacil = torreStartFacil.childElementCount
    filhoOffsetFacil = torreOffsetFacil.childElementCount
    filhoEndFacil = torreEndFacil.childElementCount

    oqueFazerFacil.innerText = "Selecione um disco"

    somaFacil = 0
    contMovimentoFacil.innerText = "Contador:"
})

boxVisorTorresFacil.appendChild(resetarFacil)

let resetarDificil = document.createElement("button")
resetarDificil.innerText = "Recomeçar Modo"

resetarDificil.addEventListener("click", function(){
    torreStartDificil.appendChild(discoColossal)
    torreStartDificil.appendChild(discoBemGrandeDificil)
    torreStartDificil.appendChild(discoMaiorDificil)
    torreStartDificil.appendChild(discoMedioDificil)
    torreStartDificil.appendChild(discoMenorDificil)

    arrayFilhosDificil = []
    arrayPaisDificil = []

    filhoStartDificil = torreStartDificil.childElementCount
    filhoOffsetDificil = torreOffsetDificil.childElementCount
    filhoEndDificil = torreEndDificil.childElementCount

    oqueFazerDificil.innerText = "Selecione um disco"

    somaDificil = 0
    contMovimentoDificil.innerText = "Contador:"
})

boxVisorTorresDificil.appendChild(resetarDificil)

let resetarTudo = document.createElement("button")
resetarTudo.innerText = "Voltar à Página Inicial"

resetarTudo.addEventListener("click", function(){
    torreStart.appendChild(discoBemGrande)
    torreStart.appendChild(discoMaior)
    torreStart.appendChild(discoMedio)
    torreStart.appendChild(discoMenor)

    arrayFilhos = []
    arrayPais = []

    filhoStart = torreStart.childElementCount
    filhoOffset = torreOffset.childElementCount
    filhoEnd = torreEnd.childElementCount

    oqueFazer.innerText = "Selecione um disco"

    soma = 0
    contMovimento.innerText = "Contador:"

    torreStartFacil.appendChild(discoMaiorFacil)
    torreStartFacil.appendChild(discoMedioFacil)
    torreStartFacil.appendChild(discoMenorFacil)

    arrayFilhosFacil = []
    arrayPaisFacil = []

    filhoStartFacil = torreStartFacil.childElementCount
    filhoOffsetFacil = torreOffsetFacil.childElementCount
    filhoEndFacil = torreEndFacil.childElementCount

    oqueFazerFacil.innerText = "Selecione um disco"

    somaFacil = 0
    contMovimentoFacil.innerText = "Contador:"

    torreStartDificil.appendChild(discoColossal)
    torreStartDificil.appendChild(discoBemGrandeDificil)
    torreStartDificil.appendChild(discoMaiorDificil)
    torreStartDificil.appendChild(discoMedioDificil)
    torreStartDificil.appendChild(discoMenorDificil)

    arrayFilhosDificil = []
    arrayPaisDificil = []

    filhoStartDificil = torreStartDificil.childElementCount
    filhoOffsetDificil = torreOffsetDificil.childElementCount
    filhoEndDificil = torreEndDificil.childElementCount

    oqueFazerDificil.innerText = "Selecione um disco"

    somaDificil = 0
    contMovimentoDificil.innerText = "Contador:"

    jogoDificil.classList.add("esconde")
    jogoFacil.classList.add("esconde")
    jogoMedio.classList.add("esconde")
    for(let i = 0; i < todosBotoes.length; i++){
        todosBotoes[i].classList.remove("esconde")
    }
})

