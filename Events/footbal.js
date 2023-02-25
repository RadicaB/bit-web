var player = document.querySelector('#soccer-player');
var field = document.querySelector('#soccer-field');
var disableButton = document.querySelector("#disable-button");
var isMovementDisabled = false;

field.addEventListener('click', movePlayer);
disableButton.addEventListener('click', toggleMovement);

function movePlayer(event) {
  if (!isMovementDisabled) {
    // Get the position of the click on the field
    var x = event.pageX - field.offsetLeft - player.offsetWidth / 2;
    var y = event.pageY - field.offsetTop - player.offsetHeight / 2;

    // Move the player to the clicked position
    player.style.left = x + 'px';
    player.style.top = y + 'px';
  }
}

function toggleMovement() {
  isMovementDisabled = !isMovementDisabled;

  // Change the button's text based on the value of the flag
  if (isMovementDisabled) {
    disableButton.textContent = 'Enabled movement';
    //disableButton.classList.add("enable-movement");
  } else {
    disableButton.textContent = 'Disabled movement';
  }
  disableButton.classList.toggle('enable-movement', isMovementDisabled);
}

//The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category: Starvation: less than 15. Anorexic: less than 17.5. Underweight: less than 18.5.Ideal: greater than or equal to 18.5 but less than 25.Overweight: greater than or equal to 25 but less than 30.Obese: greater than or equal to 30 but less than 40 Morbidly obese: greater than or equal to 40

//Super Mario. Create Super Mario emulator.On right arrow click, Mario should run to the right.	Running animation. Ground should move while Mario is running.Images ( https://rb.gy/23keik )

