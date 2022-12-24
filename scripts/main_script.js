
const navlist = document.querySelectorAll("nav li");
const pagelist = document.querySelectorAll(".pages>div");
const nbXP = 3;
let activeXP = 0;
let lang = "en";

function changeLink(num){
    navlist.forEach((item) => {
        item.classList.remove("active");
    });
    document.getElementById(num).classList.add("active");
}

function activeLink(){
    changeLink(this.id);
    changePage(this.id);
}

function changePage(num){
    before = true;
    cpt = 1;
    pagelist.forEach((item) => {
        item.classList.remove("beforeactive");
        item.classList.remove("afteractive");
        if(cpt==num){
            before=false;
            console.log(num);
        }
        else{
            console.log(num + before);
            item.classList.remove("active");
            item.classList.add(before?"beforeactive":"afteractive");
        }
        cpt++;
    })
    switch (num) {
        case "1":
            document.querySelector(".first").classList.add("active");
            break;
        case "2":
            document.querySelector(".second").classList.add("active");
            break;
        case "3":
            document.querySelector(".third").classList.add("active");
            break;
        case "4":
            document.querySelector(".fourth").classList.add("active");
            break;
    
        default:
            break;
    }
}

navlist.forEach((item) => {
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




document.getElementById("pages").style.display = "none";
document.getElementById("nav").style.display = "none";
document.querySelectorAll(".langage").forEach((item) => {
    item.addEventListener("click", ()=>{
        lang=item.id;
        document.getElementById("choose-lang").style.display = "none";
        document.getElementById("pages").style.display = "flex";
        document.getElementById("nav").style.display = "flex";
        document.getElementById("switch-lang").style.display = "flex";
        
        if(item.id == 'en'){
            document.getElementById("switch-fr").style.display = 'flex';
            document.getElementById("switch-en").style.display = 'none';
        }
        else{
            document.getElementById("switch-en").style.display = 'flex';
            document.getElementById("switch-fr").style.display = 'none';
        }

        Object.keys(db).forEach((key) => {
            document.getElementById(key).innerHTML = db[key][lang];

        });
        document.documentElement.lang = lang;

        changeLink(1);
        changePage(1);

    })
});

document.getElementById("switch-fr").addEventListener('click', ()=>{
    Object.keys(db).forEach((key) => {
        document.getElementById(key).innerHTML = db[key]['fr'];

    });
    document.getElementById("switch-en").style.display = 'flex';
    document.getElementById("switch-fr").style.display = 'none';
    document.documentElement.lang = 'fr';
})

document.getElementById("switch-en").addEventListener('click', ()=>{
    Object.keys(db).forEach((key) => {
        document.getElementById(key).innerHTML = db[key]['en'];

    });
    document.getElementById("switch-fr").style.display = 'flex';
    document.getElementById("switch-en").style.display = 'none';
    document.documentElement.lang = 'en';
})