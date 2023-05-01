document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.padding = "0.3%";
document.body.style.backgroundColor = "#738678";

const header = document. createElement("div");
document. body. appendChild(header);

header.style.background = "#8648de";
header.style.width = "100%";
header.style.height = "100%";
header.style.padding = "3% 3%";
header.style.border = "3px solid #fff";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "column";

const h1 = document.createElement("h1");
h1. textContent = "Calculadora";
header.appendChild(h1);
h1.style.fontFamily = "'lato', sans-serif";
h1.style.fontSize = "200%";
h1.style.color = "#fff";

const  iconReset  =  document. createElement("img");
header. appendChild(iconReset);
iconReset.src = "./reset-icon-.png";
iconReset.style.width = "50px"
iconReset.style.height = "50px"
iconReset.style. position  =  "fixed"
iconReset.style. right  =  "21%";
iconReset.style. top  ="29.7%";
iconReset.style. transition  =  ".8s"
iconReset.addEventListener("click",  function (){
    iconReset. style. transform  =  "scale(1.2) rotate(180deg)";
    setTimeout(() => {
        window. location. reload(true);
    }, 500);
})

const inputSexo = document.querySelector('.checkbox-element');
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "sexo";
checkbox.style.transform = 'translate(-309px,130px)'
header.appendChild(checkbox);
checkbox.style.fontFamily = "'Chakra Petch', sans-serif";
checkbox.addEventListener("mouseenter", function () {
});

const sexo = document.createElement("p");
header.appendChild(sexo);
sexo.textContent = "Masculino";
sexo.style.position = "relative";
sexo.style.right = "21%";
sexo.style.top = "96px"
sexo.style.fontFamily = "'Chakra Petch', sans-serif";
sexo.addEventListener("mouseenter", function (){
    sexo.style.border = "0px solid #fff";
})

const inputSexo2 = document.querySelector('.checkbox2-element');
var checkbox2 = document.createElement('input');
checkbox2.style.transform = 'translate(-200px,60px)'
checkbox2.type = "checkbox";
checkbox2.id = "sexo2";
header.appendChild(checkbox2);
checkbox.style.fontFamily = "'Chakra Petch', sans-serif";
checkbox.addEventListener("mouseenter", function () {
});

const sexo2 = document.createElement("p");
header.appendChild(sexo2);
sexo2.textContent = "Feminino"
sexo2.style.position = "relative";
sexo2.style.right = "12.5%";
sexo2.style.top = "25px";
sexo2.style.fontFamily = "'Chakra Petch', sans-serif"
sexo2.addEventListener("mouseenter", function (){
    sexo2.style.border = "0px solid #fff";
})

const inputName = document.createElement("input");
inputName.placeholder = "nome";
inputName.setAttribute("type","text");
inputName.id = "nome";
header.appendChild(inputName);
inputName.style.width = "50%";
inputName.style.margin = ".5% 1%";
inputName.style.padding = "1% 1%";
inputName.style.border = "2px solid #141301";
inputName.style.borderRadius = "5px";
inputName.style.outline = "none";
inputName.style.transition = "0.8s";
inputName.style.fontFamily = "'Chakra Petch', sans-serif";
inputName.addEventListener("mouseenter", function (){
    inputName.style.backgroundColor = "#141301";
    inputName.style.color = "#fff";
    inputName.style.border = "2px solid #fff";
});
inputName.addEventListener("mouseleave", function (){
    inputName.style.backgroundColor = "#F0FFFF";
    inputName.style.color = "#111111";
    inputName.style.border = "4px solid #141301";
});

const entrada = document.createElement("div");
header.appendChild(entrada);
entrada. style. width = "60%";
entrada. style. display = "flex";
entrada. style. justifyContent = "space-between";

