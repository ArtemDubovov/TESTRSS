let buttons = document.getElementsByClassName('carousel-card-button');
for(let el of buttons){
    el.addEventListener('click', () => console.log(1));
}