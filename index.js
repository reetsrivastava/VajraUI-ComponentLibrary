
const toggleBtn = document.querySelector("#toggle-btn");
// const cancelBtn = document.querySelector("#cancel-btn");

function handleOnClickNav() {
    const nav = document.querySelector(".nav-aside");
    nav.classList.toggle("appear-block");
    if(toggleBtn.innerHTML === "Components") {
        toggleBtn.innerHTML = "Close"
    } else {
        toggleBtn.innerHTML = "Components"
    }
}

toggleBtn.addEventListener('click',handleOnClickNav);

