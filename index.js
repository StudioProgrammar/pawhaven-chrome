 var box = document.getElementById('check')
let checker = false;

let mything = document.getElementById('html-tag')


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position
//also this doesn't send the user back to the top --- works fine!!

box.addEventListener('click' , () => {

  console.log(mything, 'is here')

    if(checker == false) {
      document.body.style.position = 'absolute';

          checker = true; 
    } else if (checker == true) {
        document.body.style.position = 'absolute';
        checker = false;
    }
})


