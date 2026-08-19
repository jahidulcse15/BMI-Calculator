
let height=document.querySelector('#height');
const weight=document.querySelector('#weight');
const scor=document.querySelector("#scor");
const category=document.querySelector(".category");
const result=document.querySelector(".result");

//console.log(height);
//console.log(weight);
//console.log(scor);
//console.log(category);

const Button=document.getElementsByTagName("button");
//console.log(Button);
var button=Array.from(Button);

button.forEach(function(i){
    i.addEventListener("click",function(event){
        event.preventDefault();
        const heightError=document.querySelector(".heightErro");
        const weightError=document.querySelector(".weightError");
        console.log(height.value);
        console.log(weight.value);
        heightError.innerText="";
        weightError.innerText="";
        result.style.display="none";
        if(height.value=="" && weight.value==""){
            heightError.innerText="Height must be between 100–250 cm";
            weightError.innerText="Weight must be between 20 and 300 kg";
        }
        else if(height.value==""){
            heightError.innerText="Height must be between 100–250 cm";
        }
        else if(Number(height.value)==0 && Number(weight.value)==0){
            heightError.innerText="Height must be between 100–250 cm";
            weightError.innerText="Weight must be between 20 and 300 kg";
        }
        else if(Number(height.value)>250 && Number(weight.value)>300){
            heightError.innerText="Height must be between 100–250 cm";
            weightError.innerText="Weight must be between 20 and 300 kg";
        }
        else if(Number(height.value)<100||Number(height.value)>250){
            heightError.innerText="Height must be between 100–250 cm";
        }
        else if(weight.value==""){
            weightError.innerText="Weight must be between 20 and 300 kg";
        }
        else if(Number(weight.value)<20||Number(weight.value)>300){
            weightError.innerText="Weight must be between 20 and 300 kg";
        }
        else{
            console.log(height.value);
            console.log(weight.value);
            let Height=Number(height.value)/100;
            let Weight=Number(weight.value);
            let bmi=(Weight/(Height*Height)).toFixed(2);
            scor.innerText=bmi;
            result.style.display = "block";
            //category.innerText="BMI";
            
            if(bmi<18.5){
                category.innerText="Underweight";
                scor.style.backgroundColor="blue";
                category.style.backgroundColor="blue";
            }
            else if(bmi>=18.5&&bmi<=24.9){
                category.innerText="Normal";
                scor.style.backgroundColor="green";
                category.style.backgroundColor="green";
            }
            else if(bmi>=25&&bmi<=29.9){
                category.innerText="Overweight";
                scor.style.backgroundColor="orange";
                category.style.backgroundColor="orange";
            }
            else if(bmi>=30&&bmi<=34.9){
                category.innerText="Obesity Class I";
                scor.style.backgroundColor="red";
                category.style.backgroundColor="red";
            }
            else if(bmi>=35&&bmi<=39.9){
                category.innerText="Obesity Class II";
                scor.style.backgroundColor="darkred";
                category.style.backgroundColor="darkred";
            }
            else{
                category.innerText="Obesity Class III";
                scor.style.backgroundColor="purple";
                category.style.backgroundColor="purple";
            }
        }
    });
});