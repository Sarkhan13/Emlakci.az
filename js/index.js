
const adbtn = document.querySelector('.more-searching');
const unvis = document.querySelector('.unvisible-search');

adbtn.addEventListener('click', function(){
    unvis.classList.toggle('active');

    if(unvis.classList.contains('active')){
        adbtn.innerHTML = 'Daha az';
    } else{
        adbtn.innerHTML = 'Daha çox';
    }
})