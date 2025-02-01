function displayPoem(response) {
    let poem = response.data.answer;
    poem = poem.replace(/```html|```/g, "").trim();
    
    new Typewriter('#poem', {
        strings: poem,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generateForm (event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "77ao6ba83c370f60fbc94613061ab8t5";
    let context = "You are a romantic Poem expert and loves to write short poems. Your mission is to generate a four line poem in basic HTML, but do not include HTML comment in text. Sign the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions.";
    let prompt = `User instructions are: Generate a French poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class= "generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);
    
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generateForm);


