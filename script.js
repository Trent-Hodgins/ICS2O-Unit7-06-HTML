let number = 15
let guess = 0

while (guess != number) {
  guess = prompt('Guess my age')

 if (guess > '15') {
   alert('Guess is too high.')
  } else if (guess < '15') {
   alert('Guess is too low.')
  } else if (guess === '15') {
   alert('You got it right!')
 }
}
