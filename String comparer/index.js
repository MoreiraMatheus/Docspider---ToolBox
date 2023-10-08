const FIRST_TEXT = document.querySelector('#string1')
const SECOND_TEXT = document.querySelector('#string2')

function compareButton(){
  let vFirstText = FIRST_TEXT.value
  let vSecondText = SECOND_TEXT.value
  if(vFirstText != false && vSecondText != false){
    if(vFirstText === vSecondText){
      alert('Ambos os campos informados são iguais.')
    }
    else{
      alert('Os campos informados são diferentes.')
    }
  }
}