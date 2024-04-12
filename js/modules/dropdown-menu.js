import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dorpdownMenus = document.querySelectorAll("[data-dropdown]");
    
    dorpdownMenus.forEach(menu => {
        ["touchstart", "click"].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        })
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle("active");
        outsideClick(this, ["touchstart", "click"], () => {
            this.classList.remove("active")
        });
    }; 
};
