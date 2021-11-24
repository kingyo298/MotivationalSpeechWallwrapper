function motivationalSpeechWallpaper(text, colorCode, imgUrl, verticalPos, horizontalPos,domObj){
  const verticalPosition = {
    "top" : "align-items-start",
    "center" : "align-items-center",
    "bottom" : "align-items-end"
  }
  const horizontalPosition = {
    "left" : "justify-content-start",
    "center" : "justify-content-center",
    "right" : "justify-content-end"
  }
  let card = document.createElement("div");
  card.classList.add("container", "d-flex", "justify-content-center");
  let cardInner = document.createElement("div");
  cardInner.classList.add("wallpaper", "d-flex", "vh-75", "p-md-5", "p-3","my-5", "col-md-8",  "col-12", verticalPosition[verticalPos], horizontalPosition[horizontalPos]);

  cardInner.style = `background-image: url(${imgUrl});`;
  let cardText = document.createElement("h3");
  cardText.classList.add("wallpaper__text", "col-8");
  cardText.innerHTML = text;
  cardText.style = `color: #${colorCode}`;

  card.append(cardInner);
  cardInner.append(cardText);

  domObj.append(card);
}

let target = document.getElementById("target");

motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center",target);

motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left",target);

motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right",target);
