const Calculate = (type1, type2, val1, val2) => {

}


const updateField = () => {
    let selection1 = document.getElementById("selection1");
    let firstType = selection1.options [selection1.selectedIndex].text;

    let selection2 = document.getElementById("selection2");
    let secondType = selection2.options [selection2.selectedIndex].text;

    document.getElementById("Unit1").innerText = firstType;
    document.getElementById("Unit2").innerText = secondType;

    
    let firstId = selection1.options [selection1.selectedIndex].id;
    let secondId = selection1.options [selection2.selectedIndex].id;

    if (firstId != secondId) {
        document.getElementById("message").innerText = "Sorry, you cannot convert " + firstType + " to " + secondType + ".";
    } else {
        document.getElementById("message").innerText = " ";
    }


}