 


document.querySelectorAll(".header_btn, .signin, .reg").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "transparent";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#5926ea";
    });
});

document.querySelectorAll(".get_btn").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "transparent";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#d43355";
    });
});
 