
(function() {
    "use strict";
  
    window.addEventListener("load", init);

    function init() {
      const button = document.getElementById("enter-button")
      button.addEventListener("click", handleButtonClick)
      const welcomeMessage = document.getElementById("welcome-message")
      if (localStorage.getItem("name") != null) {
        welcomeMessage.innerText = "Welcome back, " + localStorage.getItem("name") + "!"
      }

    }
  
    function handleButtonClick() {
      const nameField = document.getElementById("name-field")
      localStorage.setItem("name", nameField.value)
      const welcomeMessage = document.getElementById("welcome-message")
      welcomeMessage.innerText = "Welcome, " + localStorage.getItem("name") + "! Try reloading the page."
    }


  })();
  