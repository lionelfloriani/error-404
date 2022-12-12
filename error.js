let btn = document.getElementById("cta");
let error = document.getElementById("e404");
let oops = document.getElementById("oops");

btn.addEventListener("mouseover", function () {
    error.style.color = "#0e113d";
    oops.style.color = "#0e113d";
});

btn.addEventListener("mouseout", function () {
    error.style.color = "#ffffff";
    oops.style.color = "#ffffff";
});
