

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {

    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {

    close.addEventListener('click', () => {

        nav.classList.remove('active');
    })
}


// let mainimg =document.getElementById("MainImg")
// let smallimg= document.querySelectorAll("small-img")

// smallimg.forEach(img => {
//     img.addEventListener('click', () =>{
//         mainimg.src =img.src
//     })
// })

var MainImg = document.getElementById("MainImg");

var smallimg = document.querySelectorAll("small-img");

function swiitche(src) {

    smallimg.forEach(el => {
        MainImg.src=  smallimg.src

});

    console.log("khdd")
}




// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = function () {
//     MainImg.src = smallimg[0].src;

// }
// smallimg[1].onclick = function () {
//     MainImg.src = smallimg[1].src;
// }
// smallimg[2].onclick = function () {
//     MainImg.src = smallimg[2].src;

// }
// smallimg[3].onclick = function () {
//     MainImg.src = smallimg[3].src;



// }










// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

