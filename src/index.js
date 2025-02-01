function generateForm (event){
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "La la la la la bamba",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generateForm);
