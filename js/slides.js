const container = document.querySelector(".story-1");
const leftSlide = document.querySelector(".slide_prev_button");
const rightSlide = document.querySelector(".slide_next_button");

(function addEvent(){
    leftSlide.addEventListener('click', translateContainer.bind(this, 1))
    rightSlide.addEventListener('click', translateContainer.bind(this, -1))
})();

function translateContainer(direction){
    const selectBtn = (direction === 1)? 'slide_prev_button':'slide_next_button';
    container.style.transitionDuration = '900ms'
    container.style.transform = `translateX(${direction * (100 / 10)}%)`;
    container.ontransitionend = ()=>{
        reorganizeEl(selectBtn);
    }
}

function reorganizeEl(selectBtn){
    container.removeAttribute('style');
    (selectBtn === 'slide_prev_button')? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild)
}

