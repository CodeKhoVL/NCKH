const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    arrow = body.querySelector(".arrow"),
    modeSwitch = body.querySelector(".mode-switch"),
    modeText = body.querySelector(".mode-text");

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    });

    arrow.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });
