

export function abboutPage(site) {

    const pageTitle = document.createElement("h3");
    const titleContent = document.createElement("p");
    pageTitle.innerText = "About Title";
    titleContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at pharetra eros. Nulla efficitur diam eget placerat pharetra. Quisque maximus accumsan leo, posuere consectetur risus bibendum sed. Aenean augue sem, euismod quis gravida id, tempor sit amet nunc. Morbi tincidunt eros id nisl congue venenatis. Praesent in lorem dictum, commodo libero vel, pretium augue. Nullam suscipit tempor diam id lacinia. Duis vitae dui lorem. Quisque vulputate justo eu luctus placerat. In commodo turpis non velit interdum placerat. In in efficitur ligula. Praesent ornare sollicitudin aliquam."

    site.appendChild(pageTitle);
    site.appendChild(titleContent);
};

