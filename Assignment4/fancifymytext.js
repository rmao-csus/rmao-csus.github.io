function helloWorld() {
    alert("Hello, world!");
}

function bigger() {
    const textArea = document.getElementById("textArea")
    textArea.style.fontSize = "2em";
}

function changeChecked() {
    let fancyChecked = document.getElementById("fancy").checked
    let boringChecked = document.getElementById("boring").checked

    const textArea = document.getElementById("textArea")

    if(fancyChecked) {
        textArea.style.fontWeight = "bold"
        textArea.style.textDecoration = "underline"
    }
    else if(boringChecked) { 
        textArea.style.fontWeight = ""
        textArea.style.textDecoration = ""
    }
}

function moo() {
    const textArea = document.getElementById("textArea")
    newText = textArea.value.toUpperCase()
    sentences = newText.split(".")
    textArea.value = sentences.join("-Moo")
    // console.log(textArea.value.toUpperCase())
    console.log(newText)
    console.log(sentences)
    console.log(sentences.join("-Moo"))
}