const apiKey = "c9044d9d";
const imgDefault = "./default_image.png";

const nomeBusca= document.querySelector(".input")
const botaoBuscar=document.querySelector("#botao_buscar")
const mensagemErro=document.querySelector(".msgErro")

const titulo=document.querySelector("#titulo")
const ano=document.querySelector("#ano")
const duracao=document.querySelector("#duracao")
const genero=document.querySelector("#genero")
const diretor=document.querySelector("#diretor")
const atores=document.querySelector("#atores")
const poster=document.querySelector(".poster")
const sinopse=document.querySelector("#sinopse")



const filme={
Title:"",
Plot:"",
Year:"",
Runtime:"",
Ratings:[{Source:"",Value:""}],
Genre :"",
Actors :"",
Director :"",
}
async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}
function defineValores(filme){
     titulo.textContent=filme.Title;
     ano.textContent=filme.Year;
     duracao.textContent=filme.Runtime;
     genero.textContent=`Genero:${filme.Genre}`;
     diretor.textContent=filme.Director;
     atores.textContent=filme.Actors;
     poster.setAttribute("src",filme.Poster);
     sinopse.textContent=filme.Plot
}
function limparCampos(){
     titulo.textContent="";
     ano.textContent="";
     duracao.textContent="";
     genero.textContent="";
     diretor.textContent="";
     atores.textContent="";
     poster.setAttribute("src",imgDefault);
     sinopse.textContent=""
}
botaoBuscar.addEventListener("click",()=>{
     limparCampos();
     core(); 
    
})
async function core(){
     try{
    const filme= await buscaFilme(nomeBusca.value)
    validaDados(filme);
   defineValores(filme)
     }
     catch(erro){
          mensagemErro.textContent=`Erro ${erro}`
     }
}
function validaDados(filme){
     if(filme.Poster===undefined || filme.Year ===undefined || filme.Actors==="N/A" ){
       throw new Error("Filme não encontrado!!!")
     }
}