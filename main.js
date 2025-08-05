const fullImgBox = document.querySelector("#fullimgBox")
const fullImg = document.querySelector(".fullImg")

function openFullImg(pic){
    fullImgBox.style.display = "flex"
    fullImg.src = pic
    

}

function closeFullImg(){
    fullImgBox.style.display = "none"
}