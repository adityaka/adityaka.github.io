function getLink(pathToPage, name) {
    link = document.createElement("a");
    link.href = pathToPage;
    link.innerHTML = name;
    return link;
}
(() => {
    navBar = document.createElement("table");
    row = document.createElement("tr");
    navBarLinks = [ getLink("/repros_index.html", "Repros Home"), getLink("/index.html", "Home Profile")  ]
    for(i = 0; i < navBarLinks.length; i++) {
        col = document.createElement("td");
        col.appendChild(navBarLinks[i]);
        row.appendChild(col);
    }
    navBar.appendChild(row);
    document.body.appendChild(navBar);
})();