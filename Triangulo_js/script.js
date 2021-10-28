function verificar(){
    //Recebendo os dados de entrada / Pegando o valor dos elementos html
    let l1 = Number(document.getElementById("l1").value)
    let l2 = Number(document.getElementById("l2").value)
    let l3 = Number(document.getElementById("l3").value)
    let res = document.getElementById("res")

    //Processamento
    if(l1 == "" || l1 == isNaN(l1) || l2 == "" || l2 == isNaN(l2) ||l3 == "" || l3 == isNaN(l3)){
        alert("Preencha os camos corretamente")
    }else if(l1 > l2 + l3 || l2 > l3 + l1 || l3 > l1 + l2){
        res.innerHTML = '<strong>Com esses valores não se forma um tiângulo. <br>Um dos lados não pode ser maior que a soma dos outros dois.</strong>'
        res.style.color = "red"
    }else if(l1 == l2 && l2 == l3){
        res.innerHTML = "<strong>Com esses lados podemos formar um triângulo. <br>Tipo: Equilátero</strong>"
        res.style.color = "green"
    }else if(l1 == l2 || l1 == l3 || l2 == l3){
        res.innerHTML = "<strong>Com esses lados podemos formar um triângulo. <br>Tipo: Isósceles</strong>"
        res.style.color = "blue"
    }else if(l1 != l2 && l1 != l3 && l2 != l3){
        res.innerHTML = "<strong>Com esses lados podemos formar um triângulo. <br>Tipo: Escaleno</strong>"
        res.style.color = "orange"
    }
}
document.getElementById("verificar").addEventListener('click', verificar)