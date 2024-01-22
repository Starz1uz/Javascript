//First_lesson_of_DOM --- document,object,model
// let box = document.querySelector('.box')
// let anotherBoxes = document.querySelectorAll('div')
// console.log(box);
// console.log(anotherBoxes);

// let box = document.querySelector('.box')
// let body = document.body

// box.onclick = () => {
//     console.log('click');
// }
// box.ondblclick = () => {
//     console.log('double click');
// }
// box.onmouseenter = () => {
//     console.log('mouse');
// }
// box.onmouseleave = () => {
//     console.log('leave');
// }
// box.onmousemove = () => {
//     console.log('move');
// }
// body.onscroll = () => {
//     console.log('scrolling...');
// }

//home-work-1
// let one = document.querySelector('.one')
// let two = document.querySelector('.two')

// one.onclick = () => {
//     two.classList.add('active')
// }

// two.onclick = () => {
//     one.classList.add('active')
// }

// console.log(one,two);

//home-work-2

let h1 = document.querySelector('h1')
let first = document.querySelector('.first')
let maxMin = 0

first.onclick = () => {
    h1.innerHTML++
}

let second = document.querySelector('.second')

second.onclick = () => {
    h1.innerHTML = 0 
}

let third = document.querySelector('.third') 

third.onclick = () => {
    h1.innerHTML--
}

if (h1 > 11) {
    
}