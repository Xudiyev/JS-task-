let itemh1 = document.querySelector('#text')

let input = document.querySelector('#inpt')
let button = document.querySelector('#btn')

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



btn.addEventListener('click', () => {
    
for(let i=0;i<input.value;i++){
            
     itemh1.innerHTML += alphabet[Math.floor(Math.random() * alphabet.length)]
    
}
 
    

})







