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

let header = getHeaderContainer("Normal web page for Web Metrics");
document.body.appendChild(header);
imageHtml = [
    '<img src="https://live.staticflickr.com/3/5164287_3fceb7f8ca.jpg"/><p class="attribution">"<a rel="noopener noreferrer" href="https://www.flickr.com/photos/35576247@N07/3293282517">dogs of Iquitos, Peru</a>" by <a rel="noopener noreferrer" href="https://www.flickr.com/photos/35576247@N07">iquitos</a> is licensed under <a rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nd/2.0/?ref=openverse">CC BY-ND 2.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /><img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /></a>.</p>',
    '<img src="https://live.staticflickr.com/3609/3293282517_cbe6fb1826.jpg"/><p class="attribution">"<a rel="noopener noreferrer" href="https://www.flickr.com/photos/68776313@N00/5164287">dog</a>" by <a rel="noopener noreferrer" href="https://www.flickr.com/photos/68776313@N00">jmorgan</a> is licensed under <a rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse">CC BY-SA 2.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" style="height: 1em; margin-right: 0.125em; display: inline;" /></a>.</p>'
];

imageHtml.forEach((elementText) => {
    card = getCard("", elementText);
    document.body.appendChild(card);
});