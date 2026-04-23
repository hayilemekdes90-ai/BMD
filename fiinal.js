const weight=Number(document.getElementById("weightvalue").value);
const height=Number(document.getElementById("hightvalue").value);
const out=document.getElementById("BDM_value");
function but() {
    const weight = Number(document.getElementById("weightvalue").value);
    const height = Number(document.getElementById("hightvalue").value);
    const out = document.getElementById("BDM_value");

    if (weight > 0 && height > 0) {
        const bdm = weight / (height * height);
        out.textContent = bdm + " BDM";
    } else {
        out.textContent = "Please enter valid numbers!";
    }
}