// slideshow
const slider =
    document.querySelector('.image-slider');
const arrLeft =
    document.querySelector('.arrow-left');
const arrRight =
    document.querySelector('.arrow-right');
const heading =
    document.querySelector('.caption h1');
const description =
    document.querySelector('.caption p');
const images = [
    "pack2.jpg", "pack3.jpg", "pack4.jpg"
];
const headings = [
    "YOGA", "ONLINE WORKOUT SESSIONS", "PERSONAL TRAINER"
];
const descriptions =[
    "Available only in ELITE ", "Available in all packages", "Available in PRO and ELITE"
];
let id = 0;
function slide(id){
    slider.computedStyleMap.backgroundImage = `url(${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
heading.innerText = headings[id];
description.innerText = descriptions[id];
}
arrLeft.addEventListener('click',() => {
    id--;
    if(id < 0) {
        id = images.length - 1;
    }
});
arrRight.addEventListener('click',() => {
    id++;
    if(id > images.length - 1) {
        id = 0;
    }
    slide(id);
});

var mybooks=["pack5.jpg","pack6.jpeg","pack7.jpeg","pack8.jpeg","pack9.jpeg"];
function showbook(book)
{document.displaybook.src=mybooks[book];
}

MyBanners=new Array('pack10.jpg','pack11.jpg','pack12.jpeg')
banner=0
function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",1000)}}

window.onload = ShowBanners;