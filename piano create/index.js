const pianokeys = document.querySelectorAll('.keys1')
function playSound(newUrl){
    new Audio(newUrl).play()

}
pianokeys.forEach( (pianokeys,i) => {
    const newUrl = '24/key1' +(i+1) + '.mp3'
    pianokeys.addEventListener('click',()=>playSound(newUrl))

})
