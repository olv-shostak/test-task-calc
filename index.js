 let a; 

  function func() {
   
    let result;
    let finResult;
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let checkbox = document.getElementById("checkbox").checked;
    let res = document.getElementById("result");

    switch (a) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    };

    if(checkbox) {
      result = Math.round(result);
    };

    if(isNaN(result)) {
       finResult = 'Please, enter correct data and operation';
       res.classList.replace('result', 'result-red');
    }
    else {
      finResult = result;
      res.classList.replace('result-red', 'result');
    }

    document.getElementById("result").innerHTML = finResult;
  }