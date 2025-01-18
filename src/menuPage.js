import burgerImg from "./asset/burgerImg.jpg";
import fishImg from "./asset/fishImg.jpg";
import pancakesImg from "./asset/pancakesImg.jpg";

export function menuPage(site) {
    const firstMenuElement = document.createElement("h3");
    firstMenuElement.innerText = "Hamburger";

    const imgBurger = document.createElement("img");
    imgBurger.src = burgerImg;


    const burgerText = document.createElement("p");
    burgerText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra enim. Sed eget ligula sit amet elit ullamcorper congue. Vestibulum ultricies nulla tortor, consequat interdum diam viverra at. Nullam nulla elit, porta id sagittis at, bibendum sed lorem. Morbi ligula tellus, porta eu elementum id, molestie ut nunc. Etiam id risus id justo laoreet faucibus. Suspendisse potenti. Maecenas in fringilla leo. Suspendisse purus justo, luctus ut pulvinar a, viverra vel risus. Suspendisse potenti. Suspendisse erat lectus, imperdiet sed orci eu, commodo fringilla ante. Etiam et sodales augue, ut euismod enim. Integer porttitor diam vel egestas bibendum. Nullam eget felis ut quam fringilla sodales et quis nisi.";

    const secondMenuElement = document.createElement("h3");
    secondMenuElement.innerText = "Fish";

    const imgFish = document.createElement("img");
    imgFish.src = fishImg;

    const fishText = document.createElement("p");
    fishText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra enim. Sed eget ligula sit amet elit ullamcorper congue. Vestibulum ultricies nulla tortor, consequat interdum diam viverra at. Nullam nulla elit, porta id sagittis at, bibendum sed lorem. Morbi ligula tellus, porta eu elementum id, molestie ut nunc. Etiam id risus id justo laoreet faucibus. Suspendisse potenti. Maecenas in fringilla leo. Suspendisse purus justo, luctus ut pulvinar a, viverra vel risus. Suspendisse potenti. Suspendisse erat lectus, imperdiet sed orci eu, commodo fringilla ante. Etiam et sodales augue, ut euismod enim. Integer porttitor diam vel egestas bibendum. Nullam eget felis ut quam fringilla sodales et quis nisi.";

    const thirdMenuElement = document.createElement("h3");
    thirdMenuElement.innerText = "Pancakes";

    const imgPancakes = document.createElement("img");
    imgPancakes.src = pancakesImg;


    const pancakesText = document.createElement("p");
    pancakesText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra enim. Sed eget ligula sit amet elit ullamcorper congue. Vestibulum ultricies nulla tortor, consequat interdum diam viverra at. Nullam nulla elit, porta id sagittis at, bibendum sed lorem. Morbi ligula tellus, porta eu elementum id, molestie ut nunc. Etiam id risus id justo laoreet faucibus. Suspendisse potenti. Maecenas in fringilla leo. Suspendisse purus justo, luctus ut pulvinar a, viverra vel risus. Suspendisse potenti. Suspendisse erat lectus, imperdiet sed orci eu, commodo fringilla ante. Etiam et sodales augue, ut euismod enim. Integer porttitor diam vel egestas bibendum. Nullam eget felis ut quam fringilla sodales et quis nisi.";

    site.appendChild(firstMenuElement);
    site.appendChild(imgBurger);
    site.appendChild(burgerText);
    site.appendChild(secondMenuElement);
    site.appendChild(imgFish);
    site.appendChild(fishText);
    site.appendChild(thirdMenuElement);
    site.appendChild(imgPancakes);
    site.appendChild(pancakesText);
};

