let body = document.querySelector("body");
let card = document.querySelector("div.container");
let modebutton = document.getElementById("button");
let searchInput = document.querySelector("input");
let searchButton = document.querySelector("button");
let result = document.querySelector("#result");
let sound = document.querySelector("#sound");
let sr = document.querySelector("source");

modebutton.addEventListener("click", () => {
  modebutton.classList.toggle("light-mode");
  body.classList.toggle("light-mode");
  card.classList.toggle("light-mode");
});

searchButton.addEventListener("click", () => {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`;

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      //   let type = item[1].meanings[0].partOfSpeech;//Type
      const synonyms = () => {
        try {
          let synonyms = item[0].meanings[0].synonyms;
          let result = "";
          for (let i = 0; i < synonyms.length; i++) {
            result += synonyms[i] + ", ";
          }
          return result;
        } catch (error) {
          return "";
        }
      };

      let phonetic = item[0].phonetic; //transcription
      let def = item[0].meanings[0].definitions[0].definition; //def
      let example = item[0].meanings[0].definitions[0].example || ""; //Example
      let audio = item[0].phonetics; //audio
      console.log(audio);

      result.innerHTML = `
        <div class="bottom">
            <div class="word">
              <div class="wordinfo">
                <h6>${searchInput.value}</h6>
                <p>/${phonetic}/</p>
              </div>
              <button class="volume" onClick="playsound()">
              <span class="material-symbols-outlined"> volume_up </span>
              </button>
            </div>
            <div class="extra">
              <div class="syn">
                <p>Synonyms</p>
                ${synonyms()}
              </div>
              <div class="def">
                <p>Definition</p>
                ${def}
              </div>
              <div class="example">
                <p>Example</p>
                ${example}
              </div>
            </div>
          </div>
        `;
      if (example == "") {
        let example = document.querySelector(".example");
        example.remove();
      }
      if (synonyms() == "") {
        let syn = document.querySelector(".syn");
        syn.remove();
      }
      const getAudioFromPhonetics = () => {
        for (const phonetic of audio) {
          if (phonetic.audio && phonetic.audio.trim() !== "") {
            return phonetic.audio.trim();
          }
        }
      };

      sound.setAttribute("src", `${getAudioFromPhonetics()}`);
      sr.setAttribute("src", `${getAudioFromPhonetics()}`);
    });
});

function playsound() {
  sound.load();
  sound.play();
}
