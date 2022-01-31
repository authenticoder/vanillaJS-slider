const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const nodes = document.querySelectorAll('.gallery-img');
const textNodes = document.querySelectorAll('.text');
// console.log(textNodes);
// console.log(nodes);

let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    nextBtn.disabled = false;
    nodes[currentlySelected].classList.remove('active');
    textNodes[currentlySelected].classList.remove('active');
    currentlySelected--;
    nodes[currentlySelected].classList.add('active');
    textNodes[currentlySelected].classList.add('active');

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', function() {
    prevBtn.disabled = false;
    nodes[currentlySelected].classList.remove('active');
    textNodes[currentlySelected].classList.remove('active');
    currentlySelected++;
    nodes[currentlySelected].classList.add('active');
    textNodes[currentlySelected].classList.add('active');

    if (currentlySelected + 1 === nodes.length) {
        nextBtn.disabled = true;
    }
})