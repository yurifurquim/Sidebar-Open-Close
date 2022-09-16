let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".logo");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}