const inputPeso = document.createElement("input");
inputPeso.placeholder = "peso";
inputPeso.setAttribute("type","number")
inputPeso.id = "peso";
entrada.appendChild(inputPeso);
inputPeso.style.width = "25%";
inputPeso.style.margin = ".5% 1%";
inputPeso.style.padding = "1.5% 1%";
inputPeso.style.border = "2px solid #141301";
inputPeso.style.borderRadius = "5px";
inputPeso.style.outline = "none";
inputPeso.style.transition = "0.8s";
inputPeso.style.fontFamily = "'Chakra Petch', sans-serif";
inputPeso.addEventListener("mouseenter", function (){
    inputPeso.style.backgroundColor = "#F0FFFF";
    inputPeso.style.color = "#111111";
    inputPeso.style.border = "2px solid #7FFFD4";
});
inputPeso.addEventListener("mouseleave", function (){
    inputPeso.style.backgroundColor = "#F0FFFF";
    inputPeso.style.color = "#111111";
    inputPeso.style.border = "2px solid #000000";
});

const inputAltura = document.createElement("input");
inputAltura.placeholder = "altura(Ex: 1.70)";
inputAltura.setAttribute("type","number");
inputAltura.id = "altura";
entrada.appendChild(inputAltura);
inputAltura.style.width = "24%";
inputAltura.style.margin = ".5% 1%";
inputAltura.style.padding = "1.5% 1%";
inputAltura.style.border = "2px solid #141301";
inputAltura.style.borderRadius = "5px";
inputAltura.style.outline = "none";
inputAltura.style.transition = "0.8s";
inputAltura.style.fontFamily = "'Chakra Petch', sans-serif";
inputAltura.addEventListener("mouseenter", function (){
    inputAltura.style.backgroundColor = "#F0FFFF";
    inputAltura.style.color = "#111111";
    inputAltura.style.border = "2px solid #7FFFD4";
});
inputAltura.addEventListener("mouseleave", function (){
    inputAltura.style.backgroundColor = "#F0FFFF";
    inputAltura.style.color = "#111111";
    inputAltura.style.border = "2px solid #000000" ;
})

const inputIdade = document.createElement("input");
inputIdade.placeholder = "idade";
inputIdade.setAttribute("type","number");
inputIdade.id = "idade";
entrada.appendChild(inputIdade);
inputIdade.style.width = "24%";
inputIdade.style.margin = ".5% 1%";
inputIdade.style.padding = "1.5% 1%";
inputIdade.style.border = "2px solid #141301";
inputIdade.style.borderRadius = "5px";
inputIdade.style.outline = "none";
inputIdade.style.transition = "0.8s";
inputIdade.style.fontFamily = "'Chakra Petch', sans-serif";
inputIdade.addEventListener("mouseenter", function (){
    inputIdade.style.backgroundColor = "#F0FFFF";
    inputIdade.style.color = "#111111";
    inputIdade.style.border = "2px solid #7FFFD4";
});
inputIdade.addEventListener("mouseleave", function (){
    inputIdade.style.backgroundColor = "#F0FFFF";
    inputIdade.style.color = "#111111";
    inputIdade.style.border = "2px solid #000000";
});

const calcularbtn = document.createElement("button");
calcularbtn.textContent = "Calcular IMC";
header.appendChild(calcularbtn);
calcularbtn.style.backgroundColor = "#000";
calcularbtn.style.width = "35%";
calcularbtn.style.margin = "2% 1% 0% 0%";
calcularbtn.style.padding = "1% 1%";
calcularbtn.style.border = "1px solid #fff";
calcularbtn.style.borderRadius = "5px";
inputAltura.style.outline = "none";
calcularbtn.style.fontFamily = "'Chakra Petch', sans-serif";
calcularbtn.style.color = "#fff";
calcularbtn.style.transition = ".3s";

calcularbtn.addEventListener("mouseenter", function (){
    calcularbtn.style.backgroundColor = "#141301";
    calcularbtn.style.transform = "scale(1.05)"
});
calcularbtn.addEventListener("mouseleave", function (){
    calcularbtn.style.backgroundColor = "#1111";
    calcularbtn.style.transform = "scale(1)"
});

const ul = document.createElement("ul");
ul.style.width = "80%";
document.body.appendChild(ul);

calcularbtn.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(1);

    if (!no && !p && !al && !idade) {
        return
    }

    const saida = document.createElement("div");
    header.appendChild(saida);
    saida.style.display = "flex";
    saida.style.justifyContent = "center";
    saida.style.fontFamily = "'Chakra Petch', sans-serif";
    saida.style.width = "70%";
    saida.style.margin = ".5% 1%";
    saida.style.fontw
    saida.style.padding = "1% 1%";
    saida.style.border = "2px solid #141301";
    saida.style.borderRadius = "4px";
    
    if (imc < 18.5) {
        saida.style.backgroundColor = '#FF0000';
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está abaixo do peso ideal!`;
    } else if (imc < 25) {
        saida.style.backgroundColor = '#00FF00';
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está no peso ideal!`;
    } else if (imc < 30) {
        saida.style.backgroundColor = '#FFA500';
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está tem obesidade leve`
    } else if (imc < 35) {
        saida.style.backgroundColor = '#FF4500';
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você tem uma obesidade moderada!`;
    } else if (imc < 40) {
        saida.style.backgroundColor = '#FF0000';
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está uma obesidade morbida!`;
    } else {
        saida.style.backgroundColor = '#8B0000';
    }

    const div = document.createElement("div");
    div.style.backgroundColor = corDeFundo;
    const pNnome = document.createElement("p");
    pNnome.textContent = no;
    const pIdade = document.createElement("p");
    pIdade.textContent = idade;
    const pImc = document.createElement("p");
    pImc.textContent = imc; 
    div.appendChild(pNnome);
    div.appendChild(pIdade);
    div.appendChild(pImc);
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';

    document.getElementById("nome").value = ("");
    document.getElementById("peso").value = ("");
    document.getElementById("altura").value = ("");
    document.getElementById("idade").value = ("");

    const li = document.createElement("li");
    li.style.marginTop = "10px"
    li.appendChild(div);
    ul.appendChild(li);

})

const legenda = document.createElement("footer");
header.appendChild(legenda);
legenda.style.width = "100%";
legenda.style.display = "flex";
legenda.style.justifyContent = "space-around";
legenda.style.alignItems = "center";
legenda.style.fontFamily = "'Chakra Petch', sans-serif";

const pesobaixo = document.createElement("div");
legenda.appendChild(pesobaixo);
pesobaixo.textContent = "Abaixo do peso";
pesobaixo.style.backgroundColor = "#FF0000";
pesobaixo.style.width = "10%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid #141301";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "#00FF00";
pesoNormal.style.width = "10%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid #141301";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.textAlign = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Obesidade leve";
sobrePeso.style.backgroundColor = "#FFA500";
sobrePeso.style.width = "10%";
sobrePeso.style.margin = ".5% .5%";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid #141301";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.textAlign = "center";

const moderada = document.createElement("div");
legenda.appendChild(moderada);
moderada.textContent = "obesidade moderada";
moderada.style.backgroundColor = "#FF4500";
moderada.style.width = "13%";
moderada.style.margin = ".5% .5%";
moderada.style.border = "2px solid #141301";
moderada.style.padding = ".5% .2%";
moderada.style.borderRadius = "5px";
moderada.style.textAlign = "center";

const morbida = document.createElement("div");
legenda.appendChild(morbida);
morbida.textContent = "obesidade mórbida";
morbida.style.backgroundColor = "#FF0000";
morbida.style.width = "13%";
morbida.style.margin = ".5% .5%";
morbida.style.border = "2px solid #141301";
morbida.style.padding = ".5% .2%";
morbida.style.borderRadius = "5px";
morbida.style.textAlign = "center";




