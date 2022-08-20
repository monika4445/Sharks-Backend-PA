let names = ["Gevorg Aghakhanyan", "Vardan Grigoryan", "Ella Khachaturyan", "John Asatryan", "Shushan Matevosyan", "Gayane Hovhannisyan"];

for (let index = 1; index <= document.querySelectorAll(".blocks").length; index++) {
    document.querySelectorAll(".info.i-" + index).forEach((infoElem, ind0) => {
        infoElem.querySelectorAll("button").forEach((buttonElem, ind) => {
            buttonElem.addEventListener("click", (e) => {
                infoElem.querySelectorAll(".sim").forEach((buttonsAll, ind) => {
                    buttonsAll.style.display = "none";
                });
                infoElem.querySelectorAll(".num").forEach((buttonsAll, ind) => {
                    buttonsAll.style.display = "inline-block";
                });

                console.log(names[index-1], e.target.innerText);
                setCookie(names[index-1], e.target.innerText, 7);

                console.log(e.target);
                
                if (e.target.classList.value == "num" || e.target.classList.value == "sim" ){
                    e.target.parentElement.querySelector(".num").style.display = "none";
                    e.target.parentElement.querySelector(".sim").style.display = "inline-block";
                }
                else {
                    e.target.querySelector(".num").style.display = "none";
                    e.target.querySelector(".sim").style.display = "inline-block";
                }
            })
        });
    });
    
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
