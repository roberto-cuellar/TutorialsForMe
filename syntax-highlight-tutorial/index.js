enumerate();
let imgSizeFlag = false;
const body = document.querySelector("body");

function enumerate() {
    const cuerpo = document.querySelectorAll("pre code");
    const preCount = cuerpo.length;
    for(let i = 0;i<preCount;i++){
        let cuerpoArray = cuerpo[i].innerHTML.split("\n");
        let lnAHTML = cuerpoArray.length /// longitud del arreglo HTML
        let newHtml = ""
        for(let j = 1;j<lnAHTML;j++){
            if (j/10 >= 1){
                cuerpoArray[j] =  '<span class="line-number">'+j+'|  </span>'+cuerpoArray[j]+"\n"
            }else{
                cuerpoArray[j] =  '<span class="line-number">'+j+' |   </span>'+cuerpoArray[j]+"\n"
            }
            newHtml += cuerpoArray[j];
        }
        cuerpo[i].innerHTML = newHtml;      
    }    
}

const imgs = document.querySelectorAll("img");
imgs.forEach(function (img) {
    img.addEventListener("click",function () {
        if(imgSizeFlag){
            img.style.transform = "scale(1)"
            img.style.transition = "transform 0.25s ease";
            imgSizeFlag = false
            img.style.zIndex = 0;
            body.classList.remove("body-img-click")           
        }else{
            img.style.transform = "scale(1.5)"
            img.style.transition = "transform 0.25s ease";
            img.style.zIndex = 50;
            body.classList.add("body-img-click")           
            imgSizeFlag = true                
        }
    })
})
