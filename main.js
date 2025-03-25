let respuestas = document.getElementById("respuestas");
let error = document.getElementById("error");

function calcularPromedio()
{
    let validacion = validarNotas()
    if (validacion)
    {
        promedio()
    }
}

function calcularNota()
{
    let validacion = validarNotas()
    if (validacion)
    {
        mayorNota()
    }
}
function validarNotas()
{
    let valido = true
    let aux = valores()
    for(let i = 0; i < aux.length; i++)
    {
        if(!aux[i].value)
        {
            alert("el campo " + aux[i].name + " esta vacio")
            valido = false
            continue
        }

        if(parseInt(aux[i].value) < 1 || parseInt(aux[i].value) > 10)
        {
            aux[i].classList.add("rojo")
            error.innerText = "los datos son invalidos"
            valido = false
        }else{
            error.innerText = ""
            aux[i].classList.add("verde")
        }
    }
    return valido
}

const validarInput = (id, idLabel) =>
{
    aux = document.getElementById(id)
    auxLabel = document.getElementById(idLabel)

    if(!aux.value)
    {
        auxLabel.innerText = "esta vacio el campo"
        aux.classList.remove("verde");
        aux.classList.add("rojo");
        return;        
    } else {
        auxLabel.innerText = ""
    }

    if(aux.value < 1 || aux.value > 10)
    {
        aux.classList.add("rojo")
        aux.classList.remove("verde")
    }else{
        aux.classList.add("verde")
        aux.classList.remove("rojo")
    }
}

function valores()
{
    let valoresAux = []
    let valores = ["matematica", "lengua", "efsi"]
    for(let i = 0; i < valores.length; i++)
    {
        valoresAux.push(document.getElementById(valores[i]))
    }

    return valoresAux
}

function mayorNota()
{
    let Valores = valores()
    let aux = Valores.map(el => parseInt(el.value))
    let max = Math.max(...aux)
    let materiaMax = ""
    let contador = 0
    let contMax = 0
    while(contador < Valores.length)
    {
        if (Valores[contador].value == max)
        {
            materiaMax += Valores[contador].name + ", "
            contMax++
        }
        contador++
    }
    if(contMax == 1)
    {
        respuestas.innerHTML = `<p>La materia con mas nota es:  <span class="azulText">${materiaMax}</span></p>`    
    }else{
        respuestas.innerHTML = `<p>La materia con mas nota es:  ${materiaMax}</p>`    
    }
}

function promedio()
{
    let aux = valores()
    aux = aux.map(el => parseInt(el.value))
    let sum = aux.reduce((partialSum, a) => partialSum + a, 0);
    let promedio = sum / aux.length
    if(promedio < 6 || promedio > 10)
    {
        respuestas.innerHTML = `<p class="rojoText">El promedio es ${promedio}</p>`;

    }else{
        respuestas.innerHTML = `<p class="verdeText">El promedio es ${promedio}</p>`;

    }
}