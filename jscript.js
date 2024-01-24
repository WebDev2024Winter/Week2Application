const Calculate = (type1, type2, val1, val2) => {

}


const updateField = () => {
    let selection1 = document.getElementById("selection1");
    let firstType = selection1.options[selection1.selectedIndex].text;

    let selection2 = document.getElementById("selection2");
    let secondType = selection2.options[selection2.selectedIndex].text;

    document.getElementById("Unit1").innerText = firstType;
    document.getElementById("Unit2").innerText = secondType;


}