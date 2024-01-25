let images = [
    "img/spring.jpg",
    "img/summer.jpg",
    "img/autumn.jpg",
    "img/winter.jpg",
];

function imageSlider(parent, images){
    let currentIndex = 0;  

    //선택자
    let slider = {
        parent: parent,
        images: parent.querySelector(".slider__img"),
        thumnails: parent.querySelector(".slider__thumb"),
        prevBtn: parent.querySelector(".slider__btn .prev"),
        nextBtn: parent.querySelector(".slider__btn .next"),
    } 


    //이미지 출력하기
    slider.images.innerHTML = images.map((image, index) => {
        return `<img src="${image}" alt="이미지${index}">` ;
    }).join("");


    //이미지 활성화(active)하기
    let imageNodes = slider.images.querySelectorAll("img");
    imageNodes[currentIndex].classList.add("active");


    //썸네일 이미지 출력하기
    slider.thumnails.innerHTML = slider.images.innerHTML;


    //썸네일 활성화(active)하기
    let thumnailNodes = slider.thumnails.querySelectorAll("img");
    thumnailNodes[currentIndex].classList.add("active");


    //썸네일 이미지 클릭하기 forEach
    thumnailNodes.forEach((e, i) => {
        e.addEventListener("click", function() {
            slider.thumnails.querySelector("img.active").classList.remove("active");
            thumnailNodes[i].classList.add("active");

            imageNodes[currentIndex].classList.remove("active");
            currentIndex = i;
            imageNodes[currentIndex].classList.add("active");
        });
    });


    //왼쪽 버튼 클릭하기
    slider.prevBtn.addEventListener("click", function(){
        imageNodes[currentIndex].classList.remove("active");
        currentIndex--;

        //0 4 3 2 1 0 4 3.....
        if(currentIndex < 0) currentIndex = images.length - 1;
        imageNodes[currentIndex].classList.add("active")

        //썸네일
        slider.thumnails.querySelector("img.active").classList.remove("active");
        thumnailNodes[currentIndex].classList.add("active");
    });

    //오른쪽 버튼 클릭하기
    slider.nextBtn.addEventListener("click", function(){
        imageNodes[currentIndex].classList.remove("active");
        currentIndex++;

        //1 2 3 4 0 1 2 3 4...
        currentIndex = (currentIndex) % images.length;
        imageNodes[currentIndex].classList.add("active")

        //썸네일
        slider.thumnails.querySelector("img.active").classList.remove("active");
        thumnailNodes[currentIndex].classList.add("active");
    });
}

imageSlider(document.querySelector(".slider__wrap"), images);

