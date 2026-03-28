function fnCreateDOMElement() {
  var pDomElement = document.createElement("p");
  pDomElement.innerText = "This is new paragraph UI element created using JS";

  pDomElement.onclick = function () {
    pDomElement.remove();
    document.querySelector("h1").remove();
  };

  var imgDOMElement = document.createElement("img");
  imgDOMElement.src =
    "https://static.cdninstagram.com/rsrc.php/yJ/r/53X3pk-t2Gn.webp";
  imgDOMElement.width = "300";
  imgDOMElement.height = "300";

  var bodyDOM = document.querySelector("body");

  bodyDOM.insertBefore(pDomElement, bodyDOM.firstChild);
  bodyDOM.appendChild(imgDOMElement);
  //   bodyDOM.prepend(pDomElement);
  //   bodyDOM.appendChild(pDomElement);

  //   for (var key in pDomElement) {
  //     console.log(key);
  //   }
}
