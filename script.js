const messageList = [
  {
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/card__image.jpg",
    text: "Hola, ¡tenemos que configurar nuestro chat lo antes posible!"
  },
  {
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/card__image-lake.jpg",
    text: "¡Ahora podemos crear tantas tarjetas como necesitemos!"
  },
];

class Card {
  constructor(text, image) {
    this._text = text;
    this._image = image;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".card-template")
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__avatar").src = this._image;
    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }
}

messageList.forEach((item) => {
  const card = new Card(item.text, item.image);
  const cardElement = card.generateCard();

  document.body.append(cardElement);
});