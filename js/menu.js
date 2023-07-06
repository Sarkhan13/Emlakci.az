const hmbbtn = document.querySelector('#hmb-btn');
const menubtn = document.querySelector('#menu-btn');

hmbbtn.addEventListener('click', function(){
    menubtn.classList.toggle('active');
    document.addEventListener('click', function(e){
        if(!e.composedPath().includes(hmbbtn )){
            menubtn.classList.remove('active');
        }
    })
})

const headbottom = document.querySelector('#moresrch');
const srchbtn = document.querySelector('#srch-btn');

console.log(headbottom, srchbtn);

srchbtn.addEventListener('click', function(){
  headbottom.classList.toggle('aktiv');
})