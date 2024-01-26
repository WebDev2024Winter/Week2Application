const Calculate = (type1, type2, value1) => {
    if (type1 === type2) {
        return value1;
    }
    
    switch (`${type1}-${type2}`) {
        case type1 === type2:
          return value1;
        case 'Pounds-Kilograms':
          return value1 * 0.453592;
        case 'Kilograms-Pounds':
          return value1 * 2.20462;
        case 'Kilometers-Miles':
          return value1 * 0.621371; 
        case 'Miles-Kilometers':
          return value1 * 1.60934;
        case 'Celsius-Fahrenheit':
          return (value1 * 9/5) + 32;
        case 'Fahrenheit-Celsius':
          return (value1 - 32) * 5/9;
        default:
          console.error('Invalid conversion type');
          return null;
      }
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

const updateToAnswerBox = () => {
    const type1 = document.getElementById("Unit1").innerText
    const type2 = document.getElementById("Unit2").innerText
    const value1 = document.getElementById("fromAnswerBox").value
    document.getElementById("toAnswerBox").value = Calculate(type1, type2, value1)

}