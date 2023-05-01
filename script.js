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

const inputSexo = document.createElement("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "minhaCheckbox";
checkbox.value = "valorDaCheckbox";
checkbox.style.position = "fixed";
checkbox.style.right = "74%";
checkbox.style.top = "27%"
checkbox.id = "sexo";
header.appendChild(checkbox);
checkbox.style.fontFamily = "'Chakra Petch', sans-serif";
checkbox.addEventListener("mouseenter", function () {
});

const sexo = document.createElement("p");
header.appendChild(sexo);
sexo.textContent = "Masculino";
sexo.style.position = "relative";
sexo.style.right = "22%";
sexo.style.top = "74px"
sexo.style.fontFamily = "'Chakra Petch', sans-serif";
sexo.addEventListener("mouseenter", function (){
    sexo.style.border = "0px solid #fff";
})

const inputSexo2 = document.createElement("input");
var checkbox2 = document.createElement('input');
checkbox2.type = "checkbox";
checkbox2.name = "minhaCheckbox";
checkbox2.value = "valorDaCheckbox";
checkbox2.style.position = "fixed";
checkbox2.style.right = "67%";
checkbox2.style.top = "27%"
checkbox2.id = "sexo2";
header.appendChild(checkbox2);
checkbox.style.fontFamily = "'Chakra Petch', sans-serif";
checkbox.addEventListener("mouseenter", function () {
});

const sexo2 = document.createElement("p");
header.appendChild(sexo2);
sexo2.textContent = "Feminino"
sexo2.style.position = "relative";
sexo2.style.right = "15.2%";
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
    

    if (imc < 18.5) {
        corDeFundo = '#FF0000'; 
    } else if (imc < 25) {
        corDeFundo = '#00FF00';
    } else if (imc < 30) {
        corDeFundo = '#FFA500';
    } else if (imc < 35) {
        corDeFundo = '#FF4500';
    } else if (imc < 40) {
        corDeFundo = '#FF0000';
    } else {
        corDeFundo = '#8B0000';
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
    
    const li = document.createElement("li");
    li.style.marginTop = "10px"
    li.appendChild(div);
    ul.appendChild(li);
})




