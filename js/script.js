const imgbox1 = document.querySelector('#imgbox1');

const input1 = document.querySelector('#input1');

const img1 = document.querySelector('#img1');
console.log(imgbox1, input1, img1);

imgbox1.addEventListener('click',function(){
    input1.click();

    input1.addEventListener('change', function(){
        if(input1.files){
            const reader = new FileReader();

            reader.onload = function(e){
                img1.src = e.target.result;
            }
            reader.readAsDataURL(input1.files[0]);
        }
    })
})