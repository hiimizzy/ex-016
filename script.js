function contar(){
    var ini = document.getElementById('texti')
    var fim = document.getElementById('textf')
    var passo = document.getElementById('textp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        window.alert('ERRO! Faltam dados')
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

            if(i < f){
                 for (var contador = i; contador <= f; contador += p){
                    res.innerHTML += `${contador} \u{1F449}	`   
            }
        
        }else {

            for(var contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F449}	`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}