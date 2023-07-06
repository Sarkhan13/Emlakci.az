

function setupImage(imgboxid, inputid, imgid){
  const  imgbox = document.querySelector(imgboxid);
  const input = document.querySelector(inputid);
  const img = document.querySelector(imgid);

  imgbox.addEventListener('click', function(){
    input.click();

    input.addEventListener('change', function(){
        if(input.files){
            const reader = new FileReader();

            reader.onload = function(e){
                img.src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
        
    })
  })
}

for(i =1; i<=10; i++){
    const imgboxid = `#imgbox${i}`;
    const inputid = `#input${i}`;
    const imgid = `#img${i}`;

    setupImage(imgboxid, inputid, imgid);
}


