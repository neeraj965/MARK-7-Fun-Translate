const btn = document.querySelector(".btn");
const textArea = document.querySelector(".textarea");
const translation = document.querySelector(".translated-text");
const url = "https://api.funtranslations.com/translate/klingon.json";

btn.addEventListener("click", () => {
  let value = textArea.value;
  const newUrl = url + "?text=" + value;

  fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
      translation.innerHTML = data.contents.translated;
    })
    .catch((error) => alert("something went wrong", error));
});
