function getHeaderContainer(headingText) {
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("container-fluid");
    let heading = document.createElement("h1");
    heading.innerText = headingText;
    headerContainer.appendChild(heading);
    return headerContainer;
}

function getContentContainer(text, htmlText) {
    let container = document.createElement("div");
    container.innerHTML += htmlText;
    container.innerText += text;
    return container;
}

function getCard(text, htmlText) {
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("card");
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");
    innerDiv.innerText = text;
    innerDiv.innerHTML+=htmlText;
    outerDiv.appendChild(innerDiv);
    return outerDiv
}