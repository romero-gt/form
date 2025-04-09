const nome = document.getElementById("nome")

const Enviar=()=>{
    if(nome.Filter("@#$%&*!()_+-=:;´`{}[].,''") === nome)
        nome.innerHTML=(" ")
        window.document.alert("Não Use Caracteres Especiais")
}