const Calculate = (type1, type2, value1) => {

    const number = parseFloat(value1)

      if (type1 === type2) {
        return number;
      }

    switch (`${type1}-${type2}`) {
        case type1 === type2:
          return number;
        case 'Pounds-Kilograms':
          return number * 0.453592;
        case 'Kilograms-Pounds':
          return number * 2.20462;
        case 'Kilometers-Miles':
          return number * 0.621371; 
        case 'Miles-Kilometers':
          return number * 1.60934;
        case 'Celsius-Fahrenheit':
          return (number * 9/5) + 32;
        case 'Fahrenheit-Celsius':
          return (number - 32) * 5/9;
        default:
          console.error(`${type1}-${type2}`);
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


const updateAnswerBox = (fromType, toType, inputBox, outputBox) => {
  const type1 = document.getElementById(fromType).innerText
  const type2 = document.getElementById(toType).innerText
  let value1 = document.getElementById(inputBox).value

  const splitValues = value1.split(" ")
  const calcultedValues = splitValues.map(value => (Calculate(type1,type2,value)).toFixed(2))
  console.log('calculatedvalues:',calcultedValues)
  value1 = calcultedValues.join(" ")

  document.getElementById(outputBox).value = value1

}

