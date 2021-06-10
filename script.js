// These define our variables.//
const number = 15
let guess = 0

// The "while" is for making a loop. This makes it so the user has to keep guessing untill they guess the right number.//
while (guess !== number) {
  guess = prompt('Guess my age')
  guess = parseInt(guess)

  // These are for telling the user if they need to guess higher or lower.//
  if (guess > number) {
    alert('Guess is too high.')
  } else if (guess < number) {
    alert('Guess is too low.')
  } else if (guess === number) {
    alert('you got it right')
  }
}
