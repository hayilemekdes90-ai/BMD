const weight=Number(document.getElementById("weightvalue").value);
const height=Number(document.getElementById("hightvalue").value);
const out=document.getElementById("BDM_value");
const hidh=document.getElementById("continer");
const tex=document.getElementById("h");
const home=document.getElementById("con");
const groupo=document.getElementById("grou1");
const groupt=document.getElementById("grou2");
const serch=document.getElementById("ml");
const an=document.getElementById("ooo")
function but() {
    const weight = Number(document.getElementById("weightvalue").value);
    const height = Number(document.getElementById("hightvalue").value);
    const out = document.getElementById("BDM_value");

    if (weight > 0 && height > 0) {
        const bdm = weight / (height * height);
        out.textContent = bdm + " BDM";
         if(bdm<=18){
        tex.textContent=`If your body mass (BMI) is below 18, 
        try to increase your weight in a healthy way. Eat more balanced meals with protein,
         carbohydrates, and healthy fats every day.
          Include foods like eggs, milk, rice, beans, nuts, and fruits. Eat 4–6 small meals instead of skipping food.
         Also do light exercise and get enough sleep to help your body grow stronger.`
    }
    else if(bdm>=22){
tex.textContent = "You are overweight. Reduce fatty foods, eat more vegetables, fruits, and do regular exercise.";
        } 
        else {
            tex.textContent = "Your BMI is normal. Keep a balanced diet and stay active.";
    }
 } else {
        out.textContent = "Please enter valid numbers!";
    }
   
   
}function sec(){
if( serch.style.display=="none"){
    
    serch.style.display="flex";
}
else{
    serch.style.display="none";
}}
function searchItems() {
    let input = document.getElementById("ml").value.toLowerCase();
    let items = document.getElementsByClassName("itme");

    for (let i = 0; i < items.length; i++) {
        let name = items[i].getAttribute("data-name").toLowerCase();
        if (name.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}
function inc() {
        if (an.style.display === "none") {
        an.style.display = "block";
    } else {
        an.style.display = "none";
    }
}