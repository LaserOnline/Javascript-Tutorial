const titleEl =  document.getElementById("title")
const divEl = document.getElementById("div");
const contentEl = document.getElementById("content");
const allEl = document.querySelector("p");
const box = document.querySelector(".light")

function Light(){
    titleEl.style.fontSize = "60px";
    titleEl.setAttribute('class', 'light');
    contentEl.setAttribute('class', 'new-class');
    divEl.setAttribute('class', 'light');
}

function Dark(){
    titleEl.style.fontSize = "60px";
    titleEl.setAttribute('class', 'Dark');
    contentEl.setAttribute('class', 'dark');
    box.setAttribute('class', 'dark');
    divEl.setAttribute('class', 'dark');
}
