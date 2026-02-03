const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


let isMouseOverGrid = false;
const grid = document.querySelector('.grid');
const cards = document.querySelectorAll('.grid-card');

grid.addEventListener('mouseenter', () => {
    isMouseOverGrid = true;

    cards.forEach(card => card.classList.remove('active'));
});

grid.addEventListener('mouseleave', () => { 
    isMouseOverGrid = false;
});

function autoHover() {

    if (isMouseOverGrid) {
       
        setTimeout(autoHover, 1000);
        return;
    }

    cards.forEach(card => card.classList.remove('active'));

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    randomCard.classList.add('active');

    setTimeout(() => {
        
        if (randomCard.classList.contains('active')) {
            randomCard.classList.remove('active');
        }

        setTimeout(autoHover, 4000);
    }, 5000);
}

setTimeout(autoHover, 3000);