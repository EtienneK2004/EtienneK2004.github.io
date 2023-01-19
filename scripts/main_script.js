
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
        }
        else{
            item.classList.remove("active");
            item.classList.add(before?"beforeactive":"afteractive");
        }
        cpt++;
    })
    switch (num+"") {
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



function changeLanguage(oldL, newL){
    document.getElementById("choose-lang").style.display = "none";
        document.getElementById("pages").style.display = "flex";
        document.getElementById("nav").style.display = "flex";
        document.getElementById("switch-lang").style.display = "flex";
    
    document.getElementById("switch-"+oldL).style.display = 'flex';
    document.getElementById("switch-"+newL).style.display = 'none';

    Object.keys(db).forEach((key) => {
        document.getElementById(key).innerHTML = db[key][newL];

    });
    document.documentElement.lang = newL;
    
}

function autoPageChange(){
    let s = document.URL.split('#')[1].split('?')[0];
        
    if(s){
        let numPage = {
            'home': 1,
            'projects': 2,
            'experience': 3,
            'hobbys': 4,
        }
        try{
            changePage(numPage[s]);
            changeLink(numPage[s]);
        }catch(e){
            changeLink(1);
            changePage(1);
        }
    }
    else{
        changeLink(1);
        changePage(1);
    }
}


document.getElementById("pages").style.display = "none";
document.getElementById("nav").style.display = "none";
document.querySelectorAll(".langage").forEach((item) => {
    item.addEventListener("click", ()=>{
        oldL = item.id=='en'?'fr':'en';
        changeLanguage(oldL, item.id);
        autoPageChange();
    })
});



document.getElementById("switch-fr").addEventListener('click', ()=>{
    changeLanguage('en', 'fr');
})


document.getElementById("switch-en").addEventListener('click', ()=>{
    changeLanguage('fr', 'en');
})






function autoChangeLanguage(){
    if(document.URL.includes("etienne-kita.fr")){
        changeLanguage('en', 'fr');
        autoPageChange();
    }
}

autoChangeLanguage();