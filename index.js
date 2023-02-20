const container = document.querySelector('.buttons');
const buttons = document.querySelector('.read-more-btn');

buttons.addEventListener('click', function(){
    container.classList.toggle('expand');
    if (container.classList.contains('expanded')) {
        buttons.textContent = 'Read Less';
    } else {
        buttons.textContent = 'Read More';
    }
});