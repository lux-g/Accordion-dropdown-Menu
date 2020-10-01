const accordionBtn = document.querySelectorAll('.accordion-btn');

accordionBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('active');

        if(button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});
