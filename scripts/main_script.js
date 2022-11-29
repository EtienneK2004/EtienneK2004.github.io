
const list = document.querySelectorAll("nav li");
const nbXP = 3;
let activeXP = 0;
let lang = "en";

function activeLink(){
    list.forEach((item) => {
        item.classList.remove("active");
    })
    this.classList.add("active");
    document.querySelectorAll(".page").forEach((item) =>{
        if(this.id==1) item.style.transform = `translateX(0)`;
        else item.style.transform = `translateX(-${this.id-1}00%)`;
    })

}

list.forEach((item) => {
    item.addEventListener("click", activeLink);
});

document.querySelectorAll(".lettre").forEach((item) => {
    
    item.addEventListener("click", () => {
        if(item.classList.contains("fixed")){
            item.classList.remove("fixed");
            item.querySelectorAll(".part").forEach((part) => {
                part.classList.remove("fixed");
            });
        }
        else{
            item.classList.add("fixed");
            item.querySelectorAll(".part").forEach((part) => {
                part.classList.add("fixed");
            });
        }
        
    })
});



document.getElementById("show-all").onclick = () => {
    let i = 0;
    document.querySelectorAll(".lettre").forEach((lettre) => {
            if(lettre.classList.contains("fixed")) return;
            setTimeout(()=>{
                lettre.classList.add("fixed");
                lettre.querySelectorAll(".part").forEach((part) => {
                    part.classList.add("fixed");
                });
            }, 50*i);
            i++;
        })
};

let nav = document.querySelector("nav");
function position() {
    nav.style.left = window.innerWidth/2 + window.pageXOffset - 200 + 'px';
    nav.style.top = window.innerHeight + window.pageYOffset-75 + 'px';
}

window.onresize = position;
window.onscroll = position;


document.getElementById("pages").style.display = "none";
document.getElementById("nav").style.display = "none";
document.querySelectorAll(".langage").forEach((item) => {
    item.addEventListener("click", ()=>{
        lang=item.id;
        document.getElementById("choose-lang").style.display = "none";
        document.getElementById("pages").style.display = "flex";
        document.getElementById("nav").style.display = "flex";
        
        Object.keys(db).forEach((key) => {
            document.getElementById(key).innerHTML = db[key][lang];

        });
        document.documentElement.lang = lang;
    })
});