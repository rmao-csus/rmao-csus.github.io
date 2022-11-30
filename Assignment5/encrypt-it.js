/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const button = document.getElementById("encrypt-it")
    button.addEventListener("click", handleButtonClick)
    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", handleResetClick)
    const checkBox = document.getElementById("all-caps")
    checkBox.addEventListener("change", handleCheckBoxClick)
    const radioButtons = document.getElementsByName('text-size');
    radioButtons[0].addEventListener("click", handleRadioButtonClick)
    radioButtons[1].addEventListener("click", handleRadioButtonClick)

  }

  function handleRadioButtonClick() {
    console.log("Radio clicked")
    const checkedButton = document.querySelector('input[name="text-size"]:checked')
    const resultText = document.getElementById("result")
    if(checkedButton.value == '12pt'){
      console.log("12 pt selected")
      resultText.style.fontSize = "1em"
    }
    else if (checkedButton.value == '24pt'){
      console.log("24 pt selected")
      resultText.style.fontSize = "2em"
    }
  }


  function handleResetClick() {
    console.log("Reset clicked")
    const textArea = document.getElementById("input-text")
    const resultText = document.getElementById("result")
    resultText.innerText = ''
    textArea.value = ''
  }

  function handleButtonClick() {
    console.log('Window loaded!!!')
    const textArea = document.getElementById("input-text")
    const resultText = document.getElementById("result")
    resultText.innerText = shiftCipher(textArea.value)
  }

  function handleCheckBoxClick() {
    const checkBox = document.getElementById("all-caps")
    const resultArea = document.getElementById("result")
    if (checkBox.checked) {
      console.log("checked!")
      resultArea.classList.add("uppercase")
    }
    else {
      console.log("unchecked!")
      resultArea.classList.remove("uppercase")
    }
  }

  function isLetter(str) {
    return str.length === 1 && str.toLowerCase().match(/[a-z]/i);
  }
  function shiftCipher(text) {
    console.log(text)
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (!isLetter(text[i])) {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
