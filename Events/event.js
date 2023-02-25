// var bNode = document.documentElement.lastChild;
// console.log(bNode);

// // bNode.addEventListener('click', function onclick(event) {
// //     console.log(event.target);
// //     var backgroundColor = event.target.style.backgroundColor;
// //     if (backgroundColor === 'darkslategrey') {
// //         event.target.style.backgroundColor = 'white';
// //     } else {
// //         event.target.style.backgroundColor = 'darkslategrey';
// //     }

// // });

//  var button1 = document.getElementById("butt1");
//  console.log(button1);

// button1.addEventListener('click', function() {
//      bNode.classList.toggle('colorred');
//      console.log(bNode);
// });

// var button2 = document.getElementById("butt2");
// console.log(button2);

// button2.removeEventListener('click', function() {
//     bNode.classList.toggle('colorred');
// });

//-Event Handlers Defined on DOM Elements (Chat Room)

//-var myChatNode = document.getElementById('');

// function newElement() {
//     var usermsgs = document.createElement("usermsgs");
//     var inputValue = document.getElementById("messages").value;
//     var t = document.createTextNode(inputValue);
//     usermsgs.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//       }
//       document.getElementById("myInput").value = "";
    
//       var span = document.createElement("SPAN");
//       var txt = document.createTextNode("\u00D7");
//       span.className = "close";
//       span.appendChild(txt);
//       li.appendChild(span);
    
//       for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//           var div = this.parentElement;
//           div.style.display = "none";
//         }
//       }
//     }

// var socPlayer = document.getElementById("player");
// console.log(socPlayer);

// socPlayer.addEventListener('mousemove', logKey);
// function logKey(e) {
//     screenLog.innerText =
//-----------------
// var filedNode = document.getElementById("socerfiled");
// console.log(filedNode);

// function showCoords(event) {
//   var x = event.clientX;
//   var y = event.clientY;
//   var coords = "X coords: " + x + ", Y coords: " + y;
//     document.getElementById("filed");
//     console.log(coords);
// }


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