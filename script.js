let list = document.querySelectorAll(".list");
let imageBox = document.querySelectorAll(".imageBox");
let btn = document.querySelector(".btn-more");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
    
        let dataFilter = this.getAttribute('data-filter');
        
        for(let k = 0; k < imageBox.length; k++) {
            imageBox[k].classList.remove("active");
            imageBox[k].classList.add("hide");

            if((imageBox[k].getAttribute("data-item") == dataFilter)||(dataFilter == "all")) {
                imageBox[k].classList.remove("hide");
                imageBox[k].classList.add("active");
            }
            
        }
    
    })
}