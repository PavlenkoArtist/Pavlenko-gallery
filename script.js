// ========================================
// Oleksandr Pavlenko Gallery
// JavaScript
// ========================================


// ---------- LIGHTBOX ----------

const images = document.querySelectorAll(".painting img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close");


images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});


closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){

        lightbox.style.display = "none";

    }

});


// ---------- KAUFANFRAGE ----------


const buttons = document.querySelectorAll(".painting button");

const modal = document.getElementById("contact-modal");

const messageBox = document.querySelector("textarea");


buttons.forEach(button => {


    button.addEventListener("click", () => {


        const painting =
        button.closest(".painting")
        .querySelector("h3")
        .innerText;


        modal.style.display = "flex";


        messageBox.value =
        "Ich interessiere mich für das Gemälde: "
        + painting;


    });


});


// закриття форми по кліку поза вікном

modal.addEventListener("click", (event)=>{


    if(event.target === modal){

        modal.style.display="none";

    }


});


// ---------- SCROLL ANIMATION ----------


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},
{
threshold:0.15
}
);



document.querySelectorAll(".painting")
.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=
"opacity .8s ease, transform .8s ease";


observer.observe(item);


});