const mainEl = document.querySelector("main");

console.log(mainEl);

//setting the background color using var method to grab item from the root
mainEl.style.backgroundColor = "var(--main-bg)";
//creating an HTML Element
const h1 = document.createElement("h1")