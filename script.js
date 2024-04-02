function initTabNav() {
    const tabmenu = document.querySelectorAll(".js-tabmenu li");
    
    const tabcontent = document.querySelectorAll(".js-tabcontent section");
    
    if(tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add("ativo");
        
        function activeTab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove("ativo");
            });
            tabcontent[index].classList.add("ativo");
        }
        
        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");

    const activeClass = "ativo"

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();
