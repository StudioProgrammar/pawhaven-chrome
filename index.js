/* var box = document.getElementById('check')
let checker = false;

let mything = document.getElementById('html-tag')


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position
//also this doesn't send the user back to the top --- works fine!!

box.addEventListener('click' , () => {

  console.log(mything, 'is here')

    if(checker == false) {
          document.body.style.height = '100%'          
          document.body.style.overflowY = 'hidden'
        //  mything.style.height = '100%'          
          mything.style.overflowY = 'hidden'

          console.log('overflow y is hidden')

          checker = true; 
    } else if (checker == true) {
      document.body.style.height = 'unset'
      document.body.style.overflowY = 'visible'
      mything.style.height = 'unset'
      mything.style.overflowY = 'visible'
      console.log('overflow y is visible')
        checker = false;
    }
})

*/
