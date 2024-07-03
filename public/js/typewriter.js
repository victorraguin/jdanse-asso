const texts = [
  "Bébé Danse",
  "Éveil / Initiation",
  "Classique",
  "Modern Jazz",
  "J'Danse Compagnie",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const type = () => {
  if (count === texts.length) {
    count = 0; // Reset pour boucler sur les textes
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const textElement = document.getElementById("text");
  if (textElement) {
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(erase, 1000);
    } else {
      setTimeout(type, 100);
    }
  }
};

const erase = () => {
  letter = currentText.slice(0, --index);
  const textElement = document.getElementById("text");
  if (textElement) {
    textElement.textContent = letter;
    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 50);
    }
  }
};

type();
