let screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".buttons")
// funcionalidades de la calculadora
const brain = (e) => {
    if (e.target.value == "cleaner") {
        screen.firstElementChild.textContent = "";
    } else if (e.target.value == "delete") {
        screen.firstElementChild.textContent = screen.firstElementChild.textContent.substring(0, screen.firstElementChild.textContent.length - 1);

    } else if (e.target.value == "igual") {
        screen.firstElementChild.textContent = eval(screen.firstElementChild.textContent);
    }else if (e.target.value == "percent"){
        screen.firstElementChild.textContent = eval(screen.firstElementChild.textContent * 0.01);
    }
    else {
        screen.firstElementChild.textContent = screen.firstElementChild.textContent + e.target.value;
    }
}
// mensaje
// ejecucion
const ejecucion = (buttons) => {
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            if (screen.firstElementChild.textContent.length > 10) {
                if (e.target.value == "cleaner") {
                    screen.firstElementChild.textContent = "";

                } else if (e.target.value == "delete") {
                    screen.firstElementChild.textContent = screen.firstElementChild.textContent.substring(0, screen.firstElementChild.textContent.length - 1);
                } else if (e.target.value == "igual") {
                    screen.firstElementChild.textContent = eval(screen.firstElementChild.textContent);

                }

            } else {
                brain(e);
            }
        })
    }
};
ejecucion(buttons);